(function init() { 
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
})();

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top 25%",
        end: "top 0%",
        scrub: 3
    }
})

let crsr = document.querySelector("#cursor")
let body = document.querySelector("body")
body.addEventListener("mousemove", function(e) {
    crsr.style.left = e.x + 5 + "px"
    crsr.style.top = e.y + 5 + "px"
})

tl.to("#page1 h1", {
    x: -75    
}, "anim")

tl.to("#page1 h2", {
    x: 80
}, "anim") 

tl.to("#page1 video", {
    width: "80%"
}, "anim")

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top -110%",
        end: "top -130%",
        scrub: 3
    }
})

tl2.to("#main", {
    backgroundColor: "#fff"
})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top -380%",
        end: "top -390%",
        scrub: 3
    }
})

tl3.to("#main", {
    backgroundColor: "#0F0D0D"
})

let boxes = document.querySelectorAll(".box");

boxes.forEach(element => {
    element.addEventListener("mouseenter", function() {
        let att = element.getAttribute("data-image")
        crsr.style.width = "300px"
        crsr.style.height = "250px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })    

    element.addEventListener("mouseleave", function() {
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = "none"
    })
});

let navbar_h4 = document.querySelectorAll("#navbar-2 h4")
let navbar_div = document.querySelector("#navbar-effect")

navbar_h4.forEach(element => {
    element.addEventListener("mouseenter", function() {
        navbar_div.style.display = "flex"
        navbar_div.style.opacity = "1"

        let h4_elements = document.querySelectorAll("#scroller-in h4")
        let textToDisplay = element.innerHTML
        
        h4_elements.forEach(function(h4) {
            h4.textContent = `${textToDisplay.toUpperCase()}`;  
        })
    })

    element.addEventListener("mouseleave", function() {
        navbar_div.style.display = "none"
        navbar_div.style.opacity = "0"
    })
});