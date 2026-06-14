
const $=(s,r=document)=>r.querySelector(s); const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const header=$('[data-sticky-header]'); const onScroll=()=>{ if(header) header.classList.toggle('is-scrolled', scrollY>12); const bar=$('.reading-bar'); if(bar){ const h=document.documentElement; const pct=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100; bar.style.width=Math.max(0,Math.min(100,pct))+'%'; }}; addEventListener('scroll',onScroll,{passive:true}); onScroll();
const mt=$('[data-menu-toggle]'), mm=$('[data-mobile-menu]'); if(mt&&mm) mt.addEventListener('click',()=>mm.classList.toggle('is-open'));
$$('[data-tabs]').forEach(box=>{ const tabs=$$('.tab',box); const panels=$$('.tab-panel',box); tabs.forEach(tab=>tab.addEventListener('click',()=>{ tabs.forEach(t=>t.classList.remove('active')); panels.forEach(p=>p.classList.remove('active')); tab.classList.add('active'); const id=tab.dataset.tab; const panel=$(`[data-panel="${id}"]`,box); if(panel) panel.classList.add('active'); })); });
const io='IntersectionObserver' in window ? new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target);} }),{threshold:.12}) : null; $$('.reveal').forEach(el=>io?io.observe(el):el.classList.add('is-visible'));
const glow=$('[data-cursor-glow]'); if(glow) addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';},{passive:true});
$$('[data-whatsapp-form]').forEach(form=>form.addEventListener('submit',ev=>{ev.preventDefault(); const data=new FormData(form); const parts=[]; for(const [k,v] of data.entries()) if(String(v).trim()) parts.push(`${k}: ${v}`); const msg='Olá! Vim pelo site da SimpleWay Academy e quero saber mais.\n\n'+parts.join('\n'); const phone=form.dataset.phone||'5519998930846'; location.href=`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;}));
const admin=$('[data-admin-form]'); if(admin){ const preview=$('[data-admin-preview]'); const render=()=>{ const d=new FormData(admin); const title=d.get('titulo')||'Título do conteúdo'; const type=d.get('tipo')||'post'; const intent=d.get('intencao')||'educar e converter'; const kws=d.get('keywords')||'simpleway, inglês, metodologia'; preview.innerHTML=`<h3>${title}</h3><p><b>Tipo:</b> ${type}</p><p><b>Intenção:</b> ${intent}</p><p><b>Keywords:</b> ${kws}</p><p>Brief pronto para curadoria editorial. Em produção, este painel pode alimentar CMS, GitHub Content API, Google Sheets, Supabase ou n8n.</p>`; }; admin.addEventListener('input',render); render(); $('[data-export-json]')?.addEventListener('click',()=>{const obj=Object.fromEntries(new FormData(admin).entries()); const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='simpleway-content-brief.json'; a.click();});}


const intentWrap = document.querySelector('[data-intents]');
const contactForm = document.querySelector('[data-contact-form]');
if (intentWrap && contactForm) {
  intentWrap.addEventListener('click', (event) => {
    const card = event.target.closest('.intent-card');
    if (!card) return;
    intentWrap.querySelectorAll('.intent-card').forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
    const intent = card.getAttribute('data-intent') || 'Quero aprender inglês';
    contactForm.querySelector('[name="intent"]').value = intent;
  });
}
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const lines = [
      'Olá, SimpleWay Academy! Quero receber minha orientação.',
      '',
      `Intenção: ${data.get('intent') || ''}`,
      `Nome: ${data.get('nome') || ''}`,
      `WhatsApp: ${data.get('whatsapp') || ''}`,
      `E-mail: ${data.get('email') || ''}`,
      `Perfil: ${data.get('perfil') || ''}`,
      `Nível atual: ${data.get('nivel') || ''}`,
      `Maior dificuldade: ${data.get('dificuldade') || ''}`,
      `Objetivo: ${data.get('objetivo') || ''}`,
      `Preferência: ${data.get('preferencia') || ''}`,
      `Melhor horário: ${data.get('horario') || ''}`,
      `Mensagem: ${data.get('mensagem') || ''}`
    ];
    const url = `https://wa.me/5519998930846?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  });
}


// V9.9.9 — Floating WhatsApp, ToTop and Privacy/Cookie UX
(function(){
  const pageWa = document.querySelector('[data-page-whatsapp]');
  const buildWhatsAppUrl = () => {
    const title = (document.querySelector('h1')?.innerText || document.title || 'SimpleWay Academy').replace(/\s+/g,' ').trim();
    const url = location.href;
    const msg = `Olá, SimpleWay Academy! Vim pela página "${title}" (${url}) e quero receber orientação sobre o melhor caminho para começar.`;
    return `https://wa.me/5519998930846?text=${encodeURIComponent(msg)}`;
  };
  if(pageWa){ pageWa.href = buildWhatsAppUrl(); pageWa.addEventListener('click',()=>{ pageWa.href = buildWhatsAppUrl(); }); }
  const topBtn = document.querySelector('[data-to-top]');
  if(topBtn){
    const updateTop = () => topBtn.classList.toggle('is-visible', window.scrollY > 420);
    topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
    addEventListener('scroll', updateTop, {passive:true}); updateTop();
  }
  const panel = document.querySelector('[data-privacy-panel]');
  const banner = document.querySelector('[data-cookie-banner]');
  const openPrivacy = () => { if(panel){ panel.classList.add('is-open'); panel.setAttribute('aria-hidden','false'); } };
  const closePrivacy = () => { if(panel){ panel.classList.remove('is-open'); panel.setAttribute('aria-hidden','true'); } };
  const setConsent = (value) => { try{ localStorage.setItem('swa_cookie_consent', value); }catch(e){}; if(banner) banner.classList.remove('is-visible'); closePrivacy(); };
  const getConsent = () => { try{return localStorage.getItem('swa_cookie_consent')}catch(e){return null} };
  if(banner && !getConsent()) setTimeout(()=>banner.classList.add('is-visible'), 900);
  document.querySelectorAll('[data-privacy-open],[data-cookie-settings]').forEach(el=>el.addEventListener('click', openPrivacy));
  document.querySelectorAll('[data-privacy-close]').forEach(el=>el.addEventListener('click', closePrivacy));
  document.querySelectorAll('[data-cookie-accept]').forEach(el=>el.addEventListener('click',()=>setConsent('accepted')));
  document.querySelectorAll('[data-cookie-decline]').forEach(el=>el.addEventListener('click',()=>setConsent('declined')));
  document.querySelectorAll('[data-cookie-save]').forEach(el=>el.addEventListener('click',()=>{
    const analytics = document.querySelector('[data-cookie-analytics]')?.checked;
    setConsent(analytics ? 'custom_analytics' : 'custom_essential');
  }));
  addEventListener('keydown',e=>{ if(e.key==='Escape') closePrivacy(); });
})();
