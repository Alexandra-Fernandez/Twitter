window.addEventListener("load", function() {
	var boton=document.getElementById("boton");
    var textArea = document.getElementById("input");
	boton.addEventListener("click",function(e){
        e.preventDefault();
        var textArea = document.getElementById("input").value;
   		
   		var newItem = document.createElement("div");
        newItem.innerText = textArea;
    
    	var contenedor = document.getElementById("contenedor");
    	contenedor.insertBefore(newItem, contenedor.childNodes[0]);
        textArea.value = "";
        
	});
    function agregaMensaje () {
        var div = document.createElement("div");
        div.innerText = texto;
        var mensajes = document.getElementById("contenedor");
        mensajes.inserBefore(div, mensajes.childNodes[0]);
    };
    
    textArea.addEventListener("keydown",function(){
       boton.disabled=false;
       var limite = 140;
       var longitud = document.getElementById("input").value.length;
       var contador = document.getElementById("contador");
       contador.innerText= limite-longitud;
       if (longitud>=limite){
           contador.classList.add("colorRed");
           boton.disabled=true;

       } else {
           contador.classList.remove("colorRed");
       }
    });       
});

    
    
 
