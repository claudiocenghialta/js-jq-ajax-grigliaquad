$(document).ready(function () {


    var sourceRow = $("#row-template").html();
    var templateRow = Handlebars.compile(sourceRow);
    var sourceSquare = $("#square-template").html();
    var templateSquare = Handlebars.compile(sourceSquare);

    //genero 6 righe con al loro interno 6 quadrati
    for (i = 0; i < 6; i++) {
        var contextRow = "";
        var htmlRow = templateRow(contextRow);
        $('.container').append(htmlRow)
        for (j = 0; j < 6; j++) {
            var contextSquare = "";
            var htmlSquare = templateSquare(contextSquare);
            $('.container .row').eq(i).append(htmlSquare)
        }
    }
    //funzione al click sul quadrato
    $(".square").click(function () {
        var squareSelected = $(this)
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            method: "GET",
            success: function (resp) {
                squareSelected.removeClass("yellow")
                squareSelected.removeClass("green")
                if (resp.response <= 5) {
                    squareSelected.addClass("yellow");
                } else {
                    squareSelected.addClass("green");
                }
                squareSelected.find('h2').html(resp.response)
            },
            error: function (richiesta) {
                alert('errore');
            }
        })
    })




});