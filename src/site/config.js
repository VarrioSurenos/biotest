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
      "text": "Discord",
      "subtitle": "Join the server",
      "url": "https://discord.gg/udh7VN79",
      "icon": "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
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
      "subtitle": "Copy: osintanalysis",
      "specialType": "copy",       // Logic handled in app.js
      "copyValue": "osintanalysis",
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
  "https://cdn.discordapp.com/attachments/1501069438454075475/1502160176164245594/Vance_Joy_-_Riptide_Official_Video_2.mp3?ex=69feb32e&is=69fd61ae&hm=1f83df7110d31887bb6e013759c507957b706395ab5be7dae56f8631040395d4&",
  
  "https://cdn.discordapp.com/attachments/1501069438454075475/1502253021600415754/Bag_Chasin_feat._Lil_Nate.mp3?ex=69ff09a6&is=69fdb826&hm=6b3314e076abb9d7afa8d1cbc54b18bd4c6480b7d9fcb2b54d541ca197455208&",

  "https://cdn.discordapp.com/attachments/1501069438454075475/1502261745660465226/The_Neighbourhood_-_Sweater_Weather_Lyrics.mp3?ex=69ff11c6&is=69fdc046&hm=0442ff008ecff8d2530655166979f31595ef391cfaeb8a32204c479281b52926&"
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
