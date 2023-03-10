console.log('hello world!!')

let open_btn=document.querySelector("#open_nav");
let close_btn=document.querySelector("#close_nav");



open_btn.addEventListener('click', openMenu);
close_btn.addEventListener('click', closeMenu);


function openMenu(){
    open_btn.style.display="none";
    close_btn.style.display="block";
}

function closeMenu(){
    open_btn.style.display="block";
    close_btn.style.display="none";
}
