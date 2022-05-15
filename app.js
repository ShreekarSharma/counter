let count = 0;
const number = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");
btns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    const classes = e.currentTarget.classList;
    if(classes.contains("decrease")){
      count--;
    } else if(classes.contains("increase")){
      count++;
    } else{
      count = 0;
    }
    if(count < 0){
      number.style.color = "darkred";
    } else if(count > 0){
      number.style.color = "darkgreen";
    } else {
      number.style.color = "black";
    }
    number.textContent = count;
});
});