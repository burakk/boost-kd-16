const products = [
    {id:15,Title:"hp laptop",stock_count:35,price:180,category:"laptop"},
    {id:18,Title:"lenovo desktop",stock_count:90,price:1800,category:"desktop pc"},
    {id:18,Title:"everest webcam",stock_count:90,price:1800,category:"camera"}
]

bringProducts("hepsi");

function bringProducts(category){
    let filteredProducts;
    if(category ==="hepsi")
    {
        filteredProducts=products;
    }
    else{
        filteredProducts = products.filter(product => product.category === category);
    }
    console.log(filteredProducts);
    const tableHtmlStr = `
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock Count</th>
            </tr>
        </thead>`+
    filteredProducts.forEach(product => {
        `<tbody>
            <tr>
                <td>'${product.id}</td>
                <td>${product.Title}</td>
                <td>${product.category}</td>
                <td>${product.price}</td>
                <td>${product.stock_count}</td>
            </tr>
        </tbody>
        `
    })+
    `</table`;
    
    
    const testing



    document.getElementById("product-table").innerHTML=tableHtmlStr;
    
}
        
        
        
