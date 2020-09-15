$(function () {
    const Rakenna = function(nimi, yhteenveto, kuva, linkki, genret) {
        console.log("Rakenna "+ genret);
        $('#fdiv').append('<ul>');
        $("ul:last").append('<h2>' + nimi + '</h2>');
        $("ul:last").append('<p>' + yhteenveto + '</p>');
        $("ul:last").append('<img></img>');
        $("img:last").attr("src", kuva);
        $("ul:last").append('<br><a href=' + linkki + '>Link to website</a>');
        $("ul:last").append('<ul><h3>Genret:</h3></ul>');

        for (let i = 0; i<genret.length; i++){
            $("ul:last").append('<li>'+genret[i]+'</li>');
          }
        
        if (genret.length == 0){
            $("ul:last").append('<p>Dataa ei saatavilla</p>');
        }
    };

    $('#hakunappi').click(function () {
        $.getJSON('http://api.tvmaze.com/search/shows?q='+$('#hakuteksti').val(), function (data) {

            console.log(data);
                for(let i = 0; i < data.length; i++){
                    console.log(data[i]);
                    let nimi = data[i].show.name ? data[i].show.name : "";
                    let yhteenveto = data[i].show.summary ? data[i].show.summary : "";
                    let kuva = data[i].show.image ? data[i].show.image.medium : "";
                    let linkki = data[i].show.url ? data[i].show.url : "";
                    let genret = data[i].show.genres ? data[i].show.genres : "";
                    Rakenna(nimi, yhteenveto, kuva, linkki, genret);
                }
        });
    });
});