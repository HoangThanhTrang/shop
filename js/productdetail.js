var mainImg = document.getElementById('mainimg')
var smallimg = document.getElementsByClassName('small-img')
smallimg[0].onclick = function(){
    mainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    mainImg.src = smallimg[3].src;
}
var clicksilde = document.querySelectorAll(".click_slide-icon")
var sectionitem = document.querySelectorAll(".section_item")
console.log(sectionitem)
var l =0;
clicksilde[1].onclick = ()=>{
    l++;
    for(var i of sectionitem ){
        if(l==0){i.style.left = "0%"}
        if(l==1){i.style.left = "-100%"}
        if(l==2){i.style.left = "-200%"}
        if(l==3){i.style.left = "-400%"}
        if(l==4){i.style.left = "-600%"}
        if(l==5){i.style.left = "-800%"}
        if(l>5){l=5}        
    }
}
clicksilde[0].onclick = ()=>{
    l--;
    for(var i of sectionitem ){
        if(l==0){i.style.left = "0%"}
        if(l==1){i.style.left = "-100%"}
        if(l==2){i.style.left = "-200%"}
        if(l==3){i.style.left = "-400%"}
        if(l==4){i.style.left = "-600%"}
        if(l==5){i.style.left = "-800%"}
        if(l>5){l=5}          
    }
}
var clicksilde2 = document.querySelectorAll(".click_slide-icon2")
var sectionitem2 = document.querySelectorAll(".section_top_item")
var r =0;
clicksilde2[1].onclick = ()=>{
    r++;
    for(var i of sectionitem2 ){
        if(r==0){i.style.left = "0%"}
        if(r==1){i.style.left = "-100%"}
        if(r==2){i.style.left = "-200%"}
        if(r==3){i.style.left = "-400%"}
        if(r==4){i.style.left = "-600%"}
        if(r==5){i.style.left = "-800%"}
        if(r>5){r=5}         
    }
}
clicksilde2[0].onclick = ()=>{
    r--;
    for(var i of sectionitem2 ){
        if(r==0){i.style.left = "0%"}
        if(r==1){i.style.left = "-100%"}
        if(r==2){i.style.left = "-200%"}
        if(r==3){i.style.left = "-400%"}
        if(r==4){i.style.left = "-600%"}
        if(r==5){i.style.left = "-800%"}
        if(r>5){r=5}        
    }
}