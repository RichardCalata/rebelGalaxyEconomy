
function renderCommodity(commodites) {
    var html = '<tr class="commodities">';
    html += '<td>' + commodites.id + '</td>';
    html += '<td>' + commodites.name + '</td>';
    html += '<td>' + commodites.soldAt + '</td>';
    html += '<td>' + commodites.buyAt + '</td>';

    return html
}


function renderCommodity(commodities){
    var html = '';
    for(var i = commodities.length -1; i>= 0; i--){
        html += renderCommodity(commodities[i]);
    }
    return html
}

var commodities = [
    {id: 1, name:'Alien Artifacts', soldAt:'', buyAt:''}
]