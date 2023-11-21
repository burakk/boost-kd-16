export function Page04() {
    return (
        <section>
            <h1>Koşullu render etmek - Conditional Rendering</h1>
            <PackingListEinstein />

            <PackingListTesla/>

            <PackingListNewton/>
            <PackingListSpinoza/>
        </section>
    )
}





function PackingListEinstein() {

    return (
        <div>
            <h1>Einstein tatil için neler taşır?</h1>
            <ul>
                <PackingItemEinstein name="Güneş Kremi" isPacked={true}/>
                <PackingItemEinstein name="Kitap" isPacked={true}/>
                <PackingItemEinstein name="Güneş gözlüğü" isPacked={false}/>
            </ul>
        </div>

    )

}

/*
function PackingItemEinstein({ name, isPacked }) {
    //conditional rendering - bir koşula göre farklı jsx elemanı döndürmek
    if( isPacked ){
        return <li>{name} +++</li>;
    }
    return <li>{name}</li>;
}*/

function PackingItemEinstein( props ) {

    //conditional rendering - bir koşula göre farklı jsx elemanı döndürmek
    if( props.isPacked ){
        return <li>{props.name} +++</li>;
    }
    return <li>{props.name}</li>;
}




function PackingListTesla() {

    return (
        <div>
            <h1>Tesla tatil için neler taşır?</h1>
            <ul>
                <PackingItemTesla name="Güneş Kremi" isPacked={true}/>
                <PackingItemTesla name="Kitap" isPacked={false}/>
                <PackingItemTesla name="Güneş gözlüğü" isPacked={false}/>
            </ul>
        </div>

    )

}


function PackingItemTesla( props ) {

    //conditional rendering - bir koşula göre jsx render etmeyebiliriz.
    if( props.isPacked ){
        return null; 
    }
    return <li>{props.name}</li>;
}





function PackingListNewton() {

    return (
        <div>
            <h1>Newton tatil için neler taşır?</h1>
            <ul>
                <PackingItemNewton name="Güneş Kremi" isPacked={true}/>
                <PackingItemNewton name="Kitap" isPacked={false}/>
                <PackingItemNewton name="Güneş gözlüğü" isPacked={false}/>
            </ul>
        </div>

    )

}


function PackingItemNewton( {name, isPacked} ) {

    //ternary operator kullanarak 
    return isPacked ? <li>{name} +++</li> : <li>{name}</li>;
   //return <li> {name} { isPacked ? "+++" : "" } </li>;
}


function PackingListSpinoza() {

    return (
        <div>
            <h1>Spinoza tatil için neler taşır?</h1>
            <ul>
                <PackingItemSpinoza name="Güneş Kremi" isPacked={true}/>
                <PackingItemSpinoza name="Kitap" isPacked={false}/>
                <PackingItemSpinoza name="Güneş gözlüğü" isPacked={false}/>
            </ul>
        </div>

    )

}


function PackingItemSpinoza( {name, isPacked} ) {

    //logical and kullanarak
    return <li>{name} {isPacked && "+++"}</li>
}