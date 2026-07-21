(function() {
  var KEY = 'geo2022-theme';
  var html = document.documentElement;
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function apply(saved) {
    html.classList.remove('dark-mode', 'light-mode');
    if (saved) html.classList.add(saved);
  }

  var saved = localStorage.getItem(KEY);
  apply(saved);

  window.toggleDarkMode = function() {
    var wasDark = html.classList.contains('dark-mode') ||
      (!html.classList.contains('light-mode') && mq.matches);
    html.classList.remove('dark-mode', 'light-mode');
    var next = wasDark ? 'light-mode' : 'dark-mode';
    html.classList.add(next);
    localStorage.setItem(KEY, next);
  };
})();
