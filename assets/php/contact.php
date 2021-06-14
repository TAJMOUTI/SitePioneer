
// if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
//     $name = $_POST['name'];
//     $email = $_POST['email'];
//     $message = $_POST['messsage'];
//     $to = 'nizar.tajmouti@gmail.com';
//     $subject = "Nouveau message du Site Pioneer";

//     // headers
//     $headers  = "From: ".$name." <".$email.">\r\n";
//     $headers .= "Reply-To: ".$email."\r\n";
//     $headers .= "MIME-Version: 1.0\r\n";
//     $headers .= "Content-type: text/html; charset=utf-8";

//     //send
//     $send = mail($to, $subject, $name, $email, $message, $headers);
//     if ($send) {
//         echo '<br>';
//         echo 'Merci de nous avoir contacté. Nous reviendrons vers toi très rapidement.';
//     }else{
//         echo 'error';
//     }
// }

// if(isset($_POST['submit'])){
//     $name = $_POST['name'];
//     $mailform = $_POST['email'];
//     $message= $_POST['message'];
//     echo 'hello';
//     $mailTo = "nizar.tajmouti@gmail.com";
//     $txt = $_POST['name']." avec comme adresse: ".$mailform." vous a envoyé le message suivant:";
//     $txt .=$message;
//     if(mail($mailTo,'message du site Pioneer',$txt)){
//         echo "success";
//     }
    
// } 
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    <?php
    $retour = mail('nizarnarges@hotmail.fr', 'Envoi depuis la page Contact', $_POST['message'], 'From : Site Pioneer');
    if ($retour) {
        echo '<p>Votre message a bien été envoyé.</p>';
    }
    ?>
</body>
</html>

<div class="mt-4 container-contact">
            <div class="contact-box ">
                <div class="left heading">
                    <div class="left-contentmt-3 mb-0 animated" data-animation="fadeIn" data-delay="1000">
                    <h2>Adresse</h2>
                    <p>37 Quai de Grenelle, 75015 Paris</p>
                    <h2>Réseaux sociaux</h2>
                    <div class="row networks">
                        <a class="mt-3 mb-0 animated" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bdepioneer/">
                            <img src="./assets/img/instagram.png" alt="Instagram icon" >
                        </a>
                        <a class="mt-3 mb-0 animated" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bdepioneer">
                            <img src="./assets/img/facebook.png" alt="Facebook icon" >
                        </a>
                        <a class="mt-3 mb-0 animated" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/bdepioneer">
                            <img src="./assets/img/linkedin.png" alt="LinkedIn icon" >
                        </a>
                    </div>
                    
                    </div>
                    
                </div>
                <div class="right">
                    <h2>Contactez nous</h2>
                    <h3>Une question? Une remarque? Envoie-nous un petit message!</h3>
                    <form method="post" action="">
                        <input type="text" class="field" placeholder="Nom" name="name" required>
                        <input type="email" class="field" placeholder="Email" name="email" required>
                        <textarea placeholder="Message" class="field" name="message" required></textarea>

                       <!-- <div class="g-recaptcha" data-sitekey="6Le9d8wZAAAAAPvT665WBOvZEGwyaqh6gQzk-LQ2"></div>-->

                        <button class="btn" type="submit" name="submit">Envoyer</button>
                       
                    </form>
                    
                    

                    
                </div>
            </div>
        </div>