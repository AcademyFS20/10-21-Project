var app = document.querySelector('.txt-animation');
console.log(app)
var Typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

Typewriter
    .pauseFor(2500)
    .typeString('<span style="color:#f9f9f9;">Greetings to Zoubair</span> <span style="color:#ff886a;">SPACE</span>')
    .pauseFor(600)
    .deleteChars(5)
    .typeString('</strong></span> <span style="color:#ffc46a;">WORK</span>')
    .deleteChars(4)
    .pauseFor(600)
    .typeString('<strong></strong></span> <span style="color:#08b7ff;">JOB</span>')
    .pauseFor(600)
    .deleteChars(3)
    .typeString('<strong></strong></span> <span style="color:#652537;">LOVE</span> ')
    .pauseFor(600)
    .deleteChars(4)
    .typeString('<strong> <span style="color:#f9f9f9;">ONLY FOR</span> <span style="color:#155c8f;">ME</span> </strong>')
    .pauseFor(1000)
    .start(1);


const menuBtn = document.querySelector('bk');
let menuOpen = false;
bk.addEventListener('click', () => {
    if (!menuOpen) {
        bk.classList.add('open');
        menuOpen = true;
    } else {
        bk.classList.remove('open');
        menuOpen = false;
    }
});