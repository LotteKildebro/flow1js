// opgave 29

let input1 = document.querySelector("#input-1");
let input2 = document.querySelector("#input-2");
let select = document.querySelector("#operation");

let resultat = document.querySelector("#resultat");

console.log(resultat);

let button1 = document.querySelector("#button-1");

button1.addEventListener('click', function () {
    let værdi1 = Number(input1.value);
    let værdi2 = Number(input2.value);

    switch (select.value) {
        case "+":

            resultat.innerHTML = værdi1 + værdi2;

            break;

        case "-":

            resultat.innerHTML = værdi1 + værdi2;

            break;

        case "*":

            resultat.innerHTML = værdi1 + værdi2;

            break;

        case "/":

            resultat.innerHTML = værdi1 + værdi2;

            break;

        default:
            break;

    }
})