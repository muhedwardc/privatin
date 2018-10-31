let show = false;
const mobileNav = document.getElementsByClassName('mobile-nav')[0];
const hamburger = document.getElementById('hamburger');
const backdrop = document.getElementsByClassName('backdrop')[0];
const closeBtn = document.getElementsByClassName('close')[0];

hamburger.addEventListener('click', toggleNav);
backdrop.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);


function toggleNav() {
    show = !show;
    if (show) {
        mobileNav.classList.add('show');
        backdrop.classList.add('show');
    } else {
        mobileNav.classList.remove('show');
        backdrop.classList.remove('show');
    }
}