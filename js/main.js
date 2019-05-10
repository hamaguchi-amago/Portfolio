jQuery(document).ready(function($) {

    // Smooth scroll for the menu and links with .scrollto classes
    $('.smothscroll').on('click', function(e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top - 62
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    $('.carousel').carousel({
        interval: 3500
    });

    // C#
    var doughnutData = [{
            value: 100,
            color: "#1abc9c"
        },
        {
            value: 0,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("c-sharp").getContext("2d")).Doughnut(doughnutData);

    // JavaScript Chart
    var doughnutData = [{
            value: 100,
            color: "#1abc9c"
        },
        {
            value: 0,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

    // HTML Chart
    var doughnutData = [{
            value: 100,
            color: "#1abc9c"
        },
        {
            value: 0,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

    // Bootstrap Chart
    var doughnutData = [{
            value: 90,
            color: "#1abc9c"
        },
        {
            value: 10,
            color: "#ecf0f1"
        }
    ];

    var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

    // java
    var doughnutData = [{
            value: 65,
            color: "#1abc9c"
        },
        {
            value: 35,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);



    // c
    var doughnutData = [{
            value: 45,
            color: "#1abc9c"
        },
        {
            value: 55,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("C").getContext("2d")).Doughnut(doughnutData);

    // python
    var doughnutData = [{
            value: 10,
            color: "#1abc9c"
        },
        {
            value: 90,
            color: "#ecf0f1"
        }
    ];

    var myDoughnut = new Chart(document.getElementById("python").getContext("2d")).Doughnut(doughnutData);
    // python
    var doughnutData = [{
            value: 10,
            color: "#1abc9c"
        },
        {
            value: 90,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("php").getContext("2d")).Doughnut(doughnutData);
});