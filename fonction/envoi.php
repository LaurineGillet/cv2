<?php
header( 'content-type: text/html; charset=utf-8' );
// MAIL 

if (isset($_POST["name"]) && isset($_POST["mail"]) && isset($_POST["comment"]) && isset($_POST["rgpd"])) 
{


	if (empty($_POST["name"]) || empty($_POST["mail"]) || empty($_POST["comment"]) ) 
	{
	  echo json_encode("Les champs marqués * sont obligatoires");
	}
	else 
	{

		if ( !preg_match( " /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/ " , $_POST["mail"] ))
		{  echo json_encode("mail non valide"); }
		else
		{
			$message = $_POST["name"]." a envoyé le message suivant : ".$_POST["comment"];
			$to = "laurine.gillet@free.fr";
			$subject = "mail issu de mon formulaire";
			$from = $_POST["mail"];
			$headers = "From:" . $from;
		    if(mail($to,$subject,$message, $headers)){
			  echo json_encode("Mail envoyé avec succès");
			}else{
			  echo json_encode("Erreur sur ce mail :") ;
			}
		}
	}
}

// FICHIER

if (isset($_FILES['monfichier']) AND $_FILES['monfichier']['error'] == 0)
{
        // Testons si le fichier n'est pas trop gros
        if ($_FILES['monfichier']['size'] <= 1000000)
        {
                // Testons si l'extension est autorisée
                $infosfichier = pathinfo($_FILES['monfichier']['name']);
                $extension_upload = $infosfichier['extension'];
                $extensions_autorisees = array('jpg', 'jpeg', 'gif', 'png', 'pdf');
                if (in_array($extension_upload, $extensions_autorisees))
                {
                        // On peut valider le fichier et le stocker définitivement
                        move_uploaded_file($_FILES['monfichier']['tmp_name'], 'uploads/' . basename($_FILES['monfichier']['name']));
                        echo "L'envoi a bien été effectué !";
                }
        }
}
?>