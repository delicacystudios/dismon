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
      yonetici: "915823410762879046", // 1 Topic (Founder)
      manager: "915828463104032819",// 2 Topic (Community Manager)
      booster: "", // 6 Topic (Server Booster)
      sponsor: "915830462377787484", // 4 Topic (Sponsor)
      community: "915823410762879046", // 10 Topic (Project Developers)
      supporter: "915828996841799740",// 5 Topic (Supporter)
      partnerRole: "915827437965815828", // Partner Role id
      site_creator: "915827810147377202",// Site Creator Role id
      administrator: "916182382925721700", // Team Role id Again
      moderator: "916181386921148436", // 3 Topic (Site Developer)
      moderatorrole: "916181714722758669", // Server Moderator Role id
      profile: {
        sitecreator:"915827810147377202", // Site Creator Role id
        booster: "",// 6 Topic (Server Booster)
        community: "915823410762879046",// 10 Topic (Project Developers)
        sponsor: "915830462377787484", // 4 Topic (Sponsor)
        supporter: "915828996841799740", // 5 Topic (Supporter)
        manager: "909653072702214174", // 2 Topic (Roles Manager)
        partnerRole: "915827437965815828" // Partner Role id
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
        developer: "915833434394488842", // Bot Developer Role ID
        certified_developer: "915833585406181426",// Certified Bot Developer Role ID
        boosted_developer: "915832995770937384", // 9 Topic (Boosted Developer)
        promoted_developer: "915832744334995466",// Promoted Bot Developer Role ID
        premium_developer: "915832452331733023",// 7 Topic (Premium Developer)
        bot: "915834581024911411",// Approved Bot Role ID
        boosted_bot: "915834796670877698", // Boosted Bot Role ID
        promoted_bot: "915834992188342282",// 8 Topic (Promoted Developer)
        certified_bot: "915835195624656926"// Certified Bot Role ID
      }
    },
    channels: {
      codelog: "916158182936686602", // Code Log
      login: "916161873391542362",// Login Log
      webstatus: "916161873391542362",// Website Status Log
      uptimelog: "",// Uptime Log
      botlog: "916147938403692604",// bot Log
      reportlog: "916161915389112422",// bot report Log
      votes: "916161817598898176"// Vote Log Log
    }
  }
}