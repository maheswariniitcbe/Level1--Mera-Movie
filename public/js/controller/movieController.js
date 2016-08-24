'use strict';

module.exports = function($scope, $http) {
$(function(){
$('.panel').hover(function(){
        $(this).find('.panel-footer').slideDown(250);
    },function(){
        $(this).find('.panel-footer').slideUp(250); //.fadeOut(205)
    });
})
};