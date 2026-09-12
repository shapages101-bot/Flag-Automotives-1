/* ============================================================
   FLAG AUTO CARE — ROUTER + EVENT HANDLERS
   ============================================================ */

/* ── Router ─────────────────────────────────────────────── */
const Router = {
  history: [],
  screenRegistry: {},

  init() {
    this.screenRegistry = buildScreens();
  },

  go(name, params = {}) {
    if (!this.screenRegistry[name]) {
      console.warn('[FLAG Router] Unknown screen:', name);
      return;
    }
    // Push current to history (for back)
    if (AppState.nav.current && AppState.nav.current !== name) {
      this.history.push({ name: AppState.nav.current, params: AppState.nav.params });
    }
    this._render(name, params, 'forward');
  },

  back() {
    if (this.history.length === 0) {
      this._render('home', {}, 'back');
      return;
    }
    const prev = this.history.pop();
    this._render(prev.name, prev.params || {}, 'back');
  },

  _render(name, params, direction) {
    AppState.nav.current = name;
    AppState.nav.params = params;

    const container = document.getElementById('screenContainer');
    const bottomNav = document.getElementById('bottomNav');

    // ── Build HTML from function ──
    const screenFn = this.screenRegistry[name];
    const html = typeof screenFn === 'function' ? screenFn(params) : '';

    // ── Slide transition ──
    const entering = document.createElement('div');
    entering.style.cssText = `position:absolute;top:0;left:0;right:0;bottom:0;z-index:10;transform:translateX(${direction === 'forward' ? '100%' : '-100%'});transition:transform 0.28s cubic-bezier(0.4,0,0.2,1);`;
    entering.innerHTML = html;

    const leaving = container.children[0];
    if (leaving) {
      leaving.style.cssText += `position:absolute;top:0;left:0;right:0;bottom:0;z-index:9;transition:transform 0.28s cubic-bezier(0.4,0,0.2,1);`;
      container.style.position = 'relative';
      container.appendChild(entering);
      requestAnimationFrame(() => {
        entering.style.transform = 'translateX(0)';
        leaving.style.transform = `translateX(${direction === 'forward' ? '-30%' : '100%'})`;
        leaving.style.opacity = direction === 'forward' ? '0.4' : '1';
        entering.addEventListener('transitionend', () => {
          container.innerHTML = html;
          container.style.position = '';
          container.scrollTop = 0;
          this._postRender(name);
        }, { once: true });
      });
    } else {
      container.innerHTML = html;
      container.scrollTop = 0;
      this._postRender(name);
    }

    // ── Bottom nav visibility ──
    const HIDE_NAV = new Set([
      'splash','onboarding','login',
      'brandSelect','modelSelect','variantSelect','addVehicle','bookVehicle',
      'selectPackage','packageDetail','comparePackages','aiRecommend',
      'dateTime','serviceCentre','addons','reviewBooking','payment','confirmation',
      'serviceDetail','tracking','estimateApproval','vehicleHealth','vehicleDashboard',
      'serviceHistory','notifications','aiAssistant','support','invoices'
    ]);
    if (HIDE_NAV.has(name)) {
      bottomNav.classList.add('hidden');
    } else {
      bottomNav.classList.remove('hidden');
    }

    // ── Floating AI button visibility ──
    const fabAi = document.getElementById('fabAi');
    if (fabAi) {
      const HIDE_FAB = new Set(['splash','onboarding','login','aiAssistant']);
      fabAi.style.display = HIDE_FAB.has(name) ? 'none' : '';
    }

    // ── Active tab ──
    const TAB_MAP = { home:'home', services:'services', bookings:'bookings', offers:'offers', profile:'profile' };
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    if (TAB_MAP[name]) {
      const el = document.querySelector(`.nav-item[data-tab="${TAB_MAP[name]}"]`);
      if (el) el.classList.add('active');
    }
  },

  _postRender(name) {
    // Scroll AI chat to bottom
    if (name === 'aiAssistant') {
      const ca = document.getElementById('chatArea');
      if (ca) ca.scrollTop = ca.scrollHeight;
    }
  },
};

/* ── Rerender Current Screen ─────────────────────────────── */
function rerender() {
  const name = AppState.nav.current;
  const params = AppState.nav.params;
  const container = document.getElementById('screenContainer');
  const fn = Router.screenRegistry[name];
  if (fn) {
    container.innerHTML = fn(params);
    Router._postRender(name);
  }
}

/* ── ── Auth Handlers ─────────────────────────────────────── */
function validatePhone(input) {
  const err = document.getElementById('phoneError');
  if (err) err.style.display = input.value.length > 0 && !/^[6-9]\d{9}$/.test(input.value) ? 'block' : 'none';
}

function sendOtp() {
  const inp = document.getElementById('phoneInput');
  if (!inp) return;
  const phone = inp.value.trim();
  if (!/^[6-9]\d{9}$/.test(phone)) {
    const err = document.getElementById('phoneError');
    if (err) err.style.display = 'block';
    inp.focus();
    return;
  }
  AppState.auth.phone = phone;
  // Animate button to loading
  const btn = document.getElementById('sendOtpBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
  setTimeout(() => {
    document.getElementById('loginStep1').style.display = 'none';
    const step2 = document.getElementById('loginStep2');
    step2.style.display = 'flex';
    document.getElementById('displayPhone').textContent = phone;
    const boxes = step2.querySelectorAll('.otp-box');
    if (boxes[0]) boxes[0].focus();
    AppState.auth.otpSent = true;
  }, 1000);
}

function otpMove(input, idx) {
  input.value = input.value.replace(/[^0-9]/g,'');
  const boxes = document.querySelectorAll('.otp-box');
  if (input.value) {
    if (idx < 5) {
      boxes[idx + 1].focus();
    } else {
      input.blur();
      setTimeout(verifyOtp, 150);
    }
  }
}

function otpBack(input, idx) {
  if (event.key === 'Backspace' && !input.value && idx > 0) {
    document.querySelectorAll('.otp-box')[idx - 1].focus();
  }
}

function verifyOtp() {
  const boxes = document.querySelectorAll('.otp-box');
  const otp = Array.from(boxes).map(b => b.value).join('');
  const err = document.getElementById('otpError');
  if (otp.length < 6) {
    if (err) { err.textContent = 'Please enter all 6 digits.'; err.style.display = 'block'; }
    return;
  }
  // Accept any 6-digit OTP in demo
  AppState.auth.isAuthenticated = true;
  showToast('Login successful! Let\'s add your car.', 'success');
  Router.go('brandSelect');
}

function resendOtp() {
  showToast('OTP resent to +91 ' + AppState.auth.phone, 'info');
}

function skipVehicleSetup() {
  showToast('Vehicle setup skipped. You can add your car anytime.', 'info');
  Router.go('home');
}

/* ── Vehicle ─────────────────────────────────────────────── */
function pickVehicle(id) {
  Actions.setDraftVehicle(id);
  rerender();
}

function saveVehicle() {
  const reg = document.getElementById('regInput');
  if (!reg || !reg.value.trim()) {
    const err = document.getElementById('regError');
    if (err) err.style.display = 'block';
    reg && reg.focus();
    return;
  }
  showToast('Vehicle added successfully!', 'success');
  Router.go('home');
}

/* ── Package ─────────────────────────────────────────────── */
function pickPackage(id) {
  Actions.setDraftPackage(id);
  rerender();
}

/* ── Category ────────────────────────────────────────────── */
function selectCat(id, el) {
  AppState.ui.activeCategoryId = id;
  const grid = el.closest('.card');
  if (grid) grid.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

/* ── Slot selection ──────────────────────────────────────── */
function pickSlot(id, row) {
  Actions.setDraftSlot(id);
  const list = row.closest('.time-list');
  if (list) {
    list.querySelectorAll('.time-slot-row').forEach(r => {
      r.classList.remove('selected');
      const radio = r.querySelector('.ts-radio');
      if (radio) radio.classList.remove('on');
    });
  }
  row.classList.add('selected');
  const radio = row.querySelector('.ts-radio');
  if (radio) radio.classList.add('on');
}

/* ── Date chips ──────────────────────────────────────────── */
function refreshDateChips(chip) {
  const scroll = chip.closest('.date-scroll');
  if (scroll) {
    scroll.querySelectorAll('.date-chip').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
  }
}

/* ── Add-ons ─────────────────────────────────────────────── */
function toggleAddonItem(id, row) {
  Actions.toggleAddon(id);
  const chk = row.querySelector('.chk-box');
  const sel = Actions.isAddonSelected(id);
  if (chk) {
    chk.classList.toggle('on', sel);
    // Use a simple checkmark character
    chk.innerHTML = sel ? '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' : '';
  }
  row.classList.toggle('selected', sel);
  // Refresh summary card
  const summary = document.getElementById('addonSummary');
  if (summary) {
    const pkg = Computed.draftPackage();
    const addons = Computed.draftAddons();
    summary.innerHTML = `
      <div class="sec-title" style="margin-bottom:10px;">Order Summary</div>
      <div class="price-row"><span class="price-key">${pkg?.name||'Package'}</span><span class="price-val">\u20b9${(pkg?.basePrice||pkg?.price||0).toLocaleString('en-IN')}</span></div>
      ${addons.map(a=>`<div class="price-row"><span class="price-key">${a.name}</span><span class="price-val">\u20b9${a.price.toLocaleString('en-IN')}</span></div>`).join('')}
      <div style="height:1px;background:var(--grey-150);margin:6px 0;"></div>
      <div class="price-row"><span class="price-key">Subtotal</span><span class="price-val">\u20b9${Computed.draftSubtotal().toLocaleString('en-IN')}</span></div>
      <div class="price-row"><span class="price-key">GST (18%)</span><span class="price-val">\u20b9${Computed.draftGST().toLocaleString('en-IN')}</span></div>
      <div class="price-row total"><span class="price-key">Total</span><span class="price-val">\u20b9${Computed.draftTotal().toLocaleString('en-IN')}</span></div>
    `;
  }
}

/* ── Payment ─────────────────────────────────────────────── */
function selPay(opt) {
  document.querySelectorAll('.pay-opt').forEach(o => {
    o.classList.remove('sel');
    const r = o.querySelector('.pay-radio');
    if (r) { r.classList.remove('on'); r.innerHTML = ''; }
  });
  opt.classList.add('sel');
  const r = opt.querySelector('.pay-radio');
  if (r) { r.classList.add('on'); }
}

/* ── Coupon ──────────────────────────────────────────────── */
function applyCouponCode() {
  const inp = document.getElementById('couponInput');
  if (!inp) return;
  const code = inp.value.trim().toUpperCase();
  AppState.draft.couponCode = code;
  if (!code) { showCouponMsg('Please enter a coupon code.', false); return; }
  const result = Actions.applyCoupon(code);
  if (result.success) {
    const saved = AppState.draft.couponApplied.discountAmount;
    showCouponMsg('\u2705 Coupon applied! You save \u20b9' + saved.toLocaleString('en-IN'), true);
    // Refresh the summary section
    rerender();
  } else {
    AppState.draft.couponError = result.error;
    showCouponMsg(result.error, false);
  }
}

function showCouponMsg(msg, success) {
  const el = document.getElementById('couponMsg');
  if (!el) return;
  el.textContent = msg;
  el.style.color = success ? 'var(--green)' : 'var(--red)';
  el.style.display = 'block';
}

/* ── Booking Confirmation ────────────────────────────────── */
function confirmBookingAction() {
  const btn = document.getElementById('confirmBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Confirming\u2026'; }
  setTimeout(() => {
    Actions.confirmBooking();
    Router.go('confirmation');
  }, 1000);
}

/* ── Booking Tabs ────────────────────────────────────────── */
function setBookingTab(tab) {
  AppState.ui.activeBookingTab = tab;
  rerender();
}

/* ── Vehicle Health ──────────────────────────────────────── */
function setHealthVehicle(id) {
  Actions.setDraftVehicle(id);
  rerender();
}

/* ── Notifications ───────────────────────────────────────── */
function markAllRead() {
  AppState.notifications.forEach(n => n.read = true);
  rerender();
  showToast('All notifications marked as read', 'success');
}

/* ── AI Assistant ────────────────────────────────────────── */
const aiResponses = {
  'best package':        'Based on your Honda City at 24,360 km, the **Comprehensive Service (₹2,999)** is ideal. It covers engine oil, filter, 21-point check, brake inspection, battery, tyre check and fluids — everything your car needs at this interval.',
  'compare packages':    'Here\'s a quick summary:\n🔹 Comprehensive (₹2,999) — Essential maintenance\n🔹 Standard (₹4,499) — Adds wheel alignment + fuel cleaning\n🔹 Premium (₹6,499) — Full service + AC, detailing, 90-day assist\n\nFor a 2022 petrol City, I recommend Comprehensive at this km reading.',
  'reschedule':          'You can reschedule up to 2 hours before your appointment. Go to My Bookings → Select your booking → Reschedule.',
  'brake':               'Brake wear depends on driving style and conditions. At 24k km, a standard 21-point inspection will check your brake pad thickness and rotor condition. Our technician will flag anything that needs attention.',
  'engine oil':          'For a 2022 Honda City ZX CVT (petrol), we recommend 0W-20 fully synthetic oil. Change interval: every 10,000 km or 6 months — whichever comes first. Your Comprehensive Service includes an OEM-grade oil change.',
  'warranty':            'Services performed at FLAG Auto Care maintain your manufacturer warranty, as we use OEM-grade parts and follow manufacturer service schedules. Always keep your service booklet updated.',
  'my car has 30':       'At 30,000 km, I recommend the Standard Service (₹4,499). It includes wheel alignment alongside all the essentials — important at this stage to ensure even tyre wear and straight tracking.',
  'default':             'That\'s a great question! For specific advice, I\'d recommend booking a 21-point inspection with any service package. Our technicians will assess your vehicle and provide a detailed report. Anything else I can help with?',
};

function sendAiMessage(message) {
  const inp = document.getElementById('aiInput');
  const text = message || (inp ? inp.value.trim() : '');
  if (!text) return;

  // Add user message
  AppState.aiConversation.push({ id: 'ai_' + Date.now(), role: 'user', content: text });
  if (inp) inp.value = '';

  // Re-render to show user message
  rerender();

  // Find best response
  const lower = text.toLowerCase();
  let reply = aiResponses['default'];
  for (const [key, val] of Object.entries(aiResponses)) {
    if (key !== 'default' && lower.includes(key)) { reply = val; break; }
  }

  // Simulate AI typing delay
  setTimeout(() => {
    AppState.aiConversation.push({
      id: 'ai_' + (Date.now() + 1),
      role: 'assistant',
      content: reply,
      suggestions: ['Tell me more', 'Compare Packages', 'Book a Service'],
    });
    rerender();
  }, 1200);
}

/* ── FAQ Toggle ──────────────────────────────────────────── */
function toggleFAQ(row) {
  const answer = row.querySelector('div:last-child');
  const arrow = row.querySelector('span:last-of-type');
  if (!answer) return;
  const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
  answer.style.maxHeight = isOpen ? '0px' : '200px';
  answer.style.marginTop = isOpen ? '0' : '8px';
  if (arrow) arrow.style.transform = isOpen ? '' : 'rotate(90deg)';
}

/* ── Confirm Dialog ──────────────────────────────────────── */
function showConfirmDialog(action) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:flex-end;animation:fadeIn 0.2s;';
  const isApprove = action === 'approve';
  overlay.innerHTML = `
    <div style="background:var(--white);border-radius:20px 20px 0 0;padding:20px;width:100%;animation:slideUp 0.3s cubic-bezier(0.4,0,0.2,1);">
      <div style="width:40px;height:4px;background:var(--grey-200);border-radius:999px;margin:0 auto 16px;"></div>
      <div style="text-align:center;margin-bottom:16px;">
        <div style="font-size:36px;margin-bottom:10px;">${isApprove ? '✅' : '❌'}</div>
        <div style="font-size:18px;font-weight:800;color:var(--black);">${isApprove ? 'Approve Estimate?' : 'Reject Estimate?'}</div>
        <div style="font-size:13px;color:var(--grey-500);margin-top:6px;line-height:1.55;">${isApprove ? 'Approving will allow the technician to proceed with the additional work (₹3,879). You\'ll be charged on collection.' : 'Are you sure you want to reject? The technician will not perform the additional work.'}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <button style="flex:1;padding:13px;background:var(--grey-100);border:none;border-radius:12px;font-size:14px;font-weight:600;font-family:var(--font);cursor:pointer;" onclick="this.closest('[style*=fixed]').remove()">Cancel</button>
        <button style="flex:1;padding:13px;background:${isApprove?'var(--green)':'var(--red)'};border:none;border-radius:12px;color:white;font-size:14px;font-weight:700;font-family:var(--font);cursor:pointer;" onclick="this.closest('[style*=fixed]').remove();showToast('Estimate ${isApprove?'approved':'rejected'}!','${isApprove?'success':'error'}');Router.go('tracking')">${isApprove ? '✅ Yes, Approve' : '✗ Yes, Reject'}</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

/* ── Toast ───────────────────────────────────────────────── */
function showToast(message, type = 'info') {
  const existing = document.querySelectorAll('.toast-msg');
  existing.forEach(t => t.remove());

  const colors = { success: 'var(--green)', error: 'var(--red)', info: 'var(--black)', warn: 'var(--amber)' };
  const icons  = { success: '✅', error: '❌', info: 'ℹ️', warn: '⚠️' };
  const t = document.createElement('div');
  t.className = 'toast-msg';
  t.style.cssText = `position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:var(--black);color:white;padding:11px 18px;border-radius:999px;font-size:13px;font-weight:600;z-index:9999;display:flex;align-items:center;gap:8px;box-shadow:0 4px 20px rgba(0,0,0,0.25);animation:toastIn 0.3s cubic-bezier(0.4,0,0.2,1);white-space:nowrap;max-width:85%;`;
  t.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
  document.body.appendChild(t);
  setTimeout(() => { t.style.animation = 'toastOut 0.3s forwards'; setTimeout(() => t.remove(), 300); }, 2800);
}

/* ── Global Click Delegation ─────────────────────────────── */
document.addEventListener('click', function(e) {
  // Chip row
  if (e.target.classList.contains('chip')) {
    const row = e.target.closest('.chips');
    if (row) {
      row.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
    }
  }
});

/* ── Boot ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  Router.init();
  Router.go('splash');
  // Auto advance splash → onboarding
  setTimeout(() => {
    Router.go('onboarding');
  }, 2200);
});
