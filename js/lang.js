// js/lang.js

const LANG_STORAGE_KEY = 'ag-lang';
const LANG_DIRS = { en: 'ltr', ar: 'rtl' };

window.initLang = function() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY) ?? 'en';
  window.applyLang(saved);
};

window.applyLang = function(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir  = LANG_DIRS[lang];
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  
  // Swap font: Arabic needs a dedicated font family
  document.documentElement.style.setProperty(
    '--ag-font',
    lang === 'ar' ? "'IBM Plex Arabic', system-ui, sans-serif" : "'DM Sans', system-ui, sans-serif"
  );

  // Dispatch custom event to notify app content to re-render
  const event = new CustomEvent('langChanged', { detail: { lang } });
  window.dispatchEvent(event);
};

window.toggleLang = function() {
  const current = document.documentElement.lang || 'en';
  const next = current === 'en' ? 'ar' : 'en';
  window.applyLang(next);
  return next;
};
