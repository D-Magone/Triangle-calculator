// Get input field values

// compare if else sizing, give output to in canvas

// draw in canvas

window.onload = function () {

    let btn = document.getElementById("btn");
    let a = document.getElementById("sideA");
    let b = document.getElementById("sideB");
    let c = document.getElementById("sideC");
    let canPar = document.getElementById("canvasPar");
    
    let canvasElement = document.querySelector("#triangleCanvas");
    let context = canvasElement.getContext("2d");

    context.font = "20px 'Roboto', sans-serif";
    context.textAlign = "center";
    

    btn.addEventListener("click", function() {

        context.clearRect(0, 0, canvasElement.width, canvasElement.height); // clear canvas for next text

        let aValue = Number(a.value*50); // Input value a number for if else comparison conditions
        let bValue = Number(b.value*50);
        let cValue = Number(c.value*50);
        
        if (aValue == bValue && bValue == cValue) {
            context.fillText("Triangle is equilateral", 250, 320); // if all sides equal
        } else if (aValue == bValue || bValue == cValue || aValue == cValue) {
            context.fillText("Triangle is isosceles", 250, 320); // if two sides equal
        } else if (aValue + bValue > cValue && aValue + cValue > bValue && bValue + cValue > aValue) {
            context.fillText("Triangle is scalene", 250, 320); // if none of the sides are equal, but two side sum always larger than third
        } else {
            context.fillText("It's not possible to calculate this kind of triangle", 250, 320); // if it's an impossible triangle
        }

        
    })

    }