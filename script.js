const buttons = document.querySelectorAll(".btns input");
const click_sound = document.querySelector("#click_sound");

// inputs.addEventListener("click", () => {
//   click_sound.currentTime = 0;
//   click_sound.play();
// });
  
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    click_sound.currentTime = 0;
    click_sound.play();
  });
});
