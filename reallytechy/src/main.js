let openbtn = document.querySelector('.bi-list');
let closebtn=document.querySelector('.bi-x');;
let menu= document.querySelector(".menu");

openbtn.addEventListener("click",()=>{
     openbtn.classList.toggle("hide");
     closebtn.classList.toggle("hide");
     menu.classList.toggle("hide");
})

closebtn.addEventListener("click",()=>{
    openbtn.classList.toggle("hide");
    closebtn.classList.toggle("hide");
    menu.classList.toggle("hide");
})































