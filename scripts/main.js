function classToggle() {
    const navs = document.querySelectorAll('.ttd-Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('ttd-Navbar__ToggleShow'));
  }
  document.querySelector('.ttd-Navbar__Link-toggle')
    .addEventListener('click', classToggle);