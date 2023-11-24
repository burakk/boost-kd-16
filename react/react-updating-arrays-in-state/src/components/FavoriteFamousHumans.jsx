import { useState } from "react"

const DATA_BELOVED_ONES = [
    "Spinoza",
    "Newton",
    "Mariah Carey",
    "Prince",
    "Mr. Bean",

]

export function FavoriteFamousHumans() {
    const [famousList, setFamousList] = useState(DATA_BELOVED_ONES);

    const [famousName, setFamousName] = useState("");



    //1- form submit butonuna onClick ekle
    //2- input kutusuna herhangi bir karakter yazıldığında tüm komponenti güncel değerle bilgilendir... 
    function handleChange(e) {
        //console.log(e.target.value);

        setFamousName(e.target.value);

    }

    function handleFormSubmit(e) {
        e.preventDefault();

        if (famousName.trim().length < 3) {
            alert("En az 3 karakter giriniz");
            return;
        }
        //alert("deneme");
        //famousList.push( famousName ); //!!!  
        //rerender yapamazsın//!!!  
        //mutosyondan kaçın //!!!  
        const newFamousList = [...famousList, famousName];
        setFamousList(newFamousList);
        setFamousName("");
    }

    return (
        <div>
            <h2>Sevilen Ünlü İnsanlar</h2>
            <form onSubmit={handleFormSubmit}>
                <input name="famousName" placeholder="ünlü bir isim yazınız"
                    onChange={handleChange} value={famousName} />
                <button>Listeye Ekleyin</button>
            </form>

            <ul>
                {
                    famousList.map((f) => <li key={f}>{f}</li>)
                }
            </ul>
        </div>
    )

} 