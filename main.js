let isHide = true

function menuAdd(e) {
  if (isHide) {
    // 보임
    isHide = !isHide
    e.path[0].classList.remove('hide')
  } else {
    isHide = !isHide
    e.path[0].classList.add('hide')
  }
}
// 숨김
function menuHide(e) {
  if (!isHide) {
    isHide = !isHide
    e.path[0].classList.add('hide')
  } else {
    isHide = !isHide
    e.path[0].classList.remove('hide')
  }
}
const menuEl = document.querySelector('.menu')
menuEl.addEventListener('mouseover', menuAdd)
menuEl.addEventListener('mouseout', menuHide)
