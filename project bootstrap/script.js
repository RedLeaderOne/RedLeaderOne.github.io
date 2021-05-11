let cart = {
    Lagman = new Good(Lagman, 100, 0),
    Borsh = new Good(Borsh, 100, 0)
};

class Good {
    constructor(name, price, quant) {
        this.name = name;
        this.price = price;
        this.quant = quant;
    }

}


document.onclick = event1 => {
    var add = event1.target.classList.contains('Add');

    if ( add ) {
        AddToCart(event1.target.dataset.id);
    }
}

const AddToCart = id => {
    cart[id].quant ++;
    AddRow(id, cart[id]);
}

function AddRow(q, a) {
    var element = document.getElementById('Cart');
    var trow = document.createElement('tr');
    var number = document.createElement('th');
    var name = document.createElement('td');
    var quant = document.createElement('td');
    var price = document.createElement('td');
    var plsbtn = document.createElement('button');
    var mnsbtn = document.createElement('button');

    number.scope = 'row';
    number.innerHTML = ++ parseInt(document.getElementById(cartbody).lastChild.firstChild.innerHTML);

    name.innerHTML = q;
    
    price.innerHTML = a.price;

    plsbtn.class = 'btn-outline-dark w-25';
    plsbtn.innerHTML = '+';

    mnsbtn.class = 'btn-outline-dark w-25';
    mnsbtn.innerHTML = '-';

    quant.appendChild(mnsbtn);
    quant.innerHTML = a.quant;
    quant.appendChild(plsbtn);

    trow.appendChild(number);
    trow.appendChild(price);
    trow.appendChild(price);
    trow.appendChild(quant);

    element.appendChild(trow);
}