document.addEventListener("DOMContentLoaded", function() {

    var navLi = document.querySelectorAll(" nav > ul > li");
    console.log(navLi);
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].addEventListener('mouseover', function() {
            if (this.querySelector('.dropdown') != null) {
                this.querySelector('.dropdown').style.display = 'block';
            }
        })
    }
    for (var i = 0; i < navLi.length; i++) {
    navLi[i].addEventListener('mouseout', function() {
            if (this.querySelector('.dropdown') != null) {
                this.querySelector('.dropdown').style.display = 'none';
            }
        })
    }


})
