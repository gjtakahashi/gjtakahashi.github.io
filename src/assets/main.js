document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const menuList = document.querySelector('.menu-list');
  menuIcon.addEventListener('click', function() {
    menuList.classList.toggle('active');
  });
  // メニュー外クリックで閉じる
  document.addEventListener('click', function(e) {
    if (!menuIcon.contains(e.target) && !menuList.contains(e.target)) {
      menuList.classList.remove('active');
    }
  });

  // スクロール量でナビバー表示
  const navbar = document.getElementById('navbar');
  function handleNavbar() {
    if (window.scrollY > 300) {
      navbar && navbar.classList.add('visible');
    } else {
      navbar && navbar.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleNavbar);
  handleNavbar(); // 初期表示

});
