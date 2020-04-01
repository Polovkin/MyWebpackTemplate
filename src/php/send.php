<?php /** @noinspection ALL */




$admin_email = 'TEST';
$massage = '';

function adopt($text)
{
  return '=?UTF-8?B?' . Base64_encode($text) . '?=';
}

function br2nl($input)
{
  return preg_replace('/<br\s?\/?>/ius', "\n", str_replace("\n", "", str_replace("\r", "", htmlspecialchars_decode($input))));
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
  "Content-Type: text/html; charset=utf-8" . PHP_EOL .
  'From: ' . adopt("AmemoryPro") . ' <' . $admin_email . '>' . PHP_EOL .
  'Reply-To: ' . $admin_email . '' . PHP_EOL;

//Question sections

if (isset($_POST['quest-form-1']) !== null) {
  $platform = implode(', ', $_POST['platform']);
  $integration = implode(', ', $_POST['integration']);
  $description = $_POST['description'];
  $links = $_POST['links'];
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $form_subject = 'Заявка от ' . $name;
  $massage =
    'От: ' . $name . '<br>' .
    'На каких платформах: ' . $platform . '<br>' .
    'Интеграция с сервисами: ' . $integration . '<br>' .
    'Описание: ' . $description . '<br>' .
    'Ссылки на проекты: ' . $links . '<br>' .
    'Номер телефона: ' . $phone . '<br>' .
    'EMail: ' . $email;

} else if (isset($_POST['quest-form-2']) !== null) {
  $phone = $_POST['phone'];
  $massage = 'Номер телефона: ' . $phone . '<br>';

} else if (isset($_POST['quest-form-3']) !== null) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $description = $_POST['description'];
  $massage =
    'От: ' . $name . '<br>' .
    'EMail: ' . $email . '<br>' .
    'Описание: ' . $description;


} else if (isset($_POST['quest-form-4']) !== null) {
  $phone = $_POST['phone'];
  $massage = 'Номер телефона: ' . $phone . '<br>';

}  else {
  return 'Error';
}



mail($admin_email, adopt($form_subject), $massage, $headers);




