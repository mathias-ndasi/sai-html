window.onload = function () {
    let date = new Date()
    let dateContainer = document.querySelectorAll(".date");
    let timeContainer = document.querySelectorAll(".time");

    dateContainer.forEach(item => {
        item.innerHTML = date.toLocaleDateString();
    })

    timeContainer.forEach(item => {
        item.innerHTML = date.toLocaleTimeString();
    })


    //   toggling old applications containers
    $('.block').siblings().find('.block-dropdown').slideUp('fast');

    $(function () {

        'use strict';

        (function () {

            // var aside = $('.block'),

            // dropdown menu in the side nav

            $('.block').on('click', function () {

                $(this).toggleClass('opend').siblings().removeClass('opend');

                if ($(this).hasClass('opend')) {

                    $(this).find('.block-dropdown').slideToggle('fast');

                    $(this).siblings().find('.block-dropdown').slideUp('fast');

                } else {

                    $(this).find('.block-dropdown').slideUp('fast');

                }

                // console.log("mathias")

            });

        }());

    });
}