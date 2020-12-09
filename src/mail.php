<?php

if (isset($_POST['name']) AND isset($_POST['firstname']) AND isset($_POST['subject']) AND isset($_POST['email']) AND isset($_POST['message'])) {
    $to = 'mael@marchand.cloud';
    $subject = '[Portfolio contact] ' . $_POST['subject'];
    $identity = '<' . $_POST['firstname'] . ' ' . $_POST['name']. '> ' .$_POST['email'];
    $message = implode("\r\n", [
        "Vous avez été contacté par $identity",
        "Son message est le suivant : \n",
        $_POST['message'],
    ]);
    $headers = [
        'From: <Portfolio> contact@marchand.cloud' . "\r\n",
        'Reply-To: ' . $identity . "\r\n",
        'X-Mailer: PHP/' . phpversion(),
    ];
    
    try {
        mail($to, $subject, $message, $headers);
    } catch (Exception $e) {
        http_response_code(500);
        die($e);
    }
    header('Location: https://mael.marchand.cloud/');
}
else {
    http_response_code(400);
}
