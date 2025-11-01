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

});
