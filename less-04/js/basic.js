"use strict";

/**
 * Фунция преобразования числа в объект
 * @param nm
 * @returns {string|{сотни: *, десятки: *, единицы: *}}
 */
function converNtoO(nm=0) {
    if (nm > 999) return 'Ошибка. Превышено допустимое значение. Возьмите значение менее 999';
    if (nm < -999)  return 'Ошибка. Занижено допустимое значение. Возьмите значение более -999';
    let nmStr = String(nm);
    return {'единицы': Number(nmStr[2]),'десятки':Number(nmStr[1]),'сотни':Number(nmStr[0])};

}

function test_convert(nm) {
    console.log(converNtoO(nm));
}

/**
 * Оъект в корзине
 */
class Order {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let Basket = {
    orders : [],
    addOrders(order) {
        this.orders.push(order)
    },
    getSumm() {
        let summ = 0;

        for(let i=0; i<this.orders.length; i++ ) {
            summ += this.orders[i].price;
        }
        return summ;
    }
};

//Создаем объекты
let z1 = new Order('Джинсы',10);
let z2 = new Order('Куртка', 20);
let z3 = new Order('Кепка', 5);

//Добавляем объекты в корзину
Basket.addOrders(z1);
Basket.addOrders(z2);
Basket.addOrders(z3);

/**
 * Тестируем сумму всех объектов
 */
function summ_orders() {
    console.log(`Сумма всех вещей: ${Basket.getSumm()}$`);
}

