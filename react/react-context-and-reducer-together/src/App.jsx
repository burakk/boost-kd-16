import './App.css'
import { DATA_BASKET } from './data/data'
//entities: basket - products
import { BasketContext, BasketContextProvider } from './context/BasketContext'

import { useContext } from 'react'

function App() {


  return (
    <BasketContextProvider>
      <h1>React context ve reducer'ı beraber kullanmak</h1>


      <Basket />

      <DiscountedProducts />

      <Footer />





    </BasketContextProvider>
  )
}


function Basket() {

  const { basketData, dispatch } = useContext(BasketContext)

  return (
    <div className="Basket">
      <h2>Almış olduğunuz ürünler</h2>
      <ul>
        { /*  forwarding props via spread syntax  {id:1, title:"hp laptop", price:12000} */}
        {basketData.map(p => <ProductItem {...p} />)}
      </ul>
    </div>
  )
}

function ProductItem({ title, price, id }) {
  return (
    <li>
      <h3>{title} </h3>
      <p>{price}</p>
    </li>
  )
}


function Footer() {
  return (
    <footer id="SiteFooter">
      <Summary />
    </footer>
  )
}


function Summary() {
  const { basketData, dispatch } = useContext(BasketContext);
  const basketTotal = basketData.reduce((acc, p) => {
    return acc + p.price
  }, 0)
  return (
    <div>
      Şu ana kadar aldığınız ürün toplam fiyatı{
        basketTotal
      }
      Tl
    </div>
  )
}


function DiscountedProducts() {

  const { dispatch } = useContext(BasketContext);

  return (
    <div>
      <h2>Sepete Ekleyebileceğiniz  Promosyonlu Ürünler</h2>
      <ul>
        <li>Arçelik mutfak blender 3000 <button onClick={
          (e) => {

            const action = { type: "added", product: { id: 35, title: "Arçelik mutfak blender", price: 3000 } }
            dispatch(action)

          }

        }>Sepete Ekle</button></li>
        <li>Vestel çamaşır kurutma makinesi 17000 <button>Sepete Ekle</button></li>
      </ul>
    </div>
  )
}




export default App
