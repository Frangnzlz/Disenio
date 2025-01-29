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
        let registros = table.find("tr").not(":first");
        registros.remove()        
    })

    $(".buscador input").on("keyup", function(){
        let val = $(this).val()
        //**Por como esta estructuado mi html, necesito buscar el siguiente hermano del padre 
        // del input y saltarme el primer tr que se encuentre */
        $(this).parent().next().find("tr").not(":first").filter(function(){
            // **Comprueba si se encuentra el texto actual del input dentro del listado del campo codigo
            // El campo codigo se trata del primer hijo del registro*/
            let existe = $(this).children().first().text().includes(val);  
            $(this).toggle(existe)
        })

    })
        
    function generarCodigos(){
        let chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
        let resultado = "";
        for(let i = 0; i < 6; i++) {
            resultado += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return resultado
    }

    let tablas = $("table")
    for(let i = 0; i < tablas.length; i++){
        let tr = $(tablas[i]).find("tr").not(":first")

        for(let j = 0; j < tr.length; j++){
            let td = $(tr[j]).children().first();
            $(td).text(generarCodigos);
        }
    }
});