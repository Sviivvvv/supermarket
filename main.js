var cartQty = new Array();
var cartPrice = new Array();

function emptyCart() {
    document.getElementById("orderBody").innerHTML = ""
    document.getElementById("totalPrice").innerHTML = "0.00"

    localStorage.setItem("cartQty", "");
    localStorage.setItem("cartPrice", "");
    localStorage.setItem("total", "");
}

function addToCart(obj) {
    var parent = obj.parentElement;
    var price = parent.querySelector(".itemPrice").innerHTML
    var name = parent.querySelector(".itemName").innerHTML
    var qty = parent.querySelector(".numItem").value

    if (qty <= 0) {
        alert('Please enter quanity')
        return false
    }

    if (cartQty[name]) {
        cartQty[name] += Number(qty)
    } else {
        cartQty[name] = Number(qty)
    }

    cartPrice[name] = price

    document.getElementById("orderBody").innerHTML = ""

    var total = 0

    for (var item in cartPrice) {
        const tr = document.createElement("tr");
        const nameTd = document.createElement("td");
        const qtyTd = document.createElement("td");
        const priceTd = document.createElement("td");
        const subTotal = document.createElement("td");

        nameTd.innerHTML = item
        qtyTd.innerHTML = cartQty[item]
        priceTd.innerHTML = cartPrice[item]
        subTotal.innerHTML = cartPrice[item] * cartQty[item]
        total += cartPrice[item] * cartQty[item]

        tr.appendChild(nameTd);
        tr.appendChild(qtyTd);
        tr.appendChild(priceTd);
        tr.appendChild(subTotal);

        document.getElementById("orderBody").appendChild(tr)
    }

    document.getElementById("totalPrice").innerHTML = total

    localStorage.setItem("cartQty", JSON.stringify(Object.entries(cartQty)));
    localStorage.setItem("cartPrice", JSON.stringify(Object.entries(cartPrice)));
    localStorage.setItem("total", total);
}

function addFavourite() {
    localStorage.setItem("favCartQty", localStorage.getItem("cartQty"));
    localStorage.setItem("favCartPrice", localStorage.getItem("cartPrice"));
    localStorage.setItem("favTotal", localStorage.getItem("total"));
}

function applyFavourite() {
    var cartQty = JSON.parse(localStorage.getItem("favCartQty"));
    var cartPrice = JSON.parse(localStorage.getItem("favCartPrice"));

    cartQty = Array.from(cartQty)
    cartPrice = Array.from(cartPrice)

    if (cartPrice[0] && cartPrice[0].length > 0) {

        document.getElementById("orderBody").innerHTML = ""

        var total = 0

        for (var item in cartPrice) {
            const tr = document.createElement("tr");
            const nameTd = document.createElement("td");
            const qtyTd = document.createElement("td");
            const priceTd = document.createElement("td");
            const subTotal = document.createElement("td");

            nameTd.innerHTML = cartPrice[item][0]
            qtyTd.innerHTML = cartQty[item][1]
            priceTd.innerHTML = cartPrice[item][1]
            subTotal.innerHTML = Number(cartPrice[item][1]) * Number(cartQty[item][1])
            total += Number(subTotal.innerHTML)

            tr.appendChild(nameTd);
            tr.appendChild(qtyTd);
            tr.appendChild(priceTd);
            tr.appendChild(subTotal);

            document.getElementById("orderBody").appendChild(tr)
        }

        document.getElementById("totalPrice").innerHTML = total

        localStorage.setItem("cartQty", localStorage.getItem("favCartQty"));
        localStorage.setItem("cartPrice", localStorage.getItem("favCartPrice"));
        localStorage.setItem("total", total);
    }
}

function loadCart() {
    var cartQty = JSON.parse(localStorage.getItem("cartQty"));
    var cartPrice = JSON.parse(localStorage.getItem("cartPrice"));

    cartQty = Array.from(cartQty)
    cartPrice = Array.from(cartPrice)

    if (cartPrice[0] && cartPrice[0].length > 0) {

        document.getElementById("orderBody").innerHTML = ""

        var total = 0

        for (var item in cartPrice) {
            const tr = document.createElement("tr");
            const nameTd = document.createElement("td");
            const qtyTd = document.createElement("td");
            const priceTd = document.createElement("td");
            const subTotal = document.createElement("td");

            nameTd.innerHTML = cartPrice[item][0]
            qtyTd.innerHTML = cartQty[item][1]
            priceTd.innerHTML = cartPrice[item][1]
            subTotal.innerHTML = Number(cartPrice[item][1]) * Number(cartQty[item][1])
            total += Number(subTotal.innerHTML)

            tr.appendChild(nameTd);
            tr.appendChild(qtyTd);
            tr.appendChild(priceTd);
            tr.appendChild(subTotal);

            document.getElementById("orderBody").appendChild(tr)
        }

        document.getElementById("totalPrice").innerHTML = total

        localStorage.setItem("cartQty", localStorage.getItem("cartQty"));
        localStorage.setItem("cartPrice", localStorage.getItem("cartPrice"));
        localStorage.setItem("total", total);
    }
}

loadCart()