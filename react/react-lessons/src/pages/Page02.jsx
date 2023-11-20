

export function Page02(){
    return (
        <section>
        <h1>Jsx içerisinde js expression'ları kullanmak</h1>
        <p>Süslü parantez kullan</p>
       <Circle/>
       <GreetingBox/>
       <FancyButton/>
       <Card/>
      </section>
    );
}




function Avatar(){
  const avatarSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/220px-Albert_Einstein_1947.jpg";
  
  return <img src={avatarSrc} alt="Albert Einstein"  deneme={ 3 + 5}/>
}


//Boolean literal expression
true;
3;
[]; 
3 + 5;


function Circle(){
  const Pi = 3.14;
  const r = 12;

  2 * Pi * r;
  return <div>
   Bu çemberin  {2 * Pi * r} çevresi
  </div>;
}



function GreetingBox(){

  const greet = (firstName, lastName)=>`Selamlar, ${firstName} ${lastName}`;
  const userFirstName = "Burak";
  const userLastName = "Kuyucaklı";


  return (
    <div className="greetingBox">
      <h3>Karşılama Kutusu</h3>
      <h3> {greet(userFirstName, userLastName) } </h3>
      <p>Ne kadar da yağmurlu ve renkli bir gün...</p>
    </div>
  );

}



function FancyButton(){
  const btnText = "Ben çok renkli, güzel bir düğmeyim";
  const useAsClassName = "dada";
  
  return <button className={useAsClassName} id={Math.random()}>{btnText}</button>;
}


function Card(){
  const options = {
    backgroundColor:"red",
    color:"white",
    fontSize:"24px",
  }

  return (
    <div className="Card" style={ options }>
      <h1 style={ { border:"4px dotted black" }  }> Ben Card Komponentiyim </h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, optio!</p>
    </div>
  )
}


function DropDownMenu(){
  const options = {
    id:2,
    theme:{ uiMode:"dark" },
    length:22,
  }
  return (
    <ul className={ options.theme.uiMode }>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
    </ul>
  )
}






