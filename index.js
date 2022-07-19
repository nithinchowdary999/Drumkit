var buttons_All = document.querySelectorAll(".drum");
var length = buttons_All.length;
var i = 0;
for (i === 0; i < length; i++) {
  buttons_All[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
document.addEventListener("keydown", function(e) {
  makeSound(e.key)
  buttonAnimation(e.key);
});


function makeSound(k) {
  switch (k) {
    case "w":
      var tom_1 = new Audio('sounds/tom-1.mp3');
      tom_1.play();
      break;
    case "a":

      var tom_2 = new Audio('sounds/tom-2.mp3');
      tom_2.play();
      break;
    case "s":
      var tom_3 = new Audio('sounds/tom-3.mp3');
      tom_3.play();
      break;
    case "d":
      var tom_4 = new Audio('sounds/tom-3.mp3');
      tom_4.play();
      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "k":
      var kick_bass = new Audio('sounds/kick-bass.mp3');
      kick_bass.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    default:
      console.log(pressKey);



  }
};

function buttonAnimation(l){
var activeButton = document.querySelector("." + l);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100);

}




// if(this.innerHTML === "w"){
//   var audio = new Audio('sounds/tom-1.mp3');
//   audio.play();
// }else if(this.innerHTML === "a"){
//   var audio = new Audio('sounds/tom-2.mp3');
//   audio.play();
// }else if(this.innerHTML === "s"){
//   var audio = new Audio('sounds/tom-3.mp3');
//   audio.play();
// }else if(this.innerHTML === "d"){
//   var audio = new Audio('sounds/tom-4.mp3');
//   audio.play();
// }else if(this.innerHTML === "j"){
//   var audio = new Audio('sounds/crash.mp3');
//   audio.play();
// }else if(this.innerHTML === "k"){
//   var audio = new Audio('sounds/kick.mp3');
//   audio.play();
// }else{
//   var audio = new Audio('sounds/snare.mp3');
//   audio.play();
// }
