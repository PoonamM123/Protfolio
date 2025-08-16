
const animationDuration = 3000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = t => t * (2 - t);

const animateCountUp = el => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);

    const counter = setInterval(() => {
        frame++;

        const progress = easeOutQuad(frame / totalFrames);

        const currentCount = Math.round(countTo * progress);


        if (parseInt(el.innerHTML, 10) !== currentCount) {
            el.innerHTML = currentCount;
        }

        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, frameDuration);
};
const countupEls = document.querySelectorAll('.timer');
// countupEls.forEach(animateCountUp);
let scrolled = false;

window.addEventListener('scroll', () => {
    if (!scrolled && window.scrollY > 45) {
        countupEls.forEach(animateCountUp);
        scrolled = true;
    }
});

// .btn-same
let BTN = document.querySelectorAll(".btn-same");
// BTN.addEventListener("click", function(event){
//     event.preventDefault()
//});



let btn1 = document.querySelector(".btn-1")
let btn2 = document.querySelector(".btn-2")
let btn3 = document.querySelector(".btn-3")
let btn4 = document.querySelector(".btn-4")

let btnG = document.querySelector('.div-G');
let Dis = document.querySelectorAll('.sec4-col-rel');

Dis[0].style.transition = "all 2s";
Dis[1].style.transition = "all 2s";
Dis[2].style.transition = "all 2s";
Dis[3].style.transition = "all 2s";

btn1.addEventListener("click", () => {
    btn1.style.color = "#ffff"
    btn2.style.color = "#7f4dea"
    btn3.style.color = "#7f4dea"
    btn4.style.color = "#7f4dea"
    btnG.style.width = "18%";
    btnG.style.left = "4%";
    Dis[0].style.display = "block"
    Dis[1].style.display = "block"
    Dis[2].style.display = "block"
    Dis[3].style.display = "block"

});
btn2.addEventListener("click", () => {
    btn2.style.color = "#ffff"
    btn1.style.color = "#7f4dea"
    btn3.style.color = "#7f4dea"
    btn4.style.color = "#7f4dea"
    btn2.style.color = "#ffff";
    btnG.style.width = "22%";
    btnG.style.left = "21%";
    Dis[0].style.display = "none"
    Dis[1].style.display = "block"
    Dis[2].style.display = "none"
    Dis[3].style.display = "none"
});
btn3.addEventListener("click", () => {
    btn3.style.color = "#ffff"
    btn2.style.color = "#7f4dea"
    btn1.style.color = "#7f4dea"
    btn4.style.color = "#7f4dea"
    btnG.style.width = "29%";
    btnG.style.left = "44%";
    Dis[0].style.display = "block"
    Dis[1].style.display = "block"
    Dis[2].style.display = "none"
    Dis[3].style.display = "none"

});
btn4.addEventListener("click", () => {
    btn4.style.color = "#ffff"
    btn2.style.color = "#7f4dea"
    btn3.style.color = "#7f4dea"
    btn1.style.color = "#7f4dea"
    btnG.style.width = "22%";
    btnG.style.left = "74%";
    Dis[0].style.display = "none"
    Dis[1].style.display = "none"
    Dis[2].style.display = "block"
    Dis[3].style.display = "none"
});


let hov1 = document.querySelector(".hover-row-1");
let no = document.querySelector("#no1");
let design = document.querySelector("#Design1");
let hov2 = document.querySelector(".hover-row-2");
let hov3 = document.querySelector(".hover-row-3");
let hov4 = document.querySelector(".hover-row-4");
let move = document.querySelector(".move");
let h1 = document.querySelectorAll(".no");
let Design = document.querySelectorAll(".design");
let para = document.querySelectorAll(".p1");
let arrow = document.querySelectorAll(".Arow");

// h1[0].style.color="#ffff";
h1[1].style.color = "#7f4dea";
h1[2].style.color = "#7f4dea";
h1[3].style.color = "#7f4dea";


Design[1].style.color = "#7f4dea";
Design[2].style.color = "#7f4dea";
Design[3].style.color = "#7f4dea";

para[0].style.color = "#ffff";
para[1].style.color = "#140c1c";
para[2].style.color = "#140c1c";
para[3].style.color = "#140c1c";


// arrow[0].style.color = "#7f4dea";
arrow[1].style.color = "#7f4dea";
arrow[2].style.color = "#7f4dea";
arrow[3].style.color = "#7f4dea";

// transform: rotate(45.00deg);
arrow[0].style.transform = "rotate(45deg)";
arrow[1].style.transform = "rotate(45deg)";
arrow[2].style.transform = "rotate(45deg)";
arrow[3].style.transform = "rotate(45deg)";


hov1.addEventListener('mouseover', () => {
    move.style.transform = "translateY(0%)";
    no.style.color = "#ffff";
    design.style.color = "#ffff";
    h1[1].style.color = "#7f4dea";
    h1[2].style.color = "#7f4dea";
    h1[3].style.color = "#7f4dea";

    Design[1].style.color = "#7f4dea";
    Design[2].style.color = "#7f4dea";
    Design[3].style.color = "#7f4dea";

    para[0].style.color = "#ffff";
    para[1].style.color = "#140c1c";
    para[2].style.color = "#140c1c";
    para[3].style.color = "#140c1c";

    arrow[0].style.transform = "rotate(-45deg)";
    arrow[1].style.transform = "rotate(45deg)";
    arrow[2].style.transform = "rotate(45deg)";
    arrow[3].style.transform = "rotate(45deg)";

    arrow[0].style.color = "#ffff";
    arrow[1].style.color = "#7f4dea";
    arrow[2].style.color = "#7f4dea";
    arrow[3].style.color = "#7f4dea";


});
hov2.addEventListener('mouseover', () => {
    move.style.transform = "translateY(100%)";
    no.style.color = "#7f4dea";
    design.style.color = "#7f4dea";

    h1[1].style.color = "#ffff";
    Design[1].style.color = "#ffff";
    para[1].style.color = "#ffff";
    // h1[1].style.color = "#7f4dea";
    h1[2].style.color = "#7f4dea";
    h1[3].style.color = "#7f4dea";
    // Design[1].style.color = "#7f4dea";
    Design[2].style.color = "#7f4dea";
    Design[3].style.color = "#7f4dea";

    para[0].style.color = "#140c1c";
    para[2].style.color = "#140c1c";
    para[1].style.color = "#ffff";
    para[3].style.color = "#140c1c";

    arrow[0].style.transform = "rotate(45deg)";
    arrow[1].style.transform = "rotate(-45deg)";
    arrow[2].style.transform = "rotate(45deg)";
    arrow[3].style.transform = "rotate(45deg)";

    arrow[0].style.color = "#7f4dea";
    arrow[1].style.color = "#ffff";
    arrow[2].style.color = "#7f4dea";
    arrow[3].style.color = "#7f4dea";

});
hov3.addEventListener('mouseover', () => {
    move.style.transform = "translateY(200%)";
    no.style.color = "#7f4dea";
    design.style.color = "#7f4dea";
    h1[2].style.color = "#ffff";
    Design[2].style.color = "#ffff";
    para[2].style.color = "#ffff";
    Design[1].style.color = "#7f4dea";
    // Design[2].style.color = "#7f4dea";
    Design[3].style.color = "#7f4dea";
    h1[1].style.color = "#7f4dea";
    // h1[2].style.color = "#7f4dea";
    h1[3].style.color = "#7f4dea";
    para[0].style.color = "#140c1c";
    para[2].style.color = "#ffff";
    para[1].style.color = "#140c1c";
    para[3].style.color = "#140c1c";
    arrow[0].style.transform = "rotate(45deg)";
    arrow[1].style.transform = "rotate(45deg)";
    arrow[2].style.transform = "rotate(-45deg)";
    arrow[3].style.transform = "rotate(45deg)";

    arrow[0].style.color = "#7f4dea";
    arrow[1].style.color = "#7f4dea";
    arrow[2].style.color = "#ffff";
    arrow[3].style.color = "#7f4dea";

});
hov4.addEventListener('mouseover', () => {
    move.style.transform = "translateY(300%)";
    no.style.color = "#7f4dea";
    design.style.color = "#7f4dea";
    h1[3].style.color = "#ffff";
    Design[3].style.color = "#ffff";
    para[3].style.color = "#ffff";
    Design[1].style.color = "#7f4dea";
    Design[2].style.color = "#7f4dea";
    h1[1].style.color = "#7f4dea";
    h1[2].style.color = "#7f4dea";
    para[0].style.color = "#140c1c";
    para[2].style.color = "#140c1c";
    para[1].style.color = "#140c1c";
    para[3].style.color = "#ffff";
    arrow[0].style.transform = "rotate(45deg)";
    arrow[1].style.transform = "rotate(45deg)";
    arrow[2].style.transform = "rotate(45deg)";
    arrow[3].style.transform = "rotate(-45deg)";

    arrow[0].style.color = "#7f4dea";
    arrow[1].style.color = "#7f4dea";
    arrow[2].style.color = "#7f4dea";
    arrow[3].style.color = "#ffff";

});

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 27,
    speed: 1200,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerGroup: 1,
            slidesPerView: 1,

        },
        576: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
    },
});

$("#icon-rel").click(function (event) {
    event.preventDefault();
});
$(".btn-same").click(function (event) {
    event.preventDefault();
});
$(".nav-btn").click(function (event) {
    event.preventDefault();
});
$(".Arow").click(function (event) {
    event.preventDefault();
});

$(".m1").click(function (event) {
    event.preventDefault();
});
$(".m2").click(function (event) {
    event.preventDefault();
});

$("#icon-rel").click(function () {

    $("#width").slideToggle("slow");


});


const toggleButton = document.querySelector('.res-icon');
const Button1 = document.querySelector('.m1');
const Button2 = document.querySelector('.m2');
const content = document.querySelector('.nav-ul');

Button1.addEventListener('click', function () {
    
        Button1.classList.remove("display");
        Button1.classList.toggle('none');
        Button2.classList.remove('none')
        Button2.classList.toggle('display');
        content.classList.toggle('open');
    });

Button2.addEventListener('click', function () {
    Button2.classList.remove('display')
    Button2.classList.toggle('none');
    Button1.classList.remove('none')
    Button1.classList.toggle('display')
    content.classList.toggle('open');

});
document.addEventListener('DOMContentLoaded', function () {
    let show = false;
    let body = document.querySelector('body');
    let button = document.querySelector('.nav-btn');
    let closeBtn = document.querySelector('.close-btn');      
    let popup = document.querySelector('.popuptext');
    
    button.addEventListener('click', function () {
        popup.style.visibility = 'visible';
        show = true;
    });

    body.addEventListener('click', function (event) {
        if (show && !popup.contains(event.target) && event.target !== button) {
            popup.style.visibility = 'hidden';
            show = false;
        }
    });

    closeBtn.addEventListener('click', function (event) {
        popup.style.visibility = 'hidden';
        show = false;
        event.stopPropagation(); // Prevent the click event from propagating to the body
    });
});
