"use strict";

function renderGood(good) {
    var html = '<tr class="good">';
    html += '<td>' + good.id + '</td>';
    html += '<td>' + good.name + '</td>';
    html += '<td>' + good.soldAt + '</td>';
    html += '<td>' + good.buyAt + '</td>';

    return html
}


function renderGoods(goods){
    var html = '';
    for(var i = goods.length -1; i>= 0; i--){
        html += renderGood(goods[i]);
    }
    return html
}

var goods = [
    {id: 1, name:'Alien Artifacts', soldAt:'', buyAt:''},
    {id: 2, name:'Alien Fossils', soldAt:'', buyAt:''},
    {id: 3, name:'Alien Specimens', soldAt:'', buyAt:''},
    {id: 4, name:'Anomalies', soldAt:'', buyAt:''},
    {id: 5, name:'Antimatter Speck', soldAt:'', buyAt:''},
    {id: 6, name:'Ceramics', soldAt:'', buyAt:''},
    {id: 7, name:'Components', soldAt:'', buyAt:''}
];

var tbody = document.querySelector('#goods');

tbody.innerHTML = renderGoods(goods);