const boxEl = document.getElementById("the-box");


//handlerFunctions

//Events : Html dökümanın yüklenmesi, görselin yüklenmesi, görselin yüklenemesi, kullanıncının mouse klik eylemi, Kullanıcının mouse over eylemi


//User Events : kullanıncının mouse klik eylemi, Kullanıcının mouse over eylemi

//trigger


//EventListeners


boxEl.addEventListener("click", handleClick);

function handleClick(e){
    console.log(e);
    alert("Merhaba ben pembe kutu!!!")
}


boxEl.addEventListener( "mousemove", handleMouseMove );

function handleMouseMove(e){

    console.log("moving", e);
}









