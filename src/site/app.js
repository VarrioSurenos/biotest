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

// --- CORE UI/ANIMATION LOGIC (UNCHANGED) ---
const starsContainer = document.querySelector('.stars-container');
const numberOfStars = 200;
const allStars = [];

function setupAnimations() {
  const starColors = ['#ffffff', '#ffe9c4', '#d4fbff', '#d4fbff', '#b3cde0'];

  for (let i = 0; i < numberOfStars; i++) {
    let star = document.createElement('div');
    star.classList.add('star');

    let x = Math.random() * 100;
    let y = Math.random() * 100;

    const color = starColors[Math.floor(Math.random() * starColors.length)];
    const size = Math.random() * 2 + 0.5;

    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.backgroundColor = color;
    star.style.boxShadow = `0 0 ${size * 2}px ${color}`;

    const depth = Math.random();
    const driftSpeedX = (Math.random() - 0.5) * 0.02 * (depth + 0.5);
    const driftSpeedY = (Math.random() - 0.5) * 0.02 * (depth + 0.5);

    starsContainer.appendChild(star);
    allStars.push({
      element: star,
      baseX: x,
      baseY: y,
      depth,
      driftSpeedX,
      driftSpeedY,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
    });
  }

  function spawnShootingStar() {
    if (Math.random() <= 0.05) {
      const shootingStar = document.createElement('div');
      shootingStar.classList.add('shooting-star');

      const startY = Math.random() * 100;
      const startX = -10;

      shootingStar.style.left = startX + 'vw';
      shootingStar.style.top = startY + 'vh';

      const angle = 2 + Math.random() * 8;
      shootingStar.style.setProperty('--angle', angle + 'deg');

      const duration = 1.5 + Math.random() * 1.5;
      shootingStar.style.animationDuration = duration + 's';

      starsContainer.appendChild(shootingStar);
      setTimeout(() => shootingStar.remove(), duration * 1000);
    }

    setTimeout(spawnShootingStar, 500);
  }
  setTimeout(spawnShootingStar, 2000);

  let mouseX = 0, mouseY = 0;
  let targetMouseX = 0, targetMouseY = 0;

  document.body.addEventListener('mousemove', (e) => {
    targetMouseX = e.clientX / window.innerWidth - 0.5;
    targetMouseY = e.clientY / window.innerHeight - 0.5;
  });

  let time = 0;
  function animate() {
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;
    time += 1;

    allStars.forEach((star) => {
      star.baseX += star.driftSpeedX;
      star.baseY += star.driftSpeedY;

      if (star.baseX > 105) star.baseX = -5;
      if (star.baseX < -5) star.baseX = 105;
      if (star.baseY > 105) star.baseY = -5;
      if (star.baseY < -5) star.baseY = 105;

      const parallaxX = mouseX * star.depth * 10;
      const parallaxY = mouseY * star.depth * 10;

      const x = star.baseX + parallaxX;
      const y = star.baseY + parallaxY;

      const twinkleVal = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
      const scale = 1 + twinkleVal * 0.3;
      const opacity = Math.max(0.1, Math.min(1, star.depth + 0.2 + twinkleVal * 0.3));

      star.element.style.transform = `translate3d(${x}vw, ${y}vh, 0) scale(${scale})`;
      star.element.style.opacity = opacity;
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// --- STATUS INDICATOR AND SCHEDULING LOGIC ---

// ✅ FIXED (uses PST instead of UTC)
function determineCurrentStatus(config) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour12: false,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit"
  }).formatToParts(new Date());

  const hour = parseInt(parts.find(p => p.type === "hour").value);
  const minute = parseInt(parts.find(p => p.type === "minute").value);
  const weekdayStr = parts.find(p => p.type === "weekday").value;

  const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const day = dayMap[weekdayStr];

  const currentMinutes = hour * 60 + minute;
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

// ✅ FIXED display (no UTC conversion anymore)
function formatUtcRangeToLocal(start, end) {
  function format(t) {
    let [h, m] = t.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${m.toString().padStart(2, '0')} ${ampm}`;
  }
  return `${format(start)} - ${format(end)}`;
}
