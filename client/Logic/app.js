console.log('hello world!!')

let openBtn=document.querySelector("#open_nav");
let closeBtn=document.querySelector("#close_nav");



openBtn.addEventListener('click', openMenu);
close_btn.addEventListener('click', closeMenu);


function openMenu(){
    openBtn.style.display="none";
    closeBtn.style.display="block";
}

function closeMenu(){
    openBtn.style.display="block";
    closeBtn.style.display="none";
}
