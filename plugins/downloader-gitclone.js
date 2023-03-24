import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*PAQUETES AÑADIR A GRUPOS

(MENSUAL)
Añadir a grupo:
🇵🇪(Yape, Plin): 7 soles
🇦🇷(UALA): $700 pesos
🇨🇱(RUT): $2000
🌎(Paypal): 2 Dolares/USD
💎(Diamantes): 200

(PERMANENTE)
Añadir a grupos (3 grupos)
🇵🇪(Yape, Plin): S/16 soles
🇦🇷(UALA): $1600 pesos
🇨🇱(RUT): $3600 pesos 
🌎(Paypal): 6 dólares/USD
💎(Diamantes): 600


PAQUETES BOTS PERSONALES Y PARA REVENTA

Bot personal
(PERMANENTE)
Sin límites (prohibida su venta, con derechos de autor)
🇵🇪(Yape, Plin): S/20 soles
🇦🇷(UALA): $2000 pesos
🇨🇱(RUT): $5000 pesos 
🌎(Paypal): 6 dólares/USD
💎(Diamantes): 600

BOT PARA REVENTA
(PERMANENTE)
Sin limite (100% del control del bot)
🇵🇪(Yape, Plin): S/35 soles
🇦🇷(UALA): $3500 pesos
🇨🇱(RUT): $8000 pesos 
🌎(Paypal): 10 dólares/USD
💎(Diamantes): 1000`
if (!regex.test(args[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙸𝙽𝙺 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾!*'
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙴𝙽 𝙻𝙾 𝚀𝚄𝙴 𝙴𝙽𝚅𝙸𝙾 𝚂𝚄 𝙰𝚁𝙲𝙷𝙸𝚅𝙾, 𝚂𝙸 𝙴𝚂𝚃𝙴 𝙽𝙾 𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙿𝚄𝙴𝙳𝙴 𝙳𝙴𝙱𝙴𝚁𝚂𝙴 𝙰 𝚀𝚄𝙴 𝙴𝙻 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙴𝚂 𝙼𝚄𝚈 𝙿𝙴𝚂𝙰𝙳𝙾*`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /precios/i
export default handler
