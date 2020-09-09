//opgave 28 

let ptags = document.querySelectorAll(".ptags");

let nummer = 1;

document.querySelectorAll(".ptags").forEach(ptags => {
    ptags.innerHTML = ("Knap" + " " + nummer)
    nummer += 1
});

document.querySelectorAll(".ptags").forEach(ptags => {
    ptags.addEventListener("click", () => {
        alert(ptags.innerHTML)
    })
});

28.1

let divs = document.querySelectorAll(".div");
console.log(divs);

document.querySelectorAll(".div").forEach(divs => {
    switch (divs.innerHTML) {
        case "Rip":
            break;
        case "Rap":
            divs.style.color = "blue";
            break;
        case "Rup":
            divs.addEventListener("click", function () {
                alert("Rup")
            })
            break;
    }
});




//opgave 28.2

let navne = ['Phil', 'Claire', 'Haley', 'Alex', 'Luke'];

//Kør igennem array med forEach
navne.forEach(navneFunktion);

function navneFunktion(navne, index) {
    document.querySelector("#tomdiv").innerHTML +=
        `Mit navn er ${navne.toUpperCase()} og jeg har plads ${index}` + "<br>";
    console.log(navne);
};