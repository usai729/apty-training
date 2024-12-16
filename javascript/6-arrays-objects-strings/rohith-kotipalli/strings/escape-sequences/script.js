document.getElementById("formContainer").addEventListener("submit",(e)=>{
     e.preventDefault()
     let inputValue = document.getElementById("input").value
     let newString = []
     for(let x of inputValue){
        if (x === "\n"){
            newString.push("\\n")
        }
        else if (x === "\t"){
            newString.push("\\n")
        }
        else{
            newString.push(x)
        }
     }
     document.getElementById("result").textContent = newString.join("")
})
console.log("rohith\\ndeadpool")