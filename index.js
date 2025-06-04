// side navbar
var sidenav=document.querySelector(".side-navbar")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("close-navbar")
menuicon.addEventListener('click', function(){
    console.log("close");
    
    sidenav.style.left=0
})
closenav.addEventListener('click', function(){
    sidenav.style.left="-50%"
})