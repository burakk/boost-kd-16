import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import MainNav from "./components/MainNav";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";


export default function App() {
  return (
    <>
      <header>
        <Logo />
        <MainNav/>
      </header>
      <main>
        <section>
            <h1>JSX</h1>
            <h2>Jsx dosyaları içerisine html etiketleri mantğı kullanarak yazabilirsiniz. Jsx kodları tarayıcı tarafından yorumlanamaz. Js kodlarına çevrilmelidir.</h2>
            <ul>
                <li>
                    Bütün etiketleriniz kapatmalısınınz.
                    Tek parçalı etiketler de dahil.
                </li>
                <li>
                    Tek bir kök jsx elemanı döndürün.
                    Jsx etiketleri tek bir kapsayıcı içerisinde olmalı.
                </li>
                <li>
                    Neredeyse tüm attributelarını camelCase adlandırabilirsiniz.
                </li>
            </ul>
          
            <Avatar/>
        </section>
      </main>
      <footer>
        boost kd-16 2023 Kasım
      </footer>
      </>
     
    );
  
}





