// =============================================================================
// STARFIELD BIO CONFIGURATION
// =============================================================================

const CONFIG = {
  // ---------------------------------------------------------------------------
  // 1. SITE IDENTITY
  // ---------------------------------------------------------------------------
  "pageTitle": "Pluto's Bio v1.0",

  // Favicon: Path to your favicon (e.g., "assets/images/favicon.png")
  // Supports: ico, png, svg, jpg, webp, gif
  "favicon": "assets/images/favicon.webp",

  // Theme: "midnight" (default) or "bright"
  "theme": "midnight",

  "profile": {
    "name": "Plutonium",
    "description": "Modding Away.",
    "image": "assets/images/favicon.webp", // Supports: webp, png, jpg, gif, svg
    "layout": "vertical", // Options: "vertical" (default), "horizontal"
  },

  // ---------------------------------------------------------------------------
  // 2. LINKS
  // Icons: Paste an SVG Path (from simpleicons.org) OR a URL to an image (webp, png, jpg, gif, or svg).
  // The system automatically detects which one it is.
  // ---------------------------------------------------------------------------
  "links": [
{
      "text": "Nexus",
      "subtitle": "@LongLiveTerry",
      "url": "https://www.nexusmods.com/profile/LongLiveTerry",
      "icon": "assets/images/nexus.svg"
    },
    {
  "text": "Roadmap",
  "subtitle": "Upcoming Blood Trail Mods",
  "url": "https://terrymods.info/",
  "icon": "data:image/jpeg;base64,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"
},

{
  "text": "GitHub",
  "subtitle": "My Github",
  "url": "https://github.com/NetanyahuBIBI",
  "icon": "https://github.githubassets.com/favicons/favicon-dark.svg"
},

{
      "text": "Donate",
      "subtitle": "Buy Me A Coffee",
      "url": "https://buymeacoffee.com/longliveterry",
      "icon": "https://file.garden/agE3GkmcYA8xD0gx/images.png",
    },
    
    {
      "text": "Email Me!",
      "subtitle": "Plutonium@fbi.one",
      "url": "mailto:plutonium@fbi.one",
      "icon": "assets/images/t.jpg"
    },
    // Example of a custom link type that handles "copy on click"
    {
      "text": "Discord Name",
      "subtitle": "Copy: osintanalysis2",
      "specialType": "copy",       // Logic handled in app.js
      "copyValue": "osintanalysis2",
      "icon": "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
    }
  ],


  // ---------------------------------------------------------------------------
  // MUSIC PLAYER
  // ---------------------------------------------------------------------------
  "music": {
    "enabled": true,
    "autoplay": true,
    "volume": 0.35,
    "shuffle": true,

    // Replace these with your Discord CDN MP3 links
"tracks": [
  "https://file.garden/agE3GkmcYA8xD0gx/Vance%20Joy%20-%20'Riptide'%20Official%20Video%20(2)%20(2).mp3",
  
  "https://file.garden/agE3GkmcYA8xD0gx/Bag%20Chasin%20(feat.%20Lil%20Nate)%20(2).mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/The%20Neighbourhood%20-%20Sweater%20Weather%20(Lyrics)%20(1).mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/Bella%20Kay%2C%20Lonely%20(Lyrics).mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/Bella%20Kay%20-%20The%20Sick%20(Lyrics)%20%5BI1j1GJyOJ3g%5D.mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/Dominic%20Fike%20Baby%20Doll%20(Official%20Audio).mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/Oliver%20Anthony%20-%20Rich%20Men%20North%20Of%20Richmond%20(Lyrics).mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/Wasted%20Talent.mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/Audioslave%20-%20Like%20a%20Stone%20%20Lyrics.mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/2K%20(SUPERMAX).mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/CAN'T%20STOP%20THA%20KAOS%20(feat.%20TINY).mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/Brought%20Up.mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/2KRAZY%20-%20ON%20THE%20RADAR.mp3",

  "https://file.garden/agE3GkmcYA8xD0gx/TARGET%20ON%20MY%20HEAD.mp3"
]
  },

  // ---------------------------------------------------------------------------
  // 3. SCHEDULE & STATUS
  // All times are in UTC (24-hour format).
  // The system auto-converts these to the visitor's local time.
  // ---------------------------------------------------------------------------
  "status": {
    "enabled": true,
    
    // YOUR timezone. Used only to show "My Time" in the tooltip.
    "ownerTimeZone": "America/Los_Angeles", 

    "default": {
      "text": "Offline Or Late Night Modding",
      "color": "#0853e9", // Gray
      "icon": "M20 12h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4 0H8v2h4v-2zm-4 0H4v2h4v-2z" // Example 'sleep' or offline icon
    },

    // Define status types
    "types": {
      "available": {
        "text": "Available",
        "color": "#10B981", // Green
        "icon": "assets/images/online.webp",
        "message": "Online and ready to chat!"
      },
      "busy": {
        "text": "Busy / Modding",
        "color": "#EF4444", // Red
        "icon": "assets/images/dnd.webp",
        "message": "Doing what I love."
      },
      "sleeping": {
        "text": "Sleeping Or Staying up",
        "color": "#6d7684", // Gray
        "icon": "assets/images/idle.webp", // Using idle for sleeping/offline typically
        "message": "Thinking about life."
         },
      "Away": {
        "text": "Away",
        "color": "#EF4444", // Red
        "icon": "assets/images/dnd.webp",
        "message": "Boxing or Grappling"
      }
    },

    // Schedule **IN UTC**
    // Days: "weekdays", "weekends", or "daily"
    "schedule": [
  { "status": "sleeping", "days": "daily",    "start": "04:00", "end": "13:00" },
  { "status": "busy",     "days": "weekdays", "start": "13:00", "end": "04:00" },
  { "status": "available","days": "weekdays", "start": "21:00", "end": "23:00" },
  { "status": "Away",     "days": "weekdays", "start": "04:00", "end": "05:00" },
  { "status": "available","days": "weekends", "start": "07:00", "end": "00:00" },
  { "status": "Away",     "days": "weekends", "start": "04:00", "end": "13:00" }
]
  },

  "announcement": {
    "enabled": true,
    "text": "Welcome to my bio! (Click for Blood Trail Discord)",
    "url": "https://discord.gg/zzRPh3RaHm"
  },

  "footer": {
    "copyright": "© 2026 Plutonium Development" // Add your copyright text here
  }
};
