(function () {
  'use strict';

  var root = document.getElementById('graduation-calendar');
  var dataScript = document.getElementById('calendar-data');
  if (!root || !dataScript) return;

  var data = JSON.parse(dataScript.textContent);

  var PRIORITY = { a4: 4, a3: 3, a2: 2, a1: 1 };
  var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function fmt(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseDate(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s == null ? '' : String(s);
    return d.innerHTML;
  }

  var phaseById = {};
  (data.phases || []).forEach(function (p) { phaseById[p.id] = p; });

  var holidays = (data.holidays || []).map(function (h) {
    return h.from
      ? { name: h.name, from: parseDate(h.from), to: parseDate(h.to), isBreak: !!h.break }
      : { name: h.name, date: parseDate(h.date), isBreak: !!h.break };
  });

  function listOf(v) { return Array.isArray(v) ? v : (v == null ? [] : [v]); }
  function contains(list, n) { return listOf(list).indexOf(n) !== -1; }

  function holidayForWeek(monday) {
    var sunday = addDays(monday, 6);
    for (var i = 0; i < holidays.length; i++) {
      var h = holidays[i];
      if (h.isBreak && h.from && !(h.to < monday || h.from > sunday)) return h.name;
    }
    return null;
  }

  function holidayForDate(date) {
    for (var i = 0; i < holidays.length; i++) {
      var h = holidays[i];
      if (h.from && date >= h.from && date <= h.to) return { name: h.name, isBreak: h.isBreak };
      if (h.date && fmt(h.date) === fmt(date)) return { name: h.name, isBreak: h.isBreak };
    }
    return null;
  }

  var weeks = [];
  var dayToWeek = {};

  function indexWeek(w) {
    weeks.push(w);
    for (var i = 0; i < 7; i++) {
      var d = addDays(w.monday, i);
      if (!dayToWeek[fmt(d)]) dayToWeek[fmt(d)] = w;
    }
  }

  function processQuarter(q) {
    var d = parseDate(q.start);
    var produced = 0;
    while (produced < q.weeks) {
      var hol = holidayForWeek(d);
      if (hol) {
        indexWeek({ monday: d, qnum: q.num, teaching: null, phases: [], holiday: hol });
      } else {
        produced++;
        var phases = [];
        if (contains(q.a1, produced)) phases.push('a1');
        if (contains(q.a2, produced)) phases.push('a2');
        if (contains(q.a3, produced)) phases.push('a3');
        if (contains(q.a4, produced)) phases.push('a4');
        indexWeek({ monday: d, qnum: q.num, teaching: produced, phases: phases, holiday: null });
      }
      d = addDays(d, 7);
    }
  }

  (data.quarters || []).forEach(processQuarter);

  if (data.summer) {
    var s = parseDate(data.summer.start);
    for (var k = 0; k < data.summer.weeks; k++) {
      var m = addDays(s, k * 7);
      indexWeek({ monday: m, qnum: null, teaching: null, phases: [], holiday: 'Summer period' });
    }
  }

  if (!weeks.length) return;

  var first = weeks[0].monday;
  var last = weeks[weeks.length - 1].monday;

  var deadlineByDate = {};
  (data.quarters || []).forEach(function (q) {
    (q.deadlines || []).forEach(function (dl) {
      (deadlineByDate[dl.date] = deadlineByDate[dl.date] || []).push(dl.label);
    });
  });

  var holidayDayByDate = {};
  holidays.forEach(function (h) {
    if (!h.isBreak) {
      if (h.date) holidayDayByDate[fmt(h.date)] = h.name;
      else for (var dd = new Date(h.from); dd <= h.to; dd = addDays(dd, 1)) holidayDayByDate[fmt(dd)] = h.name;
    }
  });

  function primaryPhase(week) {
    if (week.holiday) return 'no-education';
    var best = null, bp = -1;
    week.phases.forEach(function (p) {
      var pr = PRIORITY[p] || 0;
      if (pr > bp) { bp = pr; best = p; }
    });
    return best || 'education';
  }

  function phaseLabel(id) { return phaseById[id] ? phaseById[id].label : id; }

  function dnum(date) {
    var s = document.createElement('span');
    s.className = 'cal-dnum';
    s.textContent = date.getDate();
    return s;
  }

  function buildMonth(year, month) {
    var sec = document.createElement('section');
    sec.className = 'cal-month';

    var hdr = document.createElement('h3');
    hdr.className = 'cal-month-title';
    hdr.textContent = MONTH_NAMES[month] + ' ' + year;
    sec.appendChild(hdr);

    var grid = document.createElement('div');
    grid.className = 'cal-grid';

    var twHdr = document.createElement('div');
    twHdr.className = 'cal-wd cal-wd-tw';
    grid.appendChild(twHdr);
    WEEKDAYS.forEach(function (w) {
      var c = document.createElement('div');
      c.className = 'cal-wd';
      c.textContent = w;
      grid.appendChild(c);
    });

    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var daysInMonth = lastDay.getDate();
    var firstWday = (firstDay.getDay() + 6) % 7;
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var todayKey = fmt(today);

    var w0 = addDays(firstDay, -firstWday);
    if (addDays(w0, 4) < firstDay) w0 = addDays(w0, 7);
    var wEnd = addDays(lastDay, -((lastDay.getDay() + 6) % 7));

    for (var w = w0; w <= wEnd; w = addDays(w, 7)) {
      var wk = dayToWeek[fmt(w)];
      var twCell = document.createElement('div');
      twCell.className = 'cal-tw';
      if (wk && !wk.holiday && wk.teaching != null) {
        twCell.textContent = wk.qnum + '.' + wk.teaching;
      }
      grid.appendChild(twCell);

      for (var i = 0; i < 5; i++) {
        var date = addDays(w, i);
        if (date < firstDay || date > lastDay) {
          var empty = document.createElement('div');
          empty.className = 'cal-day cal-empty';
          grid.appendChild(empty);
          continue;
        }
        var key = fmt(date);
        var week = dayToWeek[key];
        var cell = document.createElement('div');
        cell.className = 'cal-day';
        cell.setAttribute('data-date', key);

        if (!week) {
          var hd = holidayForDate(date);
          if (hd) {
            cell.classList.add('phase-no-education');
            if (hd.isBreak) {
              cell.dataset.wholiday = hd.name;
              cell.dataset.tw = hd.name;
            } else {
              cell.dataset.dayholiday = hd.name;
            }
          } else {
            cell.classList.add('cal-empty');
          }
          cell.appendChild(dnum(date));
          grid.appendChild(cell);
          continue;
        }

        var holidayOverride = holidayDayByDate[key];
        var ph = holidayOverride ? 'no-education' : primaryPhase(week);
        cell.classList.add('phase-' + ph);
        if (key === todayKey) cell.classList.add('cal-today');

        var strips = holidayOverride ? [] : week.phases.filter(function (p) { return p !== ph; });
        if (strips.length) {
          var stripBox = document.createElement('div');
          stripBox.className = 'cal-strips';
          strips.forEach(function (p) {
            var s = document.createElement('span');
            s.className = 'strip strip-' + p;
            stripBox.appendChild(s);
          });
          cell.appendChild(stripBox);
        }

        cell.appendChild(dnum(date));

        var badges = [];
        if (deadlineByDate[key]) badges.push({ cls: 'badge-deadline', text: deadlineByDate[key].join(' \u2014 ') });
        if (badges.length) {
          var box = document.createElement('div');
          box.className = 'cal-badges';
          badges.forEach(function (b) {
            var s = document.createElement('span');
            s.className = 'cal-badge ' + b.cls;
            s.textContent = '!';
            s.setAttribute('data-tip', b.text);
            box.appendChild(s);
          });
          cell.appendChild(box);
        }

        if (week.holiday) {
          cell.dataset.wholiday = week.holiday;
          cell.dataset.tw = week.holiday;
        } else {
          cell.dataset.tw = week.qnum + '.' + week.teaching;
          if (!holidayOverride && week.phases.length) cell.dataset.phases = week.phases.map(phaseLabel).join(' \u00b7 ');
        }
        if (deadlineByDate[key]) cell.dataset.dl = deadlineByDate[key].join(' \u2014 ');
        if (holidayDayByDate[key]) cell.dataset.dayholiday = holidayDayByDate[key];

        grid.appendChild(cell);
      }
    }

    sec.appendChild(grid);
    return sec;
  }

  var startMonth = new Date(first.getFullYear(), first.getMonth(), 1);
  var endMonth = new Date(last.getFullYear(), last.getMonth(), 1);
  for (var y = startMonth.getFullYear(), m = startMonth.getMonth(); ; ) {
    root.appendChild(buildMonth(y, m));
    if (y === endMonth.getFullYear() && m === endMonth.getMonth()) break;
    m++;
    if (m > 11) { m = 0; y++; }
  }

  var legend = document.createElement('div');
  legend.className = 'cal-legend';
  (data.phases || []).forEach(function (p) {
    var chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'cal-chip phase-' + p.id;
    chip.setAttribute('data-phase', p.id);
    var sw = document.createElement('span');
    sw.className = 'swatch';
    chip.appendChild(sw);
    chip.appendChild(document.createTextNode(p.label));
    chip.addEventListener('click', function () {
      var off = chip.classList.toggle('off');
      root.classList.toggle('hide-' + p.id, off);
    });
    legend.appendChild(chip);
  });
  root.appendChild(legend);

  var tipEl = document.createElement('div');
  tipEl.className = 'cal-tooltip';
  root.appendChild(tipEl);

  function showTip(cell) {
    var parts = [];
    var head = esc(cell.dataset.tw || '');
    parts.push('<div class="tt-head">' + head + '</div>');
    if (cell.dataset.phases) parts.push('<div class="tt-phases">' + esc(cell.dataset.phases) + '</div>');
    if (cell.dataset.wholiday) parts.push('<div class="tt-holiday">' + esc(cell.dataset.wholiday) + '</div>');
    if (cell.dataset.dayholiday) parts.push('<div class="tt-holiday">' + esc(cell.dataset.dayholiday) + '</div>');
    if (cell.dataset.dl) parts.push('<div class="tt-dl">' + esc(cell.dataset.dl) + '</div>');
    tipEl.innerHTML = parts.join('');
    tipEl.classList.add('visible');
    var r = cell.getBoundingClientRect();
    var top = r.top - tipEl.offsetHeight - 8;
    if (top < 8) top = r.bottom + 8;
    tipEl.style.left = Math.max(8, Math.min(r.left, window.innerWidth - tipEl.offsetWidth - 8)) + 'px';
    tipEl.style.top = top + 'px';
  }

  function hideTip() {
    tipEl.classList.remove('visible');
  }

  root.addEventListener('mouseover', function (e) {
    var cell = e.target.closest ? e.target.closest('.cal-day') : null;
    if (cell && !cell.classList.contains('cal-empty') && cell.dataset.tw) showTip(cell);
  });
  root.addEventListener('click', function (e) {
    var cell = e.target.closest ? e.target.closest('.cal-day') : null;
    if (cell && !cell.classList.contains('cal-empty') && cell.dataset.tw) showTip(cell);
  });
  root.addEventListener('mouseleave', hideTip);
})();
