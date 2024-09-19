// JavaScript Document
var datos={};
var misDatos=info=>{
	console.log(info);
	datos.usuarios=info;
	var html="";
	html+="<h2>Productos</h2>";
	datos.usuarios.map(usuario=>{
		
		for(let propiedad of Object.keys(usuario)){
			html+="<li>"+propiedad+": "+usuario[propiedad]+"</li>";
		}
		html+="<hr/>";
	})
	document.getElementById("resultados").innerHTML=html;
}