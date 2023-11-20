import Logo from "./components/Logo";
import "./assets/styles/reset.css";
import "./assets/styles/App.css";


import { Page01, Page02, Page03 } from "./pages";


export function App(){
    return (
    <>
      <header>
        <Logo/>
      </header>
      <main>
       
        <Page01/>

        <Page02/>

        <Page03/>

      </main>
      <footer>F</footer>
    </>
    );
}