const nav = document.querySelector('.header')
const inner = document.querySelector('.header__inner')
const intro = document.querySelector('.intro')

//define function for scroll event, if scroll by Y coordinate > than 700 px than add to class .header sticky.
function fixed() {
    if (window.scrollY > 750) {
        nav.classList.add('sticky')
        inner.classList.add('border')
    } else {
        nav.classList.remove('sticky')
        inner.classList.remove('border')
    }
}

window.addEventListener('scroll', fixed) //create a listener for what happens on the page 
