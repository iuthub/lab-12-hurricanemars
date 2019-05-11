import 'bootstrap';
import './scss/styles.scss'
import $ from 'jquery'

$(document).ready(() => {
    $('.header').height($(window).height());
});


$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top - 100
    }, 1000)
});