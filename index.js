const menuLinks = document.querySelectorAll('menu. a[href^="index.html"]');

function getDistanceFromTheTop(element) {
    const id = element=getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
    event.preventDefault();
    const getDistanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    smoothScroolTo(0, getDistanceFromTheTop);
}

//menu for each links
menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection)
});

//function smoothScroolTo



//duration



//const easeInOutQuart



//const timer


