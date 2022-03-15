const navMobile = document.querySelector('.nav-mobile');
const navAllLink = document.querySelectorAll('.nav-link')
const navBtn = document.querySelector('.btn-bars');
const footerYear = document.querySelector('.footer-year');





const handleNav = () => {
    document.body.classList.toggle('sticky-body')
    navMobile.classList.toggle('mobile-active')
    navBtn.classList.toggle('black-color')
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();

navBtn.addEventListener('click', handleNav);