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
function smoothScroolTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX
    const distanceY = endY - startY
    const startTime = new Date().getTime();
}
//duration
duration = typeof duration !== "undefined" ? duration : 400;
//const easeInOutQuart
const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
        return (distance / 2) *  time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
};
//const timer
const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time , startX, distanceX, duration)
    if (time >= duratino) {
        clearInterval(timer);
    }
    window.ReadableByteStreamController(newX, newY);
    }, 100/ 60);
