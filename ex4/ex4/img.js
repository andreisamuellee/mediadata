$(function () {
    const valitseVari = function(evt) {
        $(this).hide();
        $('ul').append('<li> ' + $(this).attr('src').split('.')[0] + ' </li>');
    };

    $('#img1').hide();
    $('#img2').hide();
    $('#img3').hide();

    $('button').on("click", function () {
        $('#img1').show();
        $('#img2').show();
        $('#img3').show();
        $("#advice").text('select your favourite colour among the colours');
        $("#img1").attr("src", "red.jpg").click(valitseVari);;
        $("#img2").attr("src", "yellow.jpg").click(valitseVari);;
        $("#img3").attr("src", "blue.jpg").click(valitseVari);;
        $("#sel").text('your favourite colours in order');
    });
});