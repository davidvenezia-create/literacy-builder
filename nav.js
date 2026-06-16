// literacy-builder nav injection
// Include this script in every page, then call injectNav('pageid')

function injectNav(activeId) {
  const pages = [
    { id: 'sounds',    href: 'sounds.html',    label: '🔤 Sounds' },
    { id: 'blending',  href: 'blending.html',   label: '🔗 Blending' },
    { id: 'syllables', href: 'syllables.html',  label: '✂️ Syllables' },
    { id: 'patterns',  href: 'patterns.html',   label: '🧩 Patterns' },
    { id: 'reading',   href: 'reading.html',    label: '📖 Reading' },
  ];

  const linksHTML = pages.map(p =>
    `<li><a href="${p.href}" class="${p.id === activeId ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  document.getElementById('site-nav').innerHTML = `
    <a class="nav-logo" href="index.html">Literacy <span>Builder</span></a>
    <ul class="nav-links">${linksHTML}</ul>
  `;

  document.getElementById('site-footer').innerHTML = `
    <p>Literacy Builder · Free for learners and educators · 
       <a href="index.html" style="color:inherit">Home</a></p>
  `;
}

// Text-to-speech helper
function speak(text, rate = 0.85) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = rate;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}

// Feedback helper
function showFeedback(el, type, msg) {
  el.className = 'feedback ' + type;
  el.textContent = msg;
}
