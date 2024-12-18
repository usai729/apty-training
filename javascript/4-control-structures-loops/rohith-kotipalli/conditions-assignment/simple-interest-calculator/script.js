let formEle = document.getElementById("formContainer")
let resultEle = document.getElementById("result")

formEle.addEventListener("submit", (e) => {
  e.preventDefault()
  let principal = parseFloat(document.getElementById("amount").value)
  let rate = parseFloat(document.getElementById("interest").value)
  let time = parseFloat(document.getElementById("time").value)
  resultEle.textContent = `${(principal * rate * time) / 100}`
})