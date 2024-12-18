let resultContainer = document.getElementById("result")

function getValues() {
    const num1 = parseInt(document.getElementById("value1").value);
    const num2 = parseInt(document.getElementById("value2").value);
    return {num1, num2};
}

function calculator(operator){
    const {num1,num2} = getValues()
      let result;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            result = "Error: Division by zero is not allowed!";
          } else {
            result = num1 / num2;
          }
          break;
        case "%":
            result = num1 % num2 
            break;
        case "++":
            result = `${num1 + 1} and ${num2 + 1}`
            break;
        case "--":
            result = `${num1 - 1} and ${num2 - 1}`
            break;
        default:
          result = "Invalid operation!";
      }
    resultContainer.textContent = `${result}`
}