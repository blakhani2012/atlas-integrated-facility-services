<?php
/**
 * Atlas Integrated Facility Services — contact form handler.
 *
 * Receives the quote form (POST), emails it to the address below, and replies
 * with JSON for the site's AJAX submit (or a friendly page for no-JS users).
 *
 * Runs on any standard PHP host (e.g. cPanel). No dependencies.
 */

// ---- Settings -------------------------------------------------------------
$TO      = 'info@atlasifs.com.au';                 // where enquiries are sent
$FROM    = 'noreply@atlasifs.com.au';              // must be on your domain (deliverability)
$SITE    = 'Atlas Integrated Facility Services';
// ---------------------------------------------------------------------------

// Detect whether the site's JavaScript is asking for JSON back.
$wantsJson = (
  (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false) ||
  (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
);

function respond($ok, $message, $wantsJson, $code = 200) {
  http_response_code($code);
  if ($wantsJson) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => $ok, 'message' => $message]);
  } else {
    // Minimal, self-contained page for visitors without JavaScript.
    $color = $ok ? '#1b5e3a' : '#b3261e';
    header('Content-Type: text/html; charset=utf-8');
    echo '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
       . '<title>' . ($ok ? 'Thank you' : 'Something went wrong') . '</title>'
       . '<div style="font-family:system-ui,Segoe UI,Roboto,sans-serif;max-width:560px;margin:12vh auto;padding:0 24px;text-align:center;color:#16261d">'
       . '<div style="width:56px;height:56px;border-radius:16px;background:' . $color . ';margin:0 auto 20px"></div>'
       . '<h1 style="font-size:1.5rem;margin:0 0 10px;color:' . $color . '">' . htmlspecialchars($message) . '</h1>'
       . '<p style="color:#5b6b60">' . ($ok ? "We'll be in touch shortly." : 'Please try again, or call us directly.') . '</p>'
       . '<p style="margin-top:28px"><a href="/" style="color:#1b5e3a;font-weight:600">← Back to ' . htmlspecialchars($SITE) . '</a></p>'
       . '</div>';
  }
  exit;
}

// Only accept POST.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  respond(false, 'Method not allowed.', $wantsJson, 405);
}

// Honeypot — bots fill hidden fields; humans don't. Pretend success, send nothing.
if (!empty($_POST['bot-field'])) {
  respond(true, 'Thank you.', $wantsJson, 200);
}

// Collect + trim fields.
$name    = trim($_POST['name']    ?? '');
$company = trim($_POST['company'] ?? '');
$email   = trim($_POST['email']   ?? '');
$phone   = trim($_POST['phone']   ?? '');
$service = trim($_POST['service'] ?? '');
$message = trim($_POST['message'] ?? '');

// Validate required fields.
$errors = [];
if ($name === '')    $errors[] = 'name';
if ($message === '') $errors[] = 'message';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if ($errors) {
  respond(false, 'Please check the highlighted fields and try again.', $wantsJson, 422);
}

// Strip line breaks from anything that goes into a header (prevents injection).
function clean_header($v) { return trim(str_replace(["\r", "\n", "%0a", "%0d"], '', $v)); }
$safeEmail = clean_header($email);
$safeName  = clean_header($name);

// Build the email.
$subject = 'New website enquiry' . ($service !== '' ? ' — ' . clean_header($service) : '');

$body  = "New enquiry from the Atlas website\n";
$body .= str_repeat('-', 40) . "\n\n";
$body .= "Name:     {$name}\n";
$body .= "Company:  " . ($company !== '' ? $company : '—') . "\n";
$body .= "Email:    {$email}\n";
$body .= "Phone:    " . ($phone !== '' ? $phone : '—') . "\n";
$body .= "Service:  " . ($service !== '' ? $service : '—') . "\n\n";
$body .= "Message:\n{$message}\n\n";
$body .= str_repeat('-', 40) . "\n";
$body .= "Sent " . date('D, d M Y H:i') . "\n";

$headers  = "From: {$SITE} <{$FROM}>\r\n";
$headers .= "Reply-To: {$safeName} <{$safeEmail}>\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send.
$sent = @mail($TO, $subject, $body, $headers, "-f{$FROM}");

if ($sent) {
  respond(true, "Thanks! We've received your request and will be in touch shortly.", $wantsJson, 200);
} else {
  respond(false, 'Sorry — we could not send your message. Please call or email us directly.', $wantsJson, 500);
}
