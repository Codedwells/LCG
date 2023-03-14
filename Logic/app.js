console.log('hello world!!')
// let header=document.querySelector("header");
let openBtn=document.querySelector("#open_nav");
let closeBtn=document.querySelector("#close_nav");
let navMenu=document.querySelector("#nav");
let logo=document.querySelector("header > h1");



openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);


function openMenu(){
    // header.style.backgroundColor=" #4806cb";
    // logo.style.position="fixed";
    // logo.style.top="0.2rem";
    openBtn.style.display="none";
    navMenu.style.display="block"
    closeBtn.style.display="block";
}

function closeMenu(){
     navMenu.style.display="none";
    closeBtn.style.display="none";
    openBtn.style.display="block";
}
