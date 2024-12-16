(function() {
    var inputBox = document.getElementById('defaultInput');
    document.getElementById("result").textContent = "Rohith"
})(); 

document.getElementById('formContainer').addEventListener("submit",(e)=>{
    e.preventDefault()
    document.getElementById("result").textContent = document.getElementById('defaultInput').value
})