import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `
*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻*
> Tutorial: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Pagina Oficial: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Dashboard: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Panel: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Soporte: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley 

------------------------------------

*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻*
> Tutorial: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Pagina: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
> Soporte: https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley

------------------------------------
` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'ᴛʜᴇ ᴍʏsᴛɪᴄ - ʙᴏᴛ', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/ADRIANOSANCHEZ24/Makanaky-Bot-MD' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
export default handler
