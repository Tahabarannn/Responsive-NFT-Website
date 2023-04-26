'use strict';

/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});




/**
 * HEADER
 * header visible when window scroll down to 200px
 */


const header = document.querySelector("[data-header]");
const activeElementOnScroll = function () {
    if(window.scrollY > 200) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElementOnScroll);