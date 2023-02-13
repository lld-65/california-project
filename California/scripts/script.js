// const navBtn = document.querySelector('.nav__toggle');
// const nav = document.querySelector('.nav')
// const menuIcon = document.querySelector('.menu-icon');


// navBtn.onclick = function () {
// 	nav.classList.toggle('nav--mobile')
// 	menuIcon.classList.toggle('menu-icon--active');
// 	document.body.classList.toggle('no-scroll');
// };

/*===============Search==============*/
const headerSearch = document.querySelector('.header__search');
const goodsSearch = document.querySelector('.goods__search');

// goodsSearch.onclick = function () {	
// 	headerSearch.classList.toggle('header__search--active')	
// };
goodsSearch.addEventListener('click', function() {
	headerSearch.classList.toggle('header__search--active');
})

/*----------------------SLIDER--------------------*/

const images = document.querySelectorAll('.slider .slider-line .top__row');
const sliderLine = document.querySelector('.slider .slider-line');
const lines = document.querySelectorAll('.line');

let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);
lines[count].classList.toggle('line-active')
document.querySelector('.slider__btn-next').addEventListener('click', function () {
    
    count++;
    if (count >= images.length) {
        lines[count-1].classList.remove('line-active');
        count = 0;
    }
    rollSlider();
    lines[count].classList.toggle('line-active');
    lines[count - 1].classList.remove('line-active');
});

document.querySelector('.slider__btn-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        lines[0].classList.remove('line-active');
        count = images.length - 1;
    }
    rollSlider();
    lines[count].classList.toggle('line-active');
    lines[count + 1].classList.remove('line-active');
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

/*------------------------------SUBMENU---------------------------*/

const submenuLink = document.querySelector('.submenu-link');
const submenu = document.querySelector('.submenu');
const iconAngle = document.querySelector('.icon-angle');

submenuLink.onclick = function () {	
submenu.classList.toggle('submenu--active');
iconAngle.classList.toggle('icon-angle--active');
    
};
