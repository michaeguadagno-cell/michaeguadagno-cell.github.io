(function () {
  var start = document.querySelector('.nav__cta');
  if (start) start.setAttribute('href', 'code.html');
  var hero = document.querySelector('.hero__actions .btn');
  if (hero) {
    hero.setAttribute('href', 'code.html');
    hero.textContent = 'Try the free AI coder \u2192';
  }
  var fab = document.querySelector('.jump-fab');
  if (fab) {
    fab.setAttribute('href', 'code.html');
    fab.textContent = 'Free AI coder \u2193';
  }
})();
