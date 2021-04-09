/*************************
* REVOLUT
*************************/

// Referenze
var dropdown = $('.header-right .with-dropdown');

dropdown.click(function() {

    dropdown.children('.dropdown').not($(this).children('.dropdown')).hide();
    $(this).children('.dropdown').toggle();
})