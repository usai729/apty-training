
document.getElementById("formContainer").addEventListener("submit",(e)=>{
    e.preventDefault()
    let inputValue = document.getElementById("input").value 
    if (inputValue === ""){
        document.getElementById("result").textContent = "Result: null"
    }
    else{
        document.getElementById("result").textContent= `Result: ${inputValue.charAt(0)} ${inputValue.charAt(inputValue.length-1)}`
    }
})