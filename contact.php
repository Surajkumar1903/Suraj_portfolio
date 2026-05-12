<?php
/**
 * contact.php — Contact Form Backend (PHPMailer + Gmail SMTP)
 * Suraj Kumar Portfolio
 *
 * Flow:
 *  1. Someone fills the form → POST hits this file
 *  2. Email arrives at YOUR Gmail: surajkumarjbd771023@gmail.com
 *  3. Auto-reply goes to the SENDER's email automatically
 */

// ══════════════════════════════════════════════════════════════════
//  ⚙️  CONFIGURATION — edit only this block
// ══════════════════════════════════════════════════════════════════
define('GMAIL_USER',    'surajkumarjbd771023@gmail.com'); // your Gmail
define('GMAIL_PASS',    'dpibmghtjtbwsygt');        // Gmail App Password
define('TO_EMAIL',      'surajkumarjbd771023@gmail.com'); // where to receive messages
define('TO_NAME',       'Suraj Kumar');
define('SITE_NAME',     'Suraj Kumar Portfolio');
define('SITE_URL',      'https://surajwebstudio.in');
define('RATE_LIMIT',    60); // seconds between submissions per IP
// ══════════════════════════════════════════════════════════════════

// ── Headers ──────────────────────────────────────────────────────
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ── Load PHPMailer ────────────────────────────────────────────────
// Try Composer autoload first, then manual include
$autoload = __DIR__ . '/vendor/autoload.php';
$manual   = __DIR__ . '/PHPMailer/src/';

if (file_exists($autoload)) {
    require $autoload;
} elseif (is_dir($manual)) {
    require $manual . 'Exception.php';
    require $manual . 'PHPMailer.php';
    require $manual . 'SMTP.php';
} else {
    // Fallback: plain mail() if PHPMailer not installed yet
    require_once __DIR__ . '/contact_fallback.php';
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// ── Rate limiting ─────────────────────────────────────────────────
session_start();
$now = time();
if (isset($_SESSION['last_submit']) && ($now - $_SESSION['last_submit']) < RATE_LIMIT) {
    $wait = RATE_LIMIT - ($now - $_SESSION['last_submit']);
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => "Please wait {$wait} seconds before sending another message."]);
    exit;
}

// ── Sanitize inputs ───────────────────────────────────────────────
function clean(string $val): string {
    return htmlspecialchars(strip_tags(trim($val)), ENT_QUOTES, 'UTF-8');
}

$name    = clean($_POST['name']    ?? '');
$email   = clean($_POST['email']   ?? '');
$subject = clean($_POST['subject'] ?? '');
$message = clean($_POST['message'] ?? '');

// ── Honeypot anti-spam ────────────────────────────────────────────
if (!empty($_POST['website'])) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
    exit;
}

// ── Validation ───────────────────────────────────────────────────
$errors = [];
if (empty($name)    || mb_strlen($name)    < 2)    $errors[] = 'Name must be at least 2 characters.';
if (empty($email)   || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Please enter a valid email address.';
if (empty($subject) || mb_strlen($subject) < 3)    $errors[] = 'Subject must be at least 3 characters.';
if (empty($message) || mb_strlen($message) < 10)   $errors[] = 'Message must be at least 10 characters.';
if (mb_strlen($message) > 5000)                    $errors[] = 'Message is too long (max 5000 characters).';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// ── HTML email templates ──────────────────────────────────────────

// 1️⃣  Email YOU receive when someone fills the form
function buildInboxEmail(string $name, string $email, string $subject, string $message): string {
    $siteName = SITE_NAME;
    $siteUrl  = SITE_URL;
    $date     = date('d M Y, H:i') . ' IST';
    $msgHtml  = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
    $replyUrl = 'mailto:' . rawurlencode($email) . '?subject=' . rawurlencode('Re: ' . $subject);

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Segoe UI',Arial,sans-serif;background:#0d0d1f;padding:20px}
  .wrap{max-width:620px;margin:0 auto;background:#111128;border-radius:16px;overflow:hidden;border:1px solid rgba(124,58,237,0.3);box-shadow:0 0 40px rgba(124,58,237,0.15)}
  .header{background:linear-gradient(135deg,#7c3aed,#06b6d4);padding:32px;text-align:center}
  .header h1{color:#fff;font-size:22px;font-weight:800;letter-spacing:0.5px}
  .header p{color:rgba(255,255,255,0.8);font-size:13px;margin-top:6px}
  .body{padding:32px}
  .field{margin-bottom:22px;padding:14px 16px;background:rgba(255,255,255,0.04);border-radius:10px;border-left:3px solid #7c3aed}
  .field-label{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#7c3aed;font-weight:700;margin-bottom:6px}
  .field-value{color:#e2e8f0;font-size:15px;line-height:1.6}
  .field-value a{color:#06b6d4;text-decoration:none}
  .msg-box{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:18px;color:#cbd5e1;font-size:14px;line-height:1.8;white-space:pre-wrap}
  .reply-btn{display:block;text-align:center;margin:28px 0 0}
  .reply-btn a{background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;padding:13px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;letter-spacing:0.3px}
  .footer{background:rgba(0,0,0,0.3);padding:16px 32px;text-align:center;font-size:11px;color:#64748b;border-top:1px solid rgba(255,255,255,0.05)}
  .badge{display:inline-block;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;padding:3px 12px;border-radius:100px;font-size:10px;font-weight:700;letter-spacing:1px;margin-top:6px}
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <h1>📬 New Portfolio Message</h1>
    <p>{$siteName} — Contact Form Submission</p>
  </div>
  <div class="body">
    <div class="field">
      <div class="field-label">👤 Sender Name</div>
      <div class="field-value">{$name}</div>
    </div>
    <div class="field">
      <div class="field-label">📧 Sender Email</div>
      <div class="field-value"><a href="mailto:{$email}">{$email}</a></div>
    </div>
    <div class="field">
      <div class="field-label">📌 Subject</div>
      <div class="field-value">{$subject}</div>
    </div>
    <div class="field">
      <div class="field-label">💬 Message</div>
      <div class="msg-box">{$msgHtml}</div>
    </div>
    <div class="reply-btn">
      <a href="{$replyUrl}">↩ Reply to {$name}</a>
    </div>
  </div>
  <div class="footer">
    Received on {$date} &nbsp;•&nbsp; via {$siteName} contact form
    <br><span class="badge">{$siteUrl}</span>
  </div>
</div>
</body></html>
HTML;
}

// 2️⃣  Auto-reply email the SENDER receives
function buildAutoReply(string $name, string $subject): string {
    $siteName = SITE_NAME;
    $siteUrl  = SITE_URL;

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Segoe UI',Arial,sans-serif;background:#f0f4ff;padding:20px}
  .wrap{max-width:580px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 30px rgba(0,0,0,0.1)}
  .header{background:linear-gradient(135deg,#7c3aed,#06b6d4);padding:36px;text-align:center}
  .header h1{color:#fff;font-size:26px;font-weight:800}
  .header p{color:rgba(255,255,255,0.85);font-size:14px;margin-top:8px}
  .body{padding:36px;color:#334155;font-size:15px;line-height:1.8}
  .body p{margin-bottom:16px}
  .highlight{color:#7c3aed;font-weight:700}
  .subject-box{background:#f8f5ff;border-left:4px solid #7c3aed;padding:12px 16px;border-radius:0 8px 8px 0;color:#4c1d95;font-style:italic;margin:16px 0}
  .links{display:flex;gap:12px;flex-wrap:wrap;margin-top:8px}
  .link-btn{background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;padding:10px 22px;border-radius:8px;text-decoration:none;font-weight:700;font-size:13px}
  .signature{margin-top:28px;padding-top:20px;border-top:1px solid #e2e8f0}
  .sig-name{font-size:17px;font-weight:800;color:#1e293b}
  .sig-role{font-size:13px;color:#7c3aed;margin-top:2px}
  .footer{background:#f8fafc;padding:16px 36px;text-align:center;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0}
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <h1>✅ Got your message!</h1>
    <p>Suraj Kumar — Portfolio</p>
  </div>
  <div class="body">
    <p>Hi <span class="highlight">{$name}</span>,</p>
    <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible — usually within <strong>24–48 hours</strong>.</p>
    <p><strong>Your message was about:</strong></p>
    <div class="subject-box">{$subject}</div>
    <p>While you wait, feel free to check out my work or connect with me:</p>
    <div class="links">
      <a href="{$siteUrl}" class="link-btn">🌐 My Portfolio</a>
      <a href="https://www.linkedin.com/in/surajwebstudio/" class="link-btn">💼 LinkedIn</a>
      <a href="https://github.com/Surajkumar1903" class="link-btn">🐙 GitHub</a>
    </div>
    <div class="signature">
      <div class="sig-name">Suraj Kumar</div>
      <div class="sig-role">Website Developer &amp; AI/ML Enthusiast</div>
    </div>
  </div>
  <div class="footer">
    This is an automated reply from <strong>{$siteName}</strong>. Please do not reply to this email.
  </div>
</div>
</body></html>
HTML;
}

// ── Send emails via Gmail SMTP ────────────────────────────────────
function sendMail(string $toEmail, string $toName, string $fromEmail, string $fromName,
                  string $subject, string $htmlBody, string $replyTo = ''): bool
{
    $mail = new PHPMailer(true);
    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = GMAIL_USER;
        $mail->Password   = GMAIL_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;
        $mail->CharSet    = 'UTF-8';
        // Fix for local XAMPP SSL certificate verification issue
        $mail->SMTPOptions = [
            'ssl' => [
                'verify_peer'       => false,
                'verify_peer_name'  => false,
                'allow_self_signed' => true,
            ]
        ];

        // From / To
        $mail->setFrom(GMAIL_USER, $fromName);
        $mail->addAddress($toEmail, $toName);
        if ($replyTo) $mail->addReplyTo($replyTo, $fromName);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $htmlBody;
        $mail->AltBody = strip_tags(str_replace(['<br>', '<br/>', '<br />'], "\n", $htmlBody));

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log('PHPMailer error: ' . $mail->ErrorInfo);
        return false;
    }
}

// ── 1. Send notification to YOUR Gmail ───────────────────────────
$inboxSent = sendMail(
    toEmail:   TO_EMAIL,
    toName:    TO_NAME,
    fromEmail: GMAIL_USER,
    fromName:  $name . ' via Portfolio',
    subject:   '[Portfolio] ' . $subject . ' — from ' . $name,
    htmlBody:  buildInboxEmail($name, $email, $subject, $message),
    replyTo:   $email   // clicking Reply in Gmail goes straight to the sender
);

if (!$inboxSent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Could not send message. Please email me directly at surajkumarjbd771023@gmail.com']);
    exit;
}

// ── 2. Send auto-reply to the SENDER ─────────────────────────────
sendMail(
    toEmail:   $email,
    toName:    $name,
    fromEmail: GMAIL_USER,
    fromName:  TO_NAME . ' | Portfolio',
    subject:   'Got your message, ' . $name . '! 👋 — Suraj Kumar',
    htmlBody:  buildAutoReply($name, $subject)
);

// ── Done ──────────────────────────────────────────────────────────
$_SESSION['last_submit'] = $now;
echo json_encode(['success' => true, 'message' => "Message sent! I'll get back to you within 24–48 hours. 🚀"]);
