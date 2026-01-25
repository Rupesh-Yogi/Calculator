const numbers = document.querySelector(".numbers");
const buttons = document.querySelectorAll("button");
const input = document.querySelector(".display");


// buttons.addEventListener("click", ()=> {
//  input.appendChild(buttons)   ;
// })

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log(btn.textContent);
  });
});
