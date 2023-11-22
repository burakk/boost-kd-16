export function Page07() {
    return (
        <section>
            <h1>Olaylara yanıt vermek - Responding to events</h1>

            <MyButton />
            <MyButton2 />
            <AlertButton message="Bu bir mesajdır">
                Ben Alert button
            </AlertButton>

            <AlertButton message="Bu bir tehlikedir">
                Dikkat
            </AlertButton>

            <PlayButton />

            <UploadButton />

            <NavBar />

            <MyForm />
        </section>
    )
}


const MyButton = () => {
    function handleClick(e) {
        alert("Hello me!")
    }
    return (
        <button onClick={handleClick}>Hello</button>
    );

}


const MyButton2 = () => {

    return (
        <button onClick={
            (e) => { alert("Hello Button2") }
        }>Hello Button 2</button>
    );

}

/*
const AlertButton = (props)=>{
    function handleClick(e){
        alert(props.message);
    }
    return (
        <button type="button" onClick={handleClick }>
            {props.children}
        </button>
    )
}
*/

const AlertButton = (props) => {

    return (
        <button type="button" onClick={(e) => { alert(props.message) }}>
            {props.children}
        </button>
    )
}



function BaseButton({ onSmash, children }) {
    const styleOptions = {
        backgroundColor: "pink"
    }
    return (
        <button style={styleOptions} onClick={onSmash}>{children}</button>
    )
}


function PlayButton() {
    return (
        <BaseButton onSmash={() => {
            alert("Şimdi Oynatılıyor...")
        }}>Oynat</BaseButton>
    )
}

function UploadButton() {
    return (
        <BaseButton onSmash={() => {
            alert("Şimdi Yükleniyor")
        }}>Yükle</BaseButton>
    )
}


// *** Event Propagation *** 
function NavBar() {
    return (
        <nav style={{ border: "2px solid black", padding: "24px", backgroundColor: "beige" }}
            onClick={(e) => { alert("I am the nav...") }}>
            { /* 
            <button onClick={(e) => {
                e.stopPropagation();
                alert("I am the btn...");
            }

            }>Oynat</button>
            <button onClick={(e) => {
                e.stopPropagation();
                alert("I am the other btn...");
            }
            }>Durdur</button>

            */}

            <NavBarButton message="how r u?">NavBar buton 1</NavBarButton>

            <NavBarButton message="fine and u?">NavBar buton 2</NavBarButton>
        </nav>
    )
}


function NavBarButton({ children, message }) {
    return <button onClick={(e) => {
        e.stopPropagation();
        alert(message);
    }
    }>{children}</button>
}


// *** Preventing Default Behaviour ***

function MyForm() {
    return (
        <form onSubmit={(e) => { e.preventDefault(); }}>
            <input type="text" name="" id="" placeholder="Adınız" />
            <input type="text" name="" id="" placeholder="Soyadınız" />
            <button type="submit">Gönder</button>
        </form>
    )

}



function ChatBox(){
    
    //server connection not ok ( renderin sürecindeyiz. )
     
    function startServer(){
        //server connection  ok 
    }

    return (
        <div>
                chatbox
                <button onClick={ ()=>{  startServer() }  }></button>
        </div>
    )
}