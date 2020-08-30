function subtract() {
  let firstNum = document.querySelector("#firstNumber").value;
  let secNum = document.querySelector("#secondNumber").value;

  document.querySelector("#result").textContent = eval(
    `${firstNum} - ${secNum}`
  );
}
