let resultContainer = document.getElementById("result")
let formEle = document.getElementById("formContainer") 

function gettingInputValues(){
    let inputValue_1 = parseInt(document.getElementById("num1").value)
    let inputValue_2 = parseInt(document.getElementById("num2").value)
    let inputValue_3 = parseInt(document.getElementById("num3").value)
    console.log({inputValue_1,inputValue_2,inputValue_3})
    return {inputValue_1,inputValue_2,inputValue_3}
} 

formEle.addEventListener("submit",(e)=>{
     e.preventDefault()
     const {inputValue_1,inputValue_2,inputValue_3} = gettingInputValues()
     resultContainer.textContent = `${Math.max(inputValue_2,inputValue_1,inputValue_3)}`
})
