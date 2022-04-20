const navEl = document.getElementById('nav'),
  openNavBtn = document.getElementById('menu-open'),
  closeNavBtn = document.getElementById('menu-close')

openNavBtn.addEventListener('click', (e) => navEl.classList.add('colapsed'))
closeNavBtn.addEventListener('click', (e) => navEl.classList.remove('colapsed'))
