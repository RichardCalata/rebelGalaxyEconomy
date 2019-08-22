"use strict";

function renderGood(good) {
    var html = '<tr class="good">';
    html += '<td>' +  '<input type="submit" id="edit" value="edit" href="modal">'+ '</td>';
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

    {id: '', name:'Obtanium Ore', soldAt:'Texas', buyAt:'Dutch', contraband: false },
    {id: '', name:'Processors', soldAt:'', buyAt:'', contraband: false},
    {id: '', name:'Progenitor Shard', soldAt:'', buyAt:'', contraband: 'no'},
    {id: '', name:'Pulp Novel', soldAt:'', buyAt:'', contraband: 'no'},
    {id: '', name:'Pure Water', soldAt:'', buyAt:'', contraband: 'no'},

    {id: '', name:'Void', soldAt:'', buyAt:'',contraband:'Yes'}
];

var tbody = document.querySelector('#goods');
var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click',updateScreen);

tbody.innerHTML = renderGoods(goods);

var modal = document.getElementById("editModal");

var btn = document.getElementById("edit");

var span = document.getElementsByClassName('close')[0];

btn.onclick = function(){
    modal.style.display = "block";
};

span.onclick = function(){
    modal.style.display = "none";
};

// window.onclick = function(event){
//     modal.style.display = "none";
// };
