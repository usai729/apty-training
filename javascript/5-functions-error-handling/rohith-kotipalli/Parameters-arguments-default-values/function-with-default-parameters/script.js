const calculateArea = (length = 5, width = 3) => {
    return length * width;
};

document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let length = document.getElementById('lengthInput').value;
    let width = document.getElementById('widthInput').value;
    if (length === ""){
        length = undefined
    }
    else{
        length = parseFloat(length)
    }
    if (width === ""){
        width = undefined
    }
    else{
        width = parseFloat(width)
    }
    console.log(length)
    const area = calculateArea(length, width);
    document.getElementById('result').innerText = `Area of the rectangle: ${area}`;
});