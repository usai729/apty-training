let formEle = document.getElementById("formContainer")
let resultDiv = document.getElementById("result")

formEle.addEventListener("click", (e) => {
   e.preventDefault()
   let value1 = parseInt(document.getElementById("Value1").value)
   let value2 = parseInt(document.getElementById("Value2").value)
   let c = []
   for(let i=value1; i <= value2;i++){
       for (let j=2; j < i;j++){
          if (i%j === 0){
              break
          }
          else{
             if (j === (i-1)){
                  c.push(i)
             }
          }
       }
   }
   resultDiv.textContent = c.join(" ")
})