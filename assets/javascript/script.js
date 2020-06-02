$(document).ready(function () {

    $('#get_started_button').click(function () {


        $('.main_title').animate({
            left: '-300px'
        }, 200, function () {
            $('.main_title').fadeOut(200, function () {
                $('.stealth_blurb').animate({
                    right: '-300px'
                }, 200, function () {
                    $('.stealth_blurb').fadeOut(200, function() {
                        location.href = '#';
                    });
                })
            });
        })

    })

})