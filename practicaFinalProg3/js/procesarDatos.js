
function GuardarPersona(id){
        alert(id);
    
             if(id==null){
             	alert("ID NULL");
             var path=window.location.pathname.substring(1);
			var ape = document.getElementById('apellido').value;
			var nom = document.getElementById('nombre').value;
			var dnii = document.getElementById('dni').value;
            
			var fotoo = document.getElementById('foto').value;
       
	$.ajax({
	        type: "POST",
	        url: "http://127.0.0.1/practicaFinalProg3/ws/index.php/personas/",
	        data: {"nombre":nom,"apellido":ape,"dni":dnii,"foto":fotoo},
	        dataType:"json",
	        success: function(data, textStatus, jqXHR){
	            console.log(data,textStatus,jqXHR);
	          //  renderLista(data);
	           document.location.href="formGrillaWS.php";
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            console.log(errorThrown);
	            alert("No se pudo modificar " + errorThrown);
	        }
	    });
      }
      else{
       	var ape = document.getElementById('apellido').value;
			var nom = document.getElementById('nombre').value;
			var dnii = document.getElementById('dni').value;
			var fotoo = document.getElementById('foto').value;
        alert(id);

	$.ajax({
	        type: "PUT",
	        url: "http://127.0.0.1/practicaFinalProg3/ws/index.php/personas/",
	        data: {"nombre":nom,"apellido":ape,"dni":dnii,"foto":fotoo,"id":id},
	       
	        success: function(data, textStatus, jqXHR){
	            
	             document.location.href="formGrillaWS.php";
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            console.log(errorThrown);
	            alert("No se pudo modificar " + errorThrown);
	        }
	    });   

      }
}