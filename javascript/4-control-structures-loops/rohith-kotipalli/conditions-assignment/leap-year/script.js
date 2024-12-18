let formEle = document.getElementById("formContainer")
let resultCon = document.getElementById("result")

formEle.addEventListener("submit",(e) => {
    e.preventDefault()
    let inputVal = parseInt(document.getElementById("year").value)
    let a 
    if ((inputVal % 400 === 0) && (inputVal % 4 === 0) && (inputVal % 100 !== 0)){
        a = "Leap Year"
    }
    else {
        a = "Not a Leap Year"
    }
    resultCon.textContent = a
})