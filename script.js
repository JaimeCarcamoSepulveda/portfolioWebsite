/* navigation script */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

const hamburger = document.querySelector(".hamburger");
const hamburgerDiv = document.querySelector(".hamburger div");

const hamSVG = document.querySelector(".hamburger svg");

navToggle.addEventListener("click", getMenuToggle)
//navToggle.addEventListener("mouseenter", hamToggleShadow)


function hamToggleShadow () {
    //when clicked
    if(hamburgerDiv.classList.contains('rotate')) {
        hamburgerDiv.style.boxShadow = "12px 10px 4px rgba(0, 0, 0, 0.4)";
        hamburger.style.transform = "translateZ(100px)";
    } 
}


function getMenuToggle() {
    hamburgerDiv.classList.toggle("rotate");
    hamSVG.classList.toggle("rotate");
    document.body.classList.toggle("nav-open");
    hamToggleShadow();

 }

 navLinks.forEach(link => {
    link.addEventListener("click", ()=> {
        document.body.classList.remove("nav-open")
        hamSVG.classList.toggle("rotate");
        hamburgerDiv.classList.remove("rotate");

    })
})


/* 3-d hamburger menu  */

navToggle.addEventListener("mouseenter", (e)=> {
    home.style.backgroundImage="url(./images/backgroundImages/backgroundImageIntro.png)";
    home.style.backgroundSize="cover";
    home.style.backgroundPosition="bottom";
    navToggle.style.transform = "translateZ(120px)";
    navToggle.style.transform = "scale(1.1)";
    hamburger.style.transform = "translateZ(70px)";

    navToggle.style.background = "rgba(0, 0, 0, 0.1)"; 
    navToggle.style.boxShadow = "-6px -3px 8px rgba(0, 0, 0, 0.4)";
    
    setTimeout(()=> {
        hamburgerDiv.style.transform = "translateZ(80px)";
        hamburgerDiv.style.boxShadow ="2px 1px 3px rgba(0, 0, 0, 0.4)";
        hamToggleShadow();
       
       }, 400)
    
})
    

navToggle.addEventListener("mouseleave", (e)=> {
    navToggle.style.transform = "translateZ(0px)";
    navToggle.style.transform = "scale(1)";
    hamburger.style.transform = "translateZ(0px)";
    navToggle.style.background = "none"; 
    navToggle.style.boxShadow = "none";

    setTimeout(()=> {
        hamburgerDiv.style.transform = "translateZ(0px)";
        hamburgerDiv.style.boxShadow = "none";
       
       }, 400)
    
       home.style.backgroundImage="none";
       home.style.backgroundSize="cover";
       home.style.backgroundPosition="bottom";

})


/* 3-d animation for intro section  */

const home = document.querySelector("#home");
const intro = document.querySelector(".intro");
const containerName = document.querySelector(".intro h1");
const myName = document.querySelector(".intro h1 strong");
const devLineContainer = document.querySelector("#devLine-container");
const devLine = document.querySelector("#devLine");
const frontEnd = document.querySelector("#devLine em")
const introPicture = document.querySelector("#introPicture");


home.addEventListener("mousemove", (e)=> {
    let axisX = ((window.innerWidth /2 - e.pageX)) /28;
    let axisY = ((window.innerHeight /2 - e.pageY)) /56;
    intro.style.transform = `rotateX(${axisY}deg) rotateY(${axisX}deg)`; 
})


home.addEventListener("mouseenter", (e)=> {
   setTimeout(transitionSmooth, 700);
   home.style.backgroundImage="url(./images/backgroundImages/backgroundImageIntro.png)";
   home.style.backgroundSize="cover";
   home.style.backgroundPosition="bottom";

   intro.style.transform = "translateZ(30px)";
   setTimeout(()=> {
    containerName.style.transform = "translateZ(30px)";
    containerName.style.background = "rgba(0, 0, 0, 0.1)"; 
    containerName.style.boxShadow = "-4px 7px 10px rgba(0, 0, 0, 0.4), 2px -2px 10px rgba(0, 0, 0, 0.2)";
    myName.style.transform = "translateZ(150px)";
    myName.style.boxShadow = "-10px 5px 10px rgba(0, 0, 0, 0.2)";

   }, 100)
   
    devLineContainer.style.transform = "translateZ(90px)";
   // devLineContainer.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.5)";
    //devLineContainer.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.9)";
    devLineContainer.style.background = "var(--clr-accent)"
    //devLineContainer.style.opacity = "0.4"; 
    
    devLine.style.transform = "translateZ(80px)";
    devLine.style.boxShadow = "-3px 5px 8px rgba(0, 0, 0, 0.6)";
    frontEnd.style.transform = "translateZ(290px)";
    introPicture.style.boxShadow = "20px 30px 45px rgba(0, 0, 0, 0.5)"
    introPicture.style.transform = "translateZ(180px)";

})

home.addEventListener("mouseleave", (e)=> {
    intro.style.transform = "translateZ(0px)";
    intro.style.transition = 'all 0.5 ease-out';
    intro.style.transform = `rotateX(0deg) rotateY(0deg)`;
    containerName.style.transform = "translateZ(0px)";
    containerName.style.background = "rgba(0, 0, 0, 0)";
    containerName.style.boxShadow = "none" 
    myName.style.transform = "translateZ(0px)";
    myName.style.boxShadow = "none";
    devLineContainer.style.transform = "translateZ(0px)";
    devLineContainer.style.boxShadow = "none";
    devLineContainer.style.background = "var(--clr-accent)";
   // devLineContainer.style.opacity = "1"; 
    devLine.style.transform = "translateZ(0px)";
    devLine.style.boxShadow = "none";
    frontEnd.style.transform = "translateZ(0px)";
    introPicture.style.boxShadow = "none"
    introPicture.style.transform = "translateZ(0px)";

    home.style.backgroundImage="none";
    home.style.backgroundSize="none";
    

})

function transitionSmooth () {
    intro.style.transition = "none";
}


/* About me shadow animation  */

//when .about-me comes into view the picture shadow will grow 
/*
pageX/pageY
= relative to TOP-LEFT of whole document when event is triggered

*/


window.addEventListener('resize', getSnippetWidth);
//window.addEventListener('load', getSnippetWidth);

function getSnippetWidth() {
    let snippetWidth = (intro.offsetWidth - 24) + `px`;
    devLineContainer.setAttribute(`style`,`width:${snippetWidth}`); 
 }
 