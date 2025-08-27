<?php
session_start();

// Allow API calls from your React frontend
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "error" => "Invalid request method."]);
    exit;
}

// Read the raw POST body
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!$data) {
    echo json_encode(["success" => false, "error" => "No or invalid JSON received."]);
    exit;
}

// Dummy credentials
$validUsername = 'admin';
$validPassword = '12345';

$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

if ($username === $validUsername && $password === $validPassword) {
    $_SESSION['admin_logged_in'] = true;
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}

?>