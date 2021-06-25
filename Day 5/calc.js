window.onload = () => {
  const first_input = document.getElementById("first");
  const second_input = document.getElementById("second");
  const buttons = document.getElementById("button-group");
  const result = document.getElementById("result");

  buttons.addEventListener("click", (e) => {
    const firstValue = parseInt(first_input.value);
    const secondValue = parseInt(second_input.value);
    const operation = e.target.innerText;
    switch (operation) {
      case "Add":
        result.innerText = "The result is " + (firstValue + secondValue);
        break;
      case "Subtract":
        result.innerText = "The result is " + (firstValue - secondValue);
        break;
      case "Multiply":
        result.innerText = "The result is " + firstValue * secondValue;
        break;
      case "Divide":
        result.innerText = "The result is " + firstValue / secondValue;
        break;
      default:
        alert("Wrong Operand");
        break;
    }
  });
};