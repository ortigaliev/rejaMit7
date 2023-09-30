/* console.log("Jack Ma maslahatlari");
const list =[
  "yaxshi talaba bo'lin", //0-20
  "tugri boshliq tanlasng va ko'proq xato qiling", //20-30
  "uzingiz uchun ishlashni boshlang",//30-40
  "uzingiz kuchli bo'lgan ishlarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yo'q", //60-
]

function maslahatBering(a, callback){
    if(typeof a !== 'number') callback ("inser a number", null);
    else if (a <=20 ) callback(null, list[0]);
    else if (a > 20 &&  a<= 30) callback (null, list[1])
    else if (a > 30 &&  a<= 40) callback (null, list[2])
    else if (a > 40 &&  a<= 50) callback (null, list[3])
    else if (a > 50 &&  a<= 60) callback (null, list[4])
    else {
      setTimeout(function () {
        callback(null, list[5]);
       }, 5000);

}
}

console.log("Passed here: 0");

maslahatBering (65, (err, data) => {
    if (err) console.log("Error ", err);
    else{
      console.log("jacvob:", data)
    }

});
console.log("passed here 1"); */