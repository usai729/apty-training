const calculatePerimeterAndArea = (length = 5, width = 3) => {
    const calculateArea = (length, width) => {
        return length * width;
    };

    const perimeter = 2 * (length + width);
    const area = calculateArea(length, width);

    return { perimeter, area };
};

document.getElementById('rectangleForm').addEventListener('submit', function(event) {
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

    const { perimeter, area } = calculatePerimeterAndArea(length, width);
    
    document.getElementById('result').innerText = `Perimeter: ${perimeter}, Area: ${area}`;
});