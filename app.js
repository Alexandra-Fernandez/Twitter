window.addEventListener("load", function() {
	var boton=document.getElementById("click");
	var textArea="";
	boton.addEventListener("click",function(){
		textArea= document.getElementById("input").value;
		
   		
   		var newItem = document.createElement("p");
    	var textnode = document.createTextNode(textArea);
    	newItem.appendChild(textnode);

    	var contenedor = document.getElementById("contenedor");
    	contenedor.insertBefore(newItem, contenedor.childNodes[0]);

	});

});