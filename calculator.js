const numbers = document.querySelector(".numbers");
const buttons = document.querySelectorAll("button");
const input = document.querySelector(".display");



buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // input.value = input.value + btn.textContent;  ---> this will make to 
    // act first rather than thinking which button 
    // without that the button will be observed first and then only act


    const value = btn.textContent;


    if (value == "CE") {
      input.value = "";
    } 
    else if (value == "=") {
      input.value = eval(input.value);
    } 
    else {
      input.value += value;
    }
  });
});






































