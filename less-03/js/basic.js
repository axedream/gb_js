/**
 * Массив товаров, только цены от них
 * @type {number[]}
 */
let order = [10,20,700,1,5,16];

function countBasketPrice(ord) {
    let sum = 0;
    ord.forEach(function(item, i, ord) {
       sum +=item;
    });
    return sum;
}

function testSumm() {
    console.log('Элементы массива : ' + order + "\n");
    console.log('Сумма элементов массива : ' + countBasketPrice(order));
}

/**
 * Вывод простых чисел от 0 до 100
 */
function testPrimes() {
    for (let i = 0; i <= 100; i++) {
        if (isPrime(i)) console.log('Простое число : ' + i);
    }
}

/**
 * Мето определения простых чисел (0 и 1 сразу исключаем)
 * @param num
 * @returns {boolean}
 */
function isPrime(num) {
    if(num < 2) return false;
    for (let i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

/**
 * Выводим в цикле for числа от 0 до 9 без помещения когда в кикл
 */
function testFor() {
    for(let i=0; i<10; console.log(i++)) {

    }
}


function span(i) {
    let str = '';
    if(i) {
        for(j=0;j<i;j++) {
            str += '*';
        }
        console.log(str);
    }
}

/**
 * Реалищация пирамиды
 */
function testPiramida() {
    for(let i=0; i<20; i++) {
        span(i);
    }
}