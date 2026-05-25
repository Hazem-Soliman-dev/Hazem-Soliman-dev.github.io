// js/theme.js

const THEME_STORAGE_KEY = 'ag-theme';

window.initTheme = function() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved ?? (prefersDark ? 'dark' : 'light');
  window.applyTheme(theme);
};

window.applyTheme = function(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  // Dispatch custom event to notify other modules (like terminal/UI)
  const event = new CustomEvent('themeChanged', { detail: { theme } });
  window.dispatchEvent(event);
};

window.toggleTheme = function() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  window.applyTheme(next);
  return next;
};
