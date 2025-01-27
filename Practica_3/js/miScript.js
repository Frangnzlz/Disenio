$(document).ready(function () {
    $("table").on("click", ".eliminar", function(){
        $(this).closest("tr").remove();
    })
    $("#pendiente").on("click", ".cambiar", function(){
        const fila = $(this).closest("tr")
        $("#atendido table").append(fila);

    })
    $("#atendido").on("click", ".cambiar", function(){
        const fila = $(this).closest("tr");
        $("#pendiente table").append(fila);

    })
    $("section > button").click(function(){
        const table = $(this).prev();
        let registros = table.find("tr");
        // console.log(registros.remove());
        for(let i = registros.length - 1; i > 0; i--){
            $(registros[i]).remove();
        }


        // celdas.remove();
        
    })
});