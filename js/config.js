/**
 * Configuración de la aplicación
 * Incluye credenciales y constantes
 */

// IMPORTANTE: Reemplaza esto con tu ID real de Formspree
// Pasos:
// 1. Ve a https://formspree.io y regístrate gratis
// 2. Crea un nuevo formulario
// 3. Copia tu ID (puedes verlo en la URL: https://formspree.io/f/xyzabc123)
// 4. Reemplaza el valor de abajo

const CONFIG = {
    // Servicio de Email
    FORMSPREE_ID: 'xlggezbp', // ✅ ID Real de Formspree
    
    // Mensajes
    messages: {
        es: {
            sending: 'Enviando mensaje...',
            success: '✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.',
            error: '❌ Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
            validationError: 'Por favor, completa todos los campos requeridos.',
            invalidEmail: 'Por favor, introduce un email válido.'
        },
        en: {
            sending: 'Sending message...',
            success: '✅ Message sent successfully! We will contact you soon.',
            error: '❌ Error sending message. Please try again.',
            validationError: 'Please complete all required fields.',
            invalidEmail: 'Please enter a valid email address.'
        }
    }
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
