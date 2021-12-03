module.exports = {
  bot: {
    token: process.env['TOKEN'],
    prefix: "s.",
    owners: ["528930032823959562"],
    mongourl: process.env['MongoDB'],
    servers: {
      token: process.env['TOKEN2'],
      prefix: "dbl."
    }
  },

  website: { 
    callback: "https://monitoring.delicacysound.repl.co/callback",
    secret: process.env['ClientSecret'],
    clientID: "881293348172877924", // Bot client id.
    tags: ["Moderation", "Fun", "Minecraft", "Economy", "Guard", "NSFW", "Anime", "Invite", "Music", "Logging", "Web Dashboard", "Reddit", "Youtube", "Twitch", "Crypto", "Leveling", "Game", "Roleplay", "Utility", "Turkish"],
    reporttags: ["Choose one...","NSFW content","API abuse","Malicious use of bot page","Copycat","Doesn't work","Other"],
    languages: [
      { code: 'en', name: 'English' },
      { code: 'hi', name: 'हिंदी' },
      { code: 'te', name: 'తెలుగు' },
      { code: 'tr', name: 'Türkçe' },
      { code: 'de', name: 'Deutsch' },
      { code: 'it', name: 'Italiano' },
      { code: 'ne', name: 'नेपाली' },
      { code: 'ar', name: 'العربية' },
      { code: 'fr', name: 'French' },
      { code: 'pl', name: 'Polish' },
      { code: 'ru', name: 'Русский' }
    ],
    servers: {
      tags: [
        {
          icon: "fal fa-code",
          name: "Development"
        },
        {
          icon: "fal fa-play",
          name: "Stream"
        },
        {
          icon: "fal fa-camera",
          name: "Media"
        },
        {
          icon: 'fal fa-building',
          name: 'Company'
        },
        {
          icon: 'fal fa-gamepad',
          name: 'Game'
        },
        {
          icon: 'fal fa-icons',
          name: 'Emoji'
        },
        {
          icon: 'fal fa-robot',
          name: 'Bot List'
        },
        {
          icon: 'fal fa-server',
          name: 'Server List'
        },
        {
          icon: 'fal fa-newspaper',
          name: 'News'
        },
        {
          icon: 'fal fa-moon-stars',
          name: 'Turkish'
        },
        {
          icon: 'fal fa-moon-stars',
          name: 'Russian'
        },
        {
          icon: 'fab fa-discord',
          name: 'Support'
        },
        {
          icon: 'fal fa-volume',
          name: 'Sound'
        },
        {
          icon: 'fal fa-comments',
          name: 'Chatting'
        },
        {
          icon: 'fal fa-lips',
          name: 'NSFW'
        },
        {
          icon: "fal fa-comment-slash",
          name: "Challange"
        },
        {
          icon: "fal fa-hand-rock",
          name: "Protest"
        },
        {
          icon: "fal fa-headphones-alt",
          name: "Roleplay"
        },
        {
          icon: "fal fa-grin-alt",
          name: "Meme"
        },
        {
          icon: "fal fa-shopping-cart",
          name: "Shop"
        },
        {
          icon: "fal fa-desktop",
          name: "Technology"
        },
        {
          icon: "fal fa-laugh",
          name: "Fun"
        },
        {
          icon: "fal fa-share-alt",
          name: "Social"
        },
        {
          icon: "fal fa-laptop",
          name: "E-Spor"
        },
        {
          icon: 'fal fa-palette',
          name: 'Design'
        },
        {
          icon: 'fal fa-users',
          name: 'Community'
        }
      ]
    }
  },

  server: {
    id: "915822702948941885", // DisBots.xyz Server ID
    invite: "https://discord.gg/FajjNYYRza",
    dblinvite: "https://discord.com/api/oauth2/authorize?client_id=874462955398377522&permissions=8&scope=bot",
    roles: {
      yonetici: "849008432710287373", // 1 Topic (Founder)
      manager: "909653072702214174",// 2 Topic (Community Manager)
      booster: "878504445690904647", // 6 Topic (Server Booster)
      sponsor: "849008432660348935", // 4 Topic (Sponsor)
      community: "914362331344039936", // 10 Topic (Project Developers)
      supporter: "849008432698753041",// 5 Topic (Supporter)
      partnerRole: "914232772002975835", // Partner Role id
      site_creator: "914653334646964224",// Site Creator Role id
      administrator: "909653072702214174", // Team Role id Again
      moderator: "914653334646964224", // 3 Topic (Site Developer)
      moderatorrole: "849008432698753042", // Server Moderator Role id
      profile: {
        sitecreator:"914653334646964224", // Site Creator Role id
        booster: "878504445690904647",// 6 Topic (Server Booster)
        community: "909653072702214174",// 10 Topic (Project Developers)
        sponsor: "849008432660348935", // 4 Topic (Sponsor)
        supporter: "849008432698753041", // 5 Topic (Supporter)
        manager: "909653072702214174", // 2 Topic (Roles Manager)
        partnerRole: "914232772002975835" // Partner Role id
      },
      codeshare: {
        python: "PY",
        javascript: "JS",
        html: "HTML",
        substructure: "Substructure",
        bdfd: "BDFD", // Bot Designer For Discord
        fiveInvite: "5 INVITES",
        tenInvite: "10 INVITES",
        fifteenInvite: "15 INVITES",
        twentyInvite: "20 INVITES"
      },
      botlist: {
        ownerserver: "", // Server Owner Role ID
        developer: "909653072702214174", // Bot Developer Role ID
        certified_developer: "914362728913715240",// Certified Bot Developer Role ID
        boosted_developer: "914362969872285709", // 9 Topic (Boosted Developer)
        promoted_developer: "914363085572161546",// Promoted Bot Developer Role ID
        premium_developer: "914363333933686784",// 7 Topic (Premium Developer)
        bot: "914698558102450286",// Approved Bot Role ID
        boosted_bot: "914363505552015411", // Boosted Bot Role ID
        promoted_bot: "914363648938504243",// 8 Topic (Promoted Developer)
        certified_bot: "914363777644892200"// Certified Bot Role ID
      }
    },
    channels: {
      codelog: "914361879978184714", // Code Log
      login: "914361944981516340",// Login Log
      webstatus: "914361944981516340",// Website Status Log
      uptimelog: "914361944981516340",// Uptime Log
      botlog: "914362003064229898",// bot Log
      reportlog: "914362078347800607",// bot report Log
      votes: "914292086830931978"// Vote Log Log
    }
  }
}