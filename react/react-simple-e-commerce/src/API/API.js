const API_BASE_URL_PRODUCTS = "http://localhost:5136/api/Products"
const API_BASE_URL_USERS = "https://localhost:7177/api/Users"

// function getProducts(){
//     return fetch(API_BASE_URL_PRODUCTS)
//     .then((response) => {
//         if(!response.ok){
//             throw new Error("Something went wrong!");
//         }
//         return response.json();
//     })
//     .then((data) => {
//         return data;
//     })
//     .catch((err) => {})
// }

/* async function */

export async function getProducts(){
    const response = await fetch(API_BASE_URL_PRODUCTS);
    
    if(!response.ok){
        throw new Error("Something went wrong!");
    }

    const data = await response.json();

    return data;
}

export async function deleteProduct(productId){
    const response = await fetch(API_BASE_URL_PRODUCTS + "/" + productId, {
        method: "DELETE"
    });

    if(!response.ok){
        throw new Error("Something went wrong");
    }

    return response;
}

export async function addProduct(newProduct){
    console.log(JSON.stringify(newProduct));
    const response = await fetch(API_BASE_URL_PRODUCTS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    });
    if(!response.ok){
        throw new Error("Something went wrong");
    }

    const product = await response.json();

    return product;
}

function updateProduct(){

}

// credentials {email, password}

export async function login(credentials){
    const response = await fetch(API_BASE_URL_USERS);

    if(!response.ok){
        throw new Error("Something went wrong!");
    }

    const usersData = await response.json();

    for(let user of usersData){
        if(credentials.email === user.email && credentials.password === user.password){
            return user;
        }
    }

    return false;
}

export async function postProduct(newProduct){
    
}

// export async function login(credentials) {
//     const response = await fetch(API_BASE_URL_USERS, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
        
//     });
//     console.log(JSON.stringify(credentials));
//     if (!response.ok) {
//         throw new Error("Something went wrong!");
//     }
    
//     const user = await response.json();

//     return user;
// }
