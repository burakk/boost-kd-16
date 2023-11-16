const user = {
  id: 0,
  alias: "dark knight",
  city: "Ankara",
  hasPet: false,
};

//accessing via dot notation
const userId = user.id;
const userAlias = user.alias;
const userCity = user.city;

//accessing via square notation

const userIdSquare = user["id"];
const userAliasSquare = user["alias"];
const userCitySquare = user["city"];

/* object destructuring */

const { alias, id, city } = user;

console.log(alias, id, city);

/* if key not exists ( key objede yoksa ) */
const { userKey } = user;
console.log(userKey);

/*  default value */
const { themePreference = "dark" } = user;

console.log(themePreference); //"dark"

/* get key with a different name ( başka bir isimle key değerini almak ) */

const { hasPet: userHasPet = true } = user;

console.log(userHasPet);

/* rest operator */
const product = { productId: 3, title: "mouse", inStock: false };

const { productId, ...rest } = product;

console.log(rest);

/*  ---- Assigning ----  */
const settings = {
  theme: "dark",
  fontFamily: "Times New Roman",
  fontSize: "16px",
};

settings.theme = "light";
settings.initialScale = "100%";

settings["fontSize"] = "18px";
settings["initialScale"] = "200%";

/* spread operator */
const settingsExtended = { ...settings, maxScale: "100%", minScale: "100%" };

console.log(settingsExtended);

// overwriting key values via spread operator
const elObj = { tagName: "p", tagContent: "Lorem ipsum" };

const newElObj = { ...elObj, tagContent: "Deneme deneme" };

console.log(newElObj);


/* using destructuring inside function parameter paranthesis (function parametre parantezinde ) destructuring yapmak */
function component({size, color, theme, users, children}){
  
    console.log(
    color,
     size,
      theme,
       users,
       children,
    )
    
  }

  component( {size:"lg", color:"red", theme:"dark", users:[1,314], children:"<p><p>"} );


  function component2(componentProperties){
  
    console.log(
    componentProperties.color,
      componentProperties.size,
       componentProperties.theme,
       componentProperties.users,
       componentProperties.children,
    )
    
  }
  