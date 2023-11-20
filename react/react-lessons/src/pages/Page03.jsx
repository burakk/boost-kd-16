export function Page03(){
    return(
        <section>
            <h1>Bir komponente özellikler paslamak, passing props to a component</h1>
            <MyButton size="lg"/>
           


            <MyButton size="sm"></MyButton>
          
            <MyButton size="lg" color="red"/>
            <MyButton size="lg"/>
            <MyButton size="lg" color="red"/>
            <MyButton size="lg"/>
            <MyButton size="lg"/>


            <MyAdvancedButton  >
                
                Buton 2

            </MyAdvancedButton>

          


            <MyAdvancedButton >
                Buton 2
            </MyAdvancedButton>


            <MyCard theme="dark" borderColor="green">
                <h1>Hp laptop</h1>
            </MyCard>
          
            <MyCard theme="dark" borderColor="orange">
                <h1>Apple laptop </h1>
            </MyCard>

            <Player nowPlaying="Test"/>
        </section>
    )
}




function MyButton(props){
    console.log(props);
    const size = props.size;
    const color = props.color;
    return <button type="button">Hello {size} {color}</button>
}


function MyAdvancedButton(props){
    console.log(props, "***");
    const children = props.children;
   
    return <button type="button">{children}</button>
}




function MyCard(props){
    const theme = props.theme;
    const children = props.children;
    const borderColor = props.borderColor;
    const style = { border:"2px solid orange", padding:"24px", maxWidth:"200px", borderColor:borderColor }
    return <div className={theme} style={ style }> {children }</div>
}



//<MyCard theme="dark" options={[1, 2, 3]}><h1>Başlık</h1></MyCard>


//{ options:[1,2,3], theme:"dark", children:<h1>Başlık</h1> };

//player component  - içinde stop ve play butonları olsun, şu anda oynatılıyor,   Şu anda oynatılan parça bilgisi prop olarak verilebilsin...


/*

function Player(props){
    const playBtn = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>;

    const stopBtn = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>;

    const nowPlaying = props.nowPlaying;


    return <div>
        {playBtn}
       {stopBtn}
       {nowPlaying}
    </div>
}

*/


function Player(props){
     
    const playerStyles= { border:"2px solid white", padding:"24px" } ;
    return (
        <div style={  playerStyles  }>
            <h3 >Şu anda çalan şarkı {  props.nowPlaying  }</h3>

            <nav>
                <button type="button">Oynat</button>
                <button type="button">Duraklat</button>
            </nav>
        </div>
    )
}