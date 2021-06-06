window.onload = function () {

    let btn = document.getElementById("btn");
    let a = document.getElementById("sideA");
    let b = document.getElementById("sideB");
    let c = document.getElementById("sideC");
    
    let canvasElement = document.querySelector("#triangleCanvas");
    let context = canvasElement.getContext("2d");

    context.font = "20px 'Roboto', sans-serif";
    context.textAlign = "center";
    

    btn.addEventListener("click", function() {

        let aValue = Number(a.value*50); // Input value to a number for if else comparison conditions
        let bValue = Number(b.value*50);
        let cValue = Number(c.value*50);
        
        const error = document.getElementsByClassName('errorMsg')[0];

        context.clearRect(0, 0, canvasElement.width, canvasElement.height); // clear canvas for next text and triangle
        error.innerHTML = ""; // clear error msg
        

        // BONUS TASK - I have found the solution for the task, although I understand the principle, the mathematical side was not my idea. Please do ignore this function if the task was to write this from zero.
        function drawTriangle() {
            let R1=aValue, R2=bValue, R3=cValue;
            let Ax=0, Ay=0;
            let Bx=R3, By=0;
            let Cx=(R2*R1+R3*R3-R1*R1)/(2*R3);
            let Cy=Math.sqrt(R2*R2-Cx*Cx);
    
            let Ox = canvasElement.width / 2 - Bx/2;
            let Oy = canvasElement.height / 2 + Cy/2;
        
            context.beginPath();
            context.moveTo(Ox+Ax, Oy-Ay);
            context.lineTo(Ox+Bx, Oy-By);
            context.lineTo(Ox+Cx, Oy-Cy);
            context.closePath();
            context.lineWidth=1;
            context.stroke();
        }
        
        if (aValue < 1 || bValue < 1 || cValue < 1) {
            context.fillText("Enter value of all sides, before pressing CALCULATE", 250, 320); // error msg if all three input fields are not filled
        } else {
            if (aValue == bValue && bValue == cValue) {
                drawTriangle();
                context.fillText("Triangle is equilateral", 250, 320); // all sides are equal
            } else if (aValue == bValue || bValue == cValue || aValue == cValue) {
                drawTriangle();
                context.fillText("Triangle is isosceles", 250, 320); // two sides are equal
            } else if (aValue + bValue > cValue && aValue + cValue > bValue && bValue + cValue > aValue) {
                drawTriangle();
                context.fillText("Triangle is scalene", 250, 320); // all sides are different sizes, but sum of two is always greater than third
            } else {
                context.fillText("It's not possible to calculate this kind of triangle", 250, 320);
            }
        }
    })
}