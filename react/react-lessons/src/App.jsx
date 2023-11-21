import Logo from "./components/Logo";
import "./assets/styles/reset.css";
import "./assets/styles/App.css";


import { Page01, Page02, Page03, Page04 } from "./pages";


export function App() {
  const path = "/04";
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>

        {  path == "/01" &&  <Page01 />  }
       
        {  path == "/02" &&  <Page02 />  }

        {  path == "/03" &&  <Page03 />  }

        {  path == "/04" &&  <Page04 />  }
      

        
      </main>
      <footer>F</footer>
    </>
  );
}