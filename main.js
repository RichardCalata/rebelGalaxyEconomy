"use strict";

function renderGood(good) {
    var html = '<tr class="good">';
    html += '<td>' + good.id + '</td>';
    html += '<td>' + good.name + '</td>';
    html += '<td>' + good.soldAt + '</td>';
    html += '<td>' + good.buyAt + '</td>';
    html += '<td>' + good.contraband + '</td>';

    return html
}


function renderGoods(goods){
    var html = '';
    for(var i = 0; i<goods.length; i++){
        html += renderGood(goods[i]);
    }
    return html
}

// function updateName(){
//     var input = document.getElementById("goods-name");
//     var newName = input.value;
//     return newName
//
// }
//
// function updateSold(){
//     var input = document.getElementById("goods-sold");
//     var newSold = input.value;
//     return newSold
//
// }
//
// function updateBuy(){
//     var input = document.getElementById("goods-bought");
//     var newBuy = input.value;
//     return newBuy
//
// }
//
// function updateLegal(){
//     var input = document.getElementById("goods-contraband");
//     var newcontraband = input.value;
//     return newcontraband
// }

function updateGoods(){
    var input = document.getElementById('goods-name');
    var input2 = document.getElementById('goods-sold');
    var input3 = document.getElementById('goods-bought');
    var input4 = document.getElementById('goods-contraband');
    var newObj= {id:'',name:'',soldAt:'',buyAt:'',contraband:''};
    newObj.name = input.value;
    newObj.soldAt = input2.value;
    newObj.buyAt = input3.value;
    newObj.contraband = input4.value;
    goods.push(newObj)
    return goods
}

function updateScreen(e){
    e.preventDefault();
    tbody.innerHTML = renderGoods(goods);

}
var goods = [
    // {id:'', name:'Alien Artifacts', soldAt:'', buyAt:''},
    // {id:'', name:'Alien Fossils', soldAt:'', buyAt:''},
    // {id:'', name:'Alien Specimens', soldAt:'', buyAt:''},
    // {id:'', name:'Anomalies', soldAt:'', buyAt:''},
    // {id:'', name:'Antimatter Speck', soldAt:'', buyAt:''},
    // {id:'', name:'Ceramics', soldAt:'', buyAt:''},
    // {id:'', name:'Components', soldAt:'', buyAt:''},
    // {id:'', name:'Counterfeit Goods', soldAt:'', buyAt:''},
    // {id:'', name:'Data Cubes', soldAt:'', buyAt:''},
    // {id:'', name:'Designer Clothes', soldAt:'', buyAt:''},
    // {id:'', name:'Devotional Art', soldAt:'', buyAt:''},
    // {id:'', name:'Diamonds', soldAt:'', buyAt:''},
    // {id:'', name:'Dry-Ages YikYak', soldAt:'', buyAt:''},
    // {id:'', name:'Fine Art', soldAt:'', buyAt:''},
    // {id: '', name:'Gold Ore', soldAt:'', buyAt:''},
    // {id: '', name:'Greel Blue Label', soldAt:'', buyAt:''},
    // {id: '', name:'Greel Whisky', soldAt:'', buyAt:''},
    // {id: '', name:'Highjacked Valuables', soldAt:'', buyAt:''},
    // {id: '', name:'Hitchcock Coronas', soldAt:'', buyAt:''},
    // {id: '', name:'Holovangelism Vids', soldAt:'', buyAt:''},
    // {id: '', name:'Holovids', soldAt:'', buyAt:''},
    // {id: '', name:'Human Transplants', soldAt:'', buyAt:''},
    // {id: '', name:'Iron Ore', soldAt:'', buyAt:''},
    // {id: '', name:'Multi-Player Games', soldAt:'', buyAt:''},
    // {id: '', name:'Nano-Fibers', soldAt:'', buyAt:''},
    // {id: '', name:'Narco-Cola', soldAt:'', buyAt:''},
    {id: '', name:'Obtanium Ore', soldAt:'Texas', buyAt:'Dutch', contraband: false },
    {id: '', name:'Processors', soldAt:'', buyAt:'', contraband: false},
    {id: '', name:'Progenitor Shard', soldAt:'', buyAt:'', contraband: 'no'},
    {id: '', name:'Pulp Novel', soldAt:'', buyAt:'', contraband: 'no'},
    {id: '', name:'Pure Water', soldAt:'', buyAt:'', contraband: 'no'},
    // {id: '', name:'Red Star Beer', soldAt:'', buyAt:'', contraband: 'no'},
    // {id: '', name:'Religious Tracts', soldAt:'', buyAt:'', contraband: 'no'},
    // {id: '', name:'Robot Modules', soldAt:'', buyAt:''},
    // {id: '', name:'Robot Warriors', soldAt:'', buyAt:''},
    // {id: '', name:'Robot Workers', soldAt:'', buyAt:''},
    // {id: '', name:'Scag', soldAt:'', buyAt:''},
    // {id: '', name:'Soy Paste', soldAt:'', buyAt:''},
    // {id: '', name:'Steel', soldAt:'', buyAt:''},
    // {id: '', name:'Stolen Freight', soldAt:'', buyAt:''},
    // {id: '', name:'Sushi-Grade Starfish', soldAt:'', buyAt:''},
    // {id: '', name:'Vat-Grown Tissues', soldAt:'', buyAt:''},
    {id: '', name:'Void', soldAt:'', buyAt:'',contraband:'Yes'}
];

var tbody = document.querySelector('#goods');
var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click',updateScreen);

tbody.innerHTML = renderGoods(goods);