document.addEventListener("DOMContentLoaded", function () {
    var arrow = document.querySelectorAll(".list_arrow");
    var listelements = document.querySelectorAll(".list_panel li");
    var chair = document.querySelector(".panel_left .title");
    var chairprice = document.querySelector('.panel_right .title.value');
    var color = document.querySelector(".panel_left .color");
    var colorprice = document.querySelector(".panel_right .color.value");
    var pattern = document.querySelector(".panel_left .pattern");
    var patternprice = document.querySelector(".panel_right .pattern.value");
    var transportcheck = document.getElementById("transport");
    var transport = document.querySelector(".panel_left .transport");
    var transportprice = document.querySelector(".panel_right .transport.value");
    var sum = document.querySelector('.sum').firstChild;
    var priceChair = 0;
    var priceColor = 0;
    var pricePattern = 0;
    var priceTransport = 0;
    var priceAll = 0;


// Rozwijanie list
    for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener('click', function () {
            this.nextElementSibling.classList.toggle("show");
        })
    }
// Wybór z listy
    for (var i = 0; i < listelements.length; i++) {

        if (i >= 0 && i <= 2) {
            listelements[i].addEventListener('click', function () {
                chair.innerText = this.innerText;
                chairprice.innerText = this.dataset.price;
                priceChair = parseInt(this.dataset.price);
                priceAll = priceChair + pricePattern + priceColor + priceTransport;
                sum.innerText = priceAll;
                this.parentElement.classList.remove('show');

            })

        }
        if (i > 2 && i < 6) {
            listelements[i].addEventListener('click', function () {
                color.innerText = this.innerText;
                colorprice.innerText = this.dataset.price;
                priceColor = parseInt(this.dataset.price);
                priceAll = priceChair + pricePattern + priceColor + priceTransport;
                sum.innerText = priceAll;
                this.parentElement.classList.remove('show');


            })

        }
        if (i >= 6 && i < listelements.length) {
            listelements[i].addEventListener('click', function () {
                pattern.innerText = this.innerText;
                patternprice.innerText = this.dataset.price;
                pricePattern = parseInt(this.dataset.price);
                priceAll = priceChair + pricePattern + priceColor + priceTransport;
                sum.innerText = priceAll;
                this.parentElement.classList.remove('show');

            })

        }

    }

    transportcheck.addEventListener('change', function () {
        console.log(this.checked);
        if (this.checked) {
            transport.innerText = "Transport";
            transportprice.innerText = this.dataset.price;
            priceTransport = parseInt(this.dataset.price);
            priceAll = priceChair + pricePattern + priceColor + priceTransport;
            sum.innerText = priceAll;
            this.parentElement.classList.remove('show');
        }
        if (this.checked === false) {
            transport.innerText = "";
            transportprice.innerText = "";
            priceTransport = 0;
            priceAll = priceChair + pricePattern + priceColor + priceTransport;
            sum.innerText = priceAll;

        }

    });


});
