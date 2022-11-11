<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];


$mail->isSMTP(true);                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  					// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'endoriudemy@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '...'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('endoriudemy@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('dapag24790@ishyp.com');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    return true;
}
?>