function menuAdd(e) {
  e.path[0].classList.remove('hide')
}
function menuHide(e) {
  e.path[0].classList.add('hide')
}
const menuEl = document.querySelector('.menu')
menuEl.addEventListener('mouseover', menuAdd)
menuEl.addEventListener('mouseout', menuHide)
