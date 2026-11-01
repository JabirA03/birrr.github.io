//======================================
// PORTFOLIO SCRIPT V1
//======================================

//============================
// STICKY NAVBAR
//============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 60);

});

//============================
// MOBILE MENU
//============================

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {

    navbar.classList.toggle("open");

}

//============================
// CLOSE MENU
//============================

document.querySelectorAll(".navbar a").forEach(link=>{

    link.onclick=()=>{

        navbar.classList.remove("open");

    }

});

//============================
// ACTIVE MENU
//============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=window.scrollY;

        const offset=section.offsetTop-180;

        const height=section.offsetHeight;

        if(top>=offset && top<offset+height){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

//============================
// TYPING EFFECT
//============================

const words=[

"Computer Engineer",

"Flutter Developer",

"AI Enthusiast",

"Computer Vision",

"UI Designer"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

const typing=document.getElementById("typing");

function typeEffect(){

    const currentWord=words[wordIndex];

    if(!deleting){

        typing.textContent=currentWord.substring(0,charIndex++);

        if(charIndex>currentWord.length){

            deleting=true;

            setTimeout(typeEffect,1800);

            return;

        }

    }else{

        typing.textContent=currentWord.substring(0,charIndex--);

        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?45:100);

}

typeEffect();

//============================
// SCROLL REVEAL
//============================

const revealElements=document.querySelectorAll(

".stat-card,.skill-card,.project-card,.timeline-item,.about-image,.about-content,.contact-card a"

);

function reveal(){

    revealElements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        const visible=window.innerHeight-100;

        if(top<visible){

            el.style.opacity="1";

            el.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".7s ease";

});

window.addEventListener("scroll",reveal);

reveal();

//============================
// COUNTER
//============================

const counters=document.querySelectorAll(".stat-card h2");

let counted=false;

function runCounter(){

    if(counted) return;

    if(window.scrollY>250){

        counted=true;

        counters.forEach(counter=>{

            let target=counter.innerText.replace("+","");

            if(target==="∞") return;

            target=parseInt(target);

            let count=0;

            const speed=Math.max(20,120/target);

            const update=()=>{

                count++;

                counter.innerHTML=count+"+";

                if(count<target){

                    setTimeout(update,speed);

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll",runCounter);

//============================
// SMOOTH SCROLL
//============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

//============================
// PARALLAX HERO
//============================

const heroImage=document.querySelector(".image-box");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x=(window.innerWidth/2-e.pageX)/40;

    const y=(window.innerHeight/2-e.pageY)/40;

    heroImage.style.transform=`translate(${x}px,${y}px)`;

});

//============================
// PROJECT HOVER
//============================

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=

        `radial-gradient(circle at ${x}px ${y}px,

        rgba(0,217,255,.18),

        rgba(255,255,255,.04) 60%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.04)";

    });

});

//============================
// PRELOADER (OPTIONAL)
//============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

console.log("%cPortfolio by Jabir","color:#00D9FF;font-size:18px;font-weight:bold;");