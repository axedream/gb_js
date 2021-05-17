"use strict";
const basketBoxDiv = document.querySelector('#basket_box');
const catalogBoxDiv = document.querySelector('#catalog');

function drawCatalog() {

    let elementBox = `<table border="1"><tr><td colspan="4">Каталог товаров</td></tr><tr><td>Товар</td><td>Стоимость</td><td>Изображение</td><td></td></tr>`;
    Orders.forEach((item,i)=> {
        //console.log(item);
        elementBox += `<tr><td>${item.name}</td><td>${item.price}</td><td><img class="imgPrev" src="img/${item.img}"></td><td><a href="#" onclick="buy(${item.id},this)">Купить</a></td></tr>`;
    });

    elementBox += `</table>`;
    catalogBoxDiv.insertAdjacentHTML('afterbegin',elementBox);
}


function drawBasket() {
    //очищаем внутренности дива для отрисовки корзины, а то при каждом нажатии будет добавлять еще одну корзину а нужно обновлять по сути
    while (basketBoxDiv.hasChildNodes()) {
        basketBoxDiv.removeChild(basketBoxDiv.firstChild);
    }
    basketBoxDiv.insertAdjacentHTML('afterbegin',getBoxBasketElement());
}

/**
 * Objects for sell
 */
class Order {
    constructor(id,name, price,img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
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
let z1 = new Order(1,'Джинсы',10,'bj.jpg');
let z2 = new Order(2,'Куртка', 20,'kurtka.jpg');
let z3 = new Order(3,'Кепка', 5,'kepka.jpg');

//Создаем массив объектов товаров
let Orders = [z1,z2,z3];

//отрисовываем каталог товаров (они еще не в корзине)
drawCatalog();

//отрисовываем корзину, пусть и с пустой
drawBasket();

//Добавляем объекты в корзину
function buy(id,e) {
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble=true);
    Orders.forEach((item,i)=> {
        if (item.id == id) {
            Basket.addOrders(item);
            drawBasket();
        }
    });
    return false;
}
/*
Basket.addOrders(z1);
Basket.addOrders(z2);
Basket.addOrders(z3);
*/
