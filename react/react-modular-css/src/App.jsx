import { Recipes } from "./components/Recipes";
import "./assets/styles/App.css";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
export default function App() {
    console.log("I am the app");
    return (
        <>
            <h1>Hello App</h1>
            <Recipes />
            <Button>Hello We R The hopeless children of 2023</Button>
            <Card title="Ürün1" description="lorem lorem"/>
        </>);
}



