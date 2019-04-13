document.addEventListener("DOMContentLoaded", function () {
// Menu pojawia się i znika po najechaniu i zabraniu myszki
    var navLi = document.querySelectorAll(" nav > ul > li");
    console.log(navLi);
    // for (var i = 0; i < navLi.length; i++) {
    //     //     navLi[i].addEventListener('mouseover', function () {
    //     //         if (this.querySelector('.dropdown') != null) {
    //     //             this.querySelector('.dropdown').style.display = 'block';
    //     //
    //     //         }
    //     //     })
    //     // }
    //     //
    //     // for (var i = 0; i < navLi.length; i++) {
    //     //     navLi[i].addEventListener('mouseout', function () {
    //     //         if (this.querySelector('.dropdown') != null) {
    //     //             this.querySelector('.dropdown').style.display = 'none';
    //     //
    //     //         }
    //     //     })
    //     // }
// Menu pojawia sie i znika po kliknięciu:
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].addEventListener('click', function () {
            if (this.querySelector('.dropdown') != null) {
                this.querySelector('.dropdown').classList.toggle("visible");
            }
        })
    }

});
