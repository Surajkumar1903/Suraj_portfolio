// --- DATA ---------------------------------------------------------------------
const SKILLS=[
  {name:"HTML5",icon:"fab fa-html5",color:"#e34f26",level:"Advanced"},
  {name:"CSS3",icon:"fab fa-css3-alt",color:"#1572b6",level:"Advanced"},
  {name:"JavaScript",icon:"fab fa-js",color:"#f7df1e",level:"Advanced"},
  {name:"Python",icon:"fab fa-python",color:"#3776ab",level:"Intermediate"},
  {name:"C",icon:"fas fa-copyright",color:"#a8b9cc",level:"Intermediate"},
  {name:"C++",icon:"fas fa-code",color:"#00599c",level:"Intermediate"},
  {name:"Java",icon:"fab fa-java",color:"#007396",level:"Intermediate"},
  {name:"PHP",icon:"fab fa-php",color:"#777bb4",level:"Intermediate"},
  {name:"MongoDB",icon:"fas fa-leaf",color:"#47a248",level:"Intermediate"},
  {name:"MySQL",icon:"fas fa-database",color:"#4479a1",level:"Advanced"},
  {name:"GitHub",icon:"fab fa-github",color:"#f0f6fc",level:"Advanced"},
  {name:"WordPress",icon:"fab fa-wordpress",color:"#21759b",level:"Intermediate"},
  {name:"Google Cloud",icon:"fab fa-google",color:"#4285f4",level:"Beginner"},
  {name:"AI & ML",icon:"fas fa-brain",color:"#a855f7",level:"Learning"}
];
const CERTS=[
  // Row 3 - bottom screenshot (left to right, top row)
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.33 PM.jpeg",title:"Vibe Coding Essentials - Build Apps with AI",issuer:"Scrimba",domain:"AI Development"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.33 PM (1).jpeg",title:"Intro to Model Context Protocol (MCP)",issuer:"Scrimba",domain:"AI Tools"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.34 PM.jpeg",title:"Vibe Coding with Claude Code",issuer:"Scrimba",domain:"AI Coding"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.34 PM (1).jpeg",title:"Vibe Coding with GitHub Copilot",issuer:"Scrimba",domain:"AI Coding"},
  // Row 3 - bottom screenshot (left to right, bottom row)
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.35 PM.jpeg",title:"Vibe Coding with Cursor AI",issuer:"Scrimba",domain:"AI Coding"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.35 PM (1).jpeg",title:"Gemini for Developers",issuer:"Google DeepMind",domain:"AI"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.36 PM.jpeg",title:"Exploring AI with Google AI Studio",issuer:"Google DeepMind",domain:"AI"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.36 PM (1).jpeg",title:"Software Engineer Intern",issuer:"HackerRank",domain:"Engineering"},
  // Row 2 - middle screenshot (left to right, top row)
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.36 PM (2).jpeg",title:"Advanced Retrieval for AI with Chroma",issuer:"DeepLearning.AI",domain:"Deep Learning"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.37 PM.jpeg",title:"Microsoft Azure Essentials Professional Certificate",issuer:"Microsoft",domain:"Cloud Computing"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.37 PM (1).jpeg",title:"Explainable AI (XAI)",issuer:"Duke University",domain:"Explainable AI"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.37 PM (2).jpeg",title:"Introduction to HTML, CSS & JavaScript",issuer:"IBM",domain:"Web Development"},
  // Row 2 - middle screenshot (left to right, bottom row)
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.38 PM.jpeg",title:"AI for Business Professionals",issuer:"HP LIFE",domain:"AI Business"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.38 PM (1).jpeg",title:"Machine Learning System Design",issuer:"Educative",domain:"Machine Learning"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.38 PM (2).jpeg",title:"Trustworthy Generative AI",issuer:"Vanderbilt University",domain:"AI Ethics"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.38 PM (3).jpeg",title:"Artificial Intelligence Essentials",issuer:"University of Pennsylvania",domain:"AI"},
  // Row 1 - top screenshot (left to right, top row)
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.39 PM.jpeg",title:"AI and Machine Learning Essentials with Python",issuer:"University of Pennsylvania",domain:"AI & ML"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.39 PM (1).jpeg",title:"Google Cloud Fundamentals",issuer:"Google Cloud",domain:"Cloud Computing"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.39 PM (2).jpeg",title:"Foundations of Cybersecurity",issuer:"Google",domain:"Cybersecurity"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.40 PM.jpeg",title:"Fundamentals of Machine Learning: A Python Approach",issuer:"IBM",domain:"Machine Learning"},
  // Row 1 - top screenshot (left to right, bottom row)
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.40 PM (1).jpeg",title:"Machine Learning with Python",issuer:"IBM",domain:"Machine Learning"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.40 PM (2).jpeg",title:"Deloitte Data Analytics Job Simulation",issuer:"Deloitte",domain:"Data Analytics"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.41 PM.jpeg",title:"Deloitte Technology Job Simulation",issuer:"Deloitte",domain:"Technology"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.41 PM (1).jpeg",title:"Tata GenAI Powered Data Analytics Job Simulation",issuer:"Tata (Forage)",domain:"Data Analytics"},
  // Remaining certs
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.41 PM (2).jpeg",title:"Artificial Intelligence Essentials",issuer:"University of Pennsylvania",domain:"AI"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.42 PM.jpeg",title:"TCS ION AI for Business Professionals",issuer:"TCS ION",domain:"AI Business"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.42 PM (1).jpeg",title:"Machine Learning System Design",issuer:"University of Michigan",domain:"Machine Learning"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.42 PM (2).jpeg",title:"Introduction to Modern AI",issuer:"Cisco",domain:"AI"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.43 PM.jpeg",title:"Artificial Intelligence Essentials",issuer:"University of Pennsylvania",domain:"AI"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.43 PM (1).jpeg",title:"IIT Bombay Spoken Tutorial",issuer:"IIT Bombay",domain:"Programming"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.43 PM (2).jpeg",title:"Wharton Business Analytics",issuer:"University of Pennsylvania",domain:"Analytics"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.44 PM.jpeg",title:"Gemini Certified University Student",issuer:"Google For Education",domain:"AI Certification"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.44 PM (1).jpeg",title:"SAP Technology Consultant",issuer:"SAP",domain:"ERP"},
  {img:"Certifications/WhatsApp Image 2026-05-11 at 6.01.44 PM (2).jpeg",title:"Career Essentials in Generative AI",issuer:"Microsoft & LinkedIn",domain:"Generative AI"}
];
const PROFILES=[
  {name:"GitHub",handle:"Surajkumar1903",url:"https://github.com/Surajkumar1903",icon:"fab fa-github",color:"#f0f6fc",bg:"linear-gradient(135deg,#24292e,#444d56)",badge:"Open Source",badgeBg:"rgba(240,246,252,0.1)",badgeColor:"#f0f6fc"},
  {name:"Code360",handle:"surajwebstudio",url:"https://www.naukri.com/code360/profile/surajwebstudio",icon:"fas fa-code",color:"#ff6b35",bg:"linear-gradient(135deg,#1a1a2e,#16213e)",badge:"Problem Solver",badgeBg:"rgba(255,107,53,0.15)",badgeColor:"#ff6b35"},
  {name:"HackerRank",handle:"surajkumar",url:"https://www.hackerrank.com/",icon:"fab fa-hackerrank",color:"#00ea64",bg:"linear-gradient(135deg,#1a1a2e,#0d1117)",badge:"5? Badge",badgeBg:"rgba(0,234,100,0.1)",badgeColor:"#00ea64"},
  {name:"LeetCode",handle:"surajkumar",url:"https://leetcode.com/",icon:"fas fa-fire-alt",color:"#ffa116",bg:"linear-gradient(135deg,#1a1a2e,#282828)",badge:"DSA Learner",badgeBg:"rgba(255,161,22,0.1)",badgeColor:"#ffa116"}
];

// --- PARTICLES ----------------------------------------------------------------
const canvas=document.getElementById("particleCanvas"),ctx=canvas.getContext("2d");
let particles=[];
function resizeCanvas(){canvas.width=window.innerWidth;canvas.height=window.innerHeight}
resizeCanvas();window.addEventListener("resize",resizeCanvas);
class Particle{
  constructor(){this.reset()}
  reset(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=(Math.random()-0.5)*0.4;this.vy=(Math.random()-0.5)*0.4;this.size=Math.random()*2+0.5;this.opacity=Math.random()*0.5+0.1;this.color=Math.random()>0.5?"rgba(124,58,237,":"rgba(6,182,212,"}
  update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>canvas.width||this.y<0||this.y>canvas.height)this.reset()}
  draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle=this.color+this.opacity+")";ctx.fill()}
}
for(let i=0;i<120;i++)particles.push(new Particle());
function drawConnections(){
  for(let i=0;i<particles.length;i++)for(let j=i+1;j<particles.length;j++){
    const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y,d=Math.sqrt(dx*dx+dy*dy);
    if(d<120){ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle=`rgba(124,58,237,${0.08*(1-d/120)})`;ctx.lineWidth=0.5;ctx.stroke()}
  }
}
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.update();p.draw()});drawConnections();requestAnimationFrame(animate)}
animate();

// --- CURSOR -------------------------------------------------------------------
(function initCursor(){
  const dot    = document.getElementById("cursor");
  const ring   = document.getElementById("cursorFollower");
  const trail  = document.getElementById("cursorTrail");
  if(!dot || !ring) return;

  // ── Trail canvas setup ──
  const tCtx = trail ? trail.getContext("2d") : null;
  function resizeTrail(){
    if(!trail) return;
    trail.width  = window.innerWidth;
    trail.height = window.innerHeight;
  }
  resizeTrail();
  window.addEventListener("resize", resizeTrail);

  // ── State ──
  let mx = -200, my = -200;   // mouse position
  let rx = -200, ry = -200;   // ring lerp position
  let trailPoints = [];        // [{x,y,age,size,color}]
  const TRAIL_MAX = 22;
  const TRAIL_COLORS = ["rgba(6,182,212,", "rgba(124,58,237,", "rgba(168,85,247,"];

  // ── Mouse tracking ──
  document.addEventListener("mousemove", e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top  = my + "px";

    // Add trail point
    trailPoints.push({
      x: mx, y: my, age: 0,
      size: Math.random() * 3 + 1.5,
      color: TRAIL_COLORS[Math.floor(Math.random() * TRAIL_COLORS.length)]
    });
    if(trailPoints.length > TRAIL_MAX) trailPoints.shift();
  });

  // ── Ring lerp animation ──
  function animateRing(){
    rx += (mx - rx) * 0.10;
    ry += (my - ry) * 0.10;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";

    // Draw trail
    if(tCtx){
      tCtx.clearRect(0, 0, trail.width, trail.height);
      trailPoints.forEach((p, i) => {
        p.age++;
        const life   = 1 - p.age / TRAIL_MAX;
        const radius = p.size * life;
        if(radius <= 0) return;
        tCtx.beginPath();
        tCtx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        tCtx.fillStyle = p.color + (life * 0.55) + ")";
        tCtx.fill();
      });
      trailPoints = trailPoints.filter(p => p.age < TRAIL_MAX);
    }

    requestAnimationFrame(animateRing);
  }
  animateRing();

  // ── Hover state ──
  const hoverTargets = "a,button,.btn,.h3d-btn,.skill-card,.project-card,.cert-card,.profile-card,.h3d-stat-card,.h3d-social,.social-link,.nav-link,.mob-nav-item,.org-badge";
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });

  // ── Text state ──
  const textTargets = "p,h1,h2,h3,h4,h5,span,label,input,textarea";
  document.querySelectorAll(textTargets).forEach(el => {
    el.addEventListener("mouseenter", () => {
      if(!document.body.classList.contains("cursor-hover"))
        document.body.classList.add("cursor-text");
    });
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-text"));
  });

  // ── Click ripple ──
  document.addEventListener("mousedown", e => {
    document.body.classList.add("cursor-click");
    // Spawn ripple
    const ripple = document.createElement("div");
    ripple.className = "cursor-ripple";
    ripple.style.left = e.clientX + "px";
    ripple.style.top  = e.clientY + "px";
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
  document.addEventListener("mouseup", () => {
    document.body.classList.remove("cursor-click");
  });

  // ── Hide when leaving window ──
  document.addEventListener("mouseleave", () => {
    dot.style.opacity  = "0";
    ring.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    dot.style.opacity  = "1";
    ring.style.opacity = "0.85";
  });
})();

// --- NAVBAR -------------------------------------------------------------------
const navbar=document.getElementById("navbar"),hamburger=document.getElementById("hamburger"),navLinks=document.getElementById("navLinks");
window.addEventListener("scroll",()=>{navbar.classList.toggle("scrolled",window.scrollY>50)});
hamburger.addEventListener("click",()=>{hamburger.classList.toggle("open");navLinks.classList.toggle("open")});
document.querySelectorAll(".nav-link").forEach(link=>{link.addEventListener("click",()=>{hamburger.classList.remove("open");navLinks.classList.remove("open")})});
const sections=document.querySelectorAll("section[id]");
window.addEventListener("scroll",()=>{
  let cur="";
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-120)cur=s.id});
  // Desktop nav active
  document.querySelectorAll(".nav-link").forEach(l=>{l.classList.toggle("active",l.getAttribute("href")==="#"+cur)});
  // Mobile bottom nav active
  document.querySelectorAll(".mob-nav-item").forEach(l=>{l.classList.toggle("active",l.getAttribute("data-section")===cur)});
});

// --- TYPING EFFECT ------------------------------------------------------------
const phrases=["Website Developer","AI & ML Enthusiast","BCA Student","Full Stack Developer","Problem Solver"];
let pIdx=0,cIdx=0,deleting=false;
const typedEl=document.getElementById("typedText");
function type(){
  if(!typedEl)return;
  const phrase=phrases[pIdx];
  typedEl.textContent=deleting?phrase.slice(0,cIdx-1):phrase.slice(0,cIdx+1);
  deleting?cIdx--:cIdx++;
  if(!deleting&&cIdx===phrase.length){setTimeout(()=>deleting=true,2000)}
  else if(deleting&&cIdx===0){deleting=false;pIdx=(pIdx+1)%phrases.length}
  setTimeout(type,deleting?60:100)
}
type();

// --- 3D CARD TILT -------------------------------------------------------------
function initTilt(el){
  if(!el)return;
  el.addEventListener("mousemove",e=>{
    const r=el.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    const rx=(y/r.height-0.5)*20,ry=(x/r.width-0.5)*-20;
    el.style.transform=`perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`
  });
  el.addEventListener("mouseleave",()=>el.style.transform="perspective(600px) rotateX(0) rotateY(0) scale(1)")
}
initTilt(document.getElementById("heroCard"));
initTilt(document.getElementById("aboutCard"));

// --- RENDER SKILLS ------------------------------------------------------------
const skillsGrid=document.getElementById("skillsGrid");
SKILLS.forEach((s,i)=>{
  const el=document.createElement("div");el.className="skill-card reveal";el.style.animationDelay=i*0.05+"s";
  el.innerHTML=`<span class="skill-icon"><i class="${s.icon}" style="color:${s.color}"></i></span><div class="skill-name">${s.name}</div><div class="skill-level">${s.level}</div><div class="skill-glow" style="background:${s.color}"></div>`;
  skillsGrid.appendChild(el)
});

// --- RENDER CERTIFICATIONS ----------------------------------------------------
const certsGrid=document.getElementById("certsGrid");
CERTS.forEach((c,i)=>{
  const el=document.createElement("div");el.className="cert-card reveal";el.style.setProperty("--i",i);
  el.innerHTML=`<div class="cert-card-inner">
    <div class="cert-img-wrap">
      <img src="${c.img}" alt="${c.title}" class="cert-img" loading="lazy" />
      <div class="cert-overlay"><i class="fas fa-expand-alt"></i></div>
      <span class="cert-dot"></span>
    </div>
  </div>`;
  el.addEventListener("click",()=>openLightbox(c.img,c.title));
  certsGrid.appendChild(el)
});

// --- LIGHTBOX -----------------------------------------------------------------
const lb=document.createElement("div");lb.id="certLightbox";
lb.innerHTML=`<div class="lb-overlay"></div><div class="lb-box"><button class="lb-close" aria-label="Close">&times;</button><img class="lb-img" src="" alt="" /><p class="lb-caption"></p></div>`;
document.body.appendChild(lb);
function openLightbox(src,caption){lb.querySelector(".lb-img").src=src;lb.querySelector(".lb-caption").textContent=caption;lb.classList.add("active")}
lb.querySelector(".lb-overlay").addEventListener("click",()=>lb.classList.remove("active"));
lb.querySelector(".lb-close").addEventListener("click",()=>lb.classList.remove("active"));
document.addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("active")});

// --- RENDER PROFILES ----------------------------------------------------------
const profilesGrid=document.getElementById("profilesGrid");
PROFILES.forEach(p=>{
  const el=document.createElement("a");el.className="profile-card reveal";el.href=p.url;el.target="_blank";el.rel="noopener noreferrer";
  el.innerHTML=`<div class="profile-platform-icon" style="background:${p.bg}"><i class="${p.icon}" style="color:${p.color}"></i></div><div class="profile-name">${p.name}</div><div class="profile-handle">@${p.handle}</div><span class="profile-badge" style="background:${p.badgeBg};color:${p.badgeColor}">${p.badge}</span>`;
  profilesGrid.appendChild(el)
});

// --- COUNTER ANIMATION --------------------------------------------------------
function animateCounter(el){
  const target=parseInt(el.dataset.target),dur=1500,step=target/dur*16;
  let cur=0;
  const t=setInterval(()=>{cur=Math.min(cur+step,target);el.textContent=Math.floor(cur);if(cur>=target)clearInterval(t)},16)
}

// --- SCROLL REVEAL + SKILL BARS + COUNTERS ------------------------------------
const revealObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("visible");
      e.target.querySelectorAll(".skill-bar-fill").forEach(b=>{b.style.width=b.dataset.width+"%";b.classList.add("animated")});
      e.target.querySelectorAll(".counter-num").forEach(animateCounter);
      revealObs.unobserve(e.target)
    }
  })
},{threshold:0.15});
document.querySelectorAll(".reveal").forEach(el=>revealObs.observe(el));

// --- CONTACT FORM (PHP backend) -----------------------------------------------
(function initContactForm(){
  const form    = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  const error   = document.getElementById("formError");
  const errMsg  = document.getElementById("formErrorMsg");
  const btn     = document.getElementById("submitContactBtn");
  if(!form) return;

  function showSuccess(msg){
    success.querySelector("i").className = "fas fa-check-circle";
    success.lastChild.textContent = " " + msg;
    success.style.display = "flex";
    error.style.display   = "none";
    setTimeout(()=>{ success.style.display = "none"; }, 6000);
  }
  function showError(msg){
    errMsg.textContent    = msg;
    error.style.display   = "flex";
    success.style.display = "none";
  }
  function setBtnLoading(loading){
    btn.disabled = loading;
    btn.innerHTML = loading
      ? '<i class="fas fa-spinner fa-spin"></i> Sending...'
      : '<i class="fas fa-paper-plane"></i> Send Message';
  }

  form.addEventListener("submit", async e => {
    e.preventDefault();
    error.style.display   = "none";
    success.style.display = "none";
    setBtnLoading(true);

    try {
      const data = new FormData(form);
      const res  = await fetch("contact.php", {
        method: "POST",
        body: data
      });
      const json = await res.json();

      if(json.success){
        showSuccess(json.message || "Message sent! I'll get back to you soon.");
        form.reset();
      } else {
        showError(json.message || "Something went wrong. Please try again.");
      }
    } catch(err){
      showError("Network error. Please check your connection or email me directly at surajkumarjbd771023@gmail.com");
    } finally {
      setBtnLoading(false);
    }
  });
})();

// --- SMOOTH SCROLL ------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();const t=document.querySelector(a.getAttribute("href"));
    if(t)t.scrollIntoView({behavior:"smooth",block:"start"})
  })
});

// --- HERO PARALLAX ------------------------------------------------------------
window.addEventListener("scroll",()=>{
  const y=window.scrollY;
  document.querySelectorAll(".hero-orb").forEach((o,i)=>{o.style.transform=`translateY(${y*(0.1+i*0.05)}px)`});
  document.querySelectorAll(".h3d-orb").forEach((o,i)=>{o.style.transform=`translateY(${y*(0.08+i*0.04)}px)`});
});

// --- INIT ---------------------------------------------------------------------
console.log("%c Suraj Kumar Portfolio Loaded! ","background:linear-gradient(135deg,#7c3aed,#06b6d4);color:white;padding:8px 16px;border-radius:8px;font-weight:700;font-size:14px");

// ═══════════════════════════════════════════════════════════════════════════════
//  HERO 3D — Advanced Effects
// ═══════════════════════════════════════════════════════════════════════════════

// ── Animated Grid Canvas ──────────────────────────────────────────────────────
(function initHeroGrid(){
  const canvas=document.getElementById("gridCanvas");
  if(!canvas)return;
  const ctx=canvas.getContext("2d");
  let W,H,animId;

  function resize(){
    W=canvas.width=canvas.offsetWidth;
    H=canvas.height=canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize",resize);

  let offset=0;
  function drawGrid(){
    ctx.clearRect(0,0,W,H);
    const cellSize=60;
    const fade=0.06;

    // Perspective grid lines — horizontal
    ctx.strokeStyle=`rgba(124,58,237,${fade})`;
    ctx.lineWidth=0.8;
    for(let y=0;y<H;y+=cellSize){
      ctx.beginPath();ctx.moveTo(0,y+offset%cellSize);ctx.lineTo(W,y+offset%cellSize);ctx.stroke();
    }
    // Vertical
    ctx.strokeStyle=`rgba(6,182,212,${fade*0.7})`;
    for(let x=0;x<W;x+=cellSize){
      ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();
    }

    // Glowing intersection dots
    ctx.fillStyle="rgba(124,58,237,0.12)";
    for(let x=0;x<W;x+=cellSize){
      for(let y=0;y<H;y+=cellSize){
        const yy=y+offset%cellSize;
        ctx.beginPath();ctx.arc(x,yy,1.5,0,Math.PI*2);ctx.fill();
      }
    }

    offset+=0.4;
    animId=requestAnimationFrame(drawGrid);
  }
  drawGrid();
})();

// ── Mouse Spotlight ───────────────────────────────────────────────────────────
(function initSpotlight(){
  const spotlight=document.getElementById("h3dSpotlight");
  if(!spotlight)return;
  let tx=window.innerWidth/2,ty=window.innerHeight/2;
  let cx=tx,cy=ty;

  document.addEventListener("mousemove",e=>{tx=e.clientX;ty=e.clientY});

  function animateSpotlight(){
    cx+=(tx-cx)*0.08;
    cy+=(ty-cy)*0.08;
    spotlight.style.left=cx+"px";
    spotlight.style.top=cy+"px";
    requestAnimationFrame(animateSpotlight);
  }
  animateSpotlight();
})();

// ── 3D Tilt on Photo Card ─────────────────────────────────────────────────────
(function initHeroTilt(){
  const card=document.getElementById("heroCard");
  if(!card)return;
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect();
    const x=e.clientX-r.left,y=e.clientY-r.top;
    const rx=(y/r.height-0.5)*28;
    const ry=(x/r.width-0.5)*-28;
    card.style.transform=`translate(-50%,-50%) perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
  });
  card.addEventListener("mouseleave",()=>{
    card.style.transform="translate(-50%,-50%) perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
})();

// ── Stat Card Tilt ────────────────────────────────────────────────────────────
document.querySelectorAll(".h3d-stat-card[data-tilt]").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect();
    const x=e.clientX-r.left,y=e.clientY-r.top;
    const rx=(y/r.height-0.5)*16;
    const ry=(x/r.width-0.5)*-16;
    card.style.transform=`translateY(-8px) perspective(400px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
  });
  card.addEventListener("mouseleave",()=>{
    card.style.transform="";
  });
});

// ── Scroll Reveal for Hero Elements ──────────────────────────────────────────
(function initHeroReveal(){
  const els=document.querySelectorAll(".h3d-reveal");
  if(!els.length)return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add("h3d-visible");obs.unobserve(e.target)}
    });
  },{threshold:0.1});
  // Hero is visible on load — trigger immediately
  els.forEach(el=>{
    const delay=parseFloat(getComputedStyle(el).getPropertyValue("--d")||"0")*1000;
    setTimeout(()=>el.classList.add("h3d-visible"),delay+100);
    obs.observe(el);
  });
})();

// ── Animated Stat Counters ────────────────────────────────────────────────────
(function initStatCounters(){
  const nums=document.querySelectorAll(".h3d-stat-num[data-count]");
  if(!nums.length)return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el=e.target;
        const target=parseInt(el.dataset.count);
        const dur=1200;
        const step=target/dur*16;
        let cur=0;
        const t=setInterval(()=>{
          cur=Math.min(cur+step,target);
          el.textContent=Math.floor(cur);
          if(cur>=target)clearInterval(t);
        },16);
        obs.unobserve(el);
      }
    });
  },{threshold:0.5});
  nums.forEach(el=>obs.observe(el));
})();

// ── Glitch Effect on Name ─────────────────────────────────────────────────────
(function initGlitch(){
  const el=document.getElementById("h3dNameGlitch");
  if(!el)return;
  el.style.animation="h3dGlitch 8s ease-in-out infinite, h3dGlitchColor 8s ease-in-out infinite, h3dNameGlow 4s ease-in-out infinite";
})();

// ── Parallax on mouse move (hero layout) ─────────────────────────────────────
(function initHeroParallax(){
  const hero=document.querySelector(".h3d-hero");
  if(!hero)return;
  const content=document.getElementById("h3dContent");
  const visual=document.querySelector(".h3d-visual");
  const orbs=document.querySelectorAll(".h3d-orb");
  const geos=document.querySelectorAll(".h3d-geo");

  hero.addEventListener("mousemove",e=>{
    const r=hero.getBoundingClientRect();
    const mx=(e.clientX-r.left)/r.width-0.5;
    const my=(e.clientY-r.top)/r.height-0.5;

    if(content)content.style.transform=`translate(${mx*8}px,${my*6}px)`;
    if(visual)visual.style.transform=`translate(${mx*-12}px,${my*-8}px)`;
    orbs.forEach((o,i)=>{
      const f=(i+1)*6;
      o.style.transform=`translate(${mx*f}px,${my*f}px)`;
    });
    geos.forEach((g,i)=>{
      const f=(i+1)*4;
      g.style.transform=`translate(${mx*f}px,${my*f}px) rotate(${mx*10}deg)`;
    });
  });
  hero.addEventListener("mouseleave",()=>{
    if(content)content.style.transform="";
    if(visual)visual.style.transform="";
    orbs.forEach(o=>o.style.transform="");
    geos.forEach(g=>g.style.transform="");
  });
})();
