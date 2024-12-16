let formEle = document.getElementById("formContainer")
let sumEle = document.getElementById("sum")
let averageEle = document.getElementById("average")

formEle.addEventListener("submit", (e) => {
      e.preventDefault()
      let givenNumbers = document.getElementById("arrayValue").value
      let inputArray = ((givenNumbers.trim()).split(",")).map((a) => Number(a))
      let sum = 0
      for (let i of inputArray){
          sum += i
      }
      let average = sum / inputArray.length 
      sumEle.textContent = `Sum is ${sum}`
      averageEle.textContent = `Average is ${average}`
})