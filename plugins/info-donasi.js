let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa Indosat : 6289509158681
⫹⫺ Via Dana : 6289509158681
⫹⫺ Via Saweria :
⫹⫺ https://instagram.com/jonkristiansah.silaban

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
