
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


// V9.10 — Beacon Header active states + mobile drawer close behavior
(function(){
  const current = location.pathname.replace(/\/$/,'') || '/';
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const href = (link.getAttribute('href') || '').replace(/\/$/,'') || '/';
    if (href !== '/' && current.startsWith(href)) link.classList.add('is-active');
    if (href === '/' && current === '/') link.classList.add('is-active');
  });
  const menu = document.querySelector('[data-mobile-menu]');
  const toggle = document.querySelector('[data-menu-toggle]');
  if(menu && toggle){
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('is-open')));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') menu.classList.remove('is-open'); });
    document.addEventListener('click', e => {
      if(!menu.classList.contains('is-open')) return;
      if(menu.contains(e.target) || toggle.contains(e.target)) return;
      menu.classList.remove('is-open');
    });
  }
})();


// V9.10.2 — Caminhos Mega Menu hover intent and clickable panel support
(function(){
  document.querySelectorAll('.beacon-mega').forEach((mega) => {
    let closeTimer;
    const open = () => {
      clearTimeout(closeTimer);
      mega.classList.add('is-open');
    };
    const close = () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => mega.classList.remove('is-open'), 220);
    };
    mega.addEventListener('pointerenter', open);
    mega.addEventListener('pointerleave', close);
    mega.addEventListener('focusin', open);
    mega.addEventListener('focusout', close);
    const trigger = mega.querySelector('.nav-dropdown-trigger');
    if (trigger) {
      trigger.addEventListener('click', (event) => {
        if (window.matchMedia('(pointer: coarse)').matches) {
          event.preventDefault();
          mega.classList.toggle('is-open');
        }
      });
    }
  });
  document.addEventListener('click', (event) => {
    document.querySelectorAll('.beacon-mega.is-open').forEach((mega) => {
      if (!mega.contains(event.target)) mega.classList.remove('is-open');
    });
  });
})();

// V9.10.3 — SEO Caminhos active state support
(function(){
  const path = location.pathname;
  const caminhoSlugs = [
    '/ingles-para-criancas/',
    '/ingles-para-adolescentes/',
    '/ingles-para-jovens/',
    '/ingles-para-adultos/',
    '/ingles-para-escolas/',
    '/ingles-para-empresas/',
    '/ingles-para-igrejas/',
    '/ingles-para-agencias-de-marketing/'
  ];
  if (caminhoSlugs.some(slug => path.startsWith(slug))) {
    document.querySelectorAll('[data-nav-link="caminhos"]').forEach(el => el.classList.add('is-active'));
  }
  if (path.startsWith('/promotor-simpleway-academy/')) {
    document.querySelectorAll('[data-nav-link="promotor"]').forEach(el => el.classList.add('is-active'));
  }
})();


// V9.10.4 — App Peek interactions
(function(){
  document.querySelectorAll('[data-peek-reveal]').forEach((button)=>{
    button.addEventListener('click',()=>{
      const box = button.closest('.app-peek-phone');
      const answer = box && box.querySelector('.peek-answer');
      if(!answer) return;
      const hidden = answer.hasAttribute('hidden');
      if(hidden){ answer.removeAttribute('hidden'); button.textContent='Ocultar'; }
      else { answer.setAttribute('hidden',''); button.textContent='Ver resposta'; }
    });
  });
  document.querySelectorAll('[data-speak]').forEach((button)=>{
    button.addEventListener('click',()=>{
      const text = button.getAttribute('data-speak') || '';
      if(!('speechSynthesis' in window) || !text.trim()){
        button.textContent='Áudio indisponível';
        setTimeout(()=>button.textContent='Ouvir exemplo',1600);
        return;
      }
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'en-US'; utter.rate = .86; utter.pitch = 1;
      button.classList.add('is-speaking'); button.textContent='Tocando...';
      utter.onend = utter.onerror = () => { button.classList.remove('is-speaking'); button.textContent='Ouvir exemplo'; };
      window.speechSynthesis.speak(utter);
    });
  });
})();

// V9.10.9 — App page live simulator interactions
(function(){
  const norm = (value) => String(value || '').trim().toLowerCase().replace(/[.!?]/g,'').replace(/\s+/g,' ');
  const setFeedback = (el, text, good=false) => {
    if(!el) return;
    el.textContent = text;
    el.classList.toggle('is-good', good);
    el.classList.toggle('is-warn', !good);
  };
  document.querySelectorAll('[data-app-simulator]').forEach((sim)=>{
    const railButtons = Array.from(sim.querySelectorAll('[data-app-step]'));
    const panels = Array.from(sim.querySelectorAll('[data-app-panel]'));
    const status = sim.querySelector('[data-sim-status]');
    const progress = sim.querySelector('[data-sim-progress]');
    const order = ['apf','story','qa','activation','review'];
    const labels = { apf:'Step 1 de 5', story:'Step 2 de 5', qa:'Step 3 de 5', activation:'Step 4 de 5', review:'Step 5 de 5' };
    function activate(id){
      railButtons.forEach(btn=>btn.classList.toggle('active', btn.dataset.appStep === id));
      panels.forEach(panel=>panel.classList.toggle('active', panel.dataset.appPanel === id));
      const idx = order.indexOf(id);
      if(status) status.textContent = labels[id] || 'Step';
      if(progress) progress.style.width = ((idx + 1) * 20) + '%';
    }
    railButtons.forEach(btn=>btn.addEventListener('click',()=>activate(btn.dataset.appStep)));

    // Step 1 — user writes or simulates speaking.
    const apfInput = sim.querySelector('[data-apf-input]');
    sim.querySelectorAll('[data-sim-action="speak-apf"]').forEach(btn=>btn.addEventListener('click',()=>{
      if(apfInput) apfInput.value = 'My name is Miguel.';
      setFeedback(sim.querySelector('[data-sim-feedback]'), 'Fala simulada capturada. Agora toque em verificar para ver a correção.', false);
      apfInput?.focus();
    }));
    sim.querySelectorAll('[data-sim-action="check-apf"]').forEach(btn=>btn.addEventListener('click',()=>{
      const value = norm(apfInput?.value);
      const good = /^(my name is|i am|i'm)\s+[a-záéíóúãõç]+/.test(value);
      setFeedback(sim.querySelector('[data-sim-feedback]'), good ? 'Ótimo! Estrutura correta, resposta natural e pronta para speaking. +10 XP' : 'Tente responder em frase completa. Ex.: My name is Miguel.', good);
    }));

    // Step 2 — reveal more mini-story.
    sim.querySelectorAll('[data-sim-action="reveal-story"]').forEach(btn=>btn.addEventListener('click',()=>{
      const hidden = Array.from(sim.querySelectorAll('[data-story-extra]')).filter(el=>el.hasAttribute('hidden'));
      if(hidden.length){ hidden.slice(0,2).forEach(el=>el.removeAttribute('hidden')); btn.textContent = 'Contexto revelado'; }
      else { btn.textContent = 'Contexto já revelado'; }
    }));

    // Step 3 — choices and free answer.
    sim.querySelectorAll('[data-sim-choice]').forEach(btn=>btn.addEventListener('click',()=>{
      const fb = sim.querySelector('[data-choice-feedback]');
      if(btn.dataset.simChoice === 'right') setFeedback(fb, 'Correto. Você entendeu a história e respondeu em terceira pessoa. +10 XP', true);
      else setFeedback(fb, 'Quase. A pergunta é sobre o apelido de Michael. Procure a resposta com “Mike”.', false);
    }));
    sim.querySelectorAll('[data-sim-action="check-qa-text"]').forEach(btn=>btn.addEventListener('click',()=>{
      const input = norm(sim.querySelector('[data-qa-input]')?.value);
      const good = input.includes('calls him mike') || input.includes('call him mike') || input === 'mike';
      setFeedback(sim.querySelector('[data-choice-feedback]'), good ? 'Boa! Resposta aceita. O app reconhece variações naturais, não só um gabarito literal. +12 XP' : 'A resposta esperada fala que todos chamam Michael de Mike.', good);
    }));

    // Step 4 — drill mode tabs.
    const drillTabs = Array.from(sim.querySelectorAll('[data-drill-mode]'));
    const drillPanels = Array.from(sim.querySelectorAll('[data-drill-panel]'));
    drillTabs.forEach(tab=>tab.addEventListener('click',()=>{
      const mode = tab.dataset.drillMode;
      drillTabs.forEach(item=>item.classList.toggle('active', item === tab));
      drillPanels.forEach(panel=>panel.classList.toggle('active', panel.dataset.drillPanel === mode));
      setFeedback(sim.querySelector('[data-xp-feedback]'), 'Modo de treino alterado. Agora interaja com o desafio.', false);
    }));

    const built = sim.querySelector('[data-built-sentence]');
    const wordBankButtons = Array.from(sim.querySelectorAll('[data-word]'));
    function currentSentence(){ return Array.from(sim.querySelectorAll('[data-word].is-used')).map(btn=>btn.dataset.word).join(' '); }
    function syncBuilt(){ if(built) built.textContent = currentSentence() || 'Toque nas palavras para montar a frase.'; }
    wordBankButtons.forEach(btn=>btn.addEventListener('click',()=>{ btn.classList.toggle('is-used'); syncBuilt(); }));
    sim.querySelectorAll('[data-sim-action="reset-sentence"]').forEach(btn=>btn.addEventListener('click',()=>{ wordBankButtons.forEach(word=>word.classList.remove('is-used')); syncBuilt(); setFeedback(sim.querySelector('[data-xp-feedback]'), 'Frase limpa. Monte novamente.', false); }));
    sim.querySelectorAll('[data-sim-action="check-sentence"]').forEach(btn=>btn.addEventListener('click',()=>{
      const sentence = currentSentence();
      const good = sentence === 'I work in Campinas';
      setFeedback(sim.querySelector('[data-xp-feedback]'), good ? '+15 XP. PT → EN correto: I work in Campinas.' : 'A ordem ideal é: I + work + in + Campinas.', good);
    }));
    sim.querySelectorAll('[data-translation-choice]').forEach(btn=>btn.addEventListener('click',()=>{
      setFeedback(sim.querySelector('[data-xp-feedback]'), btn.dataset.translationChoice === 'right' ? 'Correto. EN → PT também entra no treino para garantir compreensão. +10 XP' : 'Quase. “Live” aqui é morar, não trabalhar.', btn.dataset.translationChoice === 'right');
    }));
    sim.querySelectorAll('[data-sim-action="check-enen"]').forEach(btn=>btn.addEventListener('click',()=>{
      const value = norm(sim.querySelector('[data-en-en-input]')?.value);
      const good = value.startsWith('i live in ') || value.startsWith('i live at ');
      setFeedback(sim.querySelector('[data-xp-feedback]'), good ? 'Boa resposta OPI. O app aceita cidade, bairro ou contexto pessoal. +12 XP' : 'Responda com uma frase pessoal. Ex.: I live in Campinas.', good);
    }));
    sim.querySelectorAll('[data-gap-choice]').forEach(btn=>btn.addEventListener('click',()=>{
      setFeedback(sim.querySelector('[data-xp-feedback]'), btn.dataset.gapChoice === 'right' ? 'Correto. Terceira pessoa: Mike lives. +10 XP' : 'Quase. Com “Mike/he/she”, usamos “lives”.', btn.dataset.gapChoice === 'right');
    }));
  });
})();
