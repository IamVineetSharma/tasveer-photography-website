// change navbar onscroll 

window.addEventListener('scroll', () => {
    document.querySelector('nav').
        classList.toggle
        ('window-scrolled', window.scrollY > 0);

})
// cntct btn //
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textbutton => {
    let text = textbutton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

// swierjs (gallery section) // 
var swiper = new swiper(".MySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});



const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closenavBtn = document.querySelector
    ('#nav__toggle-close');

const openNav = () => {
    nav.style.diplay = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);