const navMobile = document.querySelector('.nav-mobile');
const navAllLink = document.querySelectorAll('.nav-link')
const navBtn = document.querySelector('.btn-bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer-year');
const angleUp = document.querySelector('.angle-up');


const handleNav = () => {
    document.body.classList.toggle('sticky-body')
    navMobile.classList.toggle('mobile-active')
    navBtn.classList.add('black-color')
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {
        if (section.classList.contains('section-light') && section.offsetTop <= currentSection) {
            navBtn.classList.add('black-color')
        } else if (!section.classList.contains('section-light') && section.offsetTop <= currentSection) {
            navBtn.classList.remove('black-color')
        }
    })

    if (currentSection > 94) {
        angleUp.classList.add('angle-up-active')
    } else {
        angleUp.classList.remove('angle-up-active')
    }
}



const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);