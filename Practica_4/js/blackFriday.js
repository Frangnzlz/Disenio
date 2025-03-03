$(document).ready(function() {
    var categorias = ["Puzzles", "Juegos de tablero", "Rompecabezas","Cartas", "Maquetas", "Infantiles" ]

    $("#inputCategoria").autocomplete({
        source : categorias
    })
    $("section").accordion({
        collapsible : true
    })
    $( "#menu" ).menu({
        items: "> :not(.ui-widget-header)"
      });
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 150,
        values: [ 20, 75 ],
        slide: function( event, ui ) {
          $( "#precio" ).val( ui.values[ 0 ]+  "€ " + " - " + ui.values[ 1 ] + "€" );
        }
      });
      $( "#precio" ).val(  $( "#slider-range" ).slider( "values", 0 ) +"€ "  +
        " - " + $( "#slider-range" ).slider( "values", 1 ) + "€" );
});