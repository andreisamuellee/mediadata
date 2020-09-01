$(function () {
    $('#hakunappi').click(function () {
        $.getJSON('http://api.tvmaze.com/search/shows?q='+$('#hakuteksti').val(), function (data) {
            /*    
            console.log(data);
                for(let i = 0; i < data.length; i++){
                    console.log(data[i]);
                }*/

                $.each(data, function(index, value){
                    console.log(index, value);
                });
        });
    });
});