const API_BASE = "https://638a06e04eccb986e8a1804b.mockapi.io";


/* asenkron fonksiyonlar içerisinde await keywordu kullanarak kod satırlarını bekletmek mümkün
asenkron fonksiyonlar promise döndüren fonksiyonlardır, then ve catch ile birlikte kullanılabilirler.
*/
async function getAllArticles(){

        const response = await fetch(`${API_BASE}/articles`);

        if(!response.ok){
            throw new Error("Smt went wrong!!!");
        }
        
        const data = await response.json();

        
        return data;

}


function createArticlesComponent(){
    getAllArticles()
    .then( (data)=>{  console.log(data)} )
    .catch( (err)=>{ console.log(err)})
}


createArticlesComponent();