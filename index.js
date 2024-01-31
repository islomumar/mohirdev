/*
1)
a, b, c raqamlari berilgan. Shu sonlardan foydalanib uch xonali son yasang, 
qachonki istalgan berilgan raqamlardan biri 0 ga teng yoki kichik bo'lsa 0 ni konsolga chiqaring.
*/
function abc1(...array) {
    let result = ""
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
            return 0
        } else {
            result += array[i]
        }
    }
    return +result
}
console.log(abc1(1, 2, 3), 1)
function abc2(...array) {
    let num = 1
    let result = array[array.length - 1]
    for (let i = array.length - 2; i >= 0; i--) {
        if (array[i] <= 0) {
            return 0;
        } else {
            num *= 10
            result = result + num * array[i]
        }
    }
    return +result
}
console.log(abc2(1, 2, 3, 4), 1)
/*
2)
Berilgan son hafta kunining qaysi kuniga to'g'ri keladi. 
Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring,
Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz ..,  
Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin.
*/
function weekdays(day) {
    let weeksArray = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba", "yakshanba"]
    return weeksArray.indexOf(day.toLowerCase()) !== -1 ?
        day : "none"
}
console.log(weekdays('Dushanba'), 2)
/*
3)
Berilgan yill kabisa yili ekanligini aniqlang. 
Agar kabisa yili bo'lsa true  konsolga chiqsin.  
Agar bo'linmasa false  konsolga chiqsin. 
Kabisa yil deb 4 yilda bir marta keladigan yilga aytiladi. 
Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi.
*/
function leapYear(year) {
    return year === 365
}
console.log(leapYear(365), 3)
/*
4)
a soni berilgan. 1 - 999 sonlar orasida. Agar a soni 1 honali son bo'lsa 1 ni return qiling. 
Agar a soni 2 honali son bo'lsa 2 ni return qiling. Agar a soni 3 honali bo'lsa 3 ni return qiling.
*/
function funNumberLength(a) {
    return a !== 0 ? Math.floor(Math.log10(Math.abs(a)) + 1) : 1
}
console.log(funNumberLength(-124), 4)
/*
5) 
a, b, c, d sonlar berilgan. 
Agar ularning qiymati barchasi musbat bo'lsa true konsolga chiqaring bo'lmasa false ni konsolga chiqaring.
*/
function funabcd(...num) {
    for (let i of num) {
        if (i < 0) {
            return false
        }
    }
    return true
}
console.log(funabcd(-1, 2, 3, 3), 5)
/*
6) 
a soni berilgan.  0 dan a gacha bo'lgan sonlaryig'indisini toping  va yig'indini konsolga chiqaring. 
a sonini ham hisobga oling.
*/
function funA(a) {
    let result = 0
    for (let i = 0; i <= a; i++) {
        result += i
    }
    return result
}
console.log(funA(5), 6)
/*
7)
a soni berilgan. Shu son mukammal raqam yoki yo'qmi shuni aniqlang. 
Agar mukammal raqam bo'lsa true bo'lmasa false konsolga chiqaring. 
Mukammal raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan songa (o'zidan tashqari) aytiladi. 
Deylik: a = 6, uning bo'linuvchilari 1,2,3 => 6 = 1 + 2 + 3 demak 6 raqami murakkab raqam hisoblanadi. 
a = 15, uning bo'linuvchilari 1,3,5, => 1 + 3 + 5 = 8 bo'linuvchilari yig'indisi 8ga teng 15 ga emas. 
Shuning uchun bu mukammal son emas
*/
function funPerfectNumber(num) {
    let result = 0
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            result += i
        }
    }
    return num === result
}
console.log(funPerfectNumber(15), 7)
/*
8)
n soni berilgan. Shu sonni raqamlarini sonini  konsolga chiqaring. Misol: 123 -> raqamlari soni: 3
*/
function funNumberCount(a) {
    return a !== 0 ? Math.floor(Math.log10(Math.abs(a)) + 1) : 1
}
console.log(funNumberCount(15), 8)
/*
9)
n soni berilgan. Berilgan son palindrome  ekanligini aniqlang. Agar bo'lsa true bo'lmasa false chiqaring. 
Masalan: n = 12321  bunda chap tomondan va o'ng  tomondan o'qisa ham bir hil bo'lishi kerak. 
Bu misolni while orqali ishlash yaxshiroq edi lekin for ni o'rganish uchun for da ishlaymiz.
*/
function funPalindrome(n) {
    let reversed = 0;
    let original = n;
    while (n > 0) {
        let lastDigit = n % 10;
        reversed = reversed * 10 + lastDigit;
        n = Math.floor(n / 10);
        console.log(n)
    }
    return original === reversed;
}
console.log(funPalindrome(1232), 9)
/*
10)
n  soni berilgan. Shu sonni raqamlarini yig'indisini toping.
*/
function funTotal(n) {
    let result = 0
    while (n > 0) {
        result += (n % 10)
        n = Math.floor(n / 10)
    }
    return result
}
console.log(funTotal(1231), 10)
/*
11)
array[] berilgan. Shu massivni teskarisini yangi massivga ko'chirib o'tkazing va konsolga chiqaring.
*/
function funReverse(array) {
    let result = []
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
    }
    return result
}
console.log(funReverse([1, 2, 3, 4]), 11)
/*
12)
n va array[] berilgan. Shu massivda nechta n soni borligini topib konsolga chiqaring. 
Masalan:  n = 4 , array[2,4,6,4,], Natija: bu yerda 2 ta 4 bor.
*/
function funArrayN(array, n) {
    let count = 0
    for (let i of array) {
        if (i === n) {
            count++
        }
    }
    return count
}
console.log(funArrayN([2, 4, 6, 4], 4), 12)
/*
13)
a, array[] berilgan. Arrayning xohlagan ikkita  elementlarini yig'indisi a ga teng bo'lishini aniqlang 
va ularni konsolga chiqaring.
*/
function funArrayTwoReverse(array, n) {
    for (let i of array) {
        for (let j of array) {
            if ((i + j) === n) {
                return `${i}+${j}=${i + j}`
            }
        }
    }
}
console.log(funArrayTwoReverse([1, 3, 4, 1, 3, 2], 5), 13)
/*
14)
Sonlardan iborat massiv berilgan.
Shu massivni  elementlarini o'sish tartibida jo'ylashtiring (sort by increasing (ascending)) 
va hosil bo'lgan massivni ni konsolga chiqaring.
*/
console.log([4, 2, 8, 1, 6, 3, 7, 5, 10].sort((a, b) => a - b), 14)
/*
15)
Sonlardan iborat massiv berilgan. 
Shu massivdagi eng katta ikkinchi elementni toping. 
Bunda array elementlari bir biriga teng emas deb oling.
*/ 
console.log([4, 2, 8, 1, 6, 3, 7, 5, 10].sort((a, b) => b - a)[1], 15)