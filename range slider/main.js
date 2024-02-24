const body = document.querySelector("body");
const emoji = document.querySelector(".slide-emoji");
const input = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");
input.oninput = ()=>{
  let sliderValue = input.value;
  thumb.style.left = sliderValue + '%';
  bar.style.width = sliderValue + '%';
  if(sliderValue < 20){
    emoji.style.marginTop = "0px";
    body.classList.add("angry");
    body.classList.remove("confuse");
    body.classList.remove("like");
  }
  if(sliderValue >= 20){
    emoji.style.marginTop = "-140px";
    body.classList.add("confuse");
    body.classList.remove("angry");
    body.classList.remove("like");
  }
  if(sliderValue >= 40){
    emoji.style.marginTop = "-280px";
  }
  if(sliderValue >= 60){
    emoji.style.marginTop = "-420px";
    body.classList.add("like");
    body.classList.remove("confuse");
    body.classList.remove("angry");
  }
  if(sliderValue >= 80){
    emoji.style.marginTop = "-560px";
  }
}