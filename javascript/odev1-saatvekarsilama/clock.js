
//isim bilgisi alma:

// let username=prompt("Lütfen isminizi giriniz:");
// let myName=document.querySelector("#myName");
// myName.innerHTML = ` ${username}`;

let username = prompt("İsminizi yazınız :");
let myName = document.querySelector("#myName");
let clock = document.querySelector("#myClock");

myName.innerHTML = ` ${username}`

let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

time = ` 
${ new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
${days[new Date().getDay()]}  `


clock.innerHTML = `${time}`