var resultado="";
var cadena;
do{
  var cadena=prompt("Introduce tu cadena de texto");
  if(resultado === [0-9]){
    document.write(error);
  }
  if(resultado == ""){
    resultado=resultado + cadena;
  }else{
    resultado=resultado + " - " + cadena;
  }
 }while(confirm("¿Desea seguir?")); 
document.write(resultado);
