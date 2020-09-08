// JavaScript Drum Kit, opgave 30

{
    let playingClass = 'playing',
        //Vi finder crash id og tildeler den en variabel
        crash = document.querySelector('#crash');

    //en funktion der animere crash
    const animateCrash = function () {
        crash.style.transform = 'rotate(0deg) scale(1.5)';
    };
    //Vi udfører funktion playTheSound, e er en kort reference for 
    //event object som bliver sendt til event handlers.
    const playTheSound = function (e) {
        //Vi tilføjer event object til keyCode
        const keyCode = e.keyCode,
            //keyElement får nu den tilsvarende værdi som vi har tilføjet til vores data keys i html
            keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
        //Hvis keyElement returnere true, skal dataen returneres true 
        if (keyElement === true) return true;
        //vi sørger for at lyden hører til den rigtige keyCode
        const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
        //Lyden skal spille indenfor den den rigtige tidsramme
        audioElement.currentTime = 0;
        //Vi kalder funktionen
        audioElement.play();
        //Vi kalder animateCrash(); og sørger for den hører til den rigtige keydata 69
        switch (keyCode) {
            case 69:
                animateCrash();
                break;
        }

        keyElement.classList.add(playingClass);
    };
    //vi vil kune have crash animation hvis der bliver trykket på knappen..
    const removeCrashTransition = function (e) {
        if (e.propertyName !== 'transform') return;

        e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
    };
    //vi vil kune have key animation hvis der bliver trykket på knappen..
    const removeKeyTransition = function (e) {
        if (e.propertyName !== 'transform') return;

        e.target.classList.remove(playingClass)
    };
    //Vi finder .key class og kører igennem en forEach, og bruger transitionend event
    const drumKeys = Array.from(document.querySelectorAll('.key'));

    drumKeys.forEach(key => {
        key.addEventListener('transitionend', removeKeyTransition);
    });

    crash.addEventListener('transitionend', removeCrashTransition);

    //keydown eventlistener (vi bruger data-key til at finde den rigtige
    //key.. f.eks. data-key 66  = b )
    window.addEventListener('keydown', playTheSound);
}