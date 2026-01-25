const numbers = document.querySelector(".numbers");
const buttons = document.querySelectorAll("button");
const input = document.querySelector(".display");


// buttons.addEventListener("click", ()=> {
// input.value += btn.textContent;
// })

// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     input.value += btn.textContent;
//   });
// });


// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const value = btn.textContent;

//     if (value === "CE") {
//       input.value = ""; // Clear display
//     } 
//     else if (value === "=") {
//       input.value = eval(input.value); // Calculate
//     } 
//     else {
//       input.value += value; // Add number/operator
//     }
//   });
// });























buttons.forEach(btn => {
  btn.addEventListener("click", ()=> {
    input.value = input.value + btn.textContent;
  })
})





