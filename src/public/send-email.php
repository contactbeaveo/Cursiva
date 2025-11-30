<?php
// Configuration
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Vérifier que c'est une requête POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

// Récupérer les données du formulaire
$data = json_decode(file_get_contents('php://input'), true);

// Validation des données
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Données manquantes']);
    exit;
}

// Nettoyer et sécuriser les données
$name = htmlspecialchars(strip_tags($data['name']));
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(strip_tags($data['phone'] ?? 'Non fourni'));
$service = htmlspecialchars(strip_tags($data['service'] ?? 'Non spécifié'));
$budget = htmlspecialchars(strip_tags($data['budget'] ?? 'Non défini'));
$message = htmlspecialchars(strip_tags($data['message']));

// Valider l'email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email invalide']);
    exit;
}

// Labels des services
$serviceLabels = [
    'site-web' => 'Site web WordPress',
    'ecommerce' => 'Boutique WooCommerce',
    'design' => 'Design graphique',
    'seo' => 'SEO / Référencement',
    'maintenance' => 'Maintenance WordPress',
    'autre' => 'Autre'
];
$serviceLabel = $serviceLabels[$service] ?? $service;

// Labels des budgets
$budgetLabels = [
    '500-1000' => '500$ - 1 000$ CAD',
    '1000-3000' => '1 000$ - 3 000$ CAD',
    '3000-6000' => '3 000$ - 6 000$ CAD',
    '6000+' => '6 000$+ CAD',
    'non-defini' => 'Non défini'
];
$budgetLabel = $budgetLabels[$budget] ?? $budget;

// Destinataire
$to = 'contact@cursiva.ca';

// Sujet de l'email
$subject = 'Nouveau message de contact - Cursiva.ca';

// Corps de l'email en HTML
$emailBody = "
<!DOCTYPE html>
<html lang='fr'>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #06b6d4; margin-bottom: 5px; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #06b6d4; }
        .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2 style='margin: 0;'>🚀 Nouvelle demande de contact</h2>
            <p style='margin: 5px 0 0 0; opacity: 0.9;'>Cursiva - Agence Web WordPress</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>👤 Nom :</div>
                <div class='value'>{$name}</div>
            </div>
            <div class='field'>
                <div class='label'>📧 Email :</div>
                <div class='value'><a href='mailto:{$email}'>{$email}</a></div>
            </div>
            <div class='field'>
                <div class='label'>📱 Téléphone :</div>
                <div class='value'>{$phone}</div>
            </div>
            <div class='field'>
                <div class='label'>🎯 Type de service :</div>
                <div class='value'>{$serviceLabel}</div>
            </div>
            <div class='field'>
                <div class='label'>💰 Budget estimé :</div>
                <div class='value'>{$budgetLabel}</div>
            </div>
            <div class='field'>
                <div class='label'>💬 Message :</div>
                <div class='value'>{$message}</div>
            </div>
        </div>
        <div class='footer'>
            <p>Ce message a été envoyé depuis le formulaire de contact de cursiva.ca</p>
            <p>Date : " . date('d/m/Y à H:i:s') . "</p>
        </div>
    </div>
</body>
</html>
";

// Headers de l'email
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Cursiva Contact Form <noreply@cursiva.ca>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
];

// Envoyer l'email
$mailSent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    // Email de confirmation au client (optionnel)
    $clientSubject = 'Confirmation de réception - Cursiva';
    $clientBody = "
    <!DOCTYPE html>
    <html lang='fr'>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2 style='margin: 0;'>✅ Message bien reçu !</h2>
            </div>
            <div class='content'>
                <p>Bonjour <strong>{$name}</strong>,</p>
                <p>Merci d'avoir contacté <strong>Cursiva</strong> ! Nous avons bien reçu votre demande concernant : <strong>{$serviceLabel}</strong>.</p>
                <p>Notre équipe reviendra vers vous dans les <strong>24 heures</strong> pour discuter de votre projet.</p>
                <p>À très bientôt ! 🚀</p>
                <hr style='border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;'>
                <p style='font-size: 14px; color: #6b7280;'><strong>Cursiva</strong> - Agence Web WordPress & Design Graphique<br>
                Québec, QC, Canada<br>
                📧 contact@cursiva.ca | 📱 +1 (581) 446-7277</p>
            </div>
            <div class='footer'>
                <p>© 2024 Cursiva - Tous droits réservés</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $clientHeaders = [
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: Cursiva <contact@cursiva.ca>',
        'Reply-To: Cursiva <contact@cursiva.ca>',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    mail($email, $clientSubject, $clientBody, implode("\r\n", $clientHeaders));
    
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email envoyé avec succès']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi de l\'email']);
}
?>