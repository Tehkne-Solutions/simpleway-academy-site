
const $=(s,r=document)=>r.querySelector(s); const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const header=$('[data-sticky-header]'); const onScroll=()=>{ if(header) header.classList.toggle('is-scrolled', scrollY>12); const bar=$('.reading-bar'); if(bar){ const h=document.documentElement; const pct=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100; bar.style.width=Math.max(0,Math.min(100,pct))+'%'; }}; addEventListener('scroll',onScroll,{passive:true}); onScroll();
const mt=$('[data-menu-toggle]'), mm=$('[data-mobile-menu]'); if(mt&&mm) mt.addEventListener('click',()=>mm.classList.toggle('is-open'));
$$('[data-tabs]').forEach(box=>{ const tabs=$$('.tab',box); const panels=$$('.tab-panel',box); tabs.forEach(tab=>tab.addEventListener('click',()=>{ tabs.forEach(t=>t.classList.remove('active')); panels.forEach(p=>p.classList.remove('active')); tab.classList.add('active'); const id=tab.dataset.tab; const panel=$(`[data-panel="${id}"]`,box); if(panel) panel.classList.add('active'); })); });
const io='IntersectionObserver' in window ? new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target);} }),{threshold:.12}) : null; $$('.reveal').forEach(el=>io?io.observe(el):el.classList.add('is-visible'));
const glow=$('[data-cursor-glow]'); if(glow) addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';},{passive:true});
const pageReadyAt=Date.now();
const cleanField=(value)=>String(value||'').replace(/[<>]/g,'').replace(/[
]+/g,' ').trim().slice(0,500);
$$('[data-whatsapp-form]').forEach(form=>form.addEventListener('submit',ev=>{ev.preventDefault();
  const hp=form.querySelector('[name="website"]'); if(hp && hp.value.trim()) return;
  if(Date.now()-pageReadyAt<2500){ alert('Aguarde alguns segundos e tente novamente.'); return; }
  const data=new FormData(form); const parts=[];
  for(const [k,v] of data.entries()) if(k!=='website' && cleanField(v)) parts.push(`${k}: ${cleanField(v)}`);
  const msg='Olá! Vim pelo site da SimpleWay Academy e quero receber uma orientação.\n\n'+parts.join('\n');
  const phone=form.dataset.phone||'5519998930846'; window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,'_blank','noopener,noreferrer');
}));
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
    const hp = contactForm.querySelector('[name="website"]');
    if (hp && hp.value.trim()) return;
    if (Date.now() - pageReadyAt < 2500) { alert('Aguarde alguns segundos e tente novamente.'); return; }
    const data = new FormData(contactForm);
    const lines = [
      'Olá, SimpleWay Academy! Quero receber minha orientação.',
      '',
      `Intenção: ${cleanField(data.get('intent'))}`,
      `Nome: ${cleanField(data.get('nome'))}`,
      `WhatsApp: ${cleanField(data.get('whatsapp'))}`,
      `E-mail: ${cleanField(data.get('email'))}`,
      `Perfil: ${cleanField(data.get('perfil'))}`,
      `Nível atual: ${cleanField(data.get('nivel'))}`,
      `Maior dificuldade: ${cleanField(data.get('dificuldade'))}`,
      `Objetivo: ${cleanField(data.get('objetivo'))}`,
      `Preferência: ${cleanField(data.get('preferencia'))}`,
      `Melhor horário: ${cleanField(data.get('horario'))}`,
      `Mensagem: ${cleanField(data.get('mensagem'))}`
    ];
    const url = `https://wa.me/5519998930846?text=${encodeURIComponent(lines.join('
'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}


// Real-photo resilience: if an external provider fails, swap to a contextual real-photo endpoint instead of showing broken alt text.
document.querySelectorAll('img').forEach((img, index) => {
  img.addEventListener('error', () => {
    if (img.dataset.photoFallback === '1') return;
    img.dataset.photoFallback = '1';
    const text = `${img.alt || 'educational learning'} ${location.pathname}`.toLowerCase();
    let tags = 'education,students,learning,school';
    if (text.includes('criança') || text.includes('child')) tags = 'children,classroom,learning';
    else if (text.includes('adolescente') || text.includes('teen')) tags = 'teenagers,students,school';
    else if (text.includes('tech') || text.includes('tecnologia')) tags = 'technology,team,laptops';
    else if (text.includes('marketing') || text.includes('agência')) tags = 'marketing,agency,creative';
    else if (text.includes('speaking') || text.includes('fala')) tags = 'english,teacher,student,speaking';
    else if (text.includes('história') || text.includes('story')) tags = 'library,books,reading,student';
    else if (text.includes('app') || text.includes('plataforma')) tags = 'online-learning,laptop,student';
    img.src = `https://loremflickr.com/1400/900/${tags}?lock=${93000 + index}`;
  }, { once: true });
});
