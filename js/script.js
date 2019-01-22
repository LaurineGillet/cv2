// $(document).ready(function(){
// });

// function verifForm1() {
// var form1 = document.getElementById('form1');
// var result = document.getElementById('result');
// result.innerHTML ="";
// var myRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,8}$/;

// if (form1.username.value.length ==0) {
// 		result.innerHTML= 'Le nom est obligatoire';
// 		return false;
// 	}

// if(!isNaN(form1.username.value)) {
// 		result.innerHTML = "Le nom ne peut pas être numérique";
// 		return false;
// 	}

// if(form1.texte.value.length < 100){
// 	result.innerHTML= "Le message est inférieur à 100 caractères";
// 	return false;}

// if(myRegex.test(form1.usermail.value)){
// 	return true;}
// else {
// 	result.innerHTML="Mail invalide";
// 	return false;}
// }


$(document).ready(function() {
$("#valid").click(function(e){
		e.preventDefault();
		var name = $("#name").val();
		var mail = $("#mail").val();
		var comment = $("#comment").val();
		var rgpd = $("#rgpd").is(':checked');
		var myRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
		if (!isNaN(name) || name.length == 0)
		{
		$("#result").html("Le nom ne peut être numérique et est obligatoire ");	
		}
		else
		{
			if (!myRegex.test(mail))
			{
			$("#result").html("Le mail n'est pas correct");	
			}
			else
			{	if (comment.length < 50)
				{
				$("#result").html("Le commentaire doit faire 50 caractères minimum ");	
				}
				else
				{
					if (!$("#rgpd").is(':checked'))
					{
					$("#result").html("Vous devez valider notre politique de confidentialité des données ");	
					}
					else
					{					
						$.ajax({
						url : 'http://localhost/cv2/fonction/envoi.php',
						type : 'POST',
						data : { "name" : name, "mail" : mail, "comment" : comment, "rgpd" : $("#rgpd").is(':checked') },
						dataType : 'json',
						success : function(donnees, statut){ // success est toujours en place, bien sûr !
						$("#result").html(donnees);
						},
						error : function(resultat, statut, erreur){
						$("#result").html("erreur : "+erreur+" status : "+status);	
						}
						});
					}
				}
			}
		}

});

$('#comment').keyup(function() {
 
    var nombreCaractere = $(this).val().length;
 
    // // On soustrait le nombre limite au nombre de caractère existant
    var nombreCaractere = 50 - nombreCaractere;
 
    var nombreMots = jQuery.trim($(this).val()).split(' ').length;
    if($(this).val() === '') {
     	nombreMots = 0;
    }
 
    var msg = ' ' + nombreMots + ' mot(s) | ' + nombreCaractere + ' Caractères obligatoires restants';
    $('#compteur').text(msg);
 
 	// if(nombreCaractere = 50){
 	// 	$('#compteur').fadeOut();
 	// };
  });
 
})