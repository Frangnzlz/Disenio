$(document).ready(function() {
    $('#mensaje').hide();

    $('#form').click(function() {
        $('#mensaje').show();
        $('html, body').animate({
            scrollTop : $("#ofertas-form").offset().top
        })
    });

    $('#pais').change(function() {
        let prefijo = $(this).find(':selected').data('prefijo') || '';
        $('#telefono').val(prefijo + ' ');
    });
    $('.enlace img').hover(
        function() { $(this).animate({ opacity: 0.8, width : "225px" , height  : "225px" }, 500); },
        function() { $(this).animate({ opacity: 1, width : "200px" , height  : "200px"  }, 500); }
    );
});