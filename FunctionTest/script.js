//------------Function-----------------
// ###Başlanğıc Səviyyə
// 1. Funksiya yaradın və konsola "Salam Dünya" yazdırın.
function ekranaCixart (){
    console.log("Hello World");
}
ekranaCixart();

// 2. Bir ədədin kvadratını qaytaran funksiya yazın.
function kvadrati(num){
    return Math.pow(num,2);
}
console.log(kvadrati(5));

//3. Bir sətirin uzunluğunu qaytaran funksiya yazın.
const names = ["aydan", "fidan"];
const uzunlugu = () =>{
    return names.length;
}
console.log(uzunlugu(names));

// 4. İki ədədin cəmini hesablayan funksiya yaradın.
const cem = (num1,num2) => {
    const sum = num1+num2;
    return sum;
}
console.log(cem(3,4));

// 5. Bir sətirin böyük hərflərə çevrilməsi üçün funksiya yazın.
function buyukHerflereCevir(text) {
    return text.toUpperCase();
}
const metin = "HEllo, World!";
const buyukMetin = buyukHerflereCevir(metin);
console.log(buyukMetin); 


//6. Bir ədədin tək və ya cüt olduğunu yoxlayan funksiya yaradın.
const oddOrEven = (numbers)=> {
    if(numbers%2===0){
        console.log("cutdur");
    }
    else{
        console.log("tekdir");
    }
}
oddOrEven(5);
oddOrEven(2);

//7. Bir massivin uzunluğunu qaytaran funksiya yazın.
const adlar = ["aydan", "gultekin", "bagdagul"];
const uzunluguTap = ()=> {
    return adlar.length;
}
console.log(uzunluguTap(adlar));

//8. Verilmiş sətirdə müəyyən bir simvolun olub-olmadığını yoxlayan funksiya  yazın.
const sentence = "Aydan , FrontEnd ! Developerdir";
function yoxla(){
    if(sentence.includes("!")){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
yoxla(sentence);

//9. Bir ədədin müsbət, mənfi və ya sıfır olduğunu yoxlayan funksiya yaradın.
function musbestTap (eded){
    if(eded>0){
        console.log("musbetdir");
    }
    else if(eded<0){
        console.log("menfidir");
    }
    else{
        console.log("0-dir");
    }
}
musbestTap(0);
musbestTap(-20);
musbestTap(30);

//10-iki-setirin eyni olub olmadigini yoxlayan funksiya yaz
function ikiSetirEynidir(setir1, setir2) {
    return setir1 === setir2;
}
let ad1 = "Aydan";
let ad2 = "Aydan";
let ad3= "Leyla";
let ad5 = "Omar";
let ad7= "Leyla";

console.log(ikiSetirEynidir(ad1, ad2));
console.log(ikiSetirEynidir(ad2, ad5));
console.log(ikiSetirEynidir(ad5, ad1));
console.log(ikiSetirEynidir(ad3, ad7));

// ###Orta Səviyyə

// 11. Bir sətirin əksini qaytaran funksiya yazın.
// let cumle2 = "Salam, dünya!";
// function setriTersineCevir(text) {
//     return text.reverse();
// }
// let tersMetin = setriTersineCevir(cumle2);
// console.log(tersMetin); 


//12. Massivin ən böyük elementini qaytaran funksiya yazın.
const enBoyuk = [2,3,4,5,6,7,9];
const enBoyukTap = (arr) => {
    const max = Math.max(arr);
    return max;
}
console.log(enBoyukTap(enBoyuk));

// 13. Bir massivdəki bütün ədədlərin cəmini qaytaran funksiya yaradın.
const ededler = [1,2,3,4,5,6,7,8];

// 14. Bir sətirdəki saitlərin sayını qaytaran funksiya yazın.

//15. Bir massivdə müəyyən bir ədədin olub-olmadığını yoxlayan funksiya  yaradın.
// const number = [2,3,4,5,6,7];
// function olubOlmadigi (num){
//     if(number === yoxlaBax.includes(num)){
//         console.log("var");
//     }
//     else{
//         console.log("yoxdu");
//     }
// }
// olubOlmadigi(5,7);

//16. Bir massivdə təkrarlanan elementləri tapıb qaytaran funksiya yazın.

// 17. Tarixi gün/ay/il formatında qaytaran funksiya yaradın.

//18. Bir sətirdəki boşluqları çıxaran funksiya yazın.

//19. Bir massivdəki ən kiçik elementin indeksini qaytaran funksiya yaradın.

//20. Bir sətirdəki sözlərin sayını qaytaran funksiya yazın.

// String və onun metodları
// 1. Verilmiş bir sətirin uzunluğunu qaytaran funksiya yazın.
const isimler = ["Aydan", "Gulcan", "Nargis"];
function adlariYoxla (){
  const adlar =  isimler.length;
  console.log(adlar);
}
adlariYoxla(isimler);

// 2. Verilmiş bir sətiri böyük hərflərə çevirən funksiya yazın.
let arr1 = [0,1, 5, 3, 9, 2];
function enBoyukElement(array) {
    let max = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]; 
        }
    }
    return max; 
}
console.log(enBoyukElement(arr1)); 

//3. Verilmiş bir sətiri kiçik hərflərə çevirən funksiya yazın.
let arr2 = [0,1, 5, 3, 9, 2];
function enKicikElement(array) {
    let min = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]; 
        }
    }
    return min; 
}
console.log(enKicikElement(arr2)); 

// 4. Verilmiş bir sətiri tərsinə çevirən funksiya yazın.
const tersArray =(names)=>{
    const isimler = names.reverse();
    return isimler;
}
console.log(tersArray(["Aydan", "Gunay", "Nargiz"]));
console.log(tersArray([1,2,3,4,5,6,7,8,9]));

//5. Verilmiş bir sətirdəki ilk simvolu qaytaran funksiya yazın.
const firstSimvol = (arr) => {
    const ilkSimvol = arr[0];
    return ilkSimvol;
}
console.log(firstSimvol([8,2,3,4]));

//6. Verilmiş bir sətiri boşluqlara görə bölüb massivə çevirən funksiya yazın.

//7. Verilmiş bir sətirdə müəyyən bir alt sətirin olub-olmadığını yoxlayan funksiya yazın.

//8. Verilmiş bir sətirin müəyyən bir simvollu başlanğıcla başlayıb-başlamadığını yoxlayan funksiya yazın.

//9. Verilmiş bir sətirin müəyyən bir simvollu sonla bitib-bitmədiyini yoxlayan funksiya yazın.

//10. Verilmiş bir sətirin başlanğıcındakı və sonundakı boşluqları çıxaran funksiya yazın

//Obyekt

// 1. Boş bir obyekt yaradın və bir açar/dəyər cütü əlavə edin.
const obj = {
    ad: "Aydan",
    soyad: "Nur",
    age: 20
}
console.log(obj);

//2. Verilmiş bir obyektin müəyyən bir açarını qaytaran funksiya yazın.
function qaytaranKey(key, value) {
    return key[value];
}
const obj2 = {
    name: "Aydan",
    age: 20,
    city: "New York"
};

console.log(qaytaranKey(obj2, "name"));
console.log(qaytaranKey(obj2, "age"));
console.log(qaytaranKey(obj2, "city"));

//3.Verilmiş bir obyektin müəyyən bir açarını silən funksiya yazın.


//4.Obyektdəki bütün açarları qaytaran funksiya yazın.
const aydanHaqqinda = {
    name: "Aydan",
    age: 20,
    city: "New York"
};
function butunKey (obj){
    return Object.keys(obj);
}
const keys = butunKey(aydanHaqqinda);
console.log(keys);


//5. Obyektdəki bütün dəyərləri qaytaran funksiya yazın.
const deyerler = {
    adi: "Elmeddin",
    soyadi: "Namazova",
    yashi:59
}
function deyeriGoster (obj){
    return Object.values(obj);
}
const values = deyeriGoster(deyerler);
console.log(values);

//6.Verilmiş bir açarın obyektdə olub-olmadığını yoxlayan funksiya yazın.
const xHaqqinda = {
    adi: "Elmeddin",
    soyadi: "Namazova",
    yashi:59
};
function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}
console.log(hasKey(xHaqqinda, "adi")); 
console.log(hasKey(xHaqqinda, "ishi"));

//ishlemedi(value)
const yHaqqinda = {
    adi: "Elmeddin",
    soyadi: "Namazova",
    yashi:59
};
function hasValue(obj, value) {
    return obj.hasOwnProperty(value);
}
console.log(hasValue(yHaqqinda, "Namazova")); 
console.log(hasValue(yHaqqinda, "ishi"));

//7. İki obyektin birləşdirilməsini həyata keçirən funksiya yazın.
// const zHaqqinda = {
//     adi: "Seymur",
//     soyadi: "Namazova",
//     yashi:59
// }

// const aHaqqinda = {
//     adi: "Ayshen",
//     soyadi: "Kerimov",
//     yashi:59
// }

// function birleshdir(zHaqqinda, aHaqqinda) {
//     return zHaqqinda.Array.prototype.concat(aHaqqinda);
// }
// const birleshmish = birleshdir(zHaqqinda, aHaqqinda);
// console.log(birleshmish); 

//8. Obyektdəki bütün açar/dəyər cütlərini massiv şəklində qaytaran funksiya yazın.

const nHaqqinda = {
    adi: "Elmeddin",
    soyadi: "Namazova",
    yashi:59
};
function objectiCevir(obj) {
    return Object.entries(obj); //array-e cevirmek uchun istf edilir
}

const entries = objectiCevir(nHaqqinda);
console.log(entries);

// 9. Obyektdəki dəyərləri artıran və ya azaldan funksiya yazın (əgər dəyər  ədəddirsə).

//10. Verilmiş bir obyektin dərin kopyasını yaradan funksiya yazın

// 11. Verilmiş bir obyektin dəyərlərinin cəmini qaytaran funksiya yazın (əgər  dəyərlər ədəddirsə).

//12.Obyektdəki müəyyən bir açarın dəyərini dəyişən funksiya yazın.
let mHaqqinda = {
    adi: "Aysun",
    soyadi: "Laleli",
    yashi:59
};
function deyishdirKey(obj, key, yeni) {
    if (obj.hasOwnProperty(key)) {
        obj[key] = yeni;
        return true;
    } else {
        return false;
    }
}
deyishdirKey(mHaqqinda, "yashi", 20);
console.log('Sonra:', mHaqqinda);

//13.Obyektdəki bütün dəyərləri böyük hərflərə çevirən funksiya yazın.

// let sHaqqinda = {
//     adi: "Aysun",
//     soyadi: "Laleli",
//     yashi:59
// };
// function boyukHerf(obj, key, yeni) {
//     if (obj.toUpperCase(key)) {
//         obj[key] = yeni;
//         return true;
//     } else {
//         return false;
//     }
// }
// boyukHerf(sHaqqinda, "yashi", 20);
// console.log('Sonra:', sHaqqinda);

//14.Verilmiş bir obyektin uzunluğunu (açarların sayını) qaytaran funksiya  yazın.

const zarinaHaqqinda = {
    adi: "Zarina",
    soyadi: "Nuriyeva",
    yashi:21
};
function uzunluguTapildi(obj) {
    return Object.keys(obj).length;
}
const length = uzunluguTapildi(zarinaHaqqinda);
console.log(length);

//15. Verilmiş bir obyektin dəyərlərini massivin elementlərinə çevirən funksiya  yazın.
const elshadHaqqinda = {
    adi: "Elshad",
    soyadi: "Nuriyev",
    yashi:50
};
function arrayeCevir(obj) {
     return Object.values(obj);
}
const cevrilmish = arrayeCevir(elshadHaqqinda);
console.log(cevrilmish);

//16. Verilmiş bir obyektin bütün açarlarını böyük hərflərə çevirən funksiya  yazın.


 //17. Obyektdəki bütün açar/dəyər cütlərini konsola yazdıran funksiya yazın.
 //18. Obyektdə müəyyən bir açarın dəyərini artıran funksiya yazın (əgər dəyər  ədəddirsə).

 //19. Verilmiş bir obyektin bütün açarlarını alfabetik sıraya görə sıralayan  funksiya yazın.

 //20. İki obyektin eyni olub-olmadığını yoxlayan dərin müqayisə funksiyası  yazın.
