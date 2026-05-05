// --- COOKIE HELPER FUNCTIONS ---
function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/; SameSite=Lax';
}

function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// 🔥 GLOBAL LA TIME HELPER
function getLATimeParts() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour12: false,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit"
  }).formatToParts(new Date());

  return {
    hour: parseInt(parts.find(p => p.type === "hour").value),
    minute: parseInt(parts.find(p => p.type === "minute").value),
    weekday: parts.find(p => p.type === "weekday").value
  };
}

// --- STATUS LOGIC (FIXED TO PST) ---
function determineCurrentStatus(config) {
  const now = getLATimeParts();

  const dayMap = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6
  };

  const day = dayMap[now.weekday];
  const currentMinutes = now.hour * 60 + now.minute;

  const isWeekend = day === 0 || day === 6;

  for (const item of config.schedule) {
    let applies = false;
    if (item.days === 'daily') applies = true;
    if (item.days === 'weekends' && isWeekend) applies = true;
    if (item.days === 'weekdays' && !isWeekend) applies = true;

    if (!applies) continue;

    const startMins = parseTime(item.start);
    const endMins = parseTime(item.end);

    if (startMins > endMins) {
      if (currentMinutes >= startMins || currentMinutes < endMins) {
        return item.status;
      }
    } else {
      if (currentMinutes >= startMins && currentMinutes < endMins) {
        return item.status;
      }
    }
  }

  return 'default';
}

function parseTime(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

// 🔥 FIXED: no more UTC conversion
function formatRangeLocal(start, end) {
  function format(t) {
    let [h, m] = t.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${m.toString().padStart(2, '0')} ${ampm}`;
  }
  return `${format(start)} - ${format(end)}`;
}

// --- MODAL FIX ---
function createScheduleItemHtml(item, config) {
  const statusDef = config.types[item.status];
  if (!statusDef) return '';

  const localRange = formatRangeLocal(item.start, item.end);

  return `
    <li class="flex items-center justify-between p-3 border-b border-white/10 last:border-0">
        <div class="flex items-center gap-3">
            <div class="w-3 h-3 rounded-full" style="background-color: ${statusDef.color};"></div>
            <span class="font-medium text-slate-200">${statusDef.text}</span>
        </div>
        <span class="text-sm text-slate-400 font-mono">${localRange}</span>
    </li>
    `;
}

// --- TOOLTIP TIME FIX ---
function getOwnerTimeString() {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
}
