# 📧 Configuración del Formulario de Contacto - Formspree

## ¿Qué es Formspree?
Formspree es un servicio **gratuito** que permite enviar emails desde formularios web sin necesidad de backend.

## Pasos para Configurar

### 1️⃣ Crear una Cuenta en Formspree
- Ve a https://formspree.io
- Haz clic en **"Sign Up"** (es gratis)
- Usa tu email: `web.gastronomy@gmail.com`

### 2️⃣ Crear un Nuevo Formulario
- Después de registrarte, haz clic en **"New Form"**
- Dale un nombre: `WebCraft Contact Form` (o lo que prefieras)
- Haz clic en **"Create"**

### 3️⃣ Copiar tu ID
- Verás una URL como: `https://formspree.io/f/xyzabc123`
- Copia solo la parte final: `xyzabc123` (tu ID)

### 4️⃣ Configurar el ID en tu Web
Abre el archivo `js/config.js` y reemplaza:

```javascript
FORMSPREE_ID: 'xyzabc123', // ⬅️ REEMPLAZA CON TU ID REAL
```

Por ejemplo:
```javascript
FORMSPREE_ID: 'mnovqwxy', // Tu ID real
```

### 5️⃣ ¡Listo!
El formulario ya debería funcionar. Los emails se enviarán a `web.gastronomy@gmail.com`

---

## 🔐 Opciones de Seguridad en Formspree

Una vez configurado, puedes:

### Activar reCAPTCHA (Anti-spam)
1. En tu cuenta Formspree, ve a **Form Settings**
2. Busca **"Spam Filter"** o **"reCAPTCHA"**
3. Actívalo para evitar spam

### Personalizar el Email de Confirmación
1. En **Form Settings**
2. Puedes cambiar el asunto del email
3. Añadir mensajes personalizados

---

## 📝 Cómo Funciona

1. El usuario rellena el formulario en tu web
2. JavaScript envía los datos a `formspree.io`
3. Formspree recibe los datos y envía un email a `web.gastronomy@gmail.com`
4. El usuario recibe una confirmación

---

## ⚙️ Variables Personalizadas (Opcional)

En el formulario puedes usar estas variables especiales de Formspree:

| Variable | Significado |
|----------|------------|
| `_subject` | Asunto del email |
| `_replyto` | Email de respuesta |
| `_captcha` | Activar captcha (true/false) |
| `_next` | URL a redirigir después de enviar |

Estas ya están configuradas en `js/main.js`

---

## 🆘 Troubleshooting

### "Formspree ID no configurado"
- Abre `js/config.js`
- Verifica que hayas puesto tu ID real (no es `xyzabc123`)

### Los emails no llegan
1. Comprueba en https://formspree.io tu cuenta
2. Mira si hay emails en la carpeta de spam
3. Verifica que el ID sea correcto

### ¿Puedo usar este formulario gratis?
Sí, Formspree tiene plan gratuito con:
- ✅ 50 envíos por mes
- ✅ Formularios ilimitados
- ✅ Sin publicidad

Si necesitas más, tienen planes de pago desde $10/mes

---

## 📧 Email de Prueba

Para probar el formulario:
1. Abre tu web en el navegador
2. Ve a la sección de contacto
3. Rellena el formulario con datos de prueba
4. Haz clic en "Enviar Mensaje"
5. Comprueba que el email llegue a `web.gastronomy@gmail.com`

---

¡Tu formulario está listo! 🎉
