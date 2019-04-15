document.addEventListener("DOMContentLoaded", function () {
// Menu pojawia się i znika po najechaniu i zabraniu myszki
    var navLi = document.querySelectorAll(" nav > ul > li");
    console.log(navLi);
    // for (var i = 0; i < navLi.length; i++) {
    //         navLi[i].addEventListener('mouseover', function () {
    //             if (this.querySelector('.dropdown') != null) {
    //                 this.querySelector('.dropdown').style.display = 'flex';
    //
    //             }
    //         })
    //     }
    //
    //     for (var i = 0; i < navLi.length; i++) {
    //         navLi[i].addEventListener('mouseout', function () {
    //             if (this.querySelector('.dropdown') != null) {
    //                 this.querySelector('.dropdown').style.display = 'none';
    //
    //             }
    //         })
    //     };
//Menu pojawia sie i znika po kliknięciu:
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].addEventListener('click', function () {
            if (this.querySelector('.dropdown') != null) {
                this.querySelector('.dropdown').classList.toggle("visible");
            }
        })
    }
    // sekcja z obrzkami- znikajacy podpis
    var chairNameType = document.querySelectorAll(".type-of-chair");
    var chairName = document.querySelectorAll(".name-of-chair");
    console.log(chairName);
    for (var i = 0; i < chairNameType.length; i++) {
        chairNameType[i].addEventListener('mouseover', function () {
            this.children[1].style.display = 'none';
        });
        chairNameType[i].addEventListener('mouseout', function () {
            this.children[1].style.display = 'unset';
        });
    }
// slajder
    var btnrght = document.querySelector(".right");
    var btnleft = document.querySelector(".left");
    var allImg = document.querySelectorAll(".image img");
    console.log(allImg);
    var index = 0;
    allImg[index].classList.add("visible");
    btnrght.addEventListener('click', function () {

        allImg[index].classList.remove('visible');
        index = index + 1;
        if (index >= allImg.length) {
            index = 0;
        }
        allImg[index].classList.add('visible');

    });
    btnleft.addEventListener('click', function () {

        allImg[index].classList.remove('visible');
        index = index - 1;
        if (index < 0) {
            index = allImg.length - 1;
        }
        allImg[index].classList.add('visible');
    });


});
