let formEle = document.getElementById("formContainer")
let resultDiv = document.getElementById("result")
let stepsContainer = document.getElementById("steps")

formEle.addEventListener("submit",(e)=>{
   e.preventDefault()
   let inputValue = parseInt(document.getElementById("inputValue").value)
   let i = 1
   let factorial = 1
   let sentence = ""
   do{
     factorial *= i 
     sentence += `${i} x `
     i++
   }
   while (i <= inputValue);
   resultDiv.textContent = `${factorial}`
   stepsContainer.textContent = `${sentence.slice(0,(sentence.length - 2))}`
})

