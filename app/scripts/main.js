// domReady(function(event) {
//    var cartPopup = document.getElementById('cart-popup');
//     var cart = document.getElementById('cart');

//     var onCartMouseover = function() {
//         cartPopup.classList.add('cart-popup--active');
//         console.log('ok');
//     }

//     cart.addEventListener('mouseover', onCartMouseover , false);
// });


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// VanillaJS
document.addEventListener('DOMContentLoaded', function() {
    var cartPopup = document.getElementById('cart-popup');
    var cart = document.getElementById('cart');

    var onCartMouseover = function() {
        cartPopup.classList.add('cart-popup--active');
    }

    var onCartMouseout = function() {
        cartPopup.classList.remove('cart-popup--active');
    }

    cart.addEventListener('mouseover', onCartMouseover, false);
    cart.addEventListener('mouseout', onCartMouseout, false);
})