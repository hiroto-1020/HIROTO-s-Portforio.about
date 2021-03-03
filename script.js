const targetElement=document.querySelectorAll(".animation");
document.addEventListener("scroll",function(){
  for(i=0;i<targetElement.length;i++){
    const getElementDistance=targetElement[i].getBoundingClientRect().top+targetElement[i].clientHeight*.6
    if(window.innerHeight>getElementDistance){
      targetElement[i].classList.add("show");
    }
  }
})

