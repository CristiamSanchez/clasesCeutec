//Funcion que controla lo que se mira en pantalla(menus)
function continuar(paso) {
  switch (paso) {
    case "0":  
      document.getElementById("card2").style.display = "none";
      document.getElementById("card3").style.display = "none";
      document.getElementById("card4").style.display = "none";
      document.getElementById("card1").style.display = "block";
      
      break;
    case "1": //onclick="continuar('1')">Registrarse
      if (
        document.getElementById("user").innerText != "" &&
        parseInt(get_usuario()) == 1
      ) {
        document.getElementById("card1").style.display = "block";
    
        document.getElementById("card2").style.display = "none";
        document.getElementById("card3").style.display = "none";
        document.getElementById("card4").style.display = "none";
        
      } else if (
        document.getElementById("user").innerText != "" &&
        parseInt(get_usuario()) == 2
      ) {
        document.getElementById("card1").style.display = "block";
        
        document.getElementById("card2").style.display = "none";
        document.getElementById("card3").style.display = "none";
        document.getElementById("card4").style.display = "none";
        
      } else {
        document.getElementById("card1").style.display = "block";
      
        document.getElementById("card2").style.display = "none";
        document.getElementById("card3").style.display = "none";
        document.getElementById("card4").style.display = "none";
        
      }
      break;
    case "2": //onclick="continuar('2')">Productos
      
        document.getElementById("card1").style.display = "none";
        document.getElementById("card4").style.display = "none";
        document.getElementById("card3").style.display = "none";
        document.getElementById("card2").style.display = "block";
       
      break;
    case "3": //onclick="continuar('3')">Categorias
      
        document.getElementById("card1").style.display = "none";
        document.getElementById("card2").style.display = "none";
        document.getElementById("card3").style.display = "block";
        document.getElementById("card4").style.display = "none";
        
      
      break;
    case "4": //"continuar('4')">Check out
     
        document.getElementById("card1").style.display = "none";
        document.getElementById("card2").style.display = "none";
        document.getElementById("card3").style.display = "none";
        document.getElementById("card4").style.display = "block";
       
      break;

    case "5": //"continuar('5')">Listar Productos por categoria
      document.getElementById("card1").style.display = "none";
      document.getElementById("card2").style.display = "none";
      document.getElementById("card3").style.display = "none";
      document.getElementById("card4").style.display = "none";
      
      break;

    case "6": //"continuar('6')">Editar usuarios
      document.getElementById("card1").style.display = "none";
      document.getElementById("card2").style.display = "none";
      document.getElementById("card3").style.display = "none";
      document.getElementById("card4").style.display = "none";
      
      break;
     
    default:
      // document.getElementById("cardP").style.display = "block";
      break;
  }
  return false;
}


