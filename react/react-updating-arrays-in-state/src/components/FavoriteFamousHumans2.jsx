import { useState } from "react";

const DATA_BELOVED_ONES2 = [
    { id: 5, name: "Spinoza" },
    { id: 1, name: "Newton" },
    { id: 2, name: "Mariah Carey" },
    { id: 3, name: "Prince" },
    { id: 4, name: "Mr. Bean" },
];

export function FavoriteFamousHumans2() {
    const [famousList, setFamousList] = useState(DATA_BELOVED_ONES2);
    const [famousName, setFamousName] = useState("");

    function handleChange(e) {
        const newValue = e.target.value;
        setFamousName(newValue);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        let newFamousList = [
            ...famousList,
            { id: famousList.length + 1, name: famousName },
        ];

        if (famousName.trim().length < 3) {
            alert("En az 3 karakter giriniz.");
            return;
        }

        const foundIndex = famousList.findIndex((f) => f.name === famousName);

        if (foundIndex !== -1) {
            alert("Yazdığınız isim listede bulunmakta");
            return;
        }

        setFamousList(newFamousList);
        setFamousName("");
        console.log(newFamousList);
    }

    function handleDelete(id) {
        console.log(id);

        let newFamousList = famousList.filter((f) => f.id !== id);

        setFamousList(newFamousList);
    }

    return (
        <div>
            <h2>Sevilen Ünlü İnsanlar</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="famousName"
                    value={famousName}
                    placeholder="ünlü bir isim yazınız"
                    onChange={handleChange}
                />
                <button>Listeye Ekle</button>
            </form>
            <ul>
                {famousList.map((f) => (
                    <li key={f.id}>
                        {f.name}{" "}
                        <button
                            onClick={(e) => handleDelete(f.id)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}