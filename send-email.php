<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nameFeedback = $_POST['nameFeedback'];
    $emailFeedback = $_POST['emailFeedback'];
    $textFeedback = $_POST['textFeedback'];

    // Ваш код обработки данных формы здесь

    // Отправка письма
    $to = 'akvashnin64@gmail.com';
    $subject = 'Новая форма обратной связи';
    $message = "Имя: $nameFeedback\nEmail: $emailFeedback\nСообщение: $textFeedback";
    $headers = "From: akvashnin64@gmail.com\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false]);
    }
} else {
    echo json_encode(["error" => "Invalid request method"]);
}
?>