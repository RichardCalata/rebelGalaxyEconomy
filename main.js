"use strict";

function renderGood(good) {
    var html = '<tr class="good">';
    html += '<td>' +  '<input type="submit" id="edit" value="edit" href="modal" onclick="openM()"{\n' +
        '    modal.style.display = "block";\n' +
        '}">'+ '</td>';
    html += '<td>' + good.name + '</td>';
    html += '<td>' + good.soldAt + '</td>';
    html += '<td>' + good.cost + '</td>';
    html += '<td>' + good.buyAt + '</td>';
    html += '<td>' + good.price + '</td>';
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

function updateGoods(){
    var input = document.getElementById('goods-name');
    var input2 = document.getElementById('goods-sold');
    var input3 = document.getElementById('buy-price');
    var input4 = document.getElementById('goods-bought');
    var input5 = document.getElementById('sell-price');
    var input6 = document.getElementById('goods-contraband');
    var newObj= {id:'',name:'',soldAt:'',cost:'', availableAt: '',price:'',contraband:''};
    newObj.name = input.value;
    newObj.soldAt = input2.value;
    newObj.cost = input3.value;
    newObj.buyAt = input4.value;
    newObj.price = input5.value;
    newObj.contraband = input6.value;
    goods.push(newObj)
    return goods
}

function editGood(){

}

function updateScreen(e){
    e.preventDefault();
    tbody.innerHTML = renderGoods(goods);

}

function openModal(){
    let modalTrigger = document.querySelectorAll('.modal-trigger');
    modalTrigger.forEach(function(trigger){
        trigger.addEventListener('click',function(event){
            const target = this.getAttribute('href').substr(1);
            const modalWindow = document.getElementById(target);

            if(modalWindow.classList){
                modalWindow.classList.add('open')
            }
            event.preventDefault();
        });
    });
}

var goods = [

    {id: '', name:'Obtanium Ore', soldAt:'Texas', cost:'2000', availableAt: 'Dutch',price:'2500', contraband: false },
    {id: '', name:'Processors', soldAt:'Backbone', cost: '300', availableAt: 'Montana',price: '400', contraband: false},
    {id: '', name:'Progenitor Shard', soldAt:'', cost: '5000', availableAt: 'Backbone',price:'7500', contraband: 'no'},
    {id: '', name:'Pulp Novel', soldAt:'Sexton',cost:'250', availableAt: 'Lousiana',price:'300', contraband: 'no'},
    {id: '', name:'Pure Water', soldAt:'Colorado',cost:'2500', availableAt: 'Texas',price:'2800', contraband: 'no'},

    {id: '', name:'Void', soldAt:'',cost:'7800', availableAt: '',price:'9000',contraband:'Yes'}
];

var tbody = document.querySelector('#goods');
var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click',updateScreen);

tbody.innerHTML = renderGoods(goods);

var modal = document.getElementById("editModal");

var btn = document.getElementById("edit");

var span = document.getElementsByClassName('close')[0];

function openM(){
    modal.style.display = "block";
};

span.onclick = function(){
    modal.style.display = "none";
};

window.onclick = function(event){
    if(event.target == modal) {
        modal.style.display = "none";
    }
};
