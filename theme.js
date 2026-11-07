// Language: ?lang=en|tr, else the browser's. The EN / TR buttons switch in place and links keep it.
(function () {
  var q = new URLSearchParams(location.search);
  var root = document.documentElement;
  var lang = (q.get('lang') || navigator.language || 'en').slice(0, 2).toLowerCase();
  root.lang = lang === 'tr' ? 'tr' : 'en';
  function keep() {
    document.querySelectorAll('a[data-keep]').forEach(function (a) {
      a.href = a.getAttribute('href').split('?')[0] + '?lang=' + root.lang;
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    keep();
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        root.lang = b.dataset.setLang;
        history.replaceState(null, '', '?lang=' + root.lang);
        keep();
      });
    });
  });
})();
