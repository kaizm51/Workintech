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
let fruits = ['apple', 'banana', 'cherry', 'date']
let fruits2 = fruits.map((a)=> a.split(``).reverse().join(``))
console.log(fruits2)
