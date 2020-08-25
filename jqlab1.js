$(function() {
    $("p:eq(1)").attr('id', 'sp');
    $("#fp").remove();
    $("#fdiv").css({
        backgroundColor: 'grey',
        color: 'white',
    });

    $('#fb').click(function(){
        $('#fdiv').append('<p id="tp">Hello user</p>');
    });
    
    //$('#4p').hide();

    $("#sdiv").hover(
        function () { 
            $('#4p').text('About to select a link...');
            //$('#4p').show();
            }, 	
        function () {
            //$('#4p').hide();
            $('#4p').html('&nbsp;');
        }, 
    );
});