let a = 20;
let b = 40;

function testAB(a,b) {
    let out = 0;
    if (a>0 && b>0) {
        out = a - b;
    }
    if (a<0 && b<0) {
        out = a * b;
    }
    if ( (a<0 && b>=0) || (a>=0 && b<0)) {
        out = a + b;
    }
    return out;
}

a = 7;

function swA() {
    switch (a) {
        case 1: console.log('Число '+ (a++));
        case 2: console.log('Число '+ (a++));
        case 3: console.log('Число '+ (a++));
        case 4: console.log('Число '+ (a++));
        case 5: console.log('Число '+ (a++));
        case 6: console.log('Число '+ (a++));
        case 7: console.log('Число '+ (a++));
        case 8: console.log('Число '+ (a++));
        case 9: console.log('Число '+ (a++));
        case 10: console.log('Число '+ (a++));
        case 11: console.log('Число '+ (a++));
        case 12: console.log('Число '+ (a++));
        case 13: console.log('Число '+ (a++));
        case 14: console.log('Число '+ (a++));
        case 15: console.log('Число '+ (a));
    }
}


/**
 * Реализация функции сложения a + b
 * @param a
 * @param b
 * @returns {*}
 */
function sumAB(a,b) {
    return (a + b);
}

/**
 * Реализация функции вычитания a - b
 * @param a
 * @param b
 * @returns {number}
 */
function subAB(a,b) {
    return(a-b);
}

/**
 * Реализация функции деления a / b
 * @param a
 * @param b
 * @returns {number}
 */
function divAB(a,b) {
    return(a/b);
}

/**
 * Реализация функции умножения a * b
 * @param a
 * @param b
 * @returns {number}
 */
function mlAB(a,b) {
    return(a*b);
}

/**
 * Реализация функции математической операции
 * @param arg1
 * @param arg2
 * @param operation
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    let out = 0;
    switch (operation) {
        case 'sum': out = subAB(arg1,arg2); break;
        case 'div': out = divAB(arg1,arg2); break;
        case 'ml' : out = mlAB(arg1,arg2); break;
        case 'sub': out = subAB(arg1,arg2); break;
        default: out = 0; break;
    }

    return out;
}


