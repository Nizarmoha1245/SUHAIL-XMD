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
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© N1z4r" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
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
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "212691649677";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "212691649677";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_19_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDcwLFxuICAgICAgICA3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMixcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4LFxuICAgICAgICA1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA2NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MixcbiAgICAgICAgMTkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDQyLFxuICAgICAgICA0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpaVNhaGsyYmxZMmYrSlUzWDF6QXY2akJRbTJSV0cwY1FwT1VxZWlrLzhJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSNlN0SWZmTVJabWZZOENkenVfUXp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyOTBkODBlLTA2ODEtNDI0YS04ODhkLWU5MGUyNjllMTZlMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAxMjcsXG4gICAgICA0MixcbiAgICAgIDE1MCxcbiAgICAgIDUzLFxuICAgICAgMTEsXG4gICAgICAxNjcsXG4gICAgICA1LFxuICAgICAgMTk0LFxuICAgICAgMTg3LFxuICAgICAgMTI3LFxuICAgICAgMTEwLFxuICAgICAgMzcsXG4gICAgICAxMjEsXG4gICAgICA2NixcbiAgICAgIDE3OSxcbiAgICAgIDIxNixcbiAgICAgIDU5LFxuICAgICAgNTYsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMTExLFxuICAgICAgMTMsXG4gICAgICAwLFxuICAgICAgMjM3LFxuICAgICAgMjQ1LFxuICAgICAgMjQ1LFxuICAgICAgMTk0LFxuICAgICAgOTEsXG4gICAgICAxOTcsXG4gICAgICAxOCxcbiAgICAgIDExMSxcbiAgICAgIDIxMSxcbiAgICAgIDIxLFxuICAgICAgMTc0LFxuICAgICAgNDgsXG4gICAgICA3MSxcbiAgICAgIDUwLFxuICAgICAgMTYsXG4gICAgICAyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091MTQ3Z0hFTWU0dkxjR0dCRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNzFWQ1JLV29wYzQ2L3o0OU5tWnZpMkdKZHNEWWFRN0JIbWFibFYzeEgxST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVcUEwWERWSWxDOGVnNllObVBtYVZyWkZEbHIrN21RMFI2Z3dtT0FneHcrMkFZWEoxcnJqei9Vd3JmYS9nVTNrOThEUnRRbWJnZXNVU2sxZFJWa0dEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzdGlhRytLTjNDd0I3dk00dmxYaVVZUTFUemZYUWZKLzNiUTg0M2xLcHNDbkJ6K2FkTEpwMVpRVk5hK2c3T1grMzZDTVJEaER5N2VUVVFCbWZmc3Bqdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjY5MTY0OTY3NzoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI0NDA0MTgwNzcwOTk1OjI4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNjkxNjQ5Njc3OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY5NDYzODBcbn0iCn0="  // PUT your SESSION_ID 


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
