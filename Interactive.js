document.addEventListener('scroll', () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 0){
        nav.classList.add("scrolled");
    }
    else {
        nav.classList.remove("scrolled");
    }
})

function menuFunction() {
    var menu = document.getElementById('navtop');
    if (menu.className ===  "navlink") {
        menu.className += " responsive";
    }
    else {
        menu.className = "navlink";
    }
}