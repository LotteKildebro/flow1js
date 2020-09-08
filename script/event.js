// Register event listeners

/*

document.addEventListener('resize', documentResizeHandler);
document.addEventListener('click', documentClickHandler);*/

document.querySelector("#button1").addEventListener("mousemove", documentMouseMoveHandler);
document.querySelector("#button2").addEventListener("mousedown", documentMouseDownHandler);
document.querySelector("#button2").addEventListener("mouseup", documentMouseUpHandler);
document.querySelector('keydown');
document.querySelector("#button4").addEventListener("mouseover", documentMouseOverHandler);
document.querySelector("#button5").addEventListener("click", documentClickHandler);

// mousemove
function documentMouseMoveHandler(e) {
    let x = e.clientX;
    let y = e.clientY;

    let udskrift = `koordinater: (${x},${y})`;
    document.querySelector("#x").innerHTML = udskrift;
};

// mousedown/up
function documentMouseDownHandler() {
    document.querySelector("#button2").style.backgroundColor = "black";
}

function documentMouseUpHandler() {
    document.querySelector("#button2").style.backgroundColor = "pink";
};

// onkeydown

window.onkeydown = function (event) {
    if (event.keyCode === 66) {
        alert("du har triggeret en alert.");
    }
};

// mouseover

function documentMouseOverHandler() {
    document.querySelector(".mouseover").innerHTML += "You moused over<br>";
}

// click
function documentClickHandler() {
    document.querySelector(".klik").innerHTML = Date();
}

// preventdefault
document.getElementById("netflix").addEventListener("click", function (event) {
    event.preventDefault()
});