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


function pay() {
    var fields = document.getElementsByClassName("input_field")
    var security_code = document.getElementById("security_code").value
    var exp_month = document.getElementById("exp_month").value
    var exp_year = document.getElementById("exp_year").value
    var error = false;

    for (var item in Array.from(fields)) {
        var val = fields[item].value

        if (!val) {
            error = true
        }
    }

    if (!security_code) {
        error = true
    }

    if (!exp_month) {
        error = true
    }

    if (!exp_year) {
        error = true
    }

    if (!error) {
        var firstDay = new Date("2009/06/25");
        var nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 10)

        alert('Congratulations, your order will be delivered ' + nextWeek)
    } else {
        alert('There are missing values. please fill form')
    }
}


