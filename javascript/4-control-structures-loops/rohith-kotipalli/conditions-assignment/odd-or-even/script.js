let formEle = document.getElementById("formContainer")
let resultEle = document.getElementById("result")

formEle.addEventListener("submit",(e)=>{
   e.preventDefault()
   let givenNumber = parseInt(document.getElementById("num1").value) 
   let answer
   if (givenNumber%2 === 0){
      answer = "Even Number"
   }
   else{
      answer = "Odd Number"
   }
   resultEle.textContent = answer
})