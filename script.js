

const hamburger = document.querySelector(".hamburger");

const navBar = document.querySelector(".nav");

const body = document.querySelector("body");

hamburger.addEventListener("click", (event)=>{

    navBar.style.top="0";
    navBar.style.transition="top .5s";
    


})

body.addEventListener("click", (event)=>{

    const navbarStyle = window.getComputedStyle(navBar)
    const navbarPosition = navbarStyle.top;

    if(navbarPosition ==="0px" && navbarStyle.position ==="absolute")
    {

        navBar.style.top="-300px";
    }


})