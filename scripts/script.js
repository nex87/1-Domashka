// Задача 1. Рекурсия.
// 
function isEven(x) {
    if (x < 0) {
        x *= -1;
    }
    if (x == 0) {
        return true;
    }
    if (x == 1) {
        return false;
    }
    return isEven(x - 2);
}
console.log(isEven(-4));



// Задача 2. Треугольник в цикле. Решил тремя доступными в JS циклами: for, while и do-while, а также при помощи рекурсии.
// 
// 
// Решение задачи циклом for
// 
// let result_for = "";
// for (i=0; i < 7; i++) {
//     result_for += "#";
//     console.log (result_for);
// };
// 
// 
// Решение задачи циклом while
// 
// let result_while = "";
// let k = 0;
// while (k < 7) {
//     result_while += "#";
//     console.log (result_while);
//     k++;
// }
// 
// 
// Решение задачи циклом do-while
// 
// let result_do_while = "";
// let l = 0;
// do {
//     result_do_while += "#";
//     console.log (result_do_while);
//     l++;
// } while (l < 7);
// 
// 
// Решение задачи при помощи рекурсии
// 
// var result = "";
// function triangle(x) {
//     if (x > 0) {
//         result += "#";
//         console.log(result);
//     }
//     if (x == 0) {
//         return true;
//     }
//     if (x < 0) {
//         return false;
//     }
//     return triangle(x-1);
// }
// triangle(7);


// Задача 3. FizzBuzz
// 
// 
// Условие 1. Fizz для кратных 3, и Buzz для кратных 5 но не кратных трем
// for (let i = 1; i <= 100; i++) {
//     if (!(i % 3)) {
//        console.log (i, "Fizz");
//     } else {
//         if (!(i % 5)) {
//             console.log (i, "Buzz");
//         } else {
//             console.log (i);
//         } 
//     }
// }
// 
// 
// Условие 2. FizzBuzz для всех чисел, кратных и 3, и 5
// for (i = 1; i <= 100; i++) {
//     if (!(i % 3) && !(i % 5)) {
//         console.log (i, "FizzBuzz");
//     } else {
//         console.log (i);
//     }
// }


// Задача 4. Считаем бобы.
// 
// 
// Первая часть задачи. Подсчет количества букв "b" в заданной строке.
// function countBS (MyString) {
//     let counter = 0;
//     for (let i = 0; i < MyString.length; i++) {
//         if (MyString.charAt(i) == "B") {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log (countBS("BulbingBobb"));


// Вторая часть задачи. Функция принимает два параметра - строку и букву, и находит, 
// сколько раз эта буква встречается в строке
// 
// function countBS (MyString, MyChar) {
//     let counter = 0;
//     function countChar () {
//         for (let i = 0; i < MyString.length; i++) {
//             if (MyString.charAt(i) == MyChar) {
//                 counter++;
//             }
//         }
//         console.log (counter);
//     }
//     return countChar ();
// }
// countBS("BBBoBobs", "o");