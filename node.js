const youtubeMp3Converter = require('youtube-mp3-converter')
const convertLinkToMp3 = youtubeMp3Converter(pathToSaveFiles)
const pathToMp3 = await convertLinkToMp3('https://www.youtube.com/watch?v=_cyND_1y1k0')
console.log(pathToMp3);