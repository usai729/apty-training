let formEle = document.getElementById("formContainer")
let resultDiv = document.getElementById("result")

formEle.addEventListener("submit",(e) => {
    e.preventDefault()
    let value1 = parseInt(document.getElementById("inputValue").value)
    let i = 1
    let sum = 0
    while (i <= (value1)){
       sum += i 
       i++
    }
    resultDiv.textContent = `${sum}`
})