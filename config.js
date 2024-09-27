const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Morocco,Es-semara."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://<db_username>:<db_password>@cluster0.atchjj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://<db_username>:<db_password>@cluster0.atchjj5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© N1z4r" 


global.devs = "212691649677" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "212691649677";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212691649677";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "212691649677";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "212691649677";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_15_09_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTk4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM2LFxuICAgICAgICA5LFxuICAgICAgICAyMixcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDczLFxuICAgICAgICA1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDk0LFxuICAgICAgICA5NixcbiAgICAgICAgMTM4LFxuICAgICAgICA5MCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGVlptY1g5RWtwT3BzK1F0VHZWNm1ZSFBNcEdmTnpDU0FEY2hLbUltR1pBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQZC00bEFfM1FDS3ZZNFg0bDBkWGJnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ4MzM1ZDVhLWNkNmYtNDhmNS05NzE5LTQyM2YwNTcxMGE2MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAyNCxcbiAgICAgIDEzNSxcbiAgICAgIDkxLFxuICAgICAgMjA0LFxuICAgICAgMTQ2LFxuICAgICAgMTc2LFxuICAgICAgMTI3LFxuICAgICAgMjUzLFxuICAgICAgMjIxLFxuICAgICAgMjIxLFxuICAgICAgMjA4LFxuICAgICAgMjQ3LFxuICAgICAgMTIsXG4gICAgICAxNDcsXG4gICAgICAyMTIsXG4gICAgICAyMzYsXG4gICAgICAxNDgsXG4gICAgICAyMDYsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDE3NCxcbiAgICAgIDM3LFxuICAgICAgOSxcbiAgICAgIDEwNSxcbiAgICAgIDgxLFxuICAgICAgMjQ1LFxuICAgICAgNDEsXG4gICAgICAyMTYsXG4gICAgICAxNyxcbiAgICAgIDU2LFxuICAgICAgMTk3LFxuICAgICAgOTIsXG4gICAgICAyMjMsXG4gICAgICAzNSxcbiAgICAgIDI0MyxcbiAgICAgIDEsXG4gICAgICA2NSxcbiAgICAgIDExOSxcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DbWg4Z0JFSlB5MTdjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN0xOZzV0dG54SGNrWW5mMnB1YmREQUM1VDVFR3g1Vnc2T1BUa05XTGF3bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJESkQxOGxUN0FFWUhJZ25YWDEvTy9QWGxoUmJYbk1ZdmlXRlQ2dE9ybGkyS0hWRjBRS0M1L1JyS0hwSTRwREZKM0d2Zm5Ba2d6ajBlMGV2T2FBWUNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJheUdrUjIzNy9rcWpBNXlXUjZwZzArY0pVNFRNd3FIcU12TTNwZjR3Ryt1NEZVb2RaN3c2UHVZRTdKdytqekhJSUYyQkhLa25VaVR3NDAwT1c5NHlndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjY5MzMxNTExMzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTjF6NHIgLSAhXCIsXG4gICAgXCJsaWRcIjogXCIxMjQ0NTU3ODc0NzUxOTI6NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIxMjY5MzMxNTExMzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjczOTYxMjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBdWdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF1Zy5qc29uIjogIntcImtleURhdGFcIjpcImpqdnR5YmJNeUg0anAxUkx0UGRjekdkWWllSTNKb3Q4ZlJGNVhaSkpsSnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDE5NTUwMDE2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjcyNjg4MjY4MDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ N1z4r - ! ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • N1z4r - !』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "212691649677",
  packname: process.env.PACK_NAME || "N1z4r - !",
  botname : process.env.BOT_NAME  || "N1z4r - !",
  ownername:process.env.OWNER_NAME|| "N1z4r - !",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = true; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
