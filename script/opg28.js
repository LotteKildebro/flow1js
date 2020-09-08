//opgave 28 

/*//lav array
let knapper = ["knap 1", "knap 2", "knap 3", "knap 4", "knap 5"];
//Kør igennem array med forEach
knapper.forEach(knapFunktion, clickFunction);


function knapFunktion(knap) {
    document.querySelector(".ptags").innerHTML +=
        knap + "<br>";
    console.log(knap);
};

document.querySelector(".ptags").addEventListener("click", clickFunction);

function clickFunction(knap) {
    document.querySelector(".ptags").innerHTML += knapper + "<br>";
}*/

//Det er lige gået op for mig at jeg har læst opg 28 forkert.. vender tilbage til opgaven hvis
//jeg kan nå det ;-)

let AlleDivs = document.querySelectorAll(".div");
console.log(AlleDivs);

AlleDivs.forEach(function (div) {
    console.log(div);
})

//rup alert
document.querySelector(".rup").addEventListener("click", clickFunction);

function clickFunction() {
    alert("rup")
};

//rap styling
let sheet = document.createElement('style')
sheet.innerHTML = ".rap {font-size: 2em; color: #34bbdd;}";
document.body.appendChild(sheet);

//opgave 28.2

let navne = ['Phil', 'Claire', 'Haley', 'Alex', 'Luke'];

//Kør igennem array med forEach
navne.forEach(navneFunktion);

function navneFunktion(navne, index) {
    document.querySelector("#tomdiv").innerHTML +=
        `Mit navn er ${navne.toUpperCase()} og jeg har plads ${index}` + "<br>";
    console.log(navne);
};