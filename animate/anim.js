$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function () {
                window.location.hash = hash;
            });
        }
    });

    $("#spage").hover(
        function () {
            $("#spage").animate({width: "80%"});
        },
        function () {
            $("#spage").animate({width: "100%"});
        },);

    $("#nav1").animate({opacity: "0"});

    $("#nav1").hover(
        function () {
            $("#nav1").animate({opacity: "1"});
        },
        function () {
            $("#nav1").animate({opacity: "0"});
        },);
});