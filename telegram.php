<?php

/* https://api.telegram.org/bot1373130388:AAEdnpEDEsabpJ15Pj-zR53jb9MdK9r3qic/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$token = "1373130388:AAEdnpEDEsabpJ15Pj-zR53jb9MdK9r3qic";
$chat_id = "-452547779";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email,
  'Тема: ' => $subject,
  'Сообщение: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>