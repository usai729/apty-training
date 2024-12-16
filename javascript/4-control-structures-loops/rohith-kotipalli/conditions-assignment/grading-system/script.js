const givingGrades = document.getElementById("grading")
const resultContainer = document.getElementById("result")

givingGrades.addEventListener("submit",(e)=>{
    e.preventDefault()
    let marks = parseInt(document.getElementById("value").value)
    let a 
    if (marks >= 90){
        a = "Grade A"
    }
    else if (marks >= 75) {
        a = "Grade B"
    }
    else if (marks >= 50){
        a = "Grade C"
    }
    else{
        a = "Grade F"
    }
    resultContainer.textContent = a
})