let formEle = document.getElementById("formContainer")
let resultDiv = document.getElementById("result") 

formEle.addEventListener("submit", (e) => {
    e.preventDefault()
    let inputValue = parseInt(document.getElementById("inputValue").value)
    let a = -1
    for(let i=0;i < inputValue; i++){
        a += 2
        let stars = '*'.repeat(a)
        let spaces = " ".repeat(inputValue-(i+1))
        let para = document.createElement("p")
        para.classList.add("star-style")
        para.textContent = spaces + stars 
        resultDiv.appendChild(para)
    }
})