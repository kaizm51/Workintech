/* 
1. Bir dizi içerisindeki çift sayıları bulmak için filter metodunu kullanın.

Örnek Dizi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

2. Bir dizi içerisindeki sayıların karesini almak için map metodunu kullanın.

Örnek Dizi: [2, 3, 4, 5, 6]
*/
/*let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let ar2 = ar.filter((a)=> a%2 === 0)
console.log(ar2)*/

/*let ar =  [2, 3, 4, 5, 6]
let ar2 = ar.map((num)=> num**2)
console.log(ar2)*/

/* 
1. Bir dizi içerisindeki negatif sayıları filtreleyin.

Örnek Dizi: [-10, -5, 0, 5, 10, 15, -20]*/
/*let ar = [-10, -5, 0, 5, 10, 15, -20]
let ar2 = ar.filter((num)=> num<0)
console.log(ar2)*/

/*2. Bir dizideki her kelimenin ilk harfini büyük yapmak için map metodunu kullanın.
Örnek Dizi: ['apple', 'banana', 'cherry', 'date']*/
/*let fruits = ['apple', 'banana', 'cherry', 'date']
let fruits2 = fruits.map((a)=> a.slice(0,1).toUpperCase()+a.slice(1))
console.log(fruits2)*/

/* 
1. Bir dizi içerisindeki belirli bir karaktere sahip kelimeleri filtreleyin. (Belirli Karakter: 'a')

Örnek Dizi: ['apple', 'banana', 'cherry', 'date', 'elderberry'] */

/*let meyveler = ['apple', 'banana', 'cherry', 'date', 'elderberry'] 
let meyveler2 = meyveler.filter((f)=> f.includes(`a`) )
console.log(meyveler2)*/

/*2. Bir dizideki sayıların her birine 2 eklemek için map metodunu kullanın.

Örnek Dizi: [1, 2, 3, 4, 5]
*/
/*let nums = [1, 2, 3, 4, 5]
nums2 = nums.map((num)=> num+2)
console.log(nums2)*/


/* 
1. Bir dizideki isimlerin sadece belirli bir uzunluğa sahip olanlarını filtreleyin. (Uzunluk: 4)
Örnek Dizi: ['John', 'Paul', 'George', 'Ringo']*/

/*let names = ['John', 'Paul', 'George', 'Ringo']
let fours = names.filter((name)=>name.length === 4)
console.log(fours)*/

/*2. Bir dizideki her ismin başına "Mr." veya "Mrs." eklemek için map metodunu kullanın.
Örnek Dizi: ['John', 'Paul', 'George', 'Ringo']
*/

/*let names = ['John', 'Paul', 'George', 'Ringo']
let names2 = names.map((name)=> name = `Mr ${name}`)
console.log(names2)*/

/* 
1. Bir dizi içerisindeki sayılardan sadece 10'dan büyük olanları filtreleyin.
Örnek Dizi: [4, 11, 18, 3, 27, 6, 19]*/

/*let nums = [4, 11, 18, 3, 27, 6, 19]
nums2 = nums.filter((num)=>num>10)
console.log(nums2)*/

/*2. Bir dizideki her kelimenin tersini almak için map metodunu kullanın.
Örnek Dizi: ['apple', 'banana', 'cherry', 'date']
*/

/*let fruits = ['apple', 'banana', 'cherry', 'date']
let fruits2 = fruits.map((a)=> a.split(``).reverse().join(``))
console.log(fruits2)*/

/* 
1. Bir dizi içerisindeki tek sayıları bulmak için filter metodunu kullanın.

Örnek Dizi: [12, 25, 37, 42, 53, 66, 77, 88, 99]
let ar = [12, 25, 37, 42, 53, 66, 77, 88, 99];
let ar2 = ar.filter((num)=> num%2 == 1);
console.log(ar2)
2. Bir dizideki her sayıyı yarıya bölmek için map metodunu kullanın.

Örnek Dizi: [4, 8, 12, 16, 20]
*//*
let ar = [4, 8, 12, 16, 20]
let ar2 = ar.map((num)=>num/2)
console.log(ar2)*/

/* 
1. Bir dizideki pozitif sayıları filtreleyin.

Örnek Dizi: [-3, 5, -7, 9, -11, 13, -15, 17]*/

/*let ar = [-3, 5, -7, 9, -11, 13, -15, 17]
let ar2 = ar.filter((num)=> num>0)
console.log(ar2)*/


/*2. Bir dizideki her kelimenin uzunluğunu döndüren bir map fonksiyonu yazın.

Örnek Dizi: ['apple', 'banana', 'cherry', 'date']
*/
/*let meyveler = ['apple', 'banana', 'cherry', 'date']
let lentghs = meyveler.map((meyve)=>meyve.length)
console.log(lentghs)*/

/* 
1. Bir dizideki kelimelerden sadece belirli bir uzunluğa sahip olanlarını filtreleyin. (Uzunluk: 3)
Örnek Dizi: ['cat', 'dog', 'elephant', 'rat', 'bat'] */

/*let animals = ['cat', 'dog', 'elephant', 'rat', 'bat']
let animals2 = animals.filter((animal)=>animal.length === 3)
console.log(animals2)*/


/*2. Bir dizideki her sayıyı mutlak değere çevirmek için map metodunu kullanın.

Örnek Dizi: [-1, -2, -3, -4, -5]
*/

/*let nums = [-1, -2, -3, -4, -5]
let absnums = nums.map((num)=>Math.abs(num))
console.log(absnums)*/


/* 
1. Bir dizideki öğrencilerin sadece başarılı olanlarını filtreleyin (notu 50'den yüksek olanları).
Örnek Dizi: [45, 67, 89, 23, 78, 56, 40]*/

/*let nums = [45, 67, 89, 23, 78, 56, 40]
let successed = nums.filter((num)=>num>=50)
console.log(successed)*/

/*2. Bir dizideki her öğrencinin notunu 10 puan artırmak için map metodunu kullanın.
Örnek Dizi: [45, 55, 65, 75, 85]
*/

/*let dizi = [45, 55, 65, 75, 85]
let dizi2 = dizi.map((num)=>num+10)
console.log(dizi2)*/

/* 
1. Bir diziyi küçükten büyüğe sıralamak için sort metodunu kullanın.
Örnek Dizi: [3, 1, 4, 1, 5, 9, 2, 6, 5]*/

/*let dizi = [3, 1, 4, 1, 5, 9, 2, 6, 5]
let dizi2 = dizi.sort((a,b)=>a-b)
console.log(dizi2)*/

/*Bir diziyi alfabetik olarak sıralamak için sort metodunu kullanın.
Örnek Dizi: ['banana', 'apple', 'cherry', 'date']
*/
/*let dizi = ['banana', 'apple', 'cherry', 'date']
let dizi2 = dizi.sort()
console.log(dizi2)*/

/* 
1. Bir dizideki isimleri uzunluklarına göre sıralamak için sort metodunu kullanın.
Örnek Dizi: ['John', 'Paul', 'George', 'Ringo']*/

/*let dizi = ['John', 'Paul', 'George', 'Ringo']
let dizi2  = dizi.sort((a,b)=>b.length-a.length )
console.log(dizi2)*/



/*2. Bir dizideki sayıları büyükten küçüğe sıralamak için sort metodunu kullanın.
Örnek Dizi: [3, 1, 4, 1, 5, 9, 2, 6, 5]
*/

/*let dizi = [3, 1, 4, 1, 5, 9, 2, 6, 5]
let dizi2 = dizi.sort((a,b)=>b-a);
console.log(dizi2)*/

/* 
1. Bir dizideki kelimeleri uzunluklarına göre sıralamak için sort metodunu kullanın.
Örnek Dizi: ['banana', 'apple', 'cherry', 'date']*/

/*let fruits =  ['banana', 'apple', 'cherry', 'date']
let fruits2 = fruits.sort((a,b)=>a.length-b.length)
console.log(fruits2)*/


/*2. Bir dizideki tarihleri sıralamak için sort metodunu kullanın (en eski tarihten en yeni tarihe).
Örnek Dizi: ['2024-07-11', '2023-05-20', '2022-08-15', '2021-12-01']
*/

/*let dates = ['2024-07-11', '2023-05-20', '2022-08-15', '2021-12-01']
let newdates = dates.sort((a,b)=>new Date(a)- new Date(b))
console.log(newdates)*/


/* 
1. Bir dizideki sayıları mutlak değere göre sıralamak için sort metodunu kullanın.
Örnek Dizi: [-10, -5, 0, 5, 10, -3]*/

/*let numbers = [-10, -5, 0, 5, 10, -3]
let abnums = numbers.sort((a,b)=>Math.abs(b)-Math.abs(a))
console.log(abnums)*/

/*2. Bir dizideki sayıların toplamını bulmak için reduce metodunu kullanın.
Örnek Dizi: [1, 2, 3, 4, 5]
*/

/*let nums = [1,2,3,4,5]
let total = nums.reduce((a,b)=>a+b)
console.log(total)*/

/* 
1. Bir dizideki sayıların çarpımını bulmak için reduce metodunu kullanın.
Örnek Dizi: [1, 2, 3, 4, 5]*/

/*let nums = [1, 2, 3, 4, 5]
let nums2 = nums.reduce((a,b)=>a*b)
console.log(nums2)*/


/*2. Bir dizideki kelimeleri birleştirerek tek bir cümle oluşturmak için reduce metodunu kullanın.
Örnek Dizi: ['The', 'quick', 'brown', 'fox']
*/
/*let words = ['The', 'quick', 'brown', 'fox']
let sentence = words.reduce(()=> words.join(` `))
console.log(sentence)*/

/* 
1. Bir dizideki en büyük sayıyı bulmak için reduce metodunu kullanın.
Örnek Dizi: [3, 5, 7, 2, 8, 6]*/

/*let nums = [3, 5, 7, 2, 8, 6]
let nums1 = nums.reduce((a,b)=>a>b? a : b)
console.log(nums1)*/


/*2 Bir dizideki en küçük sayıyı bulmak için reduce metodunu kullanın.
Örnek Dizi: [3, 5, 7, 2, 8, 6]
*/

/*let nums = [3, 5, 7, 2, 8, 6]
let small = nums.reduce((a,b)=>a<b? a : b)
console.log(small)*/

/* 
1. Bir dizideki elemanların frekansını bulmak için reduce metodunu kullanın.
Örnek Dizi: ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']*/

/*let fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']
let frekans = fruits.reduce((a,b)=>{a[b] = ((a[b]||0)+1); return a},{})
console.log(frekans)*/

/*2. Bir dizideki belirli bir kelimenin kaç kez geçtiğini bulmak için reduce metodunu kullanın.
Örnek Dizi: ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'] (Belirli Kelime: 'apple')
*/

/*let fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']
let repeat = fruits.reduce((a,b)=> {return b===`apple`? a+1:a},0 )
console.log(repeat)*/

/* 
1. Bir dizideki öğrencilerin ortalama notunu hesaplamak için reduce metodunu kullanın.
Örnek Dizi: [45, 67, 89, 23, 78, 56, 40]*/
/*let notlar = [45, 67, 89, 23, 78, 56, 40]
let toplam = notlar.reduce((a,b)=>a+b )
let ort = (toplam/notlar.length).toFixed(2)
console.log(ort)*/


/*2. Bir dizideki sayılardan sadece pozitif olanları toplayan bir reduce fonksiyonu yazın.
Örnek Dizi: [-3, 5, -7, 9, -11, 13, -15, 17]
*/

let nums = [-3, 5, -7, 9, -11, 13, -15, 17]
let nums2 = nums.filter((a)=>a>0)
let nums3 = nums2.reduce((a,b)=>a+b) 
console.log(nums3)