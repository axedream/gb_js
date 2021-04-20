"use strict";
const chessBoxDiv = document.querySelector('#chess_box');


function testChess(){
    //очищаем внутренности дива для отрисовки доски, а то при каждом нажатии будет добавлять еще одну шахматную достку
    while (chessBoxDiv.hasChildNodes()) {
        chessBoxDiv.removeChild(chessBoxDiv.firstChild);
    }
    createChessBox();
}

/**
 * Функция генерации и отрисовки таблицы шахматного поля
 */
function createChessBox() {
    const gorVal = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const verVal = ['8','7','6','5','4','3','2','1'];
    //начальное значение поля будет инвертировано (ИМХО первое поле нумерация и индексация)
    let isBlack = 'sBlack';
    let elementBox = `<table border="1">`;
    for (let y=0; y<9; y++) {
        elementBox += `<tr>`;
        for(let x=0; x<9; x++) {

            //нулевой блок
            if (y==0 && x==0) {
                elementBox += `<td></td>`;
                continue;
            }
            //верхняя строка
            if (y==0 && x!=0) {
                elementBox += `<td class="ss">${gorVal[x-1]}</td>`;
                continue;
            }
            //крайний левый ряд
            if (y!=0 && x==0) {
                elementBox += `<td class="ss">${verVal[y-1]}</td>`;
                continue;
            }
            //остальные позиции
            if (y!=0 && x!=0) {
                elementBox +=`<td class="${isBlack}"></td>`;
            }
            //фактически делаем инврсия
            isBlack = (isBlack === 'sWhite') ? 'sBlack' : 'sWhite';
        }
        //при переходе на нову строку так же делаем инверсию
        isBlack = (isBlack === 'sWhite') ? 'sBlack' : 'sWhite';
        elementBox += `</tr>`;
    }
    chessBoxDiv.insertAdjacentHTML('afterbegin',elementBox);

}