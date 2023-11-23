import Logo from "./components/Logo";
import "./assets/styles/reset.css";
import "./assets/styles/App.css";

import { Nav } from "./components/Nav";

import { Page01, Page02, Page03, Page04, Page05, Page06, Page07 } from "./pages";


export function App() {
  let path = "/03";   //01

  function changeAppPath(inPath){
      path = inPath;
      alert( "path changed to " + path);
  }

// /01, /02, /03

  return (
    <>
      <header>
        <Logo/>

       <Nav onChangePath={changeAppPath}/>
      </header>
      <main>

        {path == "/01" && <Page01 />}

        {path == "/02" && <Page02 />}

        {path == "/03" && <Page03 />}

        {path == "/04" && <Page04 />}

        {path == "/05" && <Page05 />}

        {path == "/06" && <Page06 />}

        {path == "/07" && <Page07 />}



      </main>
      <footer>F</footer>
    </>
  );
}