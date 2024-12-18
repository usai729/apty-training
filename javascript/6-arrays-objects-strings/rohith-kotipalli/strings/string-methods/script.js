document.getElementById("formContainer").addEventListener("submit",(e)=>{
   e.preventDefault()
   let givenInput = document.getElementById("input").value
   sortedvalue = givenInput.split("").sort().join("")
   document.getElementById("result").textContent = `Result: ${sortedvalue}`
})