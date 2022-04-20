const navEl = document.getElementById('nav'),
  openNavBtn = document.getElementById('menu-open'),
  closeNavBtn = document.getElementById('menu-close'),
  dropdownEls = document.querySelectorAll('.dropdown_title')

openNavBtn.addEventListener('click', (e) => navEl.classList.add('colapsed'))
closeNavBtn.addEventListener('click', (e) => navEl.classList.remove('colapsed'))
dropdownEls.forEach((dropdownEl) => {
  dropdownEl.addEventListener('click', (e) =>
    dropdownEl.parentElement.classList.toggle('colapsed')
  )
})
