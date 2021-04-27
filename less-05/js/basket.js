"use strict";
const basketBoxDiv = document.querySelector('#basket_box');
const catalogBoxDiv = document.querySelector('#catalog');

function drawCatalog() {
    let orders = Basket.orders;
    let elementBox = `<table border="1"><tr><td colspan="2">Каталог товаров</td></tr><tr><td>Товар</td><td>Стоимость</td></tr>`;
    orders.forEach((item,i)=> {
        //console.log(item);
        elementBox += `<tr><td>${item.name}</td><td>${item.price}</td></tr>`;
    });

    elementBox += `</table>`;
    catalogBoxDiv.insertAdjacentHTML('afterbegin',elementBox);
}


function testBasket() {
    //очищаем внутренности дива для отрисовки корзины, а то при каждом нажатии будет добавлять еще одну корзину а нужно обновлять по сути
    while (basketBoxDiv.hasChildNodes()) {
        basketBoxDiv.removeChild(basketBoxDiv.firstChild);
    }
    basketBoxDiv.insertAdjacentHTML('afterbegin',getBoxBasketElement());
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
        let i=0
        for(i=0; i<this.orders.length; i++ ) {
            summ += this.orders[i].price;
        }
        //возвращаем объект с количество и суммой товара
        return { vl : i, summ: summ};
    }
};


function getBoxBasketElement() {
    let elementBox = `<table border="1"><tr><td colspan="2">Корзина</td></tr><tr><td>Количество товаров</td><td>Сумма товаров</td></tr>`;
    let getBasket = Basket.getSumm();
    elementBox += `<tr><td>${getBasket.vl}</td><td>${getBasket.summ}</td></tr>`;
    elementBox += `</table>`;
    return elementBox;
}

//Создаем объекты
let z1 = new Order('Джинсы',10);
let z2 = new Order('Куртка', 20);
let z3 = new Order('Кепка', 5);

//Добавляем объекты в корзину
Basket.addOrders(z1);
Basket.addOrders(z2);
Basket.addOrders(z3);

