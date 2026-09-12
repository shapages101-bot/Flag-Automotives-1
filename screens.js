/* ============================================================
   FLAG AUTO CARE — SCREENS v2.0
   Premium automotive consumer app
   All SVG icons — NO emojis in UI components
   ============================================================ */

/* ── SVG Icon Library ────────────────────────────────────────── */
const SVG = {
  /* Navigation */
  home:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  services: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  bookings: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  offers:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  profile:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,

  /* UI Icons */
  bell:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  back:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronR: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevronD: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  location: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  calendar: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  clock:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  check:    `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  checkLg:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  search:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  close:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  send:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  star:     `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  info:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  sparkle:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z"/></svg>`,
  arrowR:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  plus:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  phone:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.38 2 2 0 0 1 3.57 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,

  /* Service Category Icons — professional SVG, same stroke family */
  svcPeriodic: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  svcAC:       `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="8" rx="2"/><path d="M7 14v3M12 14v3M17 14v3M7 6V3M12 6V3M17 6V3"/></svg>`,
  svcBattery:  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="18" height="12" rx="2"/><path d="M23 13v-2"/><line x1="5" y1="12" x2="9" y2="12"/><line x1="7" y1="10" x2="7" y2="14"/><line x1="13" y1="12" x2="17" y2="12"/></svg>`,
  svcTyres:    `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="22"/><line x1="2" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="22" y2="12"/></svg>`,
  svcBrakes:   `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/><path d="M12 7v5h5"/></svg>`,
  svcCarWash:  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17h1l1.5-6h13L20 17h1"/><path d="M6 17v3M18 17v3"/><path d="M7.5 8c0-1.1.9-2 2-2s2 .9 2 2"/><path d="M12.5 8c0-1.1.9-2 2-2s2 .9 2 2"/></svg>`,
  svcDetail:   `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3L9 9H3l5 4-2 6 6-4 6 4-2-6 5-4h-6L12 3z"/></svg>`,
  svcDiag:     `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="6" rx="1"/><path d="M12 8v4"/><path d="M8 8H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4"/><circle cx="12" cy="15" r="2"/></svg>`,
  svcDent:     `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,

  /* Car silhouette SVG */
  car: `<svg width="64" height="36" viewBox="0 0 80 40" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 28h64M8 28c0 3.3 2.7 6 6 6s6-2.7 6-6M62 28c0 3.3 2.7 6 6 6s6-2.7 6-6M8 28l4-10 10-6h36l6 6 4 10"/><path d="M22 22h36l-4-8H26l-4 8z" fill="currentColor" opacity="0.08"/><circle cx="20" cy="28" r="5" fill="none"/><circle cx="60" cy="28" r="5" fill="none"/></svg>`,
  carLg: `<svg width="100" height="56" viewBox="0 0 120 60" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 44h100M10 44c0 5 4 9 9 9s9-4 9-9M101 44c0 5 4 9 9 9s9-4 9-9M10 44l6-16 16-9h56l12 9 6 16"/><path d="M32 35h56l-6-12H38l-6 12z" fill="currentColor" opacity="0.06"/><circle cx="28" cy="44" r="7" fill="none"/><circle cx="92" cy="44" r="7" fill="none"/></svg>`,

  /* Health item icons */
  engine:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="11" rx="1"/><path d="M7 7V4M17 7V4M3 12h2M19 12h2"/></svg>`,
  battery2:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="18" height="12" rx="2"/><path d="M23 13v-2"/></svg>`,
  brakeI:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/></svg>`,
  tyreI:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>`,
  acI:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="8" rx="1"/><path d="M7 15v2M12 15v2M17 15v2"/></svg>`,
  fluids:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L6 9h12L12 2z"/><path d="M6 9a6 6 0 0 0 12 0"/></svg>`,
  shield:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  doc:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  invoice: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/><polyline points="9 9 10 9 11 9"/></svg>`,
  history: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/></svg>`,
  user:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  edit:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  map:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
  support: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
};

/* ── Helper: INR formatting ──────────────────────────────────── */
const fmt = (n) => '₹' + Number(n).toLocaleString('en-IN');

/* ── Helper: Status badge HTML ───────────────────────────────── */
function statusBadge(status) {
  const map = {
    in_progress: ['badge-orange-soft', 'In Progress'],
    confirmed:   ['badge-blue', 'Confirmed'],
    completed:   ['badge-green', 'Completed'],
    cancelled:   ['badge-red', 'Cancelled'],
    pending:     ['badge-amber', 'Pending'],
  };
  const [cls, label] = map[status] || ['badge-grey', status];
  return `<span class="badge ${cls}">${label}</span>`;
}

/* ── Helper: Topbar ──────────────────────────────────────────── */
function topbar(title, sub = '', actions = '') {
  return `
    <div class="topbar">
      <button class="back-btn" onclick="Router.back()">${SVG.back}</button>
      <div style="flex:1;">
        <div class="topbar-title">${title}</div>
        ${sub ? `<div class="topbar-sub">${sub}</div>` : ''}
      </div>
      ${actions}
    </div>`;
}

/* ── Car silhouette SVG (simple side profile) ─────────────────  */
function carSVG(w=64, h=36, color='var(--grey-400)') {
  return `<svg width="${w}" height="${h}" viewBox="0 0 80 44" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 32h72M4 32c0 4 3 6 6 6s6-2 6-6M64 32c0 4 3 6 6 6s6-2 6-6M4 32l5-12 14-8h34l10 8 5 12"/>
    <path d="M23 24h34l-4-8H27l-4 8z" fill="${color}" opacity="0.07"/>
    <circle cx="16" cy="32" r="5" fill="none"/>
    <circle cx="64" cy="32" r="5" fill="none"/>
    <rect x="29" y="17" width="10" height="7" rx="1" opacity="0.3" fill="${color}"/>
    <rect x="41" y="17" width="10" height="7" rx="1" opacity="0.3" fill="${color}"/>
  </svg>`;
}

/* ── Helper: Addon Summary ───────────────────────────────────── */
function renderAddonSummary() {
  const addons = Computed.draftAddons();
  if (!addons.length) return '<span style="color:var(--grey-400);font-size:13px;">No add-ons selected</span>';
  return addons.map(a => `<span style="font-size:12px;font-weight:600;color:var(--grey-700);">${a.name} <span style="color:var(--orange);">${fmt(a.price)}</span></span>`).join('<br>');
}

/* ══════════════════════════════════════════════════════════════
   SCREEN BUILDER
══════════════════════════════════════════════════════════════ */
function buildScreens() {
  return {
    /* ── 01 Splash ─────────────────────────────────────────────── */
    splash() {
      return `
      <div class="splash-screen">
        <div class="splash-logo-box">
          <div style="text-align:center;">
            <div class="splash-brand">FLAG</div>
            <div class="splash-sub">AUTO CARE</div>
          </div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:24px;font-weight:800;color:var(--black);letter-spacing:-0.5px;">FLAG Auto Care</div>
          <div class="splash-tagline" style="margin-top:8px;">Smarter care for every journey.</div>
        </div>
        <div class="splash-loader">
          <span></span><span></span><span></span>
        </div>
      </div>`;
    },

    /* ── 02 Onboarding ─────────────────────────────────────────── */
    onboarding() {
      return `
      <div class="onboard-screen">
        <div class="onboard-illus" style="min-height:320px;">
          <div style="color:var(--grey-300);">${carSVG(140,78,'var(--grey-400)')}</div>
          <div style="display:flex;gap:14px;margin-top:8px;">
            ${['Periodic', 'AC Service', 'Battery', 'Tyres'].map(s=>`<div style="padding:6px 10px;background:var(--white);border-radius:8px;font-size:11px;font-weight:600;color:var(--grey-700);box-shadow:var(--sh-xs);">${s}</div>`).join('')}
          </div>
        </div>
        <div class="onboard-body">
          <div class="onboard-heading">Your car,<br>cared for right.</div>
          <div class="onboard-sub">Book trusted automotive services, track your vehicle health, and manage your complete service history — all in one place.</div>
          <div class="ob-dots" style="margin-top:16px;">
            <div class="ob-dot active"></div>
            <div class="ob-dot"></div>
            <div class="ob-dot"></div>
          </div>
          <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px;">
            <button class="btn btn-orange" onclick="Router.go('login')">Get Started</button>
            <button class="btn btn-outline" onclick="skipVehicleSetup()">Continue as Guest</button>
          </div>
        </div>
      </div>`;
    },

    /* ── 03 Login / OTP ─────────────────────────────────────────── */
    login() {
      return `
      <div class="login-screen" style="position:relative;">
        <button onclick="skipVehicleSetup()" style="position:absolute;top:16px;right:16px;font-size:13px;font-weight:700;color:var(--orange);background:none;border:none;cursor:pointer;z-index:10;">Skip ›</button>
        <div class="login-top">
          <div class="flag-logo"><span class="logo-flag">FLAG</span><span class="logo-sub">AUTO CARE</span></div>
          <div class="login-heading" style="margin-top:24px;">Welcome back 👋</div>
          <div class="login-sub">Sign in to access your vehicle dashboard and service history.</div>
        </div>
        <div class="login-body">
          <div id="loginStep1">
            <div class="input-wrap">
              <label class="input-label">Mobile Number</label>
              <div class="input-with-prefix">
                <div class="input-prefix">🇮🇳 +91</div>
                <input type="tel" maxlength="10" placeholder="Enter 10-digit number" id="phoneInput" oninput="validatePhone(this)">
              </div>
              <span class="input-err" id="phoneError">Enter a valid 10-digit mobile number</span>
            </div>
            <button class="btn btn-orange" style="margin-top:16px;" id="sendOtpBtn" onclick="sendOtp()">Send OTP</button>
            <div style="text-align:center;margin-top:16px;font-size:12px;color:var(--grey-500);">By continuing, you agree to our <span style="color:var(--orange);font-weight:600;">Terms of Service</span> and <span style="color:var(--orange);font-weight:600;">Privacy Policy</span></div>
            <div style="display:flex;align-items:center;gap:12px;margin-top:20px;">
              <div style="flex:1;height:1px;background:var(--grey-200);"></div>
              <span style="font-size:12px;color:var(--grey-400);font-weight:500;">or</span>
              <div style="flex:1;height:1px;background:var(--grey-200);"></div>
            </div>
            <div style="display:flex;gap:10px;margin-top:16px;">
              <button class="btn btn-outline" style="flex:1;font-size:13px;" onclick="showToast('Google login coming soon','info')">
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
              </button>
              <button class="btn btn-outline" style="flex:1;font-size:13px;" onclick="showToast('Apple login coming soon','info')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--black)"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Apple
              </button>
            </div>
            <div style="text-align:center;margin-top:16px;">
              <button style="font-size:13px;color:var(--grey-500);font-weight:600;background:none;border:none;cursor:pointer;" onclick="skipVehicleSetup()">Skip for now &amp; Continue as Guest ›</button>
            </div>
          </div>

          <div id="loginStep2" style="display:none;flex-direction:column;gap:14px;">
            <div style="font-size:15px;font-weight:600;color:var(--black);">Enter OTP</div>
            <div style="font-size:13px;color:var(--grey-500);">Sent to +91 <span id="displayPhone" style="font-weight:600;color:var(--black);"></span></div>
            <div class="otp-row">
              <input class="otp-box" type="tel" maxlength="1" id="otp0" oninput="otpMove(this,0)" onkeydown="otpBack(this,0)">
              <input class="otp-box" type="tel" maxlength="1" id="otp1" oninput="otpMove(this,1)" onkeydown="otpBack(this,1)">
              <input class="otp-box" type="tel" maxlength="1" id="otp2" oninput="otpMove(this,2)" onkeydown="otpBack(this,2)">
              <input class="otp-box" type="tel" maxlength="1" id="otp3" oninput="otpMove(this,3)" onkeydown="otpBack(this,3)">
              <input class="otp-box" type="tel" maxlength="1" id="otp4" oninput="otpMove(this,4)" onkeydown="otpBack(this,4)">
              <input class="otp-box" type="tel" maxlength="1" id="otp5" oninput="otpMove(this,5)" onkeydown="otpBack(this,5)">
            </div>
            <span class="input-err" id="otpError" style="text-align:center;"></span>
            <button class="btn btn-orange" onclick="verifyOtp()">Verify OTP</button>
            <button style="font-size:13px;color:var(--orange);font-weight:600;text-align:center;background:none;border:none;cursor:pointer;" onclick="resendOtp()">Resend OTP</button>
            <button style="font-size:13px;color:var(--grey-500);text-align:center;background:none;border:none;cursor:pointer;" onclick="document.getElementById('loginStep1').style.display='';document.getElementById('loginStep2').style.display='none';">← Change number</button>
          </div>
        </div>
        <div class="safe-bot"></div>
      </div>`;
    },

    /* ── 04 Add Vehicle (Brand → Model → Variant) ──────────────── */
    /* ── 04 Add Vehicle (Brand → Model → Variant) ──────────────── */
    brandSelect() {
      const brands = AppState.carBrands;
      const popular = brands.filter(b=>b.popular);
      const other = brands.filter(b=>!b.popular);
      const sortedBrands = [...popular, ...other];
      
      return `
      <div style="background:var(--white);min-height:100%; display: flex; flex-direction: column;">
        <!-- Custom Header -->
        <div style="display:flex; align-items:center; justify-content:space-between; padding: 16px; background:var(--white); border-bottom:1px solid var(--grey-150);">
          <div style="display:flex; align-items:center; gap: 16px;">
            <button onclick="Router.go('login')" style="background:none; border:none; padding:0; cursor:pointer; color:var(--black);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <div style="font-size: 18px; font-weight: 700; color: var(--black);">Select Vehicle</div>
          </div>
          <button onclick="showToast('Fallback flow coming soon','info')" style="background:var(--yellow); color:var(--black); border:none; border-radius:4px; padding:6px 12px; font-size:12px; font-weight:700; cursor:pointer;">
            Can't find your Vehicle?
          </button>
        </div>

        <div class="content" style="gap:16px; padding: 16px;">
          <!-- Search -->
          <div style="display:flex; align-items:center; padding: 12px 16px; background:var(--white); border: 1.5px solid var(--grey-200); border-radius: 8px; gap: 10px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--grey-400)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="brandSearchInput" placeholder="Search &quot;Audi A4&quot;" oninput="filterBrandsAndModels(this.value)" style="flex:1; border:none; outline:none; font-size:15px; font-family:var(--font); color:var(--black);">
          </div>
          
          <div id="brandGridContainer">
            <!-- Popular Vehicles -->
            <div style="margin-top:24px;">
              <div style="font-size:14px; font-weight:700; color:var(--black); margin-bottom:12px;">Popular Vehicles</div>
              <div class="brand-grid">
                ${popular.map((b, i)=>`
                <div class="brand-item" onclick="selectBrand('${b.id}',this)">
                  <div class="brand-logo-box" style="width:56px;height:36px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
                    ${b.logo || '<span style="font-size:18px;font-weight:800;color:var(--grey-600);">' + b.name.charAt(0) + '</span>'}
                  </div>
                  <div class="brand-name">${b.name}</div>
                </div>`).join('')}
              </div>
            </div>

            <!-- All Brands -->
            <div style="margin-top:24px;">
              <div style="font-size:14px; font-weight:700; color:var(--black); margin-bottom:12px;">All Brands</div>
              <div class="brand-grid">
                ${brands.map((b, i)=>`
                <div class="brand-item" onclick="selectBrand('${b.id}',this)">
                  <div class="brand-logo-box" style="width:56px;height:36px;display:flex;align-items:center;justify-content:center;overflow:hidden;">
                    ${b.logo || '<span style="font-size:18px;font-weight:800;color:var(--grey-600);">' + b.name.charAt(0) + '</span>'}
                  </div>
                  <div class="brand-name">${b.name}</div>
                </div>`).join('')}
              </div>
            </div>
          </div>
          
          <!-- Search Results Container -->
          <div id="searchResultsContainer" style="display:none; margin-top:16px;">
             <!-- Rendered dynamically via JS -->
          </div>

          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    modelSelect() {
      const brand = AppState.carBrands.find(b=>b.id===AppState.ui.selectedBrand)||AppState.carBrands[0];
      const sel = AppState.ui.selectedModel;
      
      return `
      <div style="background:var(--white);min-height:100%; display: flex; flex-direction: column;">
        <!-- Custom Header -->
        <div style="display:flex; align-items:center; justify-content:space-between; padding: 16px; background:var(--white); border-bottom:1px solid var(--grey-150);">
          <div style="display:flex; align-items:center; gap: 16px;">
            <button onclick="Router.go('brandSelect')" style="background:none; border:none; padding:0; cursor:pointer; color:var(--black);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <div style="display:flex; flex-direction:column; line-height:1.2;">
              <span style="font-size:14px; font-weight:700; color:var(--black);">Vehicles by</span>
              <span style="font-size:15px; font-weight:700; color:var(--black);">${brand.name}</span>
            </div>
          </div>
          <button onclick="showToast('Fallback flow coming soon','info')" style="background:var(--yellow); color:var(--black); border:none; border-radius:4px; padding:6px 12px; font-size:12px; font-weight:700; cursor:pointer;">
            Can't find your Vehicle?
          </button>
        </div>

        <div class="content" style="gap:16px; padding: 16px;">
          <!-- Search -->
          <div style="display:flex; align-items:center; padding: 12px 16px; background:var(--white); border: 1.5px solid var(--grey-200); border-radius: 8px; gap: 10px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--grey-400)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="modelSearchInput" placeholder="Search &quot;${brand.name} Swift&quot;" oninput="filterModels(this.value)" style="flex:1; border:none; outline:none; font-size:15px; font-family:var(--font); color:var(--black);">
          </div>
          
          <div class="model-grid" id="modelGridContainer">
            ${brand.models.length === 0 ? `
              <div style="grid-column: 1 / -1; padding: 40px 20px; text-align: center; color: var(--grey-500); font-size: 14px; display:flex; flex-direction:column; align-items:center; gap: 12px;">
                <div>No vehicles available for this brand yet.</div>
              </div>
            ` : brand.models.map((m, i)=>`
            <div class="model-item" onclick="selectModel('${m.id}',this)">
              <div class="vehicle-image-container ${m.image ? 'skeleton-bg' : ''}">
                ${m.image
                  ? `<img ${i < 9 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} src="${m.image}" alt="${m.name}" class="vehicle-image" style="opacity:0;transition:opacity 0.2s;" onload="this.parentElement.classList.remove('skeleton-bg');this.style.opacity='1'" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                     <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">${carSVG(60,36,'var(--grey-400)')}</div>`
                  : `<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center;">${carSVG(60,36,'var(--grey-400)')}</div>`}
              </div>
              <div class="model-name">${m.name}</div>
            </div>`).join('')}
          </div>
          
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    variantSelect() {
      const brand = AppState.carBrands.find(b=>b.id===AppState.ui.selectedBrand)||AppState.carBrands[0];
      const modelId = AppState.ui.selectedModel;
      const model = brand.models.find(m=>m.id===modelId)||brand.models[0];
      const selVariant = AppState.ui.selectedVariant;
      const skipBtn = `<button class="skip-btn" onclick="skipVehicleSetup()" style="font-size:12px;font-weight:700;color:var(--orange);background:none;border:none;cursor:pointer;padding:4px 8px;">Skip ›</button>`;
      return `
      <div style="background:var(--white);min-height:100%;">
        ${topbar('Select Your Vehicle', `${brand.name} ${model.name} • Step 3 of 3`, skipBtn)}
        <div class="content" style="gap:16px;">
          <div class="brand-step-header">
            <div class="brand-step-num">3</div>
            <div class="brand-step-title">Select Variant & Details</div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--grey-100);border-radius:var(--r2);">
            ${carSVG(80,44,'var(--grey-400)')}
            <div>
              <div style="font-size:15px;font-weight:700;color:var(--black);">${brand.name} ${model.name}</div>
              <div style="font-size:12px;color:var(--grey-500);margin-top:2px;">Select variant below</div>
            </div>
          </div>
          <div>
            <div style="font-size:13px;font-weight:600;color:var(--grey-700);margin-bottom:8px;">Select Variant</div>
            <div class="variant-chips">
              ${(model.variants||['VX','ZX','V','SV']).map(v=>`
              <button class="variant-chip ${selVariant===v?'selected':''}" onclick="selectVariant('${v}',this)">${v}</button>`).join('')}
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="font-size:13px;font-weight:700;color:var(--grey-700);">Tell us about your car</div>
            <div class="input-wrap">
              <label class="input-label">Registration Number</label>
              <input class="input" id="regInput" placeholder="e.g., MH 12 AB 1234" style="text-transform:uppercase;" oninput="this.value=this.value.toUpperCase()">
              <span class="input-err" id="regError">Please enter your registration number</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div class="input-wrap">
                <label class="input-label">Fuel Type</label>
                <select class="select-field" id="fuelInput">
                  <option>Petrol</option><option>Diesel</option><option>CNG</option><option>Electric</option><option>Hybrid</option>
                </select>
              </div>
              <div class="input-wrap">
                <label class="input-label">Transmission</label>
                <select class="select-field" id="transInput">
                  <option>Automatic</option><option>Manual</option>
                </select>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <div class="input-wrap">
                <label class="input-label">Year</label>
                <select class="select-field" id="yearInput">
                  ${Array.from({length:15},(_,i)=>2025-i).map(y=>`<option>${y}</option>`).join('')}
                </select>
              </div>
              <div class="input-wrap">
                <label class="input-label">Odometer (km)</label>
                <input class="input" type="number" id="odoInput" placeholder="e.g., 24360">
              </div>
            </div>
          </div>
          <button class="btn btn-orange" onclick="saveVehicle()">Save Vehicle ${SVG.arrowR}</button>
          <button class="btn btn-outline" style="margin-top:-6px;" onclick="skipVehicleSetup()">Skip for now</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── 05 Home ─────────────────────────────────────────────────── */
    home() {
      const v = Computed.draftVehicle();
      const activeBooking = AppState.bookings.find(b=>b.status==='in_progress');
      const trackSteps = ['Booked','Checked In','Service','Quality Check','Ready'];
      const trackActive = 2;

      return `
      <div style="background:var(--grey-100);">
        <!-- Status bar -->
        <div class="status-bar">
          <span>9:16</span>
          <div class="sb-right">
            <svg width="15" height="11" viewBox="0 0 15 11" fill="var(--black)"><rect x="0" y="5" width="3" height="6" rx="0.5"/><rect x="4" y="3" width="3" height="8" rx="0.5"/><rect x="8" y="1" width="3" height="10" rx="0.5"/><rect x="12" y="0" width="3" height="11" rx="0.5"/></svg>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="var(--black)" stroke-width="1.2"><path d="M1 4.5C3 2.2 5.3 1 7 1s4 1.2 6 3.5"/><path d="M3 6.5C4.2 5 5.5 4 7 4s2.8 1 4 2.5"/><circle cx="7" cy="9" r="1" fill="var(--black)" stroke="none"/></svg>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="1.5" stroke="var(--black)"/><rect x="1.5" y="1.5" width="14" height="8" rx="1" fill="var(--black)"/><path d="M20 3.5v3" stroke="var(--black)" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
        </div>

        <!-- Reference Header: Location + Search Bar + Vehicle Selector Pill -->
        <div class="ref-top-bar">
          <div class="ref-top-row">
            <div class="ref-location" onclick="showToast('Kukatpally, Hyderabad selected','info')">
              ${SVG.location} Kukatpally, Hyderabad ${SVG.chevronD}
            </div>
            <div class="ref-vehicle-pill" onclick="Router.go('brandSelect')">
              ${carSVG(24,14,'white')}
              <span>${(v.model||v.name||'CITY').toUpperCase().split(' ')[0]}</span>
            </div>
          </div>
          <div class="ref-search-box" onclick="Router.go('services')">
            ${SVG.search}
            <input type="text" placeholder="Search Services &amp; Packages" readonly>
          </div>
        </div>

        <!-- Promo Banner Cards Scroll -->
        <div class="promo-cards-scroll">
          <div class="promo-card-red" onclick="Router.go('offers')">
            <div class="promo-card-arrow">${SVG.chevronR}</div>
            <div class="promo-card-title">Miles</div>
            <div class="promo-card-sub">Free Road Side<br>Assistance</div>
          </div>
          <div class="promo-card-purple" onclick="Router.go('offers')">
            <div class="promo-card-arrow">${SVG.chevronR}</div>
            <div class="promo-card-title">Warranty</div>
            <div class="promo-card-sub">Save ₹30,000<br>Annually</div>
          </div>
        </div>

        <div class="gap-section"></div>

        <!-- Big Hero Car Cleaning Offer Banner -->
        <div style="background:var(--white);padding:4px 0;">
          <div class="hero-cleaning-banner" onclick="Router.go('selectPackage')">
            <div style="font-size:10px;font-weight:800;color:var(--orange);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">MONSOON SPECIAL</div>
            <div class="hcb-title">CAR CLEANING</div>
            <div class="hcb-price-box">
              <div class="hcb-price-tag">Top Wash ₹99/-</div>
              <div class="hcb-price-tag">Vacuuming ₹99/-</div>
            </div>
            <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-top:12px;display:flex;gap:12px;">
              <span>🛡️ 1 Month Warranty</span>
              <span>🏷️ Lowest Price Guaranteed</span>
            </div>
          </div>
        </div>

        <div class="gap-section"></div>

        <!-- Curated Primary Services (2x2 Grid with Badges) -->
        <div style="background:var(--white);padding-top:14px;">
          <div class="section-header">
            <div class="section-title">Car Services &amp; Repairs</div>
            <button class="section-link" onclick="Router.go('services')">View all ${SVG.chevronR}</button>
          </div>
          <div class="curated-2x2-grid">
            <div class="curated-card-large" onclick="Router.go('selectPackage')">
              <span class="corner-badge-green">Heavy Discount</span>
              <div style="margin-top:8px;">${SVG.svcPeriodic}</div>
              <div style="font-size:13px;font-weight:800;color:var(--black);margin-top:4px;">Car Services</div>
            </div>
            <div class="curated-card-large" onclick="Router.go('services')">
              <span class="corner-badge-green">2 Years Warranty</span>
              <div style="margin-top:8px;">${SVG.svcDent}</div>
              <div style="font-size:13px;font-weight:800;color:var(--black);margin-top:4px;">Denting &amp; Painting</div>
            </div>
            <div class="curated-card-large" onclick="Router.go('services')">
              <span class="corner-badge-yellow">Lowest Prices</span>
              <div style="margin-top:8px;">${SVG.svcAC}</div>
              <div style="font-size:13px;font-weight:800;color:var(--black);margin-top:4px;">AC Service &amp; Repair</div>
            </div>
            <div class="curated-card-large" onclick="Router.go('services')">
              <span class="corner-badge-yellow">Starting from ₹99/-</span>
              <div style="margin-top:8px;">${SVG.svcCarWash}</div>
              <div style="font-size:13px;font-weight:800;color:var(--black);margin-top:4px;">Car Spa &amp; Cleaning</div>
            </div>
          </div>
        </div>

        <div class="gap-section"></div>

        <!-- Curated Custom Services (4-Column Grid with Badges) -->
        <div style="background:var(--white);padding-top:14px;">
          <div class="section-header">
            <div class="section-title">Curated Custom Services</div>
          </div>
          <div class="curated-4col-grid">
            <div class="curated-icon-item" onclick="Router.go('services')">
              <div>${SVG.svcDetail}</div>
              <div style="font-size:11px;font-weight:700;color:var(--black);text-align:center;">Detailing</div>
            </div>
            <div class="curated-icon-item" onclick="Router.go('services')">
              <span class="icon-badge-pill">SALE</span>
              <div>${SVG.svcBattery}</div>
              <div style="font-size:11px;font-weight:700;color:var(--black);text-align:center;">Batteries</div>
            </div>
            <div class="curated-icon-item" onclick="Router.go('services')">
              <span class="icon-badge-pill">SALE</span>
              <div>${SVG.svcTyres}</div>
              <div style="font-size:11px;font-weight:700;color:var(--black);text-align:center;">Tyres &amp; Wheels</div>
            </div>
            <div class="curated-icon-item" onclick="Router.go('services')">
              <span class="icon-badge-pill" style="background:#3B82F6;">HOME</span>
              <div>${SVG.svcDiag}</div>
              <div style="font-size:11px;font-weight:700;color:var(--black);text-align:center;">Inspections</div>
            </div>
            <div class="curated-icon-item" onclick="Router.go('services')">
              <span class="icon-badge-pill" style="background:#EF4444;">NEW</span>
              <div>${SVG.engine}</div>
              <div style="font-size:11px;font-weight:700;color:var(--black);text-align:center;">Clutch &amp; Body</div>
            </div>
            <div class="curated-icon-item" onclick="Router.go('services')">
              <div>${SVG.svcDiag}</div>
              <div style="font-size:11px;font-weight:700;color:var(--black);text-align:center;">Windshield</div>
            </div>
            <div class="curated-icon-item" onclick="Router.go('services')">
              <span class="icon-badge-pill">FREE</span>
              <div>${SVG.fluids}</div>
              <div style="font-size:11px;font-weight:700;color:var(--black);text-align:center;">Suspension</div>
            </div>
            <div class="curated-icon-item" onclick="Router.go('services')">
              <span class="icon-badge-pill" style="background:#8B5CF6;">CASHLESS</span>
              <div>${SVG.shield}</div>
              <div style="font-size:11px;font-weight:700;color:var(--black);text-align:center;">Insurance</div>
            </div>
          </div>
        </div>

        <div class="gap-section"></div>

        <!-- FLAG Auto Care Guarantee Row -->
        <div style="background:var(--white);padding-top:14px;">
          <div class="section-header">
            <div class="section-title">FLAG Auto Care Guarantee</div>
          </div>
          <div class="guarantee-row">
            <div class="guarantee-card">
              <div class="guarantee-icon">🚚</div>
              <div class="guarantee-text">Free Pickup Drop</div>
            </div>
            <div class="guarantee-card">
              <div class="guarantee-icon">⚙️</div>
              <div class="guarantee-text">Genuine Parts</div>
            </div>
            <div class="guarantee-card">
              <div class="guarantee-icon">🛡️</div>
              <div class="guarantee-text">30 Days Warranty</div>
            </div>
          </div>
        </div>

        <div class="gap-section"></div>

        <!-- Get Summer Ready With FLAG (Featured 2x2 Grid) -->
        <div style="background:var(--white);padding-top:14px;">
          <div class="section-header">
            <div class="section-title">Get Summer Ready With FLAG</div>
          </div>
          <div class="photo-service-grid">
            <div class="photo-service-card" onclick="Router.go('services')">
              <div class="photo-card-img" style="background:var(--orange-light);color:var(--orange);">
                ${SVG.svcDent}
              </div>
              <div class="photo-card-title">Front Bumper Paint</div>
            </div>
            <div class="photo-service-card" onclick="Router.go('services')">
              <div class="photo-card-img" style="background:var(--blue-bg);color:var(--blue);">
                ${SVG.svcDetail}
              </div>
              <div class="photo-card-title">Rubbing &amp; Polishing</div>
            </div>
            <div class="photo-service-card" onclick="Router.go('services')">
              <div class="photo-card-img" style="background:var(--green-bg);color:var(--green);">
                ${SVG.svcCarWash}
              </div>
              <div class="photo-card-title">Deep All Round Spa</div>
            </div>
            <div class="photo-service-card" onclick="Router.go('selectPackage')">
              <div class="photo-card-img" style="background:var(--amber-bg);color:var(--amber);">
                ${SVG.svcPeriodic}
              </div>
              <div class="photo-card-title">Standard Service</div>
            </div>
          </div>
        </div>

        <div class="gap-section"></div>

        <!-- Original Spare Parts (Brands Wall) -->
        <div style="background:var(--white);padding-top:14px;">
          <div class="section-header">
            <div>
              <div class="section-title">Original Spare Parts</div>
              <div style="font-size:12px;color:var(--grey-500);margin-top:2px;">Extended Warranty with FLAG Auto Care</div>
            </div>
          </div>
          <div class="parts-brand-scroll">
            <div class="parts-brand-pill">BOSCH</div>
            <div class="parts-brand-pill" style="color:#10B981;">Valeo</div>
            <div class="parts-brand-pill" style="color:#3B82F6;">MAHLE</div>
            <div class="parts-brand-pill" style="color:#EF4444;">brembo</div>
            <div class="parts-brand-pill">MOTUL</div>
            <div class="parts-brand-pill" style="color:#F59E0B;">Mobil 1</div>
          </div>
        </div>

        <div class="gap-section"></div>

        <!-- Referral Banner -->
        <div style="background:var(--white);padding:4px 0;">
          <div class="refer-banner">
            <div>
              <div class="refer-title">Earn ₹ 1000 for every friend you refer</div>
              <div class="refer-sub">Get a friend to start using FLAG Auto Care</div>
            </div>
            <button class="refer-btn" onclick="showToast('Referral link copied!','success')">REFER NOW</button>
          </div>
        </div>

        <div class="gap-section"></div>

        <!-- Active Service (if any) -->
        ${activeBooking ? `
        <div style="background:var(--white);padding:14px 0;">
          <div class="active-svc-header">
            <div class="active-label">
              <span class="pulse-dot"></span>
              Active Service
            </div>
            <button class="section-link" onclick="Router.go('bookings')">View all ${SVG.chevronR}</button>
          </div>
          <div class="active-svc-card">
            <div class="asc-top">
              <div class="asc-thumb">${SVG.services}</div>
              <div class="asc-info">
                <div style="display:flex;align-items:center;justify-content:space-between;">
                  <div class="asc-name">Comprehensive Service</div>
                  <span class="asc-badge">In Progress</span>
                </div>
                <div class="asc-branch">${SVG.location} FLAG Auto Care — Kothrud</div>
              </div>
            </div>
            <div class="asc-footer">
              <button class="btn-sm orange" onclick="Router.go('tracking')">Track Service ${SVG.arrowR}</button>
            </div>
          </div>
        </div>
        <div class="gap-section"></div>` : ''}

        <!-- Miles Membership Footer Card -->
        <div style="background:var(--white);padding:4px 0 24px;">
          <div class="membership-banner" onclick="Router.go('offers')">
            <div>
              <div style="display:flex;align-items:center;gap:6px;">
                <span class="badge badge-red" style="font-size:11px;font-weight:900;">Miles</span>
                <span style="font-size:15px;font-weight:800;">Membership</span>
              </div>
              <div style="font-size:11px;color:rgba(255,255,255,0.7);margin-top:6px;">₹ 20,000 Savings • Discounts Upto 25% • Free SOS</div>
            </div>
            <button style="background:white;color:var(--black);border:none;padding:8px 12px;border-radius:8px;font-size:11px;font-weight:800;cursor:pointer;">EXPLORE</button>
          </div>
        </div>

        <div style="text-align:center;padding:12px 0;font-size:11px;color:var(--grey-400);font-weight:600;background:var(--white);">FLAG Auto Care — Smarter Care for Every Journey.</div>
        <div class="safe-bot" style="background:var(--white);"></div>
      </div>`;
    },

    /* ── 06 Services Discovery ─────────────────────────────────── */
    services() {
      const cats = [
        { icon:'svcPeriodic', name:'Periodic Service', price:'From ₹2,999', desc:'Engine oil, filter, 21-point inspection', color:'#FFF5EF' },
        { icon:'svcAC', name:'AC Service', price:'From ₹1,299', desc:'Cooling check, gas top-up, filter clean', color:'#EFF6FF' },
        { icon:'svcBattery', name:'Battery', price:'From ₹999', desc:'Health check, terminal clean, replacement', color:'#F0FBF3' },
        { icon:'svcTyres', name:'Tyres', price:'From ₹1,499', desc:'Rotation, balancing, replacement', color:'#F6F6F8' },
        { icon:'svcBrakes', name:'Brakes', price:'From ₹799', desc:'Pad check, disc inspection, fluid', color:'#FEF2F2' },
        { icon:'svcDent', name:'Dent & Paint', price:'From ₹3,499', desc:'Scratch repair, dent removal, touch-up', color:'#F8F0FF' },
        { icon:'svcCarWash', name:'Car Wash', price:'From ₹299', desc:'Exterior wash, vacuum, tyre cleaning', color:'#EFF6FF' },
        { icon:'svcDetail', name:'Detailing', price:'From ₹999', desc:'Full interior & exterior detailing', color:'#FFFBEB' },
        { icon:'svcDiag', name:'Diagnostics', price:'From ₹499', desc:'OBD scan, fault code reading, report', color:'#F0FBF3' },
      ];
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Services','What does your car need?')}
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px;">
          <div class="input-search">
            ${SVG.search}
            <input type="text" placeholder="Search services...">
          </div>
          <div class="chips" style="padding:2px 0;">
            <button class="chip active">All Services</button>
            <button class="chip">Maintenance</button>
            <button class="chip">AC & Cooling</button>
            <button class="chip">Tyres & Wheels</button>
            <button class="chip">Wash & Detail</button>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${cats.map(c=>`
            <div class="card" style="display:flex;align-items:center;gap:14px;cursor:pointer;padding:14px;" onclick="Router.go('serviceDetail')">
              <div class="svc-cat-icon" style="width:54px;height:54px;background:${c.color};">${SVG[c.icon]}</div>
              <div style="flex:1;">
                <div style="font-size:14px;font-weight:700;color:var(--black);">${c.name}</div>
                <div style="font-size:12px;color:var(--grey-500);margin-top:2px;">${c.desc}</div>
                <div style="font-size:13px;font-weight:700;color:var(--orange);margin-top:4px;">${c.price}</div>
              </div>
              <div style="color:var(--grey-400);">${SVG.chevronR}</div>
            </div>`).join('')}
          </div>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Service Detail ─────────────────────────────────────────── */
    serviceDetail() {
      const v = Computed.draftVehicle();
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Periodic Service','Comprehensive vehicle maintenance')}
        <div style="background:var(--dark);padding:20px 16px 24px;display:flex;gap:16px;align-items:center;">
          <div style="color:rgba(255,255,255,0.3);">${carSVG(80,44,'rgba(255,255,255,0.3)')}</div>
          <div style="flex:1;">
            <div style="font-size:18px;font-weight:800;color:var(--white);letter-spacing:-0.3px;">Comprehensive<br>Service</div>
            <div style="font-size:22px;font-weight:800;color:var(--orange);margin-top:6px;">₹2,999</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:2px;">For ${v.name} • ~60–90 mins</div>
          </div>
        </div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div class="card">
            <div class="sec-title" style="margin-bottom:10px;">What's Included</div>
            ${[['Engine Oil Change','Premium grade oil replacement'],['Oil Filter Change','New OEM-grade filter installed'],['21 Point Checkup','Full vehicle health assessment'],['Brake Inspection','Pad, disc & fluid check'],['Battery Health Check','CCA & voltage measurement'],['Tyre Check','Pressure, tread & rotation'],['Air Filter Inspection','Cabin & engine air filter'],['Top-up Fluids','Coolant, brake fluid, washer'],].map(([t,d])=>`
            <div style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid var(--grey-150);">
              <div class="pkg-check-icon">${SVG.check}</div>
              <div>
                <div style="font-size:13px;font-weight:600;color:var(--black);">${t}</div>
                <div style="font-size:12px;color:var(--grey-500);margin-top:1px;">${d}</div>
              </div>
            </div>`).join('')}
          </div>
          <div class="card">
            <div class="sec-title" style="margin-bottom:8px;">Why it's recommended</div>
            <div style="font-size:13px;color:var(--grey-600);line-height:1.6;">Your ${v.name} has covered ${v.odometer.toLocaleString('en-IN')} km. At this interval, engine oil degrades and your 21-point inspection ensures no underlying issues are missed. This service keeps your warranty valid and vehicle performing at its best.</div>
          </div>
          <button class="btn btn-orange" onclick="Router.go('selectPackage')">Choose Package ${SVG.arrowR}</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Vehicle Dashboard ──────────────────────────────────────── */
    vehicleDashboard() {
      const v = Computed.draftVehicle();
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar(v.name, v.registration, `<button class="btn-sm outline" onclick="Router.go('brandSelect')" style="font-size:11px;display:flex;align-items:center;gap:4px;">${SVG.plus} Add</button>`)}
        <div style="background:var(--white);padding:16px;border-bottom:1px solid var(--grey-150);display:flex;align-items:center;gap:14px;">
          <div style="color:var(--grey-300);flex-shrink:0;">${carSVG(100,56,'var(--grey-400)')}</div>
          <div style="flex:1;">
            <div style="font-size:16px;font-weight:800;color:var(--black);">${v.name}</div>
            <div class="vc-plate-badge" style="margin-top:4px;">${v.registration}</div>
            <div style="display:flex;gap:12px;margin-top:8px;">
              <div style="font-size:12px;color:var(--grey-600);font-weight:500;">${v.fuel}</div>
              <div style="font-size:12px;color:var(--grey-600);font-weight:500;">${v.year}</div>
              <div style="font-size:12px;color:var(--grey-600);font-weight:500;">${v.odometer.toLocaleString('en-IN')} km</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:5px;">
            <span class="health-dot green"></span>
            <span style="font-size:12px;font-weight:700;color:var(--green);">Good</span>
          </div>
        </div>

        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <!-- Stats row -->
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
            ${[
              ['Next Service','640 km','var(--orange)'],
              ['Last Service','3,200 km','var(--grey-700)'],
              ['Health Score','84/100','var(--green)'],
            ].map(([l,v,c])=>`
            <div class="card" style="text-align:center;padding:12px 8px;">
              <div style="font-size:16px;font-weight:800;color:${c};">${v}</div>
              <div style="font-size:10px;color:var(--grey-500);font-weight:600;margin-top:3px;">${l}</div>
            </div>`).join('')}
          </div>

          <div class="card">
            <div class="sec-hd" style="margin-bottom:10px;"><div class="sec-title">Vehicle Health</div><button class="sec-link" onclick="Router.go('vehicleHealth')">Details</button></div>
            ${[
              ['Engine','Good','hsp-good'],
              ['Battery','Good','hsp-good'],
              ['Brakes','Attention needed','hsp-attention'],
              ['Tyres','Good','hsp-good'],
              ['AC System','Good','hsp-good'],
            ].map(([part,status,cls])=>`
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--grey-150);">
              <span style="font-size:13px;font-weight:600;color:var(--black);">${part}</span>
              <span class="health-status-pill ${cls}">${status}</span>
            </div>`).join('')}
          </div>

          <div class="menu-section">
            ${[
              [SVG.history,'Service History','Router.go(\'serviceHistory\')','var(--blue-bg)',SVG.chevronR],
              [SVG.invoice,'Invoices & Bills','Router.go(\'invoices\')','var(--green-bg)',SVG.chevronR],
              [SVG.doc,'Documents','showToast(\'Documents coming soon\',\'info\')','var(--amber-bg)',SVG.chevronR],
              [SVG.shield,'Insurance','showToast(\'Insurance coming soon\',\'info\')','var(--orange-light)',SVG.chevronR],
            ].map(([icon,label,fn,bg,arr])=>`
            <div class="menu-row" onclick="${fn}">
              <div class="menu-icon" style="background:${bg};">${icon}</div>
              <div class="menu-label">${label}</div>
              <div class="menu-arrow">${arr}</div>
            </div>`).join('')}
          </div>

          <button class="btn btn-orange" onclick="Router.go('selectPackage')">Book a Service ${SVG.arrowR}</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Select Package ─────────────────────────────────────────── */
    selectPackage() {
      const draft = AppState.draft;
      const packs = AppState.packages;
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Select Package','Periodic Service')}
        <div class="prog-bar">
          ${['Package','Date & Time','Add-ons','Review'].map((s,i)=>{
            const st = i===0?'active':'pending';
            return `<div class="prog-step ${st}"><div class="prog-dot ${st}">${i===0?'1':i+1}</div><div class="prog-label ${st}">${s}</div></div>`;
          }).join('')}
        </div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div style="font-size:13px;color:var(--grey-600);font-weight:500;">Choose the right package for your vehicle's needs. All packages include engine oil, oil filter &amp; 21-point inspection.</div>
          ${packs.map(p=>{
            const sel = draft.packageId===p.id;
            const price = p.basePrice || p.price || 0;
            const svcs = p.services || p.additionalFeatures || p.commonFeatures || [];
            return `
            <div class="pkg-card ${sel?'selected':''}" onclick="pickPackage('${p.id}')">
              <div class="pkg-card-head">
                <div>
                  <div class="pkg-name">${p.name}</div>
                  ${p.popular?`<span class="badge badge-orange" style="margin-top:4px;">Most Popular</span>`:''}
                  <div style="font-size:12px;color:var(--grey-500);margin-top:4px;">~${p.duration}</div>
                </div>
                <div style="text-align:right;">
                  <div class="pkg-price">${fmt(price)}</div>
                  <div class="pkg-price-sub">+18% GST</div>
                  <div style="margin-top:6px;">
                    <div class="selected-radio ${sel?'on':''}"></div>
                  </div>
                </div>
              </div>
              <div class="pkg-body">
                ${svcs.map(s=>`<div class="pkg-row"><div class="pkg-check-icon">${SVG.check}</div>${s}</div>`).join('')}
              </div>
              <div class="pkg-footer">
                <button class="btn-sm outline" onclick="event.stopPropagation();Router.go('packageDetail')">Details</button>
                <button class="btn-sm outline" onclick="event.stopPropagation();Router.go('comparePackages')">Compare</button>
                <button class="btn-sm orange" style="margin-left:auto;" onclick="event.stopPropagation();pickPackage('${p.id}');Router.go('dateTime')">Select ${SVG.arrowR}</button>
              </div>
            </div>`;
          }).join('')}
          <button class="btn-sm outline" style="width:100%;justify-content:center;" onclick="Router.go('aiRecommend')">
            ${SVG.sparkle} Ask FLAG AI to recommend
          </button>
          ${draft.packageId?`<button class="btn btn-orange" onclick="Router.go('dateTime')">Continue with ${packs.find(p=>p.id===draft.packageId)?.name||'Selected'} ${SVG.arrowR}</button>`:''}
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Package Detail ─────────────────────────────────────────── */
    packageDetail() {
      const pkg = Computed.draftPackage();
      if(!pkg) return topbar('Package Detail');
      const price = pkg.basePrice || pkg.price || 0;
      const svcs = pkg.services || pkg.additionalFeatures || pkg.commonFeatures || [];
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar(pkg.name,'Full package details')}
        <div style="background:var(--dark);padding:20px 16px;">
          <div style="font-size:20px;font-weight:800;color:var(--white);">${pkg.name}</div>
          <div style="font-size:28px;font-weight:900;color:var(--orange);margin-top:4px;">${fmt(price)}</div>
          <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:2px;">Duration: ~${pkg.duration} • Includes GST of ${fmt(Math.round(price*0.18))}</div>
        </div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div class="card">
            <div class="sec-title" style="margin-bottom:10px;">Services Included (${svcs.length})</div>
            ${svcs.map(s=>`
            <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--grey-150);">
              <div class="pkg-check-icon">${SVG.check}</div>
              <div style="font-size:13px;font-weight:500;color:var(--black);">${s}</div>
            </div>`).join('')}
          </div>
          <div class="card">
            <div class="info-row"><span class="info-key">Base Price</span><span class="info-val">${fmt(price)}</span></div>
            <div class="info-row"><span class="info-key">GST (18%)</span><span class="info-val">${fmt(Math.round(price*0.18))}</span></div>
            <div class="info-row" style="border-bottom:none;"><span class="info-key" style="font-weight:700;color:var(--black);">Total</span><span class="info-val" style="color:var(--orange);font-size:16px;">${fmt(Math.round(price*1.18))}</span></div>
          </div>
          <button class="btn btn-orange" onclick="Router.go('dateTime')">Book This Package ${SVG.arrowR}</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Compare Packages ───────────────────────────────────────── */
    comparePackages() {
      const pkgs = AppState.packages;
      const rows = [
        ['Engine Oil Change',true,true,true],
        ['Oil Filter Change',true,true,true],
        ['21 Point Checkup',true,true,true],
        ['Brake Inspection',true,true,true],
        ['Battery Health Check',true,true,true],
        ['Tyre Check',true,true,true],
        ['Air Filter Inspection',false,true,true],
        ['Wheel Alignment',false,true,true],
        ['Fuel System Cleaning',false,true,true],
        ['Top-up Fluids',false,false,true],
        ['AC Performance Check',false,false,true],
        ['Car Wash',false,false,true],
        ['Interior Vacuuming',false,false,true],
        ['Priority Booking',false,false,true],
        ['90-Day Roadside Assist',false,false,true],
      ];
      const selIdx = pkgs.findIndex(p=>p.id===AppState.draft.packageId);
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Compare Packages',"Choose what's right for you")}
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div class="cmp-table">
            <div class="cmp-head">
              <div class="cmp-hcell" style="text-align:left;padding-left:12px;">Feature</div>
              ${pkgs.map((p,i)=>`<div class="cmp-hcell ${i===selIdx?'hl':''}">${p.name.split(' ')[0]}<br><span style="font-size:12px;font-weight:800;">${fmt(p.basePrice)}</span></div>`).join('')}
            </div>
            ${rows.map(([feat,...vals])=>`
            <div class="cmp-row">
              <div class="cmp-cell">${feat}</div>
              ${vals.map((v,i)=>`<div class="cmp-cell ${i===selIdx?'hl':''}">${v?`<span class="ci-yes">${SVG.checkLg}</span>`:`<span class="ci-no">—</span>`}</div>`).join('')}
            </div>`).join('')}
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            ${pkgs.map(p=>`<button class="btn ${p.id===AppState.draft.packageId?'btn-orange':'btn-outline'}" style="font-size:12px;padding:10px 6px;" onclick="pickPackage('${p.id}');Router.go('dateTime')">${p.name.split(' ')[0]}<br>${fmt(p.basePrice)}</button>`).join('')}
          </div>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── AI Recommend ───────────────────────────────────────────── */
    aiRecommend() {
      const v = Computed.draftVehicle();
      return `
      <div style="background:var(--white);min-height:100%;">
        ${topbar('FLAG AI Recommendation')}
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px;">
          <div style="background:var(--grey-100);border-radius:var(--r3);padding:16px;display:flex;gap:10px;align-items:center;">
            <div style="width:40px;height:40px;background:var(--orange);border-radius:var(--r2);display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0;">${SVG.sparkle}</div>
            <div>
              <div style="font-size:14px;font-weight:700;color:var(--black);">Based on your ${v.name}</div>
              <div style="font-size:12px;color:var(--grey-500);margin-top:2px;">${v.odometer.toLocaleString('en-IN')} km • ${v.fuel} • ${v.year}</div>
            </div>
          </div>
          <div class="card" style="border:2px solid var(--orange);">
            <div class="rec-label" style="margin-bottom:8px;">${SVG.sparkle} Recommended</div>
            <div style="font-size:17px;font-weight:800;color:var(--black);">Comprehensive Service</div>
            <div style="font-size:24px;font-weight:800;color:var(--orange);margin-top:4px;">₹2,999</div>
            <div style="font-size:12px;color:var(--grey-600);margin-top:8px;line-height:1.6;">At ${v.odometer.toLocaleString('en-IN')} km, your vehicle is due for its periodic service. Engine oil at this stage degrades significantly. The Comprehensive package covers everything your ${v.name} needs right now.</div>
            <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px;">
              ${['Engine Oil Change','Oil Filter Change','21 Point Inspection','Brake Check','Battery Health'].map(s=>`<div style="display:flex;gap:8px;align-items:center;font-size:13px;color:var(--grey-700);"><div class="pkg-check-icon">${SVG.check}</div>${s}</div>`).join('')}
            </div>
          </div>
          <button class="btn btn-orange" onclick="pickPackage('pkg_001');Router.go('dateTime')">Book Comprehensive Service ${SVG.arrowR}</button>
          <button class="btn btn-outline" onclick="Router.go('comparePackages')">Compare All Packages</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Date & Time ────────────────────────────────────────────── */
    dateTime() {
      const draft = AppState.draft;
      const slots = AppState.slots;
      const today = new Date();
      const dates = Array.from({length:10},(_,i)=>{
        const d = new Date(today); d.setDate(d.getDate()+i);
        return { day:d.toLocaleDateString('en-IN',{weekday:'short'}), num:d.getDate(), month:d.toLocaleDateString('en-IN',{month:'short'}), full:d.toISOString().split('T')[0] };
      });
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Date & Time','Select appointment')}
        <div class="prog-bar">
          ${['Package','Date & Time','Add-ons','Review'].map((s,i)=>{
            const st=i===0?'done':i===1?'active':'pending';
            return `<div class="prog-step ${st}"><div class="prog-dot ${st}">${i===0?SVG.check:i+1}</div><div class="prog-label ${st}">${s}</div></div>`;
          }).join('')}
        </div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:14px;">
          <div class="card">
            <div class="sec-title" style="margin-bottom:12px;">Select Date</div>
            <div class="date-scroll">
              ${dates.map((d,i)=>`
              <div class="date-chip ${i===0?'selected':''}" onclick="refreshDateChips(this)">
                <div class="dc-day">${d.day}</div>
                <div class="dc-num">${d.num}</div>
                <div class="dc-month">${d.month}</div>
              </div>`).join('')}
            </div>
          </div>
          <div class="card">
            <div class="sec-title" style="margin-bottom:12px;">Select Time Slot</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${slots.map(s=>`
              <div class="time-slot-row ${s.id===draft.slotId?'selected':''} ${!s.available?'disabled':''}" onclick="${s.available?`pickSlot('${s.id}',this)`:''}">
                <span class="ts-time">${s.label}</span>
                <div style="display:flex;align-items:center;gap:8px;">
                  <span class="${s.available?'ts-avail':'ts-unavail'}">${s.available?'Available':'Fully Booked'}</span>
                  <div class="ts-radio ${s.id===draft.slotId?'on':''}"></div>
                </div>
              </div>`).join('')}
            </div>
          </div>
          <div class="card">
            <div class="sec-hd" style="margin-bottom:8px;">
              <div class="sec-title">Service Centre</div>
              <button class="sec-link" onclick="Router.go('serviceCentre')">Change</button>
            </div>
            ${AppState.branches.slice(0,1).map(b=>`
            <div style="display:flex;gap:12px;align-items:center;">
              <div style="width:40px;height:40px;background:var(--orange-light);border-radius:var(--r2);display:flex;align-items:center;justify-content:center;color:var(--orange);">${SVG.location}</div>
              <div>
                <div style="font-size:14px;font-weight:600;color:var(--black);">${b.name}</div>
                <div style="font-size:12px;color:var(--grey-500);margin-top:2px;">${b.address}</div>
                <div style="font-size:11px;color:var(--green);font-weight:600;margin-top:2px;">${b.distance} away • Open till 7:00 PM</div>
              </div>
            </div>`).join('')}
          </div>
          <button class="btn btn-orange" onclick="Router.go('addons')">Continue ${SVG.arrowR}</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Service Centre ─────────────────────────────────────────── */
    serviceCentre() {
      const branches = AppState.branches;
      const sel = AppState.draft.branchId;
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Select Service Centre')}
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div class="input-search">
            ${SVG.search}
            <input type="text" placeholder="Search by area or pincode...">
          </div>
          ${branches.map(b=>`
          <div class="centre-card ${sel===b.id?'selected':''}" onclick="AppState.draft.branchId='${b.id}';Router.back()">
            <div class="centre-head">
              <div class="centre-icon">${SVG.location}</div>
              <div style="flex:1;">
                <div class="centre-name">${b.name}</div>
                <div class="centre-addr">${b.address}</div>
                <div class="centre-dist">${b.distance} from your location</div>
              </div>
              ${sel===b.id?`<div style="color:var(--orange);">${SVG.checkLg}</div>`:''}
            </div>
            <div class="centre-stats">
              <div class="centre-stat">${SVG.clock} Mon–Sat: 9AM – 7PM</div>
              <div class="centre-stat">${SVG.star} 4.8 (240 reviews)</div>
            </div>
          </div>`).join('')}
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Add-ons ────────────────────────────────────────────────── */
    addons() {
      const addons = AppState.addons;
      const draft = AppState.draft;
      const pkg = Computed.draftPackage();
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Optional Add-ons','Enhance your service')}
        <div class="prog-bar">
          ${['Package','Date & Time','Add-ons','Review'].map((s,i)=>{
            const st=i<2?'done':i===2?'active':'pending';
            return `<div class="prog-step ${st}"><div class="prog-dot ${st}">${i<2?SVG.check:i+1}</div><div class="prog-label ${st}">${s}</div></div>`;
          }).join('')}
        </div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div class="card">
            <div class="sec-hd" style="margin-bottom:10px;">
              <div class="sec-title">Recommended Add-ons</div>
              <span style="font-size:12px;color:var(--grey-500);">Optional</span>
            </div>
            ${addons.map(a=>{
              const sel = draft.addonIds.includes(a.id);
              return `
              <div class="addon-row ${sel?'selected':''}" onclick="toggleAddonItem('${a.id}',this)" id="addon_${a.id}">
                <div class="addon-icon2">${SVG[a.icon]||SVG.services}</div>
                <div style="flex:1;">
                  <div class="addon-name2">${a.name}</div>
                  <div class="addon-sub2">${a.description}</div>
                </div>
                <div class="addon-price2">${fmt(a.price)}</div>
                <div class="chk-box ${sel?'on':''}">${sel?SVG.check:''}</div>
              </div>`;
            }).join('')}
          </div>

          <div class="card" id="addonSummary">
            <div class="sec-title" style="margin-bottom:10px;">Order Summary</div>
            <div class="price-row"><span class="price-key">${pkg?.name||'Package'}</span><span class="price-val">${fmt(pkg?.basePrice||0)}</span></div>
            ${draft.addonIds.map(id=>{
              const a = Computed.getAddon(id);
              return a?`<div class="price-row"><span class="price-key">${a.name}</span><span class="price-val">${fmt(a.price)}</span></div>`:'';
            }).join('')}
            <div style="height:1px;background:var(--grey-150);margin:6px 0;"></div>
            <div class="price-row"><span class="price-key">Subtotal</span><span class="price-val">${fmt(Computed.subtotal())}</span></div>
            <div class="price-row"><span class="price-key">GST (18%)</span><span class="price-val">${fmt(Computed.gst())}</span></div>
            <div class="price-row total"><span class="price-key">Total</span><span class="price-val">${fmt(Computed.total())}</span></div>
          </div>

          <button class="btn btn-orange" onclick="Router.go('reviewBooking')">Continue to Review ${SVG.arrowR}</button>
          <button class="btn btn-outline" onclick="Router.go('reviewBooking')">Skip Add-ons</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Review Booking ─────────────────────────────────────────── */
    reviewBooking() {
      const draft = AppState.draft;
      const v = Computed.draftVehicle();
      const pkg = Computed.draftPackage();
      const branch = Computed.getBranch(draft.branchId);
      const slot = AppState.slots.find(s=>s.id===draft.slotId);
      const addons = Computed.draftAddons();
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Review Booking','Confirm your appointment')}
        <div class="prog-bar">
          ${['Package','Date & Time','Add-ons','Review'].map((s,i)=>{
            const st=i<3?'done':i===3?'active':'pending';
            return `<div class="prog-step ${st}"><div class="prog-dot ${st}">${i<3?SVG.check:i+1}</div><div class="prog-label ${st}">${s}</div></div>`;
          }).join('')}
        </div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div class="card">
            <div class="sec-title" style="margin-bottom:10px;">Booking Details</div>
            <div class="info-row"><span class="info-key">Vehicle</span><span class="info-val">${v.name}</span></div>
            <div class="info-row"><span class="info-key">Registration</span><span class="info-val">${v.registration}</span></div>
            <div class="info-row"><span class="info-key">Package</span><span class="info-val">${pkg?.name}</span></div>
            <div class="info-row"><span class="info-key">Service Centre</span><span class="info-val">${branch?.name}</span></div>
            <div class="info-row"><span class="info-key">Date</span><span class="info-val">${draft.dateLabel||draft.date}</span></div>
            <div class="info-row"><span class="info-key">Time Slot</span><span class="info-val">${slot?.label||'—'}</span></div>
            ${addons.length?`<div class="info-row"><span class="info-key">Add-ons</span><span class="info-val">${addons.map(a=>a.name).join(', ')}</span></div>`:''}
          </div>

          <div class="card">
            <div class="sec-title" style="margin-bottom:10px;">Price Breakdown</div>
            <div class="price-row"><span class="price-key">${pkg?.name}</span><span class="price-val">${fmt(pkg?.basePrice||0)}</span></div>
            ${addons.map(a=>`<div class="price-row"><span class="price-key">${a.name}</span><span class="price-val">${fmt(a.price)}</span></div>`).join('')}
            ${draft.couponApplied?`<div class="price-row"><span class="price-key" style="color:var(--green);">Coupon (${draft.couponApplied.code})</span><span class="price-val" style="color:var(--green);">-${fmt(draft.couponApplied.discountAmount)}</span></div>`:''}
            <div style="height:1px;background:var(--grey-150);margin:6px 0;"></div>
            <div class="price-row"><span class="price-key">Subtotal</span><span class="price-val">${fmt(Computed.subtotal())}</span></div>
            <div class="price-row"><span class="price-key">GST (18%)</span><span class="price-val">${fmt(Computed.gst())}</span></div>
            <div class="price-row total"><span class="price-key">Total Payable</span><span class="price-val">${fmt(Computed.total())}</span></div>
          </div>

          <div class="card">
            <div class="sec-title" style="margin-bottom:8px;">Coupon Code</div>
            <div style="display:flex;gap:8px;">
              <input class="input" id="couponInput" placeholder="Enter coupon code" style="flex:1;" value="${draft.couponCode||''}">
              <button class="btn-sm orange" onclick="applyCouponCode()">Apply</button>
            </div>
            <div id="couponMsg" style="display:${draft.couponApplied||draft.couponError?'block':'none'};font-size:12px;margin-top:6px;color:${draft.couponApplied?'var(--green)':'var(--red)'};">${draft.couponApplied?`✓ Coupon applied! You save ${fmt(draft.couponApplied.discountAmount)}`:draft.couponError||''}</div>
          </div>

          <button class="btn btn-orange" id="confirmBtn" onclick="Router.go('payment')">Proceed to Payment ${SVG.arrowR}</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Payment ────────────────────────────────────────────────── */
    payment() {
      const total = Computed.total();
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Payment','Secure checkout')}
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div class="card">
            <div class="sec-title" style="margin-bottom:12px;">Select Payment Method</div>
            <div class="pay-opt sel" onclick="selPay(this)">
              <div class="pay-radio on"></div>
              <div style="flex:1;">
                <div style="font-size:14px;font-weight:600;color:var(--black);">Pay at Service Centre</div>
                <div style="font-size:12px;color:var(--grey-500);margin-top:2px;">Cash, Card or UPI at the centre</div>
              </div>
              <span class="badge badge-green">No advance</span>
            </div>
            <div class="pay-opt" onclick="selPay(this)">
              <div class="pay-radio"></div>
              <div>
                <div style="font-size:14px;font-weight:600;color:var(--black);">UPI</div>
                <div style="font-size:12px;color:var(--grey-500);margin-top:2px;">Google Pay, PhonePe, BHIM</div>
              </div>
            </div>
            <div class="pay-opt" onclick="selPay(this)">
              <div class="pay-radio"></div>
              <div>
                <div style="font-size:14px;font-weight:600;color:var(--black);">Credit / Debit Card</div>
                <div style="font-size:12px;color:var(--grey-500);margin-top:2px;">Visa, Mastercard, Rupay</div>
              </div>
            </div>
            <div class="pay-opt" onclick="selPay(this)">
              <div class="pay-radio"></div>
              <div>
                <div style="font-size:14px;font-weight:600;color:var(--black);">Net Banking</div>
                <div style="font-size:12px;color:var(--grey-500);margin-top:2px;">All major banks supported</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="price-row total">
              <span class="price-key">Amount Payable</span>
              <span class="price-val">${fmt(total)}</span>
            </div>
          </div>

          <div style="display:flex;gap:8px;align-items:center;padding:12px;background:var(--green-bg);border-radius:var(--r2);border:1px solid var(--green);">
            ${SVG.shield.replace('currentColor','var(--green)')}
            <div style="font-size:12px;color:var(--green);font-weight:600;">Your payment is secured with 256-bit SSL encryption</div>
          </div>

          <button class="btn btn-orange" onclick="confirmBookingAction()">Confirm Booking ${SVG.arrowR}</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Confirmation ───────────────────────────────────────────── */
    confirmation() {
      const latest = AppState.bookings[AppState.bookings.length-1] || AppState.bookings[0];
      const v = Computed.getVehicle(latest?.vehicleId);
      const pkg = Computed.getPackage(latest?.packageId);
      const branch = Computed.getBranch(latest?.branchId);
      return `
      <div style="background:var(--white);min-height:100%;display:flex;flex-direction:column;align-items:center;padding:30px 24px;">
        <div style="text-align:center;margin-bottom:24px;">
          <div class="success-circle" style="margin:0 auto 16px;">✓</div>
          <div style="font-size:22px;font-weight:800;color:var(--black);">Booking Confirmed!</div>
          <div style="font-size:14px;color:var(--grey-500);margin-top:6px;line-height:1.5;">Your appointment has been scheduled successfully. You'll receive a confirmation SMS shortly.</div>
        </div>

        <div class="card" style="width:100%;margin-bottom:12px;">
          <div style="text-align:center;margin-bottom:14px;">
            <div style="font-size:11px;color:var(--grey-500);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Booking Reference</div>
            <div style="font-size:20px;font-weight:800;color:var(--black);letter-spacing:1px;margin-top:4px;">${latest?.bookingRef||'FAC-2024-XXXXX'}</div>
          </div>
          <div class="info-row"><span class="info-key">Vehicle</span><span class="info-val">${v?.name||'—'}</span></div>
          <div class="info-row"><span class="info-key">Service</span><span class="info-val">${pkg?.name||'—'}</span></div>
          <div class="info-row"><span class="info-key">Service Centre</span><span class="info-val">${branch?.name||'—'}</span></div>
          <div class="info-row"><span class="info-key">Date & Time</span><span class="info-val">${latest?.date||'—'}, ${latest?.slotLabel||'—'}</span></div>
          <div class="info-row" style="border-bottom:none;"><span class="info-key">Total</span><span class="info-val" style="color:var(--orange);font-size:16px;font-weight:800;">${fmt(latest?.total||0)}</span></div>
        </div>

        <div style="display:flex;flex-direction:column;gap:10px;width:100%;">
          <button class="btn btn-orange" onclick="Router.go('tracking')">Track Service ${SVG.arrowR}</button>
          <button class="btn btn-outline" onclick="Router.go('bookings')">View All Bookings</button>
          <button class="btn btn-outline" onclick="Router.go('home')">Back to Home</button>
        </div>
        <div class="safe-bot"></div>
      </div>`;
    },

    /* ── My Bookings ────────────────────────────────────────────── */
    bookings() {
      const tabs = ['upcoming','active','completed','cancelled'];
      const tab = AppState.ui.activeBookingTab;
      const all = AppState.bookings;
      const filtered = tab==='active'?all.filter(b=>b.status==='in_progress'):
                       tab==='upcoming'?all.filter(b=>b.status==='confirmed'):
                       tab==='completed'?all.filter(b=>b.status==='completed'):
                       all.filter(b=>b.status==='cancelled');
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('My Bookings')}
        <div style="background:var(--white);padding:10px 16px;display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;border-bottom:1px solid var(--grey-150);">
          ${tabs.map(t=>`<button style="flex-shrink:0;padding:7px 14px;border-radius:var(--r-pill);font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid ${t===tab?'var(--orange)':'var(--grey-200)'};background:${t===tab?'var(--orange-light)':'var(--white)'};color:${t===tab?'var(--orange)':'var(--grey-600)'};font-family:var(--font);" onclick="setBookingTab('${t}')">${t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join('')}
        </div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          ${filtered.length===0?`
          <div style="text-align:center;padding:48px 24px;">
            <div style="color:var(--grey-300);margin-bottom:16px;">${SVG.bookings.replace('22','48').replace('22','48')}</div>
            <div style="font-size:16px;font-weight:700;color:var(--grey-700);">No ${tab} bookings</div>
            <div style="font-size:13px;color:var(--grey-500);margin-top:6px;">Book a service to get started</div>
            <button class="btn btn-orange" style="margin-top:20px;" onclick="Router.go('services')">Book a Service</button>
          </div>`:
          all.map(b=>{
            const v = Computed.getVehicle(b.vehicleId);
            const pkg = Computed.getPackage(b.packageId);
            const br = Computed.getBranch(b.branchId);
            return `
            <div class="bk-card">
              <div class="bk-header">
                <div style="display:flex;align-items:center;justify-content:space-between;">
                  <div class="bk-id">${b.bookingRef}</div>
                  ${statusBadge(b.status)}
                </div>
                <div class="bk-vehicle">${v?.name||'Vehicle'}</div>
              </div>
              <div class="bk-body">
                <div class="bk-meta">${SVG.services} ${pkg?.name||'Service'}</div>
                <div class="bk-meta">${SVG.location} ${br?.name||'—'}</div>
                <div class="bk-meta">${SVG.calendar} ${b.date} &nbsp;${SVG.clock} ${b.slotLabel||'—'}</div>
                <div class="bk-meta" style="font-size:14px;font-weight:700;color:var(--orange);">${fmt(b.total)}</div>
              </div>
              <div class="bk-footer">
                ${b.status==='in_progress'?`<button class="btn-sm orange" onclick="Router.go('tracking')">Track Service</button>`:''}
                ${b.status==='confirmed'?`<button class="btn-sm outline" onclick="showToast('Rescheduling coming soon','info')">Reschedule</button><button class="btn-sm outline" onclick="showToast('Cancellation coming soon','info')">Cancel</button>`:''}
                ${b.status==='completed'?`<button class="btn-sm outline" onclick="Router.go('invoices')">View Invoice</button><button class="btn-sm orange" onclick="Router.go('selectPackage')">Book Again</button>`:''}
              </div>
            </div>`;
          }).join('')}
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Service Tracking ───────────────────────────────────────── */
    tracking() {
      const steps = [
        { label:'Booked', time:'21 May, 09:15 AM', desc:'', status:'done' },
        { label:'Checked In', time:'21 May, 09:45 AM', desc:'Vehicle received at FLAG Auto Care — Kothrud', status:'done' },
        { label:'Inspection', time:'21 May, 10:00 AM', desc:'Pre-service inspection completed. Vehicle health report generated.', status:'done' },
        { label:'Service in Progress', time:'Now', desc:'Technician: Ravi K. (4.9 ★)\nEngine oil changed. Oil filter replaced. 21-point inspection ongoing.', status:'active' },
        { label:'Quality Check', time:'Est. 12:30 PM', desc:'', status:'pending' },
        { label:'Ready for Delivery', time:'Est. 01:00 PM', desc:'', status:'pending' },
      ];
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Live Service Tracking','#FAC-2024-08456')}
        <div style="background:var(--white);padding:14px 16px;border-bottom:1px solid var(--grey-150);">
          <div style="display:flex;align-items:center;gap:12px;">
            <div>${carSVG(72,40,'var(--grey-400)')}</div>
            <div style="flex:1;">
              <div style="font-size:15px;font-weight:700;color:var(--black);">Honda City ZX CVT</div>
              <div class="vc-plate-badge" style="margin-top:4px;">MH 12 AB 1234</div>
            </div>
            <span class="badge badge-orange-soft">In Progress</span>
          </div>
          <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--grey-150);display:flex;gap:10px;">
            <div style="flex:1;font-size:12px;color:var(--grey-500);">Service<br><span style="font-weight:700;color:var(--black);">Comprehensive Service</span></div>
            <div style="flex:1;font-size:12px;color:var(--grey-500);">Est. Completion<br><span style="font-weight:700;color:var(--black);">01:00 PM Today</span></div>
          </div>
        </div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div class="card">
            <div class="sec-title" style="margin-bottom:14px;">Service Progress</div>
            <div class="track-timeline">
              ${steps.map((s,i)=>`
              <div class="track-row">
                <div class="track-left">
                  <div class="track-dot ${s.status}">${s.status==='done'?SVG.check:s.status==='active'?'●':''}</div>
                  ${i<steps.length-1?`<div class="track-connector ${s.status==='done'?'done':''}"></div>`:''}
                </div>
                <div class="track-body">
                  <div class="track-step-title ${s.status==='pending'?'pending':''}">${s.label}</div>
                  <div class="track-step-time">${s.time}</div>
                  ${s.desc?`<div class="track-step-desc">${s.desc}</div>`:''}
                </div>
              </div>`).join('')}
            </div>
          </div>
          <div class="card">
            <div class="sec-hd">
              <div class="sec-title">Estimate Ready</div>
              <span class="badge badge-amber">Action Required</span>
            </div>
            <div style="font-size:13px;color:var(--grey-600);margin-top:8px;line-height:1.5;">Additional work identified. Brake pads and air filter need replacement. Please review and approve the estimate.</div>
            <div style="margin-top:12px;display:flex;gap:8px;">
              <button class="btn-sm orange" onclick="Router.go('estimateApproval')">Review Estimate ${SVG.arrowR}</button>
            </div>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="btn btn-outline" style="flex:1;" onclick="showToast('Calling FLAG Auto Care...','info')">${SVG.phone} Call Centre</button>
            <button class="btn btn-outline" style="flex:1;" onclick="Router.go('aiAssistant')">${SVG.sparkle} Ask AI</button>
          </div>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Estimate Approval ──────────────────────────────────────── */
    estimateApproval() {
      const items = [
        { name:'Brake Pad Set (Front)', part:'OEM Grade', price:1680, labour:400, why:'Front brake pads at 3mm. Below safe threshold of 4mm. Replacement recommended.' },
        { name:'Air Filter', part:'OEM Grade', price:480, labour:150, why:'Air filter clogged. Affecting fuel efficiency. Replacement recommended.' },
      ];
      const subtotal = items.reduce((s,i)=>s+i.price+i.labour,0);
      const gst = Math.round(subtotal*0.18);
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Estimate Approval','Additional work required')}
        <div style="background:var(--amber-bg);padding:12px 16px;border-bottom:1px solid var(--amber);display:flex;gap:10px;align-items:center;">
          ${SVG.info.replace('currentColor','var(--amber)')}
          <div style="font-size:12px;color:var(--grey-800);font-weight:500;line-height:1.4;">Our technician found additional work needed. Please review and approve or reject below.</div>
        </div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          ${items.map(item=>`
          <div class="card">
            <div style="font-size:14px;font-weight:700;color:var(--black);">${item.name}</div>
            <div style="font-size:11px;color:var(--grey-500);margin-top:2px;">Parts: ${item.part}</div>
            <div style="font-size:12px;color:var(--grey-600);margin-top:8px;padding:8px;background:var(--grey-100);border-radius:var(--r2);line-height:1.4;">${item.why}</div>
            <div style="margin-top:10px;display:flex;justify-content:space-between;padding-top:10px;border-top:1px solid var(--grey-150);">
              <div style="font-size:12px;color:var(--grey-500);">Parts: <span style="color:var(--black);font-weight:600;">${fmt(item.price)}</span></div>
              <div style="font-size:12px;color:var(--grey-500);">Labour: <span style="color:var(--black);font-weight:600;">${fmt(item.labour)}</span></div>
              <div style="font-size:13px;font-weight:700;color:var(--orange);">${fmt(item.price+item.labour)}</div>
            </div>
          </div>`).join('')}

          <div class="card">
            <div class="price-row"><span class="price-key">Parts &amp; Labour</span><span class="price-val">${fmt(subtotal)}</span></div>
            <div class="price-row"><span class="price-key">GST (18%)</span><span class="price-val">${fmt(gst)}</span></div>
            <div class="price-row total"><span class="price-key">Additional Amount</span><span class="price-val">${fmt(subtotal+gst)}</span></div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <button class="btn btn-outline" style="border-color:var(--red);color:var(--red);" onclick="showConfirmDialog('reject')">Reject</button>
            <button class="btn btn-orange" onclick="showConfirmDialog('approve')">Approve ✓</button>
          </div>
          <button class="btn btn-outline" onclick="Router.go('aiAssistant')">${SVG.sparkle} Ask FLAG AI about this</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Vehicle Health ─────────────────────────────────────────── */
    vehicleHealth() {
      const v = Computed.draftVehicle();
      const healthData = [
        { icon:'engine', label:'Engine', sub:'Oil & filter within spec', status:'Good', cls:'hsp-good' },
        { icon:'battery2', label:'Battery', sub:'12.6V • Health 92%', status:'Good', cls:'hsp-good' },
        { icon:'brakeI', label:'Brakes', sub:'Front pads need attention soon', status:'Attention', cls:'hsp-attention' },
        { icon:'tyreI', label:'Tyres', sub:'Pressure 32 PSI • Tread OK', status:'Good', cls:'hsp-good' },
        { icon:'acI', label:'AC System', sub:'Cooling efficient', status:'Good', cls:'hsp-good' },
        { icon:'fluids', label:'Fluids', sub:'Coolant, brake fluid OK', status:'Good', cls:'hsp-good' },
      ];
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Vehicle Health',v.name)}
        <div style="background:var(--white);padding:16px;border-bottom:1px solid var(--grey-150);display:flex;gap:14px;align-items:center;">
          <div class="health-ring" style="background:conic-gradient(var(--green) 0deg 302deg, var(--grey-200) 302deg);">
            <div class="health-ring-text">84</div>
          </div>
          <div style="flex:1;">
            <div style="font-size:18px;font-weight:800;color:var(--black);">Health Score</div>
            <div style="font-size:13px;color:var(--green);font-weight:600;margin-top:4px;">Good Condition</div>
            <div style="font-size:12px;color:var(--grey-500);margin-top:3px;">Last inspected: 21 May 2024</div>
          </div>
        </div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div class="card">
            <div class="sec-title" style="margin-bottom:10px;">Component Health</div>
            ${healthData.map(h=>`
            <div class="health-item">
              <div class="health-item-left">
                <div class="health-item-icon" style="background:var(--grey-100);">${SVG[h.icon]}</div>
                <div>
                  <div class="health-item-label">${h.label}</div>
                  <div class="health-item-sub">${h.sub}</div>
                </div>
              </div>
              <span class="health-status-pill ${h.cls}">${h.status}</span>
            </div>`).join('')}
          </div>
          <div class="card">
            <div class="sec-title" style="margin-bottom:8px;">Maintenance Reminders</div>
            ${[
              ['Next Service Due','In ~640 km or 30 days','var(--orange)'],
              ['Brake Pad Check','Recommend at next service','var(--amber)'],
              ['Tyre Rotation','Due in ~2,000 km','var(--grey-600)'],
            ].map(([t,s,c])=>`
            <div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--grey-150);">
              <div style="width:8px;height:8px;border-radius:50%;background:${c};flex-shrink:0;"></div>
              <div style="flex:1;"><div style="font-size:13px;font-weight:600;color:var(--black);">${t}</div><div style="font-size:12px;color:var(--grey-500);margin-top:1px;">${s}</div></div>
              <div style="color:var(--grey-400);">${SVG.chevronR}</div>
            </div>`).join('')}
          </div>
          <button class="btn btn-orange" onclick="Router.go('selectPackage')">Book Service Now ${SVG.arrowR}</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Service History ────────────────────────────────────────── */
    serviceHistory() {
      const v = Computed.draftVehicle();
      const hist = [
        { date:'21 May 2024', svc:'Comprehensive Service', km:'24,360 km', amount:'₹4,127', ref:'FAC-2024-08456', centre:'Kothrud', parts:['Engine Oil (Mobil 1)','Oil Filter'], status:'Completed' },
        { date:'12 Apr 2024', svc:'Standard Service', km:'21,100 km', amount:'₹5,310', ref:'FAC-2024-07122', centre:'Baner', parts:['Engine Oil','Wheel Alignment','Brake Flush'], status:'Completed' },
        { date:'10 Jan 2024', svc:'Comprehensive Service', km:'18,240 km', amount:'₹3,540', ref:'FAC-2024-04811', centre:'Kothrud', parts:['Engine Oil','Oil Filter','Air Filter'], status:'Completed' },
      ];
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Service History',v.name)}
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          ${hist.map((h,i)=>`
          <div class="card">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;">
              <div>
                <div style="font-size:14px;font-weight:700;color:var(--black);">${h.svc}</div>
                <div style="font-size:11px;color:var(--grey-500);margin-top:2px;">${h.ref} • ${h.centre}</div>
              </div>
              <span class="badge badge-green">${h.status}</span>
            </div>
            <div style="display:flex;gap:16px;margin-bottom:10px;">
              <div style="font-size:12px;color:var(--grey-500);">${SVG.calendar} ${h.date}</div>
              <div style="font-size:12px;color:var(--grey-500);">${h.km}</div>
              <div style="font-size:13px;font-weight:700;color:var(--orange);margin-left:auto;">${h.amount}</div>
            </div>
            <div style="padding:8px;background:var(--grey-100);border-radius:var(--r2);">
              <div style="font-size:11px;font-weight:600;color:var(--grey-500);margin-bottom:4px;">PARTS REPLACED</div>
              ${h.parts.map(p=>`<div style="font-size:12px;color:var(--grey-700);padding:2px 0;">${p}</div>`).join('')}
            </div>
            <div style="margin-top:10px;display:flex;gap:8px;">
              <button class="btn-sm outline" onclick="Router.go('invoices')">View Invoice</button>
              <button class="btn-sm orange" onclick="Router.go('selectPackage')">Book Again</button>
            </div>
          </div>`).join('')}
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Invoices ───────────────────────────────────────────────── */
    invoices() {
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Invoices & Bills')}
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px;">
          ${[
            { ref:'FAC-2024-08456', date:'21 May 2024', svc:'Comprehensive Service', amount:'₹4,127', paid:true },
            { ref:'FAC-2024-07122', date:'12 Apr 2024', svc:'Standard Service', amount:'₹5,310', paid:true },
            { ref:'FAC-2024-04811', date:'10 Jan 2024', svc:'Comprehensive Service', amount:'₹3,540', paid:true },
          ].map(inv=>`
          <div class="card" style="cursor:pointer;" onclick="showToast('Invoice download coming soon','info')">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;">
              <div>
                <div style="font-size:11px;font-weight:600;color:var(--grey-500);text-transform:uppercase;letter-spacing:0.4px;">${inv.ref}</div>
                <div style="font-size:14px;font-weight:700;color:var(--black);margin-top:3px;">${inv.svc}</div>
                <div style="font-size:12px;color:var(--grey-500);margin-top:2px;">${inv.date}</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:16px;font-weight:800;color:var(--black);">${inv.amount}</div>
                <span class="badge badge-green" style="margin-top:4px;">Paid</span>
              </div>
            </div>
            <div style="margin-top:10px;display:flex;gap:8px;">
              <button class="btn-sm outline" onclick="event.stopPropagation();showToast('Downloading PDF...','info')">${SVG.doc} Download PDF</button>
            </div>
          </div>`).join('')}
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Offers ─────────────────────────────────────────────────── */
    offers() {
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Offers & Packages','Exclusive deals for you')}
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          ${[
            { bg:'var(--orange)', title:'₹500 OFF', sub:'On your next service', code:'FLAG500', valid:'31 May 2024', desc:'Get ₹500 off on any service above ₹1,500.' },
            { bg:'#1D4ED8', title:'AC Service – Flat 20% OFF', sub:'AC Care Special', code:'COOL20', valid:'15 Jun 2024', desc:'Exclusive discount on all AC service packages.' },
            { bg:'var(--dark)', title:'Refer & Earn ₹250', sub:'For each successful referral', code:'REFER250', valid:'Ongoing', desc:'Share your referral code. Earn ₹250 for every friend who books.' },
            { bg:'#059669', title:'First Service FREE', sub:'For new customers', code:'WELCOME', valid:'30 Jun 2024', desc:'New customer? Get your first car wash free with any service booking.' },
          ].map(o=>`
          <div style="border-radius:var(--r4);padding:18px;background:${o.bg};position:relative;overflow:hidden;cursor:pointer;">
            <div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;background:rgba(255,255,255,0.1);border-radius:50%;"></div>
            <div style="font-size:18px;font-weight:900;color:white;">${o.title}</div>
            <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px;">${o.sub}</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-top:6px;line-height:1.4;">${o.desc}</div>
            <div style="margin-top:12px;display:flex;align-items:center;justify-content:space-between;">
              <div style="background:rgba(255,255,255,0.2);padding:5px 12px;border-radius:var(--r-pill);font-size:12px;font-weight:700;color:white;font-family:monospace;">${o.code}</div>
              <div style="font-size:11px;color:rgba(255,255,255,0.5);">Valid till ${o.valid}</div>
            </div>
            <button style="margin-top:10px;background:white;color:${o.bg};padding:8px 16px;border-radius:var(--r2);font-size:13px;font-weight:700;border:none;cursor:pointer;font-family:var(--font);" onclick="showToast('Code ${o.code} copied!','success')">Use Offer</button>
          </div>`).join('')}
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Notifications ──────────────────────────────────────────── */
    notifications() {
      const notifs = AppState.notifications;
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Notifications','', `<button class="btn-sm outline" onclick="markAllRead()">Mark all read</button>`)}
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px;">
          ${notifs.length===0?`<div style="text-align:center;padding:48px 24px;color:var(--grey-500);">No notifications</div>`:
          notifs.map(n=>`
          <div class="card ${!n.read?'notif-unread':''}" style="border-left:3px solid ${!n.read?'var(--orange)':'transparent'};">
            <div class="notif-row" style="padding:0;border:none;">
              <div class="notif-icon" style="background:${n.type==='booking'?'var(--orange-light)':n.type==='reminder'?'var(--amber-bg)':'var(--blue-bg)'};">
                ${n.type==='booking'?SVG.calendar:n.type==='reminder'?SVG.clock:SVG.info}
              </div>
              <div class="notif-body">
                <div class="notif-title">${n.title}</div>
                <div class="notif-desc">${n.message}</div>
                <div class="notif-time">${n.time}</div>
              </div>
              ${!n.read?`<div class="unread-dot"></div>`:''}
            </div>
          </div>`).join('')}
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── AI Assistant ───────────────────────────────────────────── */
    aiAssistant() {
      const msgs = AppState.aiConversation;
      const v = Computed.draftVehicle();
      const prompts = [
        { text:'Which service does my car need?', sub:'Got AI recommendation' },
        { text:'Which package should I choose?', sub:'Compare & find the best' },
        { text:'Explain my last estimate', sub:'Understand the details' },
        { text:'Is my car due for service?', sub:'Check your service schedule' },
        { text:'Show my service history', sub:'View past services' },
        { text:'What do these warning lights mean?', sub:'Get explanation' },
      ];
      return `
      <div style="background:var(--grey-100);min-height:100%;display:flex;flex-direction:column;">
        <!-- AI Header -->
        <div style="background:var(--white);padding:12px 16px;border-bottom:1px solid var(--grey-150);display:flex;align-items:center;gap:10px;flex-shrink:0;">
          <button class="back-btn" onclick="Router.back()">${SVG.back}</button>
          <div style="width:36px;height:36px;background:var(--orange);border-radius:var(--r2);display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0;">${SVG.sparkle}</div>
          <div style="flex:1;">
            <div style="font-size:15px;font-weight:700;color:var(--black);">FLAG AI</div>
            <div style="font-size:11px;color:var(--grey-500);">Your intelligent vehicle-care assistant</div>
          </div>
          <div style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--green);font-weight:600;">
            <span style="width:6px;height:6px;border-radius:50%;background:var(--green);"></span>
            Online
          </div>
        </div>

        <!-- Chat Area -->
        <div class="chat-area" id="chatArea">
          <!-- Greeting -->
          ${msgs.length===0?`
          <div style="text-align:center;padding:20px 0 10px;">
            <div style="width:52px;height:52px;background:var(--orange-light);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--orange);margin:0 auto 12px;">${SVG.sparkle}</div>
            <div style="font-size:16px;font-weight:800;color:var(--black);">Hi Rahul! 👋</div>
            <div style="font-size:13px;color:var(--grey-500);margin-top:4px;line-height:1.5;">How can I help you today?<br>I know your ${v.name} — ask me anything.</div>
          </div>
          <!-- Suggestion prompts -->
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px;">
            ${prompts.map(p=>`
            <div style="background:var(--white);border:1px solid var(--grey-200);border-radius:var(--r2);padding:12px 14px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:var(--t);" onclick="sendAiMessage('${p.text}')" onmouseover="this.style.borderColor='var(--orange)'" onmouseout="this.style.borderColor='var(--grey-200)'">
              <div>
                <div style="font-size:13px;font-weight:600;color:var(--black);">${p.text}</div>
                <div style="font-size:11px;color:var(--grey-500);margin-top:2px;">${p.sub}</div>
              </div>
              <div style="color:var(--orange);">${SVG.chevronR}</div>
            </div>`).join('')}
          </div>` : ''}

          <!-- Messages -->
          ${msgs.map(m=>`
          <div class="chat-msg-${m.role==='user'?'user':'ai'}">
            <div class="c-av ${m.role==='user'?'user':'ai'}">${m.role==='user'?'R':SVG.sparkle.replace('20','14').replace('20','14')}</div>
            <div>
              <div class="c-bubble ${m.role==='user'?'user':'ai'}">${m.content.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>')}</div>
              ${m.suggestions&&m.role==='assistant'?`<div class="c-suggestions">${m.suggestions.map(s=>`<button class="c-suggest" onclick="sendAiMessage('${s}')">${s}</button>`).join('')}</div>`:''}
            </div>
          </div>`).join('')}
        </div>

        <!-- Input Bar -->
        <div class="chat-input-bar">
          <input type="text" id="aiInput" placeholder="Ask anything about your car..." onkeydown="if(event.key==='Enter')sendAiMessage()">
          <button class="chat-send-btn" onclick="sendAiMessage()">${SVG.send}</button>
        </div>

        <div style="text-align:center;padding:6px;font-size:10px;color:var(--grey-400);background:var(--white);flex-shrink:0;">AI can make mistakes. Please verify important info.</div>
      </div>`;
    },

    /* ── Profile ─────────────────────────────────────────────────── */
    profile() {
      const user = AppState.user;
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        <div style="background:var(--white);padding:20px 16px;border-bottom:1px solid var(--grey-150);">
          <div style="display:flex;align-items:center;gap:14px;">
            <div style="width:64px;height:64px;border-radius:50%;background:var(--grey-200);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800;color:var(--grey-700);">R</div>
            <div style="flex:1;">
              <div style="font-size:18px;font-weight:800;color:var(--black);">${user.name}</div>
              <div style="font-size:13px;color:var(--grey-500);margin-top:2px;">+91 ${user.phone}</div>
              <div style="font-size:13px;color:var(--grey-500);">${user.email}</div>
            </div>
            <button class="btn-sm outline" style="display:flex;align-items:center;gap:4px;" onclick="showToast('Edit profile coming soon','info')">${SVG.edit} Edit</button>
          </div>
          <div style="display:flex;gap:0;margin-top:16px;border-top:1px solid var(--grey-150);padding-top:14px;">
            ${[['3','Bookings'],['2','Vehicles'],['₹12,977','Spent']].map(([v,l])=>`
            <div style="flex:1;text-align:center;border-right:1px solid var(--grey-150);">
              <div style="font-size:16px;font-weight:800;color:var(--black);">${v}</div>
              <div style="font-size:11px;color:var(--grey-500);margin-top:2px;">${l}</div>
            </div>`).join('')}
            <div style="flex:1;text-align:center;">
              <div style="font-size:16px;font-weight:800;color:var(--orange);">Silver</div>
              <div style="font-size:11px;color:var(--grey-500);margin-top:2px;">Membership</div>
            </div>
          </div>
        </div>
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div class="menu-section">
            ${[
              [SVG.user,'My Garage','Router.go(\'vehicleDashboard\')','var(--blue-bg)'],
              [SVG.history,'Service History','Router.go(\'serviceHistory\')','var(--orange-light)'],
              [SVG.invoice,'Invoices & Bills','Router.go(\'invoices\')','var(--green-bg)'],
              [SVG.doc,'Documents','showToast(\'Documents coming soon\',\'info\')','var(--amber-bg)'],
              [SVG.shield,'Insurance','showToast(\'Insurance coming soon\',\'info\')','var(--orange-light)'],
            ].map(([icon,label,fn,bg])=>`
            <div class="menu-row" onclick="${fn}">
              <div class="menu-icon" style="background:${bg};">${icon}</div>
              <div class="menu-label">${label}</div>
              <div class="menu-arrow">${SVG.chevronR}</div>
            </div>`).join('')}
          </div>
          <div class="menu-section">
            ${[
              [SVG.bell,'Notifications','Router.go(\'notifications\')','var(--grey-150)'],
              [SVG.support,'Help & Support','Router.go(\'support\')','var(--grey-150)'],
              [SVG.info,'About FLAG Auto Care','showToast(\'About coming soon\',\'info\')','var(--grey-150)'],
            ].map(([icon,label,fn,bg])=>`
            <div class="menu-row" onclick="${fn}">
              <div class="menu-icon" style="background:${bg};">${icon}</div>
              <div class="menu-label">${label}</div>
              <div class="menu-arrow">${SVG.chevronR}</div>
            </div>`).join('')}
          </div>
          <button class="btn btn-outline" style="color:var(--red);border-color:var(--red);" onclick="showToast('Logged out','info');Router.go('login')">Log Out</button>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Support ─────────────────────────────────────────────────── */
    support() {
      const faqs = [
        ['How do I reschedule my booking?', 'Go to My Bookings → Select your booking → Tap Reschedule. You can reschedule up to 2 hours before your appointment.'],
        ['What if I need to cancel?', 'Tap Cancel on your booking. Free cancellations are allowed up to 4 hours before. Late cancellations may incur a fee.'],
        ['Are OEM parts used?', 'Yes. FLAG Auto Care uses OEM-grade parts for all services. Parts information is shown on your invoice.'],
        ['Does service affect warranty?', 'Services at FLAG Auto Care follow manufacturer service schedules and help maintain your vehicle warranty.'],
        ['How do I track my service?', 'Open the Bookings tab → Select your active booking → Tap Track Service for real-time updates.'],
      ];
      return `
      <div style="background:var(--grey-100);min-height:100%;">
        ${topbar('Help & Support')}
        <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
          <div class="card" style="background:var(--dark);cursor:pointer;" onclick="Router.go('aiAssistant')">
            <div style="display:flex;gap:12px;align-items:center;">
              <div style="width:40px;height:40px;background:var(--orange);border-radius:var(--r2);display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0;">${SVG.sparkle}</div>
              <div style="flex:1;">
                <div style="font-size:14px;font-weight:700;color:white;">Chat with FLAG AI</div>
                <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:2px;">Get instant answers to your questions</div>
              </div>
              <div style="color:var(--orange);">${SVG.arrowR}</div>
            </div>
          </div>
          <div class="menu-section">
            <div class="menu-row" onclick="showToast('Calling FLAG Auto Care support...','info')">
              <div class="menu-icon" style="background:var(--green-bg);">${SVG.phone}</div>
              <div class="menu-label">Call Us</div>
              <div style="font-size:12px;color:var(--grey-500);">1800-xxx-xxxx</div>
            </div>
            <div class="menu-row" onclick="showToast('WhatsApp chat coming soon','info')">
              <div class="menu-icon" style="background:var(--green-bg);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--green)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div class="menu-label">WhatsApp</div>
              <div style="color:var(--grey-400);">${SVG.chevronR}</div>
            </div>
          </div>
          <div class="card">
            <div class="sec-title" style="margin-bottom:12px;">Frequently Asked Questions</div>
            ${faqs.map((f,i)=>`
            <div style="padding:10px 0;border-bottom:1px solid var(--grey-150);" onclick="toggleFAQ(this)" style="cursor:pointer;">
              <div style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;" onclick="toggleFAQ(this.parentElement)">
                <div style="font-size:13px;font-weight:600;color:var(--black);flex:1;">${f[0]}</div>
                <div style="color:var(--grey-400);transition:var(--t);">${SVG.chevronD}</div>
              </div>
              <div style="font-size:13px;color:var(--grey-600);line-height:1.6;max-height:0;overflow:hidden;transition:max-height 0.3s ease;margin-top:0;">${f[1]}</div>
            </div>`).join('')}
          </div>
          <div class="safe-bot"></div>
        </div>
      </div>`;
    },

    /* ── Add Vehicle (legacy redirect) ─────────────────────────── */
    addVehicle() { return this.brandSelect(); },
    bookVehicle() { return this.brandSelect(); },
    bookService() { return this.services(); },
  };
}

/* ── Brand/Model selection handlers ─────────────────────────── */
function selectBrand(id, el) {
  AppState.ui.selectedBrand = id;
  AppState.ui.selectedModel = null;
  AppState.ui.selectedVariant = null;
  // Brief visual feedback then auto-advance
  document.querySelectorAll('.brand-item').forEach(c=>c.classList.remove('selected'));
  if (el) el.classList.add('selected');
  setTimeout(() => Router.go('modelSelect'), 300);
}
function selectModel(id, el) {
  AppState.ui.selectedModel = id;
  AppState.ui.selectedVariant = null;
  document.querySelectorAll('.model-item').forEach(c=>c.classList.remove('selected'));
  if (el) el.classList.add('selected');
  setTimeout(() => Router.go('variantSelect'), 300);
}
function selectVariant(v, el) {
  AppState.ui.selectedVariant = v;
  document.querySelectorAll('.variant-chip').forEach(c=>c.classList.remove('selected'));
  if (el) el.classList.add('selected');
}
function filterBrandsAndModels(q) {
  const query = q.toLowerCase().trim();
  const brandGridContainer = document.getElementById('brandGridContainer');
  const searchResultsContainer = document.getElementById('searchResultsContainer');
  
  if (!query) {
    brandGridContainer.style.display = 'block';
    searchResultsContainer.style.display = 'none';
    return;
  }

  brandGridContainer.style.display = 'none';
  searchResultsContainer.style.display = 'block';

  const brands = AppState.carBrands;
  let matchingBrands = [];
  let matchingModels = [];

  brands.forEach(b => {
    if (b.name.toLowerCase().includes(query)) {
      matchingBrands.push(b);
    }
    b.models.forEach(m => {
      if (m.name.toLowerCase().includes(query) || b.name.toLowerCase().includes(query)) {
        matchingModels.push({ brand: b, model: m });
      }
    });
  });

  let html = '';
  
  if (matchingBrands.length > 0) {
    html += `<div style="margin-bottom:12px;"></div>
             <div class="brand-grid">
               ${matchingBrands.map((b, i)=>`
               <div class="brand-item" onclick="selectBrand('${b.id}',this)">
                 <div class="brand-logo-box ${b.image ? 'skeleton-bg' : ''}">
                   ${b.image 
                     ? '<img ' + (i < 8 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"') + ' src="' + b.image + '" alt="' + b.name + '" style="width:100%;height:100%;object-fit:contain;opacity:0;transition:opacity 0.2s;" onload="this.parentElement.classList.remove(\\\'skeleton-bg\\\');this.style.opacity=\\\'1\\\'" onerror="this.outerHTML=\'<span style=\\\'font-size:18px;font-weight:800;color:var(--grey-500);\\\'>' + b.name.charAt(0) + '</span>\'">'
                     : '<span style="font-size:18px;font-weight:800;color:var(--grey-500);">' + b.name.charAt(0) + '</span>'}
                 </div>
                 <div class="brand-name">${b.name}</div>
               </div>`).join('')}
             </div>`;
  }

  if (matchingModels.length > 0) {
    html += `<div style="font-size:14px; font-weight:700; color:var(--black); margin:24px 0 12px;">Vehicles</div>
             <div class="model-grid">
               ${matchingModels.map(({brand, model}, i)=>`
               <div class="model-item" onclick="selectBrandAndModel('${brand.id}', '${model.id}')">
                 <div class="vehicle-image-container ${model.image ? 'skeleton-bg' : ''}">
                   ${model.image
                     ? `<img ${i < 9 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} src="${model.image}" alt="${model.name}" class="vehicle-image" style="opacity:0;transition:opacity 0.2s;" onload="this.parentElement.classList.remove('skeleton-bg');this.style.opacity='1'" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">${carSVG(60,36,'var(--grey-400)')}</div>`
                     : `<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center;">${carSVG(60,36,'var(--grey-400)')}</div>`}
                 </div>
                 <div class="model-name">${brand.name} ${model.name}</div>
               </div>`).join('')}
             </div>`;
  }

  if (matchingBrands.length === 0 && matchingModels.length === 0) {
    html = `
      <div style="padding:40px 20px; text-align:center; display:flex; flex-direction:column; align-items:center; gap: 16px;">
        <div style="color:var(--grey-500); font-size:14px;">No vehicles found for "${q}"</div>
        <div style="font-size:16px; font-weight:700; color:var(--black);">Can't find your vehicle?</div>
        <button onclick="showToast('Fallback flow coming soon','info')" style="background:var(--yellow); color:var(--black); border:none; border-radius:4px; padding:10px 20px; font-size:14px; font-weight:700; cursor:pointer;">
          Add Vehicle Manually
        </button>
      </div>`;
  }

  searchResultsContainer.innerHTML = html;
}

function selectBrandAndModel(brandId, modelId) {
  AppState.ui.selectedBrand = brandId;
  AppState.ui.selectedModel = modelId;
  AppState.ui.selectedVariant = null;
  // Brief visual feedback then auto-advance
  setTimeout(() => Router.go('variantSelect'), 300);
}

function filterModels(q) {
  const query = q.toLowerCase().trim();
  const items = document.querySelectorAll('#modelGridContainer .model-item');
  let hasMatches = false;
  items.forEach(item => {
    const name = item.querySelector('.model-name').textContent.toLowerCase();
    const isMatch = query === '' || name.includes(query);
    item.style.display = isMatch ? '' : 'none';
    if (isMatch) hasMatches = true;
  });
  
  let emptyState = document.getElementById('modelEmptyState');
  if (!hasMatches) {
    if (!emptyState) {
      emptyState = document.createElement('div');
      emptyState.id = 'modelEmptyState';
      emptyState.style.cssText = 'grid-column: 1 / -1; padding: 40px 20px; text-align: center; color: var(--grey-500); font-size: 14px;';
      emptyState.textContent = 'No vehicles found.';
      document.getElementById('modelGridContainer').appendChild(emptyState);
    }
    emptyState.style.display = 'block';
  } else if (emptyState) {
    emptyState.style.display = 'none';
  }
}
