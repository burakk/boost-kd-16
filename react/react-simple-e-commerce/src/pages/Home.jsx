import { useEffect, useState } from "react";
import { getProducts } from "../API/API";

export function Home() {
    const [productsData, setProductsData] = useState(null);

    useEffect(() => {
        getProducts()
            .then((data) => {
                console.log(data);
                setProductsData([...data]);
            })
            .catch((err) => {});
    }, []);

    return (
        <>
            <h1>Home Page</h1>
            <ul>
                {productsData?.map((product) => {
                    return <li key={product.productId}>Name: {product.productName} </li>;
                })}
            </ul>
        </>
    );
}
