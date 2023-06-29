/* Homework №14 */

// Task №1

/* Написати функцію, яка приймає один параметр.

При першому виклику вона запам'ятовує його, 
при другому — підсумовує переданий параметр з тим, 
що передали перший раз і тд.

Все це із замиканнями, наприклад: 
sum(3) = 3
sum(5) = 8
sum(20) = 28
*/

const findSum = (number) => {
  let result = number;
  const findRes = (res) => result += res;
  return findRes;
}

let sum = findSum(0);
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

// Task №2

/*
Даний масив з елементами різних типів.
Створити функцію,
яка вираховує середнє арифметичне лише числових елементів даного масиву.
*/

const findArithm = () => {
    // Надаю статичний варіант, на цьому місці має бути функціонал під замикання :)
    let randomArr = ["text", 12, [2, 3], 33, {name: "Slaven"}, 32, 22, 32.2, 32.1];

    const findResult = (array) => {
        let findArithmMean = 0;
        // for(let i = 0; i < array.length; i++) {
        //     if (typeof(array[i]) === 'number') {
        //     findArithmMean += array[i];
        // }
        // }
        for (value of array) {
            if (typeof(value) === 'number') {
                findArithmMean += value;
            }
        }

        return findArithmMean.toFixed(2);
    }
  
    return findResult(randomArr)
}

console.log(findArithm());

// Task №3

let giveX = prompt(`Task №3
Написати функцію doMath(x, znak, y), яка отримує 3 аргументи:
    числа x та y, рядок znak.

    У змінній znak може бути значення +, -, *, /, %, ^ (ступінь).
    Вивести результат математичної дії, вказаної у змінній znak.
    Обидва числа та знак виходять від користувача.
        
        Введіть перше число:`);
let giveOperation = prompt(`Введіть одну із операцій символом:
(+) - додавання.
(-) - віднімання.
(*) - множення.
(/) - ділення.
(%) - модуль.
(^) - зведення в ступінь.`);
let giveY = prompt('Введіть друге число:');

const doMath = (x, operation, y) => {
  if (operation === '^') {
    operation = '**';
    return eval(`${x} ${operation} ${y}`);
  } else {
    return eval(`${x} ${operation} ${y}`);
  }
}
console.log(doMath(giveX, giveOperation, giveY));

// Task №4

const make2DimensionalArr = () => {
    //Main array.
    let userArr = [];

    //Length for main array.
    let giveMainLength = prompt(`Task №4
Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву та внутрішніх масивів задає користувач. Значення всіх елементів масивів задає користувач.
        
    Вкажіть довжину основного масиву:`);

    const giveMainArrLength = (length) => {
        //Length for low arrays.
        let giveLowLength;

        for (let i = 0; i < length; i++) {
            //Elements for low arrays.
            let giveElements;
            userArr.push([]);
            giveLowLength = prompt(`Вкажіть довжину внутрішнього масиву №${i + 1}.`);
            for (let j = 0; j < giveLowLength; j++) {
                giveElements = prompt(`Вкажіть елемент №${j + 1} для внутрішнього масиву №${i + 1}`);
                userArr[i].push(giveElements);
            }
        }
    }
    giveMainArrLength(Number(giveMainLength));

    return userArr;
}

console.log(make2DimensionalArr());


// Task №5

const deleteSymbol = () => {
    let giveText = prompt(`Task №5
Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом.
    
    'func("hello world", ['l', 'd'])' поверне нам "heo wor".
    
Вихідний рядок та символи для видалення задає користувач.

    Введіть текст, з якого будуть видалятися вказані Вами символи:`);

    let giveArgs = prompt(`Введіть символи для видалення:`);

    let countArgs = (answer) => {
        let args = [];
        for (let i = 0; i < answer.length; i++) {
            args.push(answer[i]);
        }
        return args;
    }
    
    // Перевірка передачі аргументів по завданню : 'func("hello world", ['l', 'd'])'.
    console.log(giveText); // "hello world"
    console.log(countArgs(giveArgs)); // ['l','d']

    const makeRealization = (text, args) => {
        let textArr = text.split("");
        for (let i = 0; i < textArr.length; i++) {
            for (let j = 0; j < args.length; j++) {
                if (textArr[i] === args[j]) {
                    textArr[i] = '';
                }
            }
       }
       return textArr.join("");
    }
    return makeRealization(giveText, countArgs(giveArgs));
}

console.log(deleteSymbol());