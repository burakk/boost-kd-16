import { useEffect, useState } from "react";
import { addProduct, deleteProduct, getProducts } from "../../API/API";

export function Products() {
    const [productsData, setProductsData] = useState(null);
    // const [categoryId, setCategoryId] = useState(1);
    // const [productName, setProductName] = useState("");
    // const [unitPrice, setUnitPrice] = useState(1);
    const [newProductData, setNewProductData] = useState({categoryId: "1", productName: "", unitPrice: "1" })


    useEffect(() => {
        getProducts()
            .then((data) => {
                console.log(data);
                setProductsData([...data]);
            })
            .catch((err) => {});
    }, []);

    // function handleProductNameChange(e) {
    //     setProductName(e.target.value);
    // }

    // function handleCategoryIdChange(e){
    //     setCategoryId(e.target.value);
    // }

    // function handleUnitPriceChange(e){
    //     setUnitPrice(e.target.value);
    // }

    function handleChange(e){
        setNewProductData({...newProductData, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        addProduct(newProductData)
        .then((product) => {
            console.log("ürün kaydedildi");
            setNewProductData({ categoryId: "1", productName: "", unitPrice: "1" });
            console.log(typeof(product));
            setProductsData([product, ...productsData])
        })
        .catch((err) => {
            alert(err);
        })
    }

    function handleDelete(productId){
        deleteProduct(productId)
        .then(() => {
            const filteredData = productsData.filter((product) => {
                return product.productId !== productId;
            })
            console.log("deleted");
            setProductsData(filteredData);
        })
        .catch((err) => {
            alert(err);
        })
    }

    return (
        <>
            <h1>Product Page</h1>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="productName"
                    id="productName"
                    placeholder="Enter product name"
                    value={newProductData.productName}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="categoryId"
                    id="categoryId"
                    placeholder="Enter Category ID"
                    value={newProductData.categoryId}
                    onChange={handleChange}
                    min="1"
                    max="8"
                />
                <input
                    type="number"
                    name="unitPrice"
                    id="unitPrice"
                    placeholder="Enter Unit Price"
                    value={newProductData.unitPrice}
                    onChange={handleChange}
                    min="1"
                />
                <button>Add New Product</button>
            </form>
            <ul className="productList">
                {productsData?.map((product) => {
                    return (
                        <li key={product.productId}>
                            Name: {product.productName} {product.unitPrice}
                            <button onClick={(e) => handleDelete(product.productId)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
