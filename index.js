' use strict '

// contextga o'zimiz qiymat berishimiz mumkin.Bu call,apply va bind metodlari metodlari orqali qilinadi

function logger(speed){
    console.log(
        this
    );
    console.log(`My car is ${this.name}, color is${this.color}.Max speed is ${speed}`);
}
const car = {
    name:'forsche',
    color:'blue',
}

//***************--- call apply ------------******************
// logger.call(car);
// logger.apply(car);

// call va apply farqi
// call fnksiya argumntiga qiymat berishda [] qavssiz qo'yiladi
logger.call(car,360);

// applyda argumntga qiymat berishda qavs bilan qo'llaniladi
logger.apply(car,[360]);

// logger()  --- bu xatolik yoki window obe'ktini qaytarishi mumkin agar call,apply va bind metodlari tepada foydalanilsa

// ***************------- bind -----------**************
// bind metodi mavjud funksiyani yangi funksiyaga o'zgartiradi mavjud funksiuyaning argumentqiymatlarini o'zgartirish uchun
// function calc(number){
//     return this * number //  ayni damda this  undefinedga teng
// }

// const multiple2 = calc.bind(1); // Mavjud calc funksiyasini yangi multiple2 o'zgaruvchili funksiyaga qiymat o'zgartirish bilan biga o'ziga o'zlashtiryapti
// // bind(1) -- bind ichida 1 soni bu calc dagi kontext thisga beriladigan qiymati
// console.log(multiple2(4));
// console.log(multiple2(3));
// console.log(multiple2(40));


/// ************ context bilan dom elemnt yordamida ishlash ********

// const btn = document.querySelector('button');

// // ********** Agar addEventlistenerdagi funksiyani nayza funksiyasiga qo'yib ishlatsak,
// //  context.this ishlamaydi chunki u tepaga ya'ni global window ob'ektiga qaram bo'ladi
// btn.addEventListener('click',function(){
//     this.style.color= 'red';
//     this.style.width = '400px';
//     console.log(this);
// })

// const obj = {
//     x:15,
//     y:10,
//     sum:function(){
//         const logger = ()=>{ // nayza funksiyasi har doim o'zidan tepadaga funksiyaga osiladi.Uni o'zining shaxsiy contexti yo'q
//             console.log(this);
//             console.log(this.x);
//             console.log(this.y);
//         }

//         logger();
//     },
// };
// obj.sum();

// const calcs = (a)=>{
//     return a+10;
// }

// Purify:
const calcs = (a)=> a+10;

console.log(calcs(2));

