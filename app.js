const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');


    burger.addEventListener('click', () => {
        console.log("hello")
        nav.classList.toggle('nav-active');

        navLinks.forEach((links, index) => {
            if (links.style.animation) {
                links.style.animation = '';
            } else {
                links.style.animation = 'navLinksFade 0,5s ease forwards ${index / 7 + 3}s'
            }

        });

        burger.classList.toggle('toggle');
    });

};

navSlide()

var app = document.querySelector('.txt-animation');
console.log(app)
var Typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

Typewriter
    .pauseFor(2500)
    .typeString('<span style="color:#f9f9f9;">Here you will find all about</span> <span style="color:#652537;">ME</span>')
    .pauseFor(600)
    .deleteChars(2)
    .typeString('<span style="color:#652537;">MY WORK</span>')
    .deleteChars(4)
    .pauseFor(600)
    .typeString('<strong><span style="color:#652537;">JOB</span></strong>')
    .pauseFor(600)
    .deleteChars(3)
    .typeString('<strong><span style="color:#652537;">LOVE</span></strong>')
    .pauseFor(600)
    .deleteChars(4)
    .typeString('<strong><span style="color:#652537">ME</span></strong>')
    .pauseFor(1000)
    .start(1);