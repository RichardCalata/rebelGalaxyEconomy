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
    {id:'', name:'Alien Artifacts', soldAt:'', buyAt:''},
    {id:'', name:'Alien Fossils', soldAt:'', buyAt:''},
    {id:'', name:'Alien Specimens', soldAt:'', buyAt:''},
    {id:'', name:'Anomalies', soldAt:'', buyAt:''},
    {id:'', name:'Antimatter Speck', soldAt:'', buyAt:''},
    {id:'', name:'Ceramics', soldAt:'', buyAt:''},
    {id:'', name:'Components', soldAt:'', buyAt:''},
    {id:'', name:'Counterfeit Goods', soldAt:'', buyAt:''},
    {id:'', name:'Data Cubes', soldAt:'', buyAt:''},
    {id:'', name:'Designer Clothes', soldAt:'', buyAt:''},
    {id:'', name:'Devotional Art', soldAt:'', buyAt:''},
    {id:'', name:'Diamonds', soldAt:'', buyAt:''},
    {id:'', name:'Dry-Ages YikYak', soldAt:'', buyAt:''},
    {id:'', name:'Fine Art', soldAt:'', buyAt:''},
    {id: '', name:'Gold Ore', soldAt:'', buyAt:''},
    {id: '', name:'Greel Blue Label', soldAt:'', buyAt:''},
    {id: '', name:'Greel Whisky', soldAt:'', buyAt:''},
    {id: '', name:'Highjacked Valuables', soldAt:'', buyAt:''},
    {id: '', name:'Hitchcock Coronas', soldAt:'', buyAt:''},
    {id: '', name:'Holovangelism Vids', soldAt:'', buyAt:''},
    {id: '', name:'Holovids', soldAt:'', buyAt:''},
    {id: '', name:'Human Transplants', soldAt:'', buyAt:''},
    {id: '', name:'Iron Ore', soldAt:'', buyAt:''},
    {id: '', name:'Multi-Player Games', soldAt:'', buyAt:''},
    {id: '', name:'Nano-Fibers', soldAt:'', buyAt:''},
    {id: '', name:'Narco-Cola', soldAt:'', buyAt:''},
    {id: '', name:'Obtanium Ore', soldAt:'', buyAt:''},
    {id: '', name:'Processors', soldAt:'', buyAt:''},
    {id: '', name:'Prgenitor Shard', soldAt:'', buyAt:''},
    {id: '', name:'Pulp Novel', soldAt:'', buyAt:''},
    {id: '', name:'Pure Water', soldAt:'', buyAt:''},
    {id: '', name:'Red Star Beer', soldAt:'', buyAt:''},
    {id: '', name:'Religious Tracts', soldAt:'', buyAt:''},
    {id: '', name:'Robot Modules', soldAt:'', buyAt:''},
    {id: '', name:'Robot Warriors', soldAt:'', buyAt:''},
    {id: '', name:'Robot Workers', soldAt:'', buyAt:''},
    {id: '', name:'Scag', soldAt:'', buyAt:''},
    {id: '', name:'Soy Paste', soldAt:'', buyAt:''},
    {id: '', name:'Steel', soldAt:'', buyAt:''},
    {id: '', name:'Stolen Freight', soldAt:'', buyAt:''},
    {id: '', name:'Sushi-Grade Starfish', soldAt:'', buyAt:''},
    {id: '', name:'Vat-Grown Tissues', soldAt:'', buyAt:''},
    {id: '', name:'Void', soldAt:'', buyAt:''}
];

var tbody = document.querySelector('#goods');

tbody.innerHTML = renderGoods(goods);