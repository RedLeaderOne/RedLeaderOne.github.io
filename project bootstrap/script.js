let cart = {
    'kjsflakjs' : 0,
    'ghgfweect' : 0
};

document.onclick = event1 => {
    var add = event1.target.classList.contains('Add');

    if ( add ) {
        AddToCart(event1.target.dataset.id);
    }
}

const AddToCart = id => {
    cart[id] ++;
    AddRow(id);
}

function AddRow(q) {
    var element = document.getElementById('Cart');
    var trow = document.createElement('tr');
    var number = document.createElement('th');
    var name = document.createElement('td');
    var quant = document.createElement('td');
    var price = document.createElement('td');

    number.scope = 'row';
    number.innerHTML = ++ parseInt(document.getElementById(cartbody).lastChild.firstChild.innerHTML);

    name.innerHTML = getElementById(event1.target.dataset.id)

    trow.appendChild()
}