<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Phương thức không được hỗ trợ.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$input = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Dữ liệu không hợp lệ.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// A hidden field catches basic automated spam without affecting real visitors.
if (!empty($input['website'])) {
    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
    exit;
}

function contact_value(array $input, string $field, int $maxLength): string {
    $value = trim((string) ($input[$field] ?? ''));
    $value = str_replace(["\r", "\n"], ' ', $value);
    return function_exists('mb_substr') ? mb_substr($value, 0, $maxLength) : substr($value, 0, $maxLength);
}

$name = contact_value($input, 'name', 120);
$phone = contact_value($input, 'phone', 40);
$email = contact_value($input, 'email', 254);
$message = trim((string) ($input['message'] ?? ''));
$message = function_exists('mb_substr') ? mb_substr($message, 0, 5000) : substr($message, 0, 5000);

if ($name === '' || $phone === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Vui lòng điền đầy đủ thông tin hợp lệ.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$config = require __DIR__ . '/.resend-config.php';
$apiKey = is_array($config) ? (string) ($config['api_key'] ?? '') : '';
if ($apiKey === '') {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Dịch vụ gửi email chưa được cấu hình.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$recipient = 'mivicompositevn@gmail.com';
$subject = 'Mividoor - yêu cầu liên hệ mới';
$body = "Họ và tên: {$name}\nSố điện thoại: {$phone}\nEmail: {$email}\n\nNội dung:\n{$message}\n";

$payload = json_encode([
    'from' => 'Mividoor Website <noreply@neooi.com>',
    'to' => [$recipient],
    'reply_to' => $email,
    'subject' => $subject,
    'text' => $body,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

$request = curl_init('https://api.resend.com/emails');
curl_setopt_array($request, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
]);
$responseBody = curl_exec($request);
$statusCode = (int) curl_getinfo($request, CURLINFO_RESPONSE_CODE);
$curlError = curl_error($request);
curl_close($request);

if ($responseBody === false || $statusCode < 200 || $statusCode >= 300) {
    error_log('Mividoor contact form Resend error: HTTP ' . $statusCode . ' ' . $curlError);
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Chưa thể gửi yêu cầu. Vui lòng gọi hotline để được hỗ trợ nhanh.'], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
