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
    

    btn.addEventListener("click", function() {

        let aValue = Number(a.value*50); // Input value a number for if else comparison conditions
        let bValue = Number(b.value*50);
        let cValue = Number(c.value*50);
        
        if (aValue == bValue && bValue == cValue) {
            canPar.innerHTML = "Triangle is equilateral"; // if all sides equal
        } else if (aValue == bValue || bValue == cValue || aValue == cValue) {
            canPar.innerHTML = "Triangle is isosceles"; // if two sides equal
        } else if (aValue + bValue > cValue && aValue + cValue > bValue && bValue + cValue > aValue) {
            canPar.innerHTML = "Triangle is scalene"; // if none of the sides are equal, but two side sum always larger than third
        } else {
            canPar.innerHTML = "It's not possible to calculate this kind of triangle"; // if it's an impossible triangle
        }

        
    })

    }