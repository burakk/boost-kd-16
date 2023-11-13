/* conditional statements */
const age = 19;

if (true) {
  //statement1;
  console.log("Her zaman çıktı verir.");
}

age >= 18;

if (age >= 18) {
  console.log("User allowed");
} else {
  console.log("User restricted");
}

let weather = "rainy";

if (weather == "rainy") {
  console.log("Yanına, şemsiye almayı unutma!");
} else if (weather == "snowy") {
  console.log("Atkını, bereni takmalısın!!!");
} else if (weather == "sunny") {
  console.log("Şapka ?");
} else {
  console.log("Ne giyeceğine sen karar ver!!!");
}

// &&, ||, !

// not ( ! ) usage
const userHasPet = true;

if (userHasPet == false) {
  console.log("Yavru köpek bakımı postu gönderme...");
}
//"!userHasPet" resolves to false
if (!userHasPet) {
  console.log("Yavru hayvan edinmek size iyi gelebilir postu gönder...");
}

/* switch case */

let myMood = "Karışık";

switch (myMood) {
  case "Karışık":
    console.log("Gri bir gün galiba...");
    break;
  case "Mutlu":
    console.log("Turuncu bir gün galiba...");
    break;
  case "Kaygılı":
    console.log("Sarı bir gün galiba...");
    break;
  default:
    console.log("Bu ruh hali bir renk ile ilişkilendirilmemiş...");
}

let id = 0;

switch (id) {
  case 0: {
    let count = 0;
    console.log("x");
    break;
  }
  case 1: {
    let count = 1;
    console.log("y");
    break;
  }
  case 2: {
    let count = 2;
    console.log("z");
    break;
  }
  default:
    console.log("bilinmiyor");
}


//ternary operator ( üçlü operatör )

const userAge = 14;

let isUserAllowedMsg;


if( userAge >= 14){
  isUserAllowedMsg = "Merhaba sayın kullanıcı.";
}else{
  isUserAllowedMsg = "Üzgünüz, giriş hakkınız yok.";
}



isUserAllowedMsg = userAge >= 14 ? "Merhaba sayın kullanıcı." : "Üzgünüz, giriş hakkınız yok.";




