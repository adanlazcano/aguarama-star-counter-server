import WhatsAppWeb from 'baileys';

const client = new WhatsAppWeb();

// CONECTA WHATS - SERVIDOR
export const conectApi = async(req, res) => {
    client.connect()
        .then(([user, chats, contacts, unread]) => {
            res.json({ mensaje: 'Autenticación exitosa' });
        })
        .catch(err => console.log(err))
}


// ENVIAR MENSAJES

export const sendMessage = (phone, body, res) => {
    const options = {
        quoted: null,
        timestamp: new Date()
    }
    client.sendTextMessage(`${phone}@s.whatsapp.net`, body, options)
        .then(res.json({ mensaje: 'Notificación enviada' }))
}