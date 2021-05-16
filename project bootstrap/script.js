class Good {
    constructor(name, price, quant) {
        this.name = name;
        this.price = price;
        this.quant = quant;
    }

}

function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}

let cart = {
    Lagman : new Good(Lagman, 100, 0)
};

var totalquant = 0;



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

var numid = 0;
var qid = 0;

function AddRow(q, a) {
    thisrow_id = numid++;
    thisquant_id = qid++;
    var element = document.getElementById('cartbody');
    var trow = document.createElement('tr');
    var number = document.createElement('th');
    var name = document.createElement('td');
    var quant = document.createElement('td');
    var price = document.createElement('td');
    var plsbtn = document.createElement('button');
    var mnsbtn = document.createElement('button');
    var quantity = document.createElement("span");

    number.scope = 'row';
    number.innerHTML = ++totalquant;

    name.innerHTML = q;
    
    price.innerHTML = a.price;

    plsbtn.classList = 'btn-outline-dark w-25';
    plsbtn.innerHTML = '+';
    plsbtn.onclick = () => {
        quantity.innerText = ++quantity.innerText;
        a.quant++;
    };
        
  

    mnsbtn.classList = 'btn-outline-dark w-25';
    mnsbtn.innerHTML = '-';
    mnsbtn.onclick = () => {
        if (quantity.innerText > 1)
            quantity.innerText = --quantity.innerText;
        else 
            DeleteRow('row-' + thisrow_id);
        a.quant--;
            
    };

    quantity.classList = "quantity-value";
    quantity.id = "quantity-value";
    quantity.innerText = a.quant;

    quant.append(plsbtn, quantity, mnsbtn);
    quant.id = "quant-" + this.quant_id;

    trow.appendChild(number);
    trow.appendChild(name);
    trow.appendChild(price);
    trow.appendChild(quant);
    trow.id = 'row-' + thisrow_id;

    element.appendChild(trow);
}

// function AddRow(q, a) {
//     this.row_id = numid++;
//     this.quant_id = qid++;
//     var element = document.getElementById("cartbody");
//     var element = document.getElementById("app");
//     var trow = document.createElement("tr");
//     var number = document.createElement("th");
//     var name = document.createElement("td");
//     var quant = document.createElement("td");
//     var price = document.createElement("td");
//     var plsbtn = document.createElement("button");
//     var mnsbtn = document.createElement("button");
//     var quantity = document.createElement("span");
  
//     number.scope = "row";
//     number.innerHTML = ++totalquant;
  
//     name.innerHTML = q;
  
//     price.innerHTML = a.price;
  
//     quantity.classList = "quantity-value";
//     quantity.id = "quantity-value";
//     quantity.innerText = a.quant;
  
//     plsbtn.classList = "btn-outline-dark w-25";
//     plsbtn.innerHTML = "+";
//     plsbtn.onclick = () => {
//       quantity.innerText = ++quantity.innerText;
//     };
  
//     mnsbtn.classList = "btn-outline-dark w-25";
//     mnsbtn.innerHTML = "-";
  
//     quant.append(plsbtn, quantity, mnsbtn);
//     quant.id = "quant-" + this.quant_id;
  
//     trow.appendChild(number);
//     trow.appendChild(name);
//     trow.appendChild(price);
//     trow.appendChild(quant);
//     trow.id = "row-" + this.row_id;
  
//     element.appendChild(trow);
// }

function DeleteRow(q){
    let element = document.getElementById(q);
    element.parentNode.removeChild(element);
}
