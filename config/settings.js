const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6281220670449'] // no own
global.author = 'AYLIZE BOTZ' // nama author 
global.packname = 'aylize bot whatsapp' // nama pack sticker
global.namabot = 'AYLIZE BOTZ' // nama bot mu
global.group = 'https://watashianime.my.id' // grup mu
global.pic = 'https://telegra.ph/file/3d3e73c4cb0682671f25a.jpg' // logo bot



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
