let navbar =document.querySelector('.navbar')
{/* <i class="fas fa-times"></i> */}
let searchBox =document.querySelector('.search-box .fa-search')
searchBox.addEventListener("click",()=>{
    navbar.classList.toggle("showInput")
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("fa-search","fa-times");
    }
    else{
        searchBox.classList.replace("fa-times","fa-search");

    }
})
 


//sidebar open close js code
let menuOpenBtn = document.querySelector(".navbar .fa-bars")
let closeOpenBtn = document.querySelector(".nav-links .fa-times")
let navLinks = document.querySelector(".nav-links ")


 menuOpenBtn.addEventListener("click",()=>{
     navLinks.style.left = "0";
 })
 closeOpenBtn.addEventListener("click",()=>{
     navLinks.style.left = "-100%";
 })

//sub menu
let projectArrow = document.querySelector(".project_arrow")
let accounttArrow = document.querySelector(".accout_arrow")

projectArrow.addEventListener("click",()=>{
    navLinks.classList.toggle("show1")
})
accounttArrow.addEventListener("click",()=>{
   navLinks.classList.toggle("show2")
})
