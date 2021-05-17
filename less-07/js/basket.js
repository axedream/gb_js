"use strict";
const basketBoxDiv = document.querySelector('#basket_box');
const catalogBoxDiv = document.querySelector('#catalog');
const buttonBasket = document.querySelector('#buttonBasket');
const basketDetail = document.querySelector('#basket_detail');
const basketText = document.querySelector('#basket_text');

let showBasktet = 0;
let showBasketDetail = 0;
let showBasketText = 0;

function drawCatalog() {

    let elementBox = `<table border="1"><tr><td colspan="4">Каталог товаров</td></tr><tr><td>Товар</td><td>Стоимость</td><td>Изображение</td><td></td></tr>`;
    Orders.forEach((item,i)=> {
        //console.log(item);
        elementBox += `<tr><td>${item.name}</td><td>${item.price}</td><td><img class="imgPrev" src="img/${item.img}"></td><td><a href="#" onclick="buy(${item.id},this)">Купить</a></td></tr>`;
    });
    elementBox += `</table>`;
    catalogBoxDiv.insertAdjacentHTML('afterbegin',elementBox);

}

//отрисовать дополнительные поля
function drawBasketText(val) {
    while (basketText.hasChildNodes()) {
        basketText.removeChild(basketText.firstChild);
    }
    showBasketText = (val) ? 1 : 0;
    let elementBox = ``;

    if (showBasketText) {
        elementBox = `<table border="1"><tr><td colspan="2">Дополнительные поля</td><td><button onclick="drawBasketText(0)">Свернуть</button></td></tr>`;
        elementBox += `<tr><td>Алрес доставки</td><td><input type="text"> </td></tr>`;
        elementBox += `<tr><td>Комментарий</td><text></text></tr>`;
        elementBox += `</table>`;
    } else {
        elementBox = ``;
    }
    basketText.insertAdjacentHTML('afterbegin',elementBox);

}

//отрисовка деталей корзины
function drawBasketDetail(val) {
    while (basketDetail.hasChildNodes()) {
        basketDetail.removeChild(basketDetail.firstChild);
    }
    showBasketDetail = (val) ? 1 : 0;


    let elementBox = ``;
    if (val) {
        elementBox = `<table border="1"><tr><td colspan="2">Состав корзины</td><td><button onclick="drawBasketDetail(0)">Свернуть</button></td></tr><tr><td>Товар</td><td>Стоимость</td><td>Удалить</td></tr>`;
        Basket.orders.forEach((item,i)=> {
            //console.log(item);
            elementBox += `<tr><td>${item.name}</td><td>${item.price}</td><td><a href="#" onclick="del(${i},this)">Удалить</a></td></tr>`;
        });
        elementBox += `<tr><td colspan="3"><button onclick="drawBasketText(1)">Далее -> Дополнительные поля</button></td></tr>`;
        elementBox += `</table>`;
    } else {
        elementBox = '';
    }
    basketDetail.insertAdjacentHTML('afterbegin',elementBox);
}

//отрисовка базиса корзины (колчество товаров и цена)
function drawBasket() {
    showBasktet = 1;
    //очищаем внутренности дива для отрисовки корзины, а то при каждом нажатии будет добавлять еще одну корзину а нужно обновлять по сути
    while (basketBoxDiv.hasChildNodes()) {
        basketBoxDiv.removeChild(basketBoxDiv.firstChild);
    }
    basketBoxDiv.insertAdjacentHTML('afterbegin',getBoxBasketElement());
}

function getBoxBasketElement() {
    let elementBox = `Корзина пуста`;
    let getBasket = Basket.getSumm();
    if (getBasket.vl) {
        elementBox = `<table border="1"><tr><td colspan="2">Корзина</td></tr><tr><td>Количество товаров</td><td>Сумма товаров</td></tr>`;
        elementBox += `<tr><td>${getBasket.vl}</td><td>${getBasket.summ}</td></tr>`;
        elementBox += `<tr><td colspan="3"><button onclick="drawBasketDetail(1)">Далее -> Состав корзины</button></td></tr>`;
        elementBox += `</table>`;
    }
    
    if (showBasketDetail) {
        if (getBasket.vl) {
            drawBasketDetail(1);
        } else {
            drawBasketDetail(0);
        }
    }

    if (showBasketText) {
        drawBasketText(getBasket.vl);
    }
    return elementBox;
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
    delOrders(i) {
        this.orders.splice(i,1);
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

//Создаем объекты
let z1 = new Order(1,'Джинсы',10,'bj.jpg');
let z2 = new Order(2,'Куртка', 20,'kurtka.jpg');
let z3 = new Order(3,'Кепка', 5,'kepka.jpg');

//Создаем массив объектов товаров
let Orders = [z1,z2,z3];

//отрисовываем каталог товаров (они еще не в корзине)
drawCatalog();


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

//Удаляем объект из корзину
function del(i,e) {
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble=true);
    Basket.delOrders(i);
    drawBasket();
    return false;
}


buttonBasket.onclick = function(e) {
    e.preventDefault();
    drawBasket();
    return false;
};
