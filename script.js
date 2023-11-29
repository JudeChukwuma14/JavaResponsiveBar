const bars = document.querySelector('.bars')
const allLinks = document.querySelector('.all-links')

bars.addEventListener('click', toggleMobileNav)


function toggleMobileNav(){
    allLinks.classList.toggle('display-nav')
}