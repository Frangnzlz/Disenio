$(document).ready(function(){
    
    $(".añadir button").click(function(){
        let tarea = $(".añadir input").prop("value");
        if(tarea.trim() != ""){

            let lista = $(".tareas ul");

            let nuevaTarea = $("<li>").text(tarea);

            nuevaTarea.click(function(){
                $(this).toggleClass("completa");
            })
            lista.prepend(nuevaTarea)
            $(".añadir input").prop("value", "");
        }
    })



    $(".funciones #borrarCompleta").click(function(){
        console.log("funciona")
        $(".completa").remove();

    })
    $(".funciones #vaciarLista").click(function(){
        $(".tareas ul").empty();
    })



})