const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#site-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));

const eventDate=new Date('2026-08-25T16:00:00-05:00');
function updateCountdown(){const diff=Math.max(0,eventDate-Date.now());const days=Math.floor(diff/86400000);const hours=Math.floor(diff%86400000/3600000);const mins=Math.floor(diff%3600000/60000);document.querySelector('#days').textContent=days;document.querySelector('#hours').textContent=String(hours).padStart(2,'0');document.querySelector('#minutes').textContent=String(mins).padStart(2,'0');}
updateCountdown();setInterval(updateCountdown,60000);

const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target);}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
