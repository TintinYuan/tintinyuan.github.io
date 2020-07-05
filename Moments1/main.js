window.onscroll = function() {
    myFunction();
}

//Get the navbars
navbar = document.getElementById("index-navbar")

//get the offset position of the navbar
var sticky = navbar.offsetTop;

//add the sticky calss to teh nav bar when you reach its scroll posotion. Remocve "sticky" when you leave the scroll posotion
function myFunction() {
    if(window.pageYOffset >= 0){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

