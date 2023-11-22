import { v4 as uuidv4 } from 'uuid';

export function Page05() {


    return <section>
        <h1>Liste - Array render etmek, Rendering Lists</h1>
        <MyComponent />
        <MyComponent2 />
        <MyComponent3 />
        <Products />
        <Products2 />
        <BasicComponent />
    </section>
}


function MyComponent() {

    const seasons = ["summer", "winter", "fall", "spring"];
    const myObj = {} //objeler geçerli react çocuk öğeleri olamaz

    return <p>{seasons}</p>;
}


function MyComponent2() {


    const seasonsJsx = [<li key="0">summer</li>, <li key="1">winter</li>, <li key="2">fall</li>, <li key="3">spring</li>];

    return <ul>
        {seasonsJsx}
    </ul>;
}


function MyComponent3() {


    const jsxElementList = [<h1 key="0">Hello</h1>, <p key="1">Lorem, ipsum.</p>, <p key="2">hu hu</p>];

    return (
        <div>
            {jsxElementList}
        </div>
    )
}


const DATA_PRODUCTS = [
    { id: 0, title: "ürün 1" },
    { id: 1, title: "ürün 2" },
    { id: 2, title: "ürün 3" },
]

//[0, 1, 2]

// [ <li>ürün 1</li>, <li>ürün 2</li>, <li>ürün 3</li>]






function Products() {
    let titles = DATA_PRODUCTS.map(item => (<li key={item.id}>{item.title}</li>));
    return <ul>
        {titles}
    </ul>
}


function Products2() {

    let productsJsxList = []
    //let titles = DATA_PRODUCTS.map(item => (<li>{item.title}</li>));
    DATA_PRODUCTS.forEach(
        (product) => {
            productsJsxList.push(<li key={product.id}>{product.title}</li>)
        }

    )

    return (
        <>
            <h2>Ürünlerimiz</h2>
            <ul>
                {productsJsxList}
            </ul>
        </>
    )
}


//1- içinde ünlü kişi objelerinin olduğu bir liste oluşturun. Her ünlünün unique id'si ismi, mesleği olsun

//2- FamousPeople adlı bir komponent oluşturun 

//3- Bu komponent dışarıdan verilen meslek özelliğine göre listedeki kişileri filtreleyip tarayıcıda gösterebilsin...



const DATA_LAPTOPS = [
    { name: "Apple" },
    { name: "Lenovo" },
    { name: "Hp" },
    { name: "Asus" },
]

/*
const dataLaptopsWithUid = [ ];

for( let item of DATA_LAPTOPS ){
    const uId = uuidv4();
    dataLaptopsWithUid.push( { id:uId, ...item  } );
}*/

const dataLaptopsWithUid = DATA_LAPTOPS.map(
      laptop=>({ id:uuidv4(), ...laptop})
    );

console.log( dataLaptopsWithUid );

function BasicComponent() {
    const jsxList = dataLaptopsWithUid.map((laptop) => <li key={laptop.id}>{laptop.name}</li>)
    return (
        <ul>
            {jsxList}
        </ul>
    );
}


//

//console.log(uuidv4(), uuidv4());