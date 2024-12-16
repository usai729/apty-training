let formEle = document.getElementById("inputForm")
let firstEle = document.getElementById("firstname")
let lastEle = document.getElementById("lastname")
let ageEle = document.getElementById("age")
let resultContainer = document.getElementById("result")

formEle.addEventListener("submit", (e) => {
   e.preventDefault()
   let age = parseInt(ageEle.value)
   let fullname = firstEle.value + " " + lastEle.value
   let result = (age >= 18) ? `Hello ${fullname} welcome to apty`: `Hello ${fullname} comeback after (18-number) years`;
   resultContainer.textContent = `${result}`
})