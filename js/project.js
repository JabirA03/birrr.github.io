//=========================================================
// FILE : js/project.js
// Digunakan untuk semua halaman project
//=========================================================

//==============================
// HEADER SCROLL
//==============================

const header = document.querySelector(".project-header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.style.background="rgba(8,17,31,.75)";
        header.style.backdropFilter="blur(18px)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

    }else{

        header.style.background="transparent";
        header.style.boxShadow="none";

    }

});

//==============================
// REVEAL ANIMATION
//==============================

const reveals=document.querySelectorAll(".reveal");

const revealSection=()=>{

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const trigger=window.innerHeight-120;

        if(top<trigger){

            item.classList.add("active");

        }

    });

};

window.addEventListener("scroll",revealSection);

revealSection();

//==============================
// SMOOTH SCROLL
//==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

//==============================
// IMAGE HOVER EFFECT
//==============================

document.querySelectorAll(".gallery-grid img").forEach(img=>{

    img.addEventListener("mousemove",(e)=>{

        const rect=img.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*12;
        const rotateX=((y/rect.height)-0.5)*-12;

        img.style.transform=
        `perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)`;

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform=
        "perspective(800px) rotateX(0) rotateY(0) scale(1)";

    });

});

//==============================
// COUNTER ANIMATION
//==============================

const counters=document.querySelectorAll(".achievement-card h3");

const counterObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter=entry.target;

            const target=parseInt(counter.innerText);

            let number=0;

            const speed=Math.max(1,target/70);

            const update=()=>{

                number+=speed;

                if(number<target){

                    counter.innerText=Math.floor(number);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText=target;

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

//==============================
// CARD HOVER
//==============================

document.querySelectorAll(
".stack-card,.feature-card,.challenge-card,.nav-card"
).forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});
//==============================
// HERO PARALLAX
//==============================

const heroImage=document.querySelector(".project-right img");

if(heroImage){

    window.addEventListener("mousemove",(e)=>{

        const x=(window.innerWidth/2-e.clientX)/45;
        const y=(window.innerHeight/2-e.clientY)/45;

        heroImage.style.transform=
        `translate(${x}px,${y}px)`;

    });

}

//==============================
// IMAGE MODAL
//==============================

const gallery=document.querySelectorAll(".gallery-grid img");

if(gallery.length){

    const modal=document.createElement("div");

    modal.className="image-modal";

    modal.innerHTML=`
        <span class="close-modal">&times;</span>
        <img class="modal-image">
    `;

    document.body.appendChild(modal);

    const modalImg=modal.querySelector(".modal-image");

    gallery.forEach(img=>{

        img.addEventListener("click",()=>{

            modal.classList.add("show");

            modalImg.src=img.src;

        });

    });

    modal.addEventListener("click",()=>{

        modal.classList.remove("show");

    });

}

//==============================
// ACTIVE SECTION
//==============================

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const top=window.scrollY;

        const offset=section.offsetTop-200;

        const height=section.offsetHeight;

        if(top>=offset && top<offset+height){

            section.classList.add("active-section");

        }

    });

});

//==============================
// BUTTON RIPPLE
//==============================

document.querySelectorAll(".link-btn,.back-btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius=diameter/2;

        circle.style.width=
        circle.style.height=`${diameter}px`;

        circle.style.left=
        `${e.clientX-this.offsetLeft-radius}px`;

        circle.style.top=
        `${e.clientY-this.offsetTop-radius}px`;

        circle.classList.add("ripple");

        const ripple=this.querySelector(".ripple");

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

//==============================
// DISABLE IMAGE DRAG
//==============================

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("draggable","false");

});

//==============================
// PRELOADER FADE
//==============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

//==============================
// END
//==============================

console.log("Project Page Loaded Successfully 🚀");