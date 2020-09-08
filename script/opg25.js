// opgave 25
let element1 = document.getElementById("p1");
let element2 = document.querySelector("#p2");
let element3 = document.getElementsByTagName("h1");
let element4 = document.querySelector("h2");
let element5 = document.getElementsByClassName("enKlasse");
let element6 = document.querySelector(".enAndenKlasse");

console.log(element1.innerHTML);
console.log(element2.innerHTML);
console.log(element3[0].innerHTML);
console.log(element4.innerHTML);
console.log(element5[0].innerHTML);
console.log(element6.innerHTML);

// opgave 25.2

document.querySelector("#mit_navn").innerText = "Lotte!";