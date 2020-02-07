// Задача #1. Сумма диапазона
// 
let My_array = [];
function My_range (arr_start, arr_end, step) {
    if (step == undefined) {
        step = 1;
    }
    if (step > 0) {
        for (let i = arr_start; i <= arr_end; i += step) {
            My_array.push(i);
        }
    }
    if (step < 0) {
        for (let i = arr_start; i >= arr_end; i += step) {
            My_array.push(i);
        }
    }
    return My_array;
}

let My_sum_result = 0;
function My_sum (arr_in) {  
    for (let i of arr_in) {
        My_sum_result += i;
    }
    return My_sum_result;
}

console.log ("My_array: ", My_range(1, 10, 1));
console.log ("Summa elementov massiva = ", My_sum(My_array));


// Задача #2 Глубокое сравнение
// 
// var obj = {
//     here: {
//         is: "an",
//     },
//     object: 2
// }
// function deepEqual (a, b) {
//     if (typeof(a, b) == 'object' && Object.keys(a).length == Object.keys(b).length) {
//             for (let myElement in a) {
//                 if (!b.hasOwnProperty(myElement)) {
//                     return false;
//                 }
//                 if(a[myElement].valueOf() !== b[myElement].valueOf()) {  
//                     if (! deepEqual(a[myElement], b[myElement])) {
//                         return false;
//                     }
//                 }
//                 return true;
//             }
//     } else {
//         if (a === b) {
//             return true;
//         } else {
//             return false;
//         }  
//     }    
// }
// 
// console.log (deepEqual (5, 5));
// console.log (deepEqual(obj, {here: 1, object: 2}));
// console.log (deepEqual(obj, {here: {is: "an"}, object: 2}));


//  Задача #3 Обращаем вспять массив
// 
// let My_array = [1, 2, 3, 4, 5, 6, 7];
//  
// function reverseArray (My_array) {
//     let My_array_reversed = [];
//     for (let i = 0; i < My_array.length; i++) {
//         My_array_reversed.unshift(My_array[i]);
//     }
//     return My_array_reversed;
// }
//  
// function reverseArrayInPlace (My_array) {
//     for (let i = 0, k = My_array.length-1; i < k; i++, k--) {
//         let element = My_array[k];
//         My_array[k] = My_array[i];
//         My_array[i] = element;
//     }
//     return My_array;
// }
//  
// console.log (reverseArray(My_array));
// console.log (reverseArrayInPlace(My_array));


// Задача #4 Векторный тип
// 
// function Vector (x, y) {
//     this.x = x,
//     this.y = y
// }
// 
// Vector.prototype = {
//     plus: function(x1, y1) {
//         return new Vector ((this.x + x1), (this.y + y1));
//     },
//     minus: function(x1, y1) {
//         return new Vector ((this.x - x1), (this.y - y1));
//     },
//     get length () {
//         return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
//     }
// }
// 
// console.log(new Vector(3, 4).length);