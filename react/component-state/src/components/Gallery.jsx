import styles from "../assets/styles/Gallery.module.css";

import { DATA_PRODUCTS } from "../data/data";

import { useState } from "react";

export function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const isLastProduct = selectedIndex == DATA_PRODUCTS.length - 1;
    const isFirstProduct = selectedIndex == 0;

    function handleNext(e) {
        //selectedIndex bir arttır, rerender tetikle
        if (isLastProduct) return;
        setSelectedIndex(selectedIndex + 1);
    }

    function handlePrev(e){
        //selectedIndex bir azalt, rerender tetikle
        setSelectedIndex( selectedIndex - 1 );
    }

    return (
        <div className={styles.Gallery}>
              <button  disabled={ isFirstProduct } type="button" onClick={handlePrev}>Önceki ürün</button>
            <button disabled={isLastProduct} type="button" onClick={handleNext}>Sonraki ürün</button>
          
            <h2> {DATA_PRODUCTS[selectedIndex].title} </h2>
            <p>{DATA_PRODUCTS[selectedIndex].excerpt}</p>
        </div>
    )
}