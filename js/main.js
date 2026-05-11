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
const cursor=document.getElementById("cursor"),follower=document.getElementById("cursorFollower");
let mx=0,my=0,fx=0,fy=0;
document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+"px";cursor.style.top=my+"px"});
function animateCursor(){fx+=(mx-fx)*0.12;fy+=(my-fy)*0.12;follower.style.left=fx+"px";follower.style.top=fy+"px";requestAnimationFrame(animateCursor)}animateCursor();
document.querySelectorAll("a,button,.btn,.skill-card,.project-card,.cert-card,.profile-card").forEach(el=>{
  el.addEventListener("mouseenter",()=>{cursor.style.transform="translate(-50%,-50%) scale(2)";follower.style.width="60px";follower.style.height="60px";follower.style.borderColor="var(--secondary)"});
  el.addEventListener("mouseleave",()=>{cursor.style.transform="translate(-50%,-50%) scale(1)";follower.style.width="40px";follower.style.height="40px";follower.style.borderColor="var(--primary)"})
});

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

// --- CONTACT FORM -------------------------------------------------------------
const form=document.getElementById("contactForm"),success=document.getElementById("formSuccess");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const btn=form.querySelector("button[type=submit]");
  btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';btn.disabled=true;
  setTimeout(()=>{btn.innerHTML='<i class="fas fa-paper-plane"></i> Send Message';btn.disabled=false;success.style.display="block";form.reset();setTimeout(()=>success.style.display="none",5000)},1800)
});

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
  document.querySelectorAll(".hero-orb").forEach((o,i)=>{o.style.transform=`translateY(${y*(0.1+i*0.05)}px)`})
});

// --- INIT ---------------------------------------------------------------------
console.log("%c Suraj Kumar Portfolio Loaded! ","background:linear-gradient(135deg,#7c3aed,#06b6d4);color:white;padding:8px 16px;border-radius:8px;font-weight:700;font-size:14px");
