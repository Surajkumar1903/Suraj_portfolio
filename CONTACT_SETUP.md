# Contact Form Setup Guide
## How to make the form send emails to your Gmail

---

## Step 1 — Create a Gmail App Password

> Regular Gmail password won't work. You need an **App Password**.

1. Go to your Google Account → **Security**
   👉 https://myaccount.google.com/security

2. Make sure **2-Step Verification** is ON
   (If not, enable it first)

3. Search for **"App passwords"** in the search bar at the top

4. Click **App passwords** → Select app: **Mail** → Select device: **Other**
   → Type: `Portfolio` → Click **Generate**

5. Google gives you a **16-character password** like: `abcd efgh ijkl mnop`
   **Copy it** (you'll only see it once)

---

## Step 2 — Paste the App Password into contact.php

Open `contact.php` and find this line near the top:

```php
define('GMAIL_PASS', 'YOUR_APP_PASSWORD_HERE');
```

Replace `YOUR_APP_PASSWORD_HERE` with your 16-character App Password:

```php
define('GMAIL_PASS', 'abcdefghijklmnop');
```

> Remove the spaces from the App Password when pasting.

---

## Step 3 — Install PHPMailer on your server

### Option A — Using Composer (recommended)
Run this in your project folder:
```bash
composer install
```

### Option B — Manual (no Composer)
1. Download PHPMailer: https://github.com/PHPMailer/PHPMailer/releases
2. Extract and place the `src/` folder as `PHPMailer/src/` in your project root
3. Structure should be:
   ```
   your-project/
   ├── contact.php
   ├── PHPMailer/
   │   └── src/
   │       ├── PHPMailer.php
   │       ├── SMTP.php
   │       └── Exception.php
   ```

---

## Step 4 — Upload to your hosting

Upload all files to your web server (cPanel, Hostinger, etc.)

---

## How it works after setup

| Action | What happens |
|--------|-------------|
| Someone fills the form | Email arrives at **surajkumarjbd771023@gmail.com** |
| You click Reply in Gmail | Goes directly to the **sender's email** |
| Sender submits form | They get an **auto-reply** confirming receipt |
| Bot tries to spam | **Honeypot** + **rate limiting** blocks it |

---

## Troubleshooting

- **"Could not send message"** → Check App Password is correct in contact.php
- **"Less secure app" error** → Use App Password, not your regular password
- **Emails going to spam** → Add your domain to Gmail's trusted senders
- **PHPMailer not found** → Run `composer install` or add PHPMailer manually (Step 3B)
