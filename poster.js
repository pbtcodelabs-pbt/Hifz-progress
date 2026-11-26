/* MD2611TH120 (مالک کا حکم): طالب علم کی تصویر ہر جگہ چورس (گول نہیں) */
function rr9(c, x, y, w, h, r){ c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
/* 🎴 MD2511WE092 (مالک کا حکم — تین پسندیدہ ڈیزائن ملا کر ایک «پروفائل پوسٹر»):
   اوپر گہری سبز پٹی + بیچ میں گول تصویر + نام (ڈیزائن 3)، سبق / سبقی / منزل کی لمبی چلتی پٹیاں — فیصد صرف ایک جگہ، کمزور نارنجی + «… پر محنت کی ضرورت» (ڈیزائن 2)،
   نیچے کھلنے والے خانے (ڈیزائن 1)؛ پس منظر مونگیا سبز۔ واٹس ایپ = رنگین تصویر (Canvas — نستعلیق کے جوڑ درست، ہندسے Arial)، PDF = کالا سفید (`.bw`)۔
   ایک ہی ڈیٹا (والدین کے لنک والا `build()` — jma091) سے ایپ اور والدین کا صفحہ `p.html` دونوں۔ ریکارڈ صرف پڑھتا ہے۔ */
(function(){
  'use strict';
  if(window.MDPoster) return;
  var BASE = (function(){ try{ var s = document.currentScript && document.currentScript.src; return s ? s.replace(/[^\/]*$/, '') : ''; }catch(e){ return ''; } })();
  var MN = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'], DY = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
  var SES = ['فجر سے پہلے', 'فجر کے بعد', 'ناشتے کے بعد', 'ظہر کے بعد', 'مغرب کے بعد', 'عشاء کے بعد'], KN = { sabaq: ['سبق', 'k1'], sabqi: ['سبقی', 'k2'], manzil: ['منزل', 'k3'] }, ORD = ['سبق', 'سبقی', 'منزل'];
  function E(t){ return String(t == null ? '' : t).replace(/[&<>"']/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function N(x){ return '<span class="n">' + E(x) + '</span>'; }
  function dt(ds){ var d = new Date(ds + 'T12:00:00'); return DY[d.getDay()] + '، ' + N(d.getDate()) + ' ' + MN[d.getMonth()]; }
  function ymN(ym){ var p = String(ym || '').split('-'); return p.length === 2 ? MN[+p[1] - 1] + ' ' + p[0] : ''; }
  function css(){
    if(document.getElementById('mdpCss')) return;
    var st = document.createElement('style'); st.id = 'mdpCss';
    st.textContent = "@font-face{font-family:MDPN;src:url(" + BASE + "fonts/Jameel_Noori_Nastaleeq.woff)}@font-face{font-family:MDPK;src:url(" + BASE + "fonts/Jameel_Noori_Nastaleeq_Kasheeda.ttf)}"
      + ".mdp{direction:rtl;font-family:MDPN,'Jameel Noori Nastaleeq',serif;color:#1e293b;background:linear-gradient(180deg,#d9f2df,#bfe6c9);padding:14px 10px;border-radius:0}"
      + ".mdp *{box-sizing:border-box}.mdp .n{font-family:Arial,sans-serif;font-weight:700;direction:ltr;unicode-bidi:isolate;display:inline-block}"
      + ".mdp .cd{max-width:430px;margin:0 auto;background:#f7fcf8;border-radius:24px;overflow:hidden;box-shadow:0 6px 22px rgba(6,95,70,.18);border:1.5px solid #a7d8b5}"
      + ".mdp .band{min-height:84px;background:linear-gradient(135deg,#065f46,#0f8a5f);color:#fff;text-align:center;padding:8px 10px 44px;font-family:MDPK,MDPN,serif;font-size:22px;line-height:1.5}"
      + ".mdp .band small{display:block;font-family:MDPN,serif;font-size:13px;opacity:.88}"
      + ".mdp .ph{width:104px;height:104px;border-radius:16px;margin:-48px auto 0;position:relative;border:4px solid #fff;box-shadow:0 3px 10px rgba(0,0,0,.18);background:#cbd5e1 center/cover;display:flex;align-items:center;justify-content:center;font-size:44px}"
      + ".mdp .nm{text-align:center;font-family:MDPK,MDPN,serif;font-size:27px;color:#065f46;margin-top:2px;line-height:1.5}"
      + ".mdp .mt{text-align:center;font-size:14px;color:#475569;line-height:1.85;padding:0 10px}"
      + ".mdp .chips{display:flex;gap:6px;justify-content:center;padding:8px 10px 2px;flex-wrap:wrap}"
      + ".mdp .chips span.c{background:#fff;border:1.5px solid #bfe3c9;border-radius:999px;padding:1px 11px;font-size:14px;color:#065f46;box-shadow:0 1px 3px rgba(6,95,70,.08)}"
      + ".mdp .rk{margin:10px 12px;background:#fff;border:1.5px solid #bfe3c9;border-radius:16px;padding:8px 12px;box-shadow:0 2px 6px rgba(6,95,70,.08)}"
      + ".mdp .rk .t{font-size:14px;color:#065f46;margin-bottom:2px}.mdp .rk .t small{font-size:12px;color:#64748b}"
      + ".mdp .ln{display:flex;align-items:center;gap:8px;margin:6px 0;font-size:15px}.mdp .ln .k{width:42px}"
      + ".mdp .ln u{flex:1;height:11px;background:#e7f3ea;border-radius:6px;text-decoration:none;position:relative;overflow:hidden}"
      + ".mdp .ln u i{position:absolute;right:0;top:0;bottom:0;width:var(--w);border-radius:6px;background:linear-gradient(90deg,#34d399,#059669,#34d399);background-size:200% 100%;animation:mdpG 1.4s ease-out both,mdpS 2.6s ease-in-out 1.4s infinite alternate,mdpL 2.2s linear infinite}"
      + ".mdp .ln.w u i{background-image:linear-gradient(90deg,#fdba74,#c2410c,#fdba74)}.mdp .ln.x{opacity:.55}"
      + ".mdp .ln b{font:800 14px Arial,sans-serif;width:50px;text-align:left;direction:ltr}"
      + "@keyframes mdpG{from{width:0}}@keyframes mdpS{from{width:var(--w)}to{width:calc(var(--w) - 6%)}}@keyframes mdpL{from{background-position:0 0}to{background-position:200% 0}}"
      + ".mdp .tip{margin-top:6px;padding:4px 10px;border-radius:10px;background:#fff7ed;color:#9a3412;font-size:14px;line-height:1.85;border:1px solid #fed7aa}.mdp .tip.ok{background:#ecfdf5;color:#065f46;border-color:#a7f3d0}"
      + ".mdp details{border-top:1px solid #d7ecdd;background:#fff}"
      + ".mdp summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:8px;padding:8px 14px;font-size:16px}.mdp summary::-webkit-details-marker{display:none}"
      + ".mdp summary em{font-style:normal;font:700 13px Arial,sans-serif;color:#0f766e;direction:ltr}.mdp summary i{margin-right:auto;font-style:normal;color:#94a3b8;font-size:13px;transition:transform .2s}.mdp details[open] summary i{transform:rotate(180deg)}"
      + ".mdp .in{padding:2px 14px 10px;font-size:14.5px;line-height:1.95;color:#334155}"
      + ".mdp .day{border:1px solid #d7ecdd;border-radius:12px;padding:4px 8px;margin:5px 0;background:#fbfefc}.mdp .day h5{margin:0;font-size:14px;font-weight:400;color:#065f46;display:flex;gap:6px;align-items:center}"
      + ".mdp .six{display:inline-flex;gap:2px;margin-right:auto}.mdp .six u{text-decoration:none;width:18px;height:18px;border-radius:5px;font:700 11px/18px Arial;text-align:center;background:#f1f5f9;color:#94a3b8}"
      + ".mdp .six .p{background:#dcfce7;color:#166534}.mdp .six .h{background:#fef3c7;color:#92400e}.mdp .six .a{background:#fee2e2;color:#991b1b}"
      + ".mdp .e{font-size:14px;line-height:1.8}.mdp .k1{color:#16a34a}.mdp .k2{color:#2563eb}.mdp .k3{color:#9333ea}"
      + ".mdp .sh{display:flex;gap:6px;padding:10px 12px;background:#f7fcf8;flex-wrap:wrap}.mdp .sh button{flex:1;min-width:30%;border:1.5px solid #bfe3c9;border-radius:12px;padding:6px 4px;font:inherit;font-size:14px;background:#fff;color:#065f46;cursor:pointer}"
      + ".mdp .sh .wa{background:#16a34a;color:#fff;border-color:#16a34a}.mdp .ft{text-align:center;font-size:12px;color:#64748b;padding:6px}"
      /* کالا سفید — PDF / پرنٹ */
      + ".mdp.bw{background:#fff;padding:0}.mdp.bw .cd{box-shadow:none;border:1.5px solid #000;background:#fff;max-width:none}.mdp.bw .band{background:#fff;color:#000;border-bottom:2px solid #000}"
      + ".mdp.bw .ph{filter:grayscale(1);border-color:#000;box-shadow:none}.mdp.bw .nm,.mdp.bw .rk .t,.mdp.bw .chips span.c,.mdp.bw summary em,.mdp.bw .day h5,.mdp.bw .k1,.mdp.bw .k2,.mdp.bw .k3{color:#000}"
      + ".mdp.bw .chips span.c,.mdp.bw .rk,.mdp.bw .day{border-color:#000;box-shadow:none;background:#fff}.mdp.bw .ln u{background:#fff;border:1px solid #000}.mdp.bw .ln u i,.mdp.bw .ln.w u i{background:#555!important;animation:none;width:var(--w)}"
      + ".mdp.bw .tip,.mdp.bw .tip.ok{background:#fff;color:#000;border-color:#000}.mdp.bw details{border-color:#000;break-inside:avoid}.mdp.bw .six u{background:#fff!important;color:#000!important;border:1px solid #000}.mdp.bw .sh,.mdp.bw summary i{display:none}"
      + ".mdp.bw .day{break-inside:avoid}.mdp.bw .mt,.mdp.bw .in{color:#000}";
    document.head.appendChild(st);
  }
  /* ڈیٹا کا خلاصہ (ایپ، والدین، تصویر — تینوں ایک جیسا) */
  function sum(D){
    var rk = (D.rk && D.rk.l) || [], by = {}; rk.forEach(function(x){ by[x.k] = x; });
    var w = rk.length > 1 ? rk[rk.length - 1] : null, b = rk.length ? rk[0] : null, weak = !!(w && (w.p < 85 || b.p - w.p >= 10));
    var avg = rk.length ? Math.round(rk.reduce(function(t, x){ return t + x.p; }, 0) / rk.length) : null;
    var m = (D.at && D.at.m) || {}, h = D.h || {}, kh = D.kh;
    var khT = kh ? (kh.done ? 'حفظ مکمل' : (function(){ var x = new Date(kh.d + 'T12:00:00'); return MN[x.getMonth()] + ' ' + x.getFullYear(); })()) : '';
    var tip = !rk.length ? '' : rk.length < 2 ? '' : weak
      ? '⚠️ ' + w.k + ' کمزور جا رہی ہے' + (w.m || w.a ? ' — روزانہ اوسط' + (w.a ? ' اٹکن ' + w.a : '') + (w.m ? ' غلطی ' + w.m : '') : '') + ' · ' + w.k + ' پر مزید محنت کی ضرورت ہے۔ ✅ سب سے مضبوط: ' + b.k + '۔'
      : '✅ ماشاء اللہ، تینوں اچھے جا رہے ہیں — سب سے مضبوط: ' + b.k + '۔';
    var paras = h.pct != null ? String(Math.round(h.pct * 30 / 10) / 10) : null;   /* قرآن کا % → پارے (6.4) */
    return { rk: rk, by: by, w: weak ? w : null, b: b, avg: avg, m: m, h: h, khT: khT, tip: tip, weak: weak, paras: paras };
  }
  function bars(S){
    return ORD.map(function(k){ var x = S.by[k];
      if(!x) return '<div class="ln x"><span class="k">' + k + '</span><u></u><b style="font:13px MDPN,serif;width:auto">کم ریکارڈ</b></div>';
      var isW = S.w && S.w.k === k; return '<div class="ln' + (isW ? ' w' : '') + '"><span class="k">' + k + '</span><u><i style="--w:' + Math.max(4, x.p) + '%"></i></u><b>' + x.p + '%' + (isW ? ' ↓' : S.b && S.b.k === k ? ' ↑' : '') + '</b></div>'; }).join('');
  }
  function html(D, o){
    css(); o = o || {};
    var s = D.s || {}, A = D.at || {}, S = sum(D), pm = A.pm || {}, op = o.open ? ' open' : '';
    var H = '<div class="mdp' + (o.bw ? ' bw' : '') + '"><div class="cd">'
      + '<div class="band">' + E(D.mad || 'مدرسہ') + '<small>کارکردگی رپورٹ · ' + E(ymN(A.ym)) + '</small></div>'
      + '<div class="ph"' + (s.ph ? ' style="background-image:url(' + E(s.ph) + ')"' : '') + '>' + (s.ph ? '' : '👤') + '</div>'
      + '<div class="nm">' + E(s.n) + '</div>'
      + '<div class="mt">' + (s.w ? 'ولد ' + E(s.w) : '') + (s.roll ? ' · رول ' + N(s.roll) : '') + (s.cls ? ' · ' + E(s.cls) : '') + (s.ust ? '<br>استاد: ' + E(s.ust) : '') + '</div>'
      + '<div class="chips"><span class="c">🕌 حاضری ' + (S.m.pct != null ? N(S.m.pct + '%') : '—') + '</span>' + (S.paras != null ? '<span class="c">📖 ' + N(S.paras) + ' پارے یاد</span>' : '') + (S.khT ? '<span class="c">🏁 ' + E(S.khT.replace(/\d+/g, '')) + (/\d/.test(S.khT) ? N(S.khT.replace(/\D/g, '')) : '') + '</span>' : '') + '</div>'
      + '<div class="rk"><div class="t">📈 سبق · سبقی · منزل <small>(پچھلے ' + N((D.rk && D.rk.d) || 10) + ' دن)</small></div>' + bars(S)
      + (S.tip ? '<div class="tip' + (S.weak ? '' : ' ok') + '">' + E(S.tip).replace(/(\d+(\.\d+)?)/g, '<span class="n">$1</span>') + '</div>' : !S.rk.length ? '<div class="tip ok">چند دن کے اندراج کے بعد یہاں سبق / سبقی / منزل کا موازنہ آئے گا۔</div>' : '') + '</div>';
    H += '<details' + op + '><summary>📊 <b>کارکردگی کی تفصیل</b>' + (S.avg != null ? '<em>اوسط ' + S.avg + '/100</em>' : '') + '<i>▾</i></summary><div class="in">'
      + (S.rk.length ? ORD.filter(function(k){ return S.by[k]; }).map(function(k){ var x = S.by[k]; return '• ' + k + ': ' + (x.m ? 'روزانہ غلطی ' + N(x.m) : 'غلطی نہیں') + (k !== 'سبق' ? (x.a ? ' · اٹکن ' + N(x.a) : ' · اٹکن نہیں') : '') + (x.tr >= 5 ? ' · پچھلے دنوں سے بہتر ↑' : x.tr <= -5 ? ' · پچھلے دنوں سے کمزور ↓' : ''); }).join('<br>') : 'ابھی کم ریکارڈ') + '</div></details>';
    H += '<details' + op + '><summary>🕌 <b>حاضری</b>' + (S.m.pct != null ? '<em>' + S.m.pct + '%</em>' : '') + '<i>▾</i></summary><div class="in">'
      + E(ymN(A.ym)) + ': ' + (S.m.n ? 'حاضر ' + N(S.m.p) + ' · آدھی ' + N(S.m.h) + ' · غیر حاضر ' + N(S.m.a) + ' نشستیں' : 'ابھی درج نہیں')
      + '<br>' + E(ymN(A.pym)) + ': ' + (pm.n ? N(pm.pct + '%') + ' (حاضر ' + N(pm.p) + ' · غیر حاضر ' + N(pm.a) + ')' : '—')
      + (function(){ var ab = (D.days || []).filter(function(x){ var r = x.a.filter(function(v){ return v && v !== 'c'; }); return r.length && r.every(function(v){ return v === 'a'; }); }); return ab.length ? '<br>❌ پورے دن غیر حاضر: ' + ab.map(function(x){ return dt(x.d) + (x.w ? ' (' + E(x.w) + ')' : ''); }).join('، ') : ''; })() + '</div></details>';
    H += '<details' + op + '><summary>📖 <b>حفظ کی ترقی</b>' + (S.h.pct != null ? '<em>' + S.h.pct + '%</em>' : '') + '<i>▾</i></summary><div class="in">'
      + (S.h.pct != null ? 'قرآن مجید کا ' + N(S.h.pct + '%') + ' یاد' + (S.h.full ? ' · مکمل پارے ' + N(S.h.full) : '') + (S.h.part ? ' · ادھورے ' + N(S.h.part) : '') : '—')
      + (D.kh ? '<br>🏁 ' + (D.kh.done ? 'الحمدللہ حفظ مکمل' : 'موجودہ رفتار سے ختم کی متوقع تاریخ: ' + dt(D.kh.d) + ' ' + N(D.kh.d.slice(0, 4))) : '') + '</div></details>';
    H += '<details' + op + '><summary>📝 <b>روزانہ ریکارڈ</b><em>30</em><i>▾</i></summary><div class="in">' + ((D.days || []).map(function(x){
      var six = '<span class="six">' + x.a.map(function(v, i){ return v === 'c' ? '' : '<u class="' + (v || '') + '" title="' + SES[i] + '">' + (v === 'p' ? 'ح' : v === 'h' ? '½' : v === 'a' ? 'غ' : '·') + '</u>'; }).join('') + '</span>';
      return '<div class="day"><h5>' + dt(x.d) + six + '</h5>' + (x.e.length ? x.e.map(function(e){ var k = KN[e.k] || [e.k, '']; return '<div class="e"><b class="' + k[1] + '" style="font-weight:400">' + k[0] + ':</b> ' + E(e.q).replace(/(\d+)/g, '<span class="n">$1</span>') + (e.at ? ' · اٹکن ' + N(e.at) : '') + (e.m ? ' · غلطی ' + N(e.m) : '') + (e.p ? ' · ' + E(e.p) : '') + (e.l ? ' · سنا: ' + E(e.l) : '') + '</div>'; }).join('') : '<div class="e" style="color:#94a3b8">اندراج نہیں</div>') + '</div>';
    }).join('') || 'ابھی ریکارڈ نہیں') + '<div style="font-size:12px;color:#64748b">ح = حاضر · ½ = آدھی · غ = غیر حاضر (ہر خانہ ایک نشست)</div></div></details>';
    if(o.btns) H += '<div class="sh">' + o.btns + '</div>';
    if(o.foot) H += '<div class="ft">' + o.foot + '</div>';
    return H + '</div></div>';
  }

  /* ---------------- 🖼️ رنگین تصویر (Canvas) ---------------- */
  var RUN = /([0-9][0-9.,%\/+\-]*%?|[↑↓])/;
  function runs(t){ return String(t).split(RUN).filter(function(x){ return x !== ''; }); }
  function fnt(r, sz, f){ return RUN.test(r) && /^[0-9↑↓]/.test(r) ? '700 ' + Math.round(sz * 0.86) + 'px Arial' : sz + 'px ' + f; }
  function mw(c, t, sz, f){ return runs(t).reduce(function(w, r){ c.font = fnt(r, sz, f); return w + c.measureText(r).width; }, 0); }
  function tx(c, t, xr, y, sz, f, col){   /* دائیں سے بائیں — اردو نستعلیق، ہندسے Arial */
    c.fillStyle = col; c.textBaseline = 'middle'; var x = xr;
    runs(t).forEach(function(r){ c.font = fnt(r, sz, f); var w = c.measureText(r).width, dg = /^[0-9↑↓]/.test(r); c.direction = dg ? 'ltr' : 'rtl'; c.textAlign = dg ? 'left' : 'right'; c.fillText(r, dg ? x - w : x, y); x -= w; });
    return xr - x;
  }
  function txC(c, t, cx, y, sz, f, col){ var w = mw(c, t, sz, f); tx(c, t, cx + w / 2, y, sz, f, col); return w; }
  function wrap(c, t, maxW, sz, f){ var ws = String(t).split(' '), L = [], cur = ''; ws.forEach(function(w){ var n = cur ? cur + ' ' + w : w; if(mw(c, n, sz, f) > maxW && cur){ L.push(cur); cur = w; } else cur = n; }); if(cur) L.push(cur); return L; }
  function rr(c, x, y, w, h, r){ c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  function img(src){ return new Promise(function(res){ if(!src) return res(null); var i = new Image(); i.onload = function(){ res(i); }; i.onerror = function(){ res(null); }; i.src = src; }); }
  async function png(D, scale){
    css(); scale = scale || 1;
    try{ await Promise.all([document.fonts.load('40px MDPN'), document.fonts.load('40px MDPK')]); }catch(e){}
    var s = D.s || {}, A = D.at || {}, S = sum(D), PH = await img(s.ph), W = 1080, M = 44, CW = W - 2 * M, F = 'MDPN', FK = 'MDPK';
    var c0 = document.createElement('canvas').getContext('2d'), tipL = S.tip ? wrap(c0, S.tip, CW - 120, 34, F) : [];
    var lines = [];
    if(S.rk.length) lines.push('📊 کارکردگی: اوسط ' + S.avg + '/100');
    if(S.m.n) lines.push('🕌 ' + ymN(A.ym) + ': حاضر ' + S.m.p + ' · آدھی ' + S.m.h + ' · غیر حاضر ' + S.m.a + ' نشستیں');
    if(S.h.pct != null) lines.push('📖 قرآن مجید کا ' + S.h.pct + '% یاد' + (S.h.full ? ' · مکمل پارے ' + S.h.full : ''));
    if(D.kh && !D.kh.done) lines.push('🏁 ختم کی متوقع تاریخ: ' + S.khT);
    var H = M + 290 + 130 + 92 + 70 + 120 + 40 + (110 + 3 * 72 + (tipL.length ? tipL.length * 52 + 30 : 0)) + 40 + lines.length * 62 + 110 + M;
    var cv = document.createElement('canvas'); cv.width = W * scale; cv.height = H * scale; var c = cv.getContext('2d'); c.scale(scale, scale);
    var g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#d9f2df'); g.addColorStop(1, '#bfe6c9'); c.fillStyle = g; c.fillRect(0, 0, W, H);
    c.save(); c.shadowColor = 'rgba(6,95,70,.22)'; c.shadowBlur = 30; c.shadowOffsetY = 8; rr(c, M, M, CW, H - 2 * M, 48); c.fillStyle = '#f7fcf8'; c.fill(); c.restore();
    c.save(); rr(c, M, M, CW, H - 2 * M, 48); c.clip();
    var bg = c.createLinearGradient(M, M, W - M, M + 250); bg.addColorStop(0, '#065f46'); bg.addColorStop(1, '#0f8a5f'); c.fillStyle = bg; c.fillRect(M, M, CW, 290);
    c.restore(); c.lineWidth = 3; c.strokeStyle = '#a7d8b5'; rr(c, M, M, CW, H - 2 * M, 48); c.stroke();
    txC(c, D.mad || 'مدرسہ', W / 2, M + 70, 58, FK, '#fff');
    txC(c, 'کارکردگی رپورٹ · ' + ymN(A.ym), W / 2, M + 140, 32, F, 'rgba(255,255,255,.9)');
    var cy = M + 300, R = 112;
    c.save(); c.shadowColor = 'rgba(0,0,0,.25)'; c.shadowBlur = 18; c.beginPath(); rr9(c, W / 2 - R - 10, cy - R - 10, 2 * R + 20, 2 * R + 20, 30); c.fillStyle = '#fff'; c.fill(); c.restore();
    c.save(); c.beginPath(); rr9(c, W / 2 - R, cy - R, 2 * R, 2 * R, 22); c.clip(); c.fillStyle = '#cbd5e1'; c.fillRect(W / 2 - R, cy - R, 2 * R, 2 * R);
    if(PH){ var k = Math.max(2 * R / PH.width, 2 * R / PH.height); c.drawImage(PH, W / 2 - PH.width * k / 2, cy - PH.height * k / 2, PH.width * k, PH.height * k); }
    else { c.fillStyle = '#94a3b8'; c.beginPath(); c.arc(W / 2, cy - 25, 45, 0, 7); c.fill(); c.beginPath(); c.ellipse(W / 2, cy + 95, 85, 70, 0, Math.PI, 0); c.fill(); }
    c.restore();
    var y = cy + R + 70; txC(c, s.n || '', W / 2, y, 68, FK, '#065f46');
    y += 78; txC(c, [s.w ? 'ولد ' + s.w : '', s.roll ? 'رول ' + s.roll : '', s.cls || ''].filter(Boolean).join(' · '), W / 2, y, 34, F, '#475569');
    if(s.ust){ y += 54; txC(c, 'استاد: ' + s.ust, W / 2, y, 32, F, '#475569'); } else y += 20;
    var ch = ['🕌 حاضری ' + (S.m.pct != null ? S.m.pct + '%' : '—')]; if(S.paras != null) ch.push('📖 ' + S.paras + ' پارے یاد'); if(S.khT) ch.push('🏁 ' + S.khT);
    y += 80; var ws = ch.map(function(t){ return mw(c, t, 32, F) + 48; }), tot = ws.reduce(function(a, b){ return a + b; }, 0) + (ch.length - 1) * 16, x = W / 2 + tot / 2;
    ch.forEach(function(t, i){ rr(c, x - ws[i], y - 32, ws[i], 64, 32); c.fillStyle = '#fff'; c.fill(); c.lineWidth = 3; c.strokeStyle = '#bfe3c9'; c.stroke(); tx(c, t, x - 24, y + 2, 32, F, '#065f46'); x -= ws[i] + 16; });
    /* سبق / سبقی / منزل */
    y += 66; var bh = 110 + 3 * 72 + (tipL.length ? tipL.length * 52 + 30 : 0), bx = M + 30, bw = CW - 60;
    rr(c, bx, y, bw, bh, 32); c.fillStyle = '#fff'; c.fill(); c.lineWidth = 3; c.strokeStyle = '#bfe3c9'; c.stroke();
    tx(c, '📈 سبق · سبقی · منزل (پچھلے ' + ((D.rk && D.rk.d) || 10) + ' دن)', bx + bw - 30, y + 52, 34, F, '#065f46');
    var by = y + 120;
    ORD.forEach(function(k){ var r = S.by[k], isW = S.w && S.w.k === k, tr0 = bx + bw - 30 - 110, tl = bx + 160;
      tx(c, k, bx + bw - 30, by, 36, F, '#1e293b');
      rr(c, tl, by - 13, tr0 - tl, 26, 13); c.fillStyle = '#e7f3ea'; c.fill();
      if(r){ var L = (tr0 - tl) * Math.max(4, r.p) / 100, gg = c.createLinearGradient(tr0 - L, 0, tr0, 0);
        if(isW){ gg.addColorStop(0, '#fdba74'); gg.addColorStop(1, '#c2410c'); } else { gg.addColorStop(0, '#34d399'); gg.addColorStop(1, '#059669'); }
        rr(c, tr0 - L, by - 13, L, 26, 13); c.fillStyle = gg; c.fill();
        c.font = '800 34px Arial'; c.fillStyle = isW ? '#c2410c' : '#065f46'; c.textAlign = 'left'; c.direction = 'ltr'; c.fillText(r.p + '%' + (isW ? ' ↓' : S.b && S.b.k === k ? ' ↑' : ''), bx + 26, by + 2); }
      else tx(c, 'کم ریکارڈ', tl - 20, by, 28, F, '#94a3b8');
      by += 72; });
    if(tipL.length){ var ty = by - 10; rr(c, bx + 24, ty, bw - 48, tipL.length * 52 + 22, 20); c.fillStyle = S.weak ? '#fff7ed' : '#ecfdf5'; c.fill(); c.lineWidth = 2; c.strokeStyle = S.weak ? '#fed7aa' : '#a7f3d0'; c.stroke();
      tipL.forEach(function(l, i){ tx(c, l, bx + bw - 50, ty + 38 + i * 52, 34, F, S.weak ? '#9a3412' : '#065f46'); }); }
    y += bh + 40;
    lines.forEach(function(l){ rr(c, bx, y, bw, 52, 18); c.fillStyle = '#fff'; c.fill(); tx(c, l, bx + bw - 26, y + 28, 30, F, '#334155'); y += 62; });
    txC(c, D.mad || '', W / 2, H - M - 50, 28, F, '#64748b');
    return new Promise(function(res){ cv.toBlob(function(b){ res(b); }, 'image/png'); });
  }
  async function share(D, fname){
    var b = await png(D, 1), f = new File([b], (fname || 'report') + '.png', { type: 'image/png' });
    try{ if(navigator.canShare && navigator.canShare({ files: [f] })){ await navigator.share({ files: [f], title: (D.s && D.s.n) || '' }); return 'shared'; } }catch(e){ if(e && e.name === 'AbortError') return 'cancel'; }
    var a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = f.name; document.body.appendChild(a); a.click(); setTimeout(function(){ a.remove(); URL.revokeObjectURL(a.href); }, 4000); return 'saved';
  }
  window.MDPoster = { css: css, html: html, png: png, share: share, sum: sum };
})();
