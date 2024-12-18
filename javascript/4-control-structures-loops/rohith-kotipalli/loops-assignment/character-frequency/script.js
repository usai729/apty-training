const input = prompt("Enter a string to get the frequency of each character in the string") 

let obj = Object(input)
let obj2 = {}
let array1 = []
for(let x in obj){
    let char = obj[x]
    if (!array1.includes(char)){
         array1.push(char)
         let a = 0
         for(let i of input){
            if(i === char){
                a += 1
               obj2[i] = a
            }
         }
    }
}
console.log(obj2)
let res = '';
for(let key in obj2) {
    res += `${key} : ${obj2[key]}\n`
}

document.getElementById('result').innerText = res;