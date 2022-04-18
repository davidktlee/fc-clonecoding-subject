function menuAdd(e) {
    e.path[0].classList.remove('hide');
}
function menuHide(e) {
    e.path[0].classList.add('hide');
}
const menuEl = document.querySelector('.menu');
menuEl.addEventListener('mouseover', menuAdd);
menuEl.addEventListener('mouseout', menuHide);
// (선택자, 옵션)
new Swiper('.swiper.first', {
    autoplay: true,
    loop: true,
    pagination: {
        el: '.swiper .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.swiper .btn-prev',
        nextEl: '.swiper .btn-next'
    }
});
new Swiper('.swiper.second', {
    autoplay: true,
    loop: true,
    pagination: {
        el: '.swiper .swiper-pagination',
        clickable: true
    }
});

//# sourceMappingURL=index.72be8890.js.map
