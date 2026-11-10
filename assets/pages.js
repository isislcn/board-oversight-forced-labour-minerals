/* Page renderers. Each page sets <body data-page="summary|explorer|board">. */
(function () {
  var E = UI.esc;

  function summary() {
    var tabsEl = document.getElementById('tabs');
    var out = document.getElementById('summary');
    function render(co) {
      var c = DATA.companies[co];
      UI.tabs(tabsEl, co, function (n) { history.replaceState(null, '', '#' + n); render(n); });
      var ctx = DATA.CTX[c.ctx];
      var chipClass = { 'Concluded': 'concluded', 'In progress': 'progress', 'Status unknown': 'unknown' };
      out.innerHTML =
        '<div style="display:flex;flex-direction:column;gap:6px"><p class="label">' + E(c.name) + ' · Executive summary · Cobalt · Draft for researcher review</p>' +
        '<h1 class="headline">' + E(c.headline) + '</h1></div>' +
        '<section class="kf" aria-label="Key figures">' +
          '<div><span class="t">Highest-severity risk context</span><span class="v">' + UI.icon(c.ctx, 16) + E(ctx.l) + '</span><span class="small">' + E(c.ctxNote) + '</span></div>' +
          '<div><span class="t">Strongest evidence level</span>' + UI.badge(c.ev, c.evLabel) + '<span class="small">' + E(c.evNote) + '</span></div>' +
          '<div><span class="t">Board oversight score</span><span class="v">' + E(c.board) + '</span><span class="small">' + E(c.boardNote) + '</span></div>' +
          '<div><span class="t">Related proposals 2022–26</span><span class="v">' + E(c.props) + '</span><span class="small">Big Three votes: not yet collected (Form N-PX)</span></div>' +
        '</section>' +
        '<section class="box" aria-label="Big Three holdings"><div class="hold"><span class="small" style="font-weight:600">Big Three holdings · Form 13F, 30 Jun 2026 · % of shares outstanding · US$ value</span>' +
          c.hold.map(function (h) { return '<span class="h"><strong>' + E(h[0]) + '</strong> ' + E(h[1]) + ' · ' + E(h[2]) + '</span>'; }).join('') +
          '<span class="tot">Combined ' + E(c.holdTotal) + '</span></div>' +
          '<span class="small">Manager-level 13F positions, mostly held in index funds; 13F does not separate index from active funds. Vanguard = Vanguard Capital Management + Vanguard Portfolio Management + Vanguard Fiduciary Trust. Percentages are approximate.</span></section>' +
        '<div class="grid2">' +
          '<section style="display:flex;flex-direction:column;gap:8px"><h2 class="label">Key findings</h2><ol>' + c.findings.map(function (f) { return '<li>' + E(f) + '</li>'; }).join('') + '</ol></section>' +
          '<section style="display:flex;flex-direction:column;gap:12px">' +
            '<div class="verdict"><div class="row"><h2 class="label">Remedy or exit? UNGP severity-and-leverage test</h2><span class="pill">' + E(c.verdict) + '</span></div><p>' + E(c.assessment) + '</p></div>' +
            '<div style="display:flex;flex-direction:column;gap:4px"><h2 class="label">What to watch</h2><p>' + E(c.watch) + '</p></div>' +
            '<p style="font-size:14px"><strong>Confidence: ' + E(c.conf) + '</strong> — ' + E(c.confNote) + '</p>' +
          '</section>' +
        '</div>' +
        '<section style="display:flex;flex-direction:column;gap:8px" aria-labelledby="lit-h"><h2 class="label" id="lit-h">Litigation and legal complaints (supply chain human rights)</h2>' +
          c.lit.map(function (l) {
            return '<div class="box"><span style="display:flex;flex-wrap:wrap;align-items:center;gap:8px"><span class="chip ' + chipClass[l.status] + '">' + E(l.status) + '</span><strong style="font-size:14px">' + E(l.title) + '</strong></span>' +
              '<span style="font-size:13px">' + E(l.detail) + '</span><span style="display:flex;flex-wrap:wrap;gap:4px 14px;font-size:12px">' + l.links.map(function (k) { return UI.link(k.t, k.u); }).join('') + '</span></div>';
          }).join('') +
          '<span class="small">Allegations in lawsuits and complaints are claims, not findings, unless a court has ruled on them.</span></section>' +
        '<section style="border-top:1px solid var(--line);padding-top:12px;display:flex;flex-direction:column;gap:6px" aria-labelledby="src-h"><h2 class="label" id="src-h">Sources</h2><ul style="font-size:13px;gap:3px">' +
          c.sources.map(function (s) { return '<li>' + UI.link(s[0], s[2]) + ' — ' + E(s[1]) + '</li>'; }).join('') +
          '<li>Big Three holdings: SEC Form 13F data for 30 Jun 2026, compiled by ' + UI.link('Quantisnow', 'https://www.quantisnow.com/institutional-ownership/AAPL') + '; shares outstanding derived from ' + UI.link('EvidInvest', 'https://evidinvest.com/holders/AAPL') + ' 13F summaries</li>' +
          '<li>Source: Sayari — entity records and risk factors queried 9 Nov 2026 (entity IDs in the supply chain explorer)</li></ul></section>';
    }
    render(UI.getCo() || 'apple');
  }

  function explorer() {
    var tabsEl = document.getElementById('tabs');
    var flowEl = document.getElementById('flow');
    var sideEl = document.getElementById('detail');
    var state = { co: UI.getCo() || 'tesla', sel: null };
    state.sel = DATA.chains[state.co].sel;
    function nodeHtml(s) {
      if (s.k === 'co') return '<div class="company">' + E(s.name) + '</div>';
      if (s.k === 'link') return '<div class="lnk" aria-hidden="true"><i class="' + s.style + '"></i><span class="marker">' + E(s.m) + '</span></div>';
      if (s.k === 'plain') return '<div class="node plain"><span class="n">' + E(s.name) + '</span><span class="c">' + E(s.sub) + '</span></div>';
      var e = DATA.entities[s.id], k = e.top ? DATA.CTX[e.top] : null, on = state.sel === s.id;
      return '<button type="button" class="node" data-id="' + s.id + '" aria-pressed="' + on + '" style="' + (k ? 'border:2px solid ' + k.c : '') + '">' +
        '<span class="n">' + (k ? UI.icon(e.top, 14) : '') + E(e.short) + '</span><span class="c">' + E(k ? k.l : 'No mapped indicator') + '</span>' +
        (e.ev ? UI.badge(e.ev, e.ev === 'E3' ? 'Network link' : 'Product–country') : '') + '<span class="s">' + E(s.sub) + '</span></button>';
    }
    function render() {
      UI.tabs(tabsEl, state.co, function (n) { state.co = n; state.sel = DATA.chains[n].sel; history.replaceState(null, '', '#' + n); render(); });
      var ch = DATA.chains[state.co];
      flowEl.innerHTML = '<p class="label">Upstream (mine / trader) → refiner → cell / component → company</p>' +
        ch.rows.map(function (r) { return '<div style="display:flex;flex-direction:column;gap:8px"><div class="flow-wrap"><div class="flow">' + r.steps.map(nodeHtml).join('') + '</div></div>' + (r.note ? '<span class="note">' + E(r.note) + '</span>' : '') + '</div>'; }).join('') +
        '<div class="row" style="border-top:1px solid var(--line);padding-top:12px;font-size:12px"><strong>' + E(ch.gap) + '</strong><span class="small">Source: Sayari · queried 2026-11-09</span></div>';
      var e = state.sel ? DATA.entities[state.sel] : null;
      if (!e) {
        sideEl.innerHTML = '<h2 class="sec">' + E(DATA.companies[state.co].name) + ' — no anchor to select</h2><p style="font-size:13px">No cobalt refiners disclosed in the documents reviewed.</p>';
        return;
      }
      var b = (DATA.basis[state.co] || {})[state.sel] || '—';
      sideEl.innerHTML = '<h2 class="sec">' + E(e.name) + '</h2>' +
        '<dl class="kv"><dt>Role</dt><dd>' + E(e.role) + '</dd><dt>Basis</dt><dd>' + E(b) + '</dd><dt>Country</dt><dd>' + E(e.country) + '</dd><dt>Match</dt><dd>' + E(e.match) + '</dd>' +
        '<dt>Sayari entity ID</dt><dd class="mono">' + E(e.id) + '</dd><dt>Query date</dt><dd>2026-11-09</dd></dl>' +
        '<div style="display:flex;flex-direction:column;gap:8px"><h3 class="label">Mapped risk indicators</h3>' +
          (e.ind.length ? e.ind.map(function (i) { var k = DATA.CTX[i.ctx];
            return '<div class="box" style="padding:8px 10px;gap:3px"><span style="display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-weight:600;font-size:13px">' + UI.icon(i.ctx, 12) + E(k.l) + ' ' + UI.badge(i.ev, i.ev === 'E3' ? 'Network link' : 'Product–country') + '</span><span style="font-size:12px">' + E(i.label) + '</span><code class="small">' + E(i.code) + '</code></div>'; }).join('')
            : '<span style="font-size:13px">No forced labour, child labour or conflict indicators mapped for this entity.</span>') +
          '<span class="small">' + E(e.other) + '</span></div>' +
        '<p style="font-size:12px;color:var(--ink2)">Source: Sayari · queried 2026-11-09. These are risk indicators, not findings of abuse. Network indicators describe the entity’s wider supplier network and are not specific to cobalt.</p>';
    }
    flowEl.addEventListener('click', function (ev) { var b = ev.target.closest('button[data-id]'); if (b) { state.sel = b.getAttribute('data-id'); render(); var nb = flowEl.querySelector('button[data-id="' + state.sel + '"]'); if (nb) nb.focus(); } });
    render();
  }

  function board() {
    var B = DATA.board;
    var gridEl = document.getElementById('grid'), evEl = document.getElementById('evidence');
    var sel = 'msft-P1';
    function renderGrid() {
      var sums = [0, 0, 0], counts = [0, 0, 0];
      var rows = B.indicators.map(function (r) {
        return '<tr><th scope="row" class="ind"><b>' + E(r[0]) + '</b>' + E(r[1]) + '</th>' + B.cols.map(function (c, i) {
          var key = c[0] + '-' + r[0], e = B.evidence[key];
          if (e) { sums[i] += e[0]; counts[i]++; }
          return '<td style="padding:0">' + (e ? '<button type="button" class="cell v' + e[0] + '" data-k="' + key + '" aria-pressed="' + (sel === key) + '" aria-label="' + E(r[0] + ', ' + c[1] + ': ' + e[0] + '. Show evidence') + '">' + e[0] + '</button>'
            : '<span class="cell vn" style="display:flex;align-items:center;justify-content:center">Not yet coded</span>') + '</td>';
        }).join('') + '</tr>';
      }).join('');
      var tot = '<tr><th scope="row" class="ind" style="font-weight:700">Coded so far</th>' + B.cols.map(function (c, i) { return '<td style="text-align:center;font-weight:700">' + (counts[i] ? sums[i] + ' of ' + counts[i] * 2 + ' (' + counts[i] + ' of 11 coded)' : 'Not yet coded') + '</td>'; }).join('') + '</tr>';
      gridEl.innerHTML = '<caption>Coded from excerpts of the latest DEF 14A proxy statements. Select a coded cell to see the evidence.</caption><thead><tr><th scope="col" style="text-align:left;color:var(--muted);font-weight:600;padding:6px 8px">Indicator</th>' +
        B.cols.map(function (c) { return '<th scope="col" style="width:140px;color:var(--muted);font-weight:600">' + E(c[1]) + '</th>'; }).join('') + '</tr></thead><tbody>' + rows + tot + '</tbody>';
      var e = B.evidence[sel], parts = sel.split('-'), names = { aapl: 'Apple', msft: 'Microsoft', tsla: 'Tesla' };
      evEl.innerHTML = '<h3 class="label">Evidence</h3><strong>' + E(names[parts[0]] + ' · ' + parts.slice(1).join('-') + ' · score ' + e[0]) + '</strong><p style="font-size:13px">' + E(e[1]) + '</p>' + '<span style="font-size:12px">' + UI.link(e[3], e[2]) + '</span>';
    }
    gridEl.addEventListener('click', function (ev) { var b = ev.target.closest('button[data-k]'); if (b) { sel = b.getAttribute('data-k'); renderGrid(); gridEl.querySelector('button[data-k="' + sel + '"]').focus(); } });
    renderGrid();

    document.getElementById('committees').innerHTML = B.committees.map(function (g) {
      return '<div style="display:flex;flex-direction:column;gap:10px"><h3 class="co">' + E(g.co) + '</h3>' + g.items.map(function (it) {
        return '<div class="box"><span class="row" style="gap:6px"><strong>' + E(it[0]) + '</strong><span class="chip ' + it[1] + '">' + E(it[2]) + '</span></span><span style="font-size:13px">' + E(it[3]) + '</span><span class="small">' + E(it[4]) + '</span></div>';
      }).join('') + '<span style="font-size:12px">' + UI.link(g.src[0], g.src[1]) + '</span></div>';
    }).join('');

    document.getElementById('holdings').innerHTML = '<thead><tr><th scope="col">Company</th><th scope="col">BlackRock</th><th scope="col">Vanguard</th><th scope="col">State Street</th><th scope="col">Combined</th></tr></thead><tbody>' +
      B.holdings.map(function (h) { return '<tr><th scope="row">' + E(h[0]) + '</th>' + [h[1], h[2], h[3]].map(function (c) { return '<td>' + E(c[0]) + '<br><span class="small">' + E(c[1]) + '</span></td>'; }).join('') + '<td><strong>' + E(h[4]) + '</strong></td></tr>'; }).join('') + '</tbody>';

    document.getElementById('proposals').innerHTML = B.proposals.map(function (g) {
      return '<div style="display:flex;flex-direction:column;gap:10px"><h3 class="co">' + E(g.co) + '</h3>' + g.items.map(function (p) {
        return '<article class="box"' + (p[2] === 'other' ? ' style="background:#FAFAF8"' : '') + '><span class="row" style="gap:6px"><span style="font-size:18px;font-weight:700;font-family:\'Source Serif 4\',Georgia,serif">' + E(p[0]) + '</span><span class="chip ' + p[2] + '">' + E(p[1]) + '</span></span>' +
          '<strong>' + E(p[3]) + '</strong><span class="small">' + E(p[4]) + '</span><span style="font-size:13px"><strong>' + E(p[5]) + '</strong></span><span style="font-size:12px">' + UI.link(p[6], p[7]) + '</span></article>';
      }).join('') + '</div>';
    }).join('');
  }

  var page = document.body.getAttribute('data-page');
  if (page === 'summary') summary();
  if (page === 'explorer') explorer();
  if (page === 'board') board();
})();
