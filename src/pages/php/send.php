<?php /** @noinspection ALL */


//$admin_email = 'hello@boto.agency';
$admin_email = 'zimboroda@gmail.com';


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


if (isset($_POST)) {
  $name = $_POST['name'];
  $pass = $_POST['password'];
  $phone = str_replace(['(', ')', ' ', '-'], '', $_POST['phone']);
  $text = $_POST['textarea'];
  $filename = '';

  if (isset($_FILES)) {
    $filename = 'uploads/' . str_replace(' ','',$_FILES['file']['name']) ;
    move_uploaded_file($_FILES['file']['tmp_name'], $filename);
    $filename = 'https://' . $_SERVER['HTTP_HOST'] . '/form/' . $filename ;
  }
  $massage =

    'Имя: ' . $name . '<br>' .
    'Номер телефона: ' . $phone . '<br>' .
    'Пароль: ' . $pass . '<br>' .
    'Сообщение: ' . $text . '<br>' .
    'Файл:' . $filename;


} else {
  return 'Error';
}

$name = isset($name) ? $name : 'Аноним';


mail($admin_email, adopt($form_subject), $massage, $headers);
