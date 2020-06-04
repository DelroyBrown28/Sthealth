$(document).ready(function () {



    $('#get_started_button').click(function () {

        var bounce = new Bounce();
        bounce
            .scale({
                from: {
                    x: 1,
                    y: 1
                },
                to: {
                    x: 0.1,
                    y: 0.3
                },
                easing: "sway",
                duration: 3000,
                delay: 65,
                stiffness: 1
            })
            .translate({
                from: {
                    x: 0,
                    y: 0
                },
                to: {
                    x: 0,
                    y: 0
                },
                easing: "sway",
                duration: 3000,
                delay: 30,
            })
            .applyTo(document.querySelectorAll("#get_started_button"));
            
        setTimeout(function () {
            location.href = "https://stackoverflow.com/questions/9877263/time-delayed-redirect";
        }, 1000);
    })



})