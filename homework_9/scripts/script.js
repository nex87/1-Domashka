// Генератор паролей

let passwordLength = prompt('Задайте длину пароля:');


function* passwordGenerator () {
    // Определяется случайный тип символа - число, строчная или заглавная буква
    let typeChar = Math.floor(Math.random() * 3) + 1;
    let myRandomChar;
    // Определчет код символа
    switch (typeChar) {
        case 1: 
            myRandomChar = String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1)) + 48);
        break;
        case 2:
            myRandomChar = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);
        break;
        case 3:
            myRandomChar = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
        break;
    }
    yield myRandomChar;
}
let myPassword = '';
for (let i = 0; i < passwordLength; i++) {
    myPassword += passwordGenerator().next().value;
}

alert(myPassword);