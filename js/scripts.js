
var alto_menu = $("#menu").innerHeight();

new WOW().init();

var acciones = 
{
    listo:function(){
        $("#menu .container .barras").click(acciones.desplazar_menu);
    },

    desplazar_menu:function(e){
        e.preventDefault();
        $("#menu nav").toggleClass("abierto");
        $("body").toggleClass("abierto");
        $(this).find("i").toggleClass("fa-close")
    },

    oscurecer_menu:function(){
        if(alto_menu < $(window).scrollTop()){
            $("#menu").addClass("fondo");
        }else{
            $("#menu").removeClass("fondo");
        }
    },

    precarga:function(){
		$(".trama-inicio").fadeOut("slow");
        $(".box-image-trama").fadeOut("slow");
		$("body").removeClass("abierto");
		
	},

}

$(window).scroll(acciones.oscurecer_menu);
$(window).scroll(acciones.whatsapp);

$(document).ready(acciones.listo);
$(document).ready(acciones.precarga);

