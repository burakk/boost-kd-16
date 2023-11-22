export function Page06() {
    return (
        <section>
            <h1>Komponentlerin saflığını muhafaza etmek - Keeping components pure</h1>

            <RecipeMocha drinkers={3} />

            <RecipeMocha drinkers={3} />

            <TeaGathering/>

        
        </section>
    )
}


// Object Oriented Programming,  Functional Programming, Procedular Programming

//functional programming

//pure functions
//1- aynı argümanla çağırdığınız her seferde, aynı sonucu vermelidir.
//2- kendi işine bakmalı - single responsibility  
//3- dış scope'daki bir değere bulaşmamalı

function pureDoubleFn(n) {

    return 2 * n;
}



function impureDoubleFn(n) {
    console.log("hello"); //side effects
    return 2 * n;
}

let counter = 0;

function increment() {
    counter++;
    return counter;
}



// --->>> Recipe 


function RecipeMocha({ drinkers }) {
    return (
        <div>
            <h1>Mocha Tarifi</h1>
            <ul>
                <li>{drinkers} tatlı kaşığı kahve</li>
                <li>{drinkers} tatlı kaşığı toz şeker</li>
                <li>{drinkers * 2} tatlı kaşığı sıcak su</li>
                <li>{drinkers} fincan süt</li>
            </ul>
        </div>
    )
}



let guestCount = 0;



//bardak  - impure component 
function Cup() {
    console.log("Ben bardak")
    guestCount++;
    return <h3>Ben {guestCount}. için bardak</h3>
}

//çay toplantısı
function TeaGathering() {
    return (
        <div>
            <Cup2 guest={1} />
            <Cup2 guest={2} />
            <Cup2 guest={3} />
        </div>
    )
}


function Cup2({guest}){
    return <h3>Ben {guest}. konuk için bardak</h3>
}



