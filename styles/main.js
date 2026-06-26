// ===== LOADER =====
window.addEventListener('load',()=>{setTimeout(()=>{document.getElementById('loader').classList.add('hidden')},1600)});
setTimeout(()=>{const l=document.getElementById('loader');if(!l.classList.contains('hidden'))l.classList.add('hidden')},3500);

// ===== THEME =====
const themeToggle=document.getElementById('themeToggle');
const html=document.documentElement;
const savedTheme=localStorage.getItem('theme');
const prefersDark=window.matchMedia('(prefers-color-scheme:dark)').matches;
const theme=savedTheme||(prefersDark?'dark':'light');
if(theme==='dark'){html.setAttribute('data-theme','dark');themeToggle.innerHTML='<i class="fas fa-sun"></i>'}
themeToggle.addEventListener('click',()=>{
  const isDark=html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme',isDark?'light':'dark');
  localStorage.setItem('theme',isDark?'light':'dark');
  themeToggle.innerHTML=isDark?'<i class="fas fa-moon"></i>':'<i class="fas fa-sun"></i>'
});

// ===== NAVBAR SCROLL =====
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>20));

// ===== MOBILE MENU =====
const toggle=document.getElementById('menuToggle');
const menu=document.getElementById('navMenu');
toggle.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(link=>{link.addEventListener('click',()=>menu.classList.remove('open'))});

// ===== SCROLL REVEAL =====
const revealEls=document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale');
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
  })
},{threshold:.1});
revealEls.forEach(el=>observer.observe(el));

// ===== STAT COUNTER =====
const statCards=document.querySelectorAll('.stat-number[data-count]');
const statObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el=entry.target;
      const target=parseInt(el.dataset.count);
      const duration=2000;
      const step=target/(duration/16);
      let current=0;
      const timer=setInterval(()=>{
        current+=step;
        if(current>=target){current=target;clearInterval(timer)}
        el.textContent=Math.floor(current)+'+';
      },16);
      statObserver.unobserve(el);
    }
  })
},{threshold:.5});
statCards.forEach(el=>statObserver.observe(el));

// ===== SCROLL SPY =====
const sections=document.querySelectorAll('section[id],header.hero');
const navLinks=document.querySelectorAll('nav ul li a:not(.dl-btn)');
const spyObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id=entry.target.id||'hero';
      navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+id))
    }
  })
},{threshold:.3,rootMargin:'-80px 0px 0px'});
sections.forEach(s=>spyObserver.observe(s));

// ===== BACK TO TOP =====
const backToTop=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{backToTop.classList.toggle('visible',window.scrollY>500)});
backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// ===== CERTIFICATE FILTERS =====
const certFilters=document.querySelectorAll('.cert-filter');
const certCards=document.querySelectorAll('.cert-card');
certFilters.forEach(btn=>{
  btn.addEventListener('click',()=>{
    certFilters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    certCards.forEach(card=>{card.style.display=(filter==='all'||card.dataset.category===filter)?'':'none'})
  })
});

// ===== LIGHTBOX =====
const lightbox=document.getElementById('lightbox');
const lbImage=document.getElementById('lbImage');
const lbCaption=document.getElementById('lbCaption');
const lbClose=document.getElementById('lbClose');
const lbPrev=document.getElementById('lbPrev');
const lbNext=document.getElementById('lbNext');
let currentIndex=0;
let visibleCards=[];
function getVisibleCards(){return Array.from(document.querySelectorAll('.cert-card')).filter(c=>c.style.display!=='none')}
function openLightbox(index){
  visibleCards=getVisibleCards();
  if(!visibleCards.length)return;
  currentIndex=index;
  const card=visibleCards[currentIndex];
  const img=card.querySelector('.cert-img');
  const title=card.querySelector('.cert-title').textContent;
  const issuer=card.querySelector('.cert-issuer').textContent.replace(/^\s*/,'');
  const date=card.querySelector('.cert-date').textContent.replace(/^\s*/,'');
  lbImage.src=img.src;lbImage.alt=title;
  lbCaption.textContent=title+' - '+issuer+' | '+date;
  lightbox.classList.add('active');
  document.body.style.overflow='hidden'
}
function closeLightbox(){lightbox.classList.remove('active');document.body.style.overflow=''}
function navigateLightbox(dir){
  visibleCards=getVisibleCards();
  if(!visibleCards.length)return;
  currentIndex=(currentIndex+dir+visibleCards.length)%visibleCards.length;
  const card=visibleCards[currentIndex];
  const img=card.querySelector('.cert-img');
  const title=card.querySelector('.cert-title').textContent;
  const issuer=card.querySelector('.cert-issuer').textContent.replace(/^\s*/,'');
  const date=card.querySelector('.cert-date').textContent.replace(/^\s*/,'');
  lbImage.src=img.src;lbImage.alt=title;
  lbCaption.textContent=title+' - '+issuer+' | '+date
}
certCards.forEach(card=>{card.addEventListener('click',(e)=>{e.preventDefault();const idx=getVisibleCards().indexOf(card);if(idx!==-1)openLightbox(idx)})});
lbClose.addEventListener('click',closeLightbox);
lbPrev.addEventListener('click',()=>navigateLightbox(-1));
lbNext.addEventListener('click',()=>navigateLightbox(1));
document.addEventListener('keydown',(e)=>{if(!lightbox.classList.contains('active'))return;if(e.key==='Escape')closeLightbox();if(e.key==='ArrowLeft')navigateLightbox(-1);if(e.key==='ArrowRight')navigateLightbox(1)});
lightbox.addEventListener('click',(e)=>{if(e.target===lightbox)closeLightbox()});

// ===== ACCORDION =====
function toggleAccordion(header){
  const item=header.closest('.accordion-item');
  const wasOpen=item.classList.contains('open');
  document.querySelectorAll('.accordion-item.open').forEach(i=>i.classList.remove('open'));
  if(!wasOpen)item.classList.add('open');
}

// ===== ARTICLE DATA =====
var A={};
A["01-php-basics"]=[{f:"01-print-vs-echo.md",t:"print vs echo",s:1},{f:"02-include-vs-require.md",t:"PHP Include vs Require",s:1},{f:"03-include-once-vs-require-once.md",t:"include_once vs require_once",s:1}];
A["02-string-functions"]=[{f:"01-strcmp.md",t:"PHP strcmp() Function",s:1},{f:"02-strncmp.md",t:"PHP strncmp() Function",s:1},{f:"03-strcasecmp.md",t:"PHP strcasecmp() Function",s:1}];
A["03-array-functions"]=[{f:"01-array-map.md",t:"Array Map",s:1},{f:"02-array-filter.md",t:"Array Filter",s:1},{f:"03-array-reduce.md",t:"Array Reduce",s:1}];
A["01-clean-code"]=[{f:"01-naming-cnonventions.md",t:"Naming Conventions",s:1},{f:"02-functions.md",t:"Functions",s:1},{f:"03-comments.md",t:"Comments & Documentation",s:1}];
A["02-design-patterns"]=[{f:"01-singleton.md",t:"Singleton Pattern",s:1},{f:"02-factory.md",t:"Factory Method Pattern",s:1},{f:"03-repository.md",t:"Repository Pattern",s:1}];
A["03-architecture"]=[{f:"01-mvc-architecture.md",t:"MVC Architecture",s:1},{f:"02-layered-architecture.md",t:"Layered Architecture",s:1},{f:"03-hexagonal-architecture.md",t:"Hexagonal Architecture",s:1}];
A["01-ssl-wireless"]=[{f:"01-report-optimization.md",t:"Export Booking Platform",s:1},{f:"02-large-data-export.md",t:"Large Data Export",s:1},{f:"03-api-optimization.md",t:"API Optimization",s:1}];
A["02-erp-projects"]=[{f:"01-multi-tenancy.md",t:"Multi-Tenant Core Banking",s:1},{f:"02-subscription-management.md",t:"Subscription Management",s:1},{f:"03-billing-system.md",t:"Core Billing Engine",s:1}];
var CATS={"01-php-laravel":"PHP & Laravel","02-software-engineering":"Software Engineering","03-case-studies":"Case Studies"};
var SUBS={"01-php-basics":"PHP Basics","02-string-functions":"String Functions","03-array-functions":"Array Functions","04-oop":"OOP","05-laravel":"Laravel","06-database":"Database","07-api":"API","08-interview":"Interview","01-clean-code":"Clean Code","02-design-patterns":"Design Patterns","03-architecture":"Architecture","04-system-design":"System Design","05-security":"Security","06-performance":"Performance","07-devops":"DevOps","01-ssl-wireless":"SSL Wireless","02-erp-projects":"ERP Projects","03-saas-projects":"SaaS Projects","04-problems-solved":"Problems Solved","05-interview-stories":"Interview Stories","06-debug-diary":"Debug Diary"};

// ===== ARTICLE LOADER (fetches HTML from learning/ directory) =====
mermaid.initialize({startOnLoad:false,theme:'default',securityLevel:'loose'});

function loadArticle(e,el){
  e.preventDefault();
  var id=el.getAttribute('data-id');
  if(!id)return false;

  var view=document.getElementById('article-view');
  var accordion=document.querySelector('.accordion');
  var stats=document.querySelector('.learning-stats');
  accordion.style.display='none';
  stats.style.display='none';
  view.style.display='block';
  view.innerHTML='<button class="back-btn" onclick="closeArticle()"><i class="fas fa-arrow-left"></i> Back</button><div class="md-content" style="text-align:center;padding:40px"><i class="fas fa-spinner fa-spin" style="font-size:1.5rem;color:var(--primary)"></i><p style="margin-top:12px;color:var(--text-muted)">Loading article...</p></div>';

  var mdPath='learning/'+id;

  fetch(mdPath)
    .then(function(response){
      if(!response.ok)throw new Error('Article not found');
      return response.text();
    })
    .then(function(md){
      var isCover=id.indexOf('cover.md')!==-1;
      var content='<button class="back-btn" onclick="closeArticle()"><i class="fas fa-arrow-left"></i> Back</button>';
      content+='<div class="md-content">'+marked.parse(md)+'</div>';
      view.innerHTML=content;

      if(isCover){
        var parts=id.split('/');
        var catKey=parts[0],subKey=parts[1];
        var arts=A[subKey]?A[subKey]:[];
        var lis=view.querySelectorAll('.md-content li');
        lis.forEach(function(li,i){
          if(i<arts.length&&arts[i].s){
            var a=document.createElement('a');
            a.href='#';
            a.setAttribute('data-id',catKey+'/'+subKey+'/'+arts[i].f);
            a.onclick=function(ev){return loadArticle(ev,this)};
            a.innerHTML='<i class="fas fa-file-alt" style="color:var(--primary);margin-right:8px"></i>'+li.textContent+' <span style="color:var(--accent);font-size:.75rem;font-weight:600;margin-left:auto">Published</span>';
            li.textContent='';
            li.appendChild(a);
            li.style.cssText='list-style:none;padding:8px 0;border-bottom:1px solid var(--border)';
          }
        });
      }

      var slugger=function(s){return s.toLowerCase().replace(/<[^>]*>/g,'').replace(/[^\p{L}\p{N}\s-]/gu,'').replace(/\s+/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'').trim()};
      view.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(function(h){if(!h.id)h.id=slugger(h.textContent)});
      view.querySelectorAll('pre code.language-mermaid').forEach(function(b){var p=b.parentElement;var d=document.createElement('div');d.className='mermaid';d.textContent=b.textContent;p.replaceWith(d)});
      try{mermaid.run({nodes:view.querySelectorAll('.mermaid')})}catch(x){}
      view.querySelectorAll('table').forEach(function(t){var ic=false;t.querySelectorAll('th').forEach(function(th){if(th.textContent.trim()==='Status')ic=true});if(ic){t.querySelectorAll('td').forEach(function(td){if(td.textContent.trim()==='?')td.innerHTML='<input type="checkbox" style="cursor:pointer;width:18px;height:18px;accent-color:var(--primary)">'})}t.classList.add('checklist-table')});
      view.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(ev){var id=this.getAttribute('href').substring(1);var tgt=document.getElementById(id);if(tgt){ev.preventDefault();var offset=90;var y=tgt.getBoundingClientRect().top+window.pageYOffset-offset;window.scrollTo({top:y,behavior:'smooth'})}})});
      view.querySelectorAll('.md-content a[data-id]').forEach(function(a){a.onclick=function(ev){return loadArticle(ev,this)}});
      view.scrollIntoView({behavior:'smooth',block:'start'});
    })
    .catch(function(err){
      view.innerHTML='<button class="back-btn" onclick="closeArticle()"><i class="fas fa-arrow-left"></i> Back</button><div class="md-content" style="text-align:center;padding:40px"><i class="fas fa-exclamation-triangle" style="font-size:1.5rem;color:#e74c3c"></i><p style="margin-top:12px;color:var(--text-muted)">Article not found. Please try again.</p></div>';
    });

  return false;
}

function closeArticle(){
  document.getElementById('article-view').style.display='none';
  document.getElementById('article-view').innerHTML='';
  document.querySelector('.accordion').style.display='';
  document.querySelector('.learning-stats').style.display='';
  document.getElementById('learning').scrollIntoView({behavior:'smooth'});
}

// ===== PDF DOWNLOAD =====
function downloadResume(){
  const loader=document.getElementById('dlLoader');
  loader.classList.add('active');
  setTimeout(()=>{window.open('resume_of_md_moshiur_rahman.pdf','_blank');setTimeout(()=>loader.classList.remove('active'),300)},800)
}
