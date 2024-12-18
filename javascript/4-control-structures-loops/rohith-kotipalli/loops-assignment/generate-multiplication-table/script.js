let formEle = document.getElementById("formContainer")

formEle.addEventListener("submit",(e) => {
   e.preventDefault()
   let inputValue = parseInt(document.getElementById("inputValue").value)
   for(let i=1; i<11; i++){
      let listItem = document.createElement("li")
      listItem.textContent = `${inputValue} x ${i} = ${inputValue * i}`
      document.getElementById("table").appendChild(listItem)
   }

})