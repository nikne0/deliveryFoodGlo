/*
 *** Created by NikNet 10.04.2020
*/
"use strict";

const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle("active");

}

new WOW().init();



    