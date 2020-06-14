var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

var numOfSquares = 6;

for(var i = 0; i < modeButtons.length;  i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
        reset();

        //figure out how many squared to show

        //pick new color

        //pick newpicked color
    });
}

function reset(){
    //generate new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from the array
    pickedColor = pickColor();
    //change colorDipplay to math match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from the array
    pickedColor = pickColor();
    //change colorDipplay to math match picked Color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];
    
    //click listeners to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct."
            resetButton.textContent = "Play again."
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } 
        else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColors(color){
    for( var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
 
    return "rgb(" + r + ", " + g + ", " + b + ")";

}



