---
layout: page
title: Graduation calendars
color: light
logo: fa-calendar-days
permalink: /dates/
---

<i class="fa-solid fa-triangle-exclamation"></i> This calendar is a draft. The final calendar will be available with the Geomatics graduation guide, so use it for rough planning only.

<div class="cal-tabs" role="tablist">
  <button type="button" class="cal-tab is-active" data-target="cal-nominal">Nominal</button>
  <button type="button" class="cal-tab" data-target="cal-complete">Complete</button>
</div>

<div class="cal-tab-pane is-active" id="cal-nominal">
  <p>For students who start their thesis in Quarter 2 and graduate on time: Kick-off in Q2, Midterm in Q3, Green light and Finalisation in Q4.</p>
  {% include calendar.html data="calendar_nominal" uid="nominal" %}
</div>

<div class="cal-tab-pane" id="cal-complete">
  <p>All assessment periods and registration deadlines across all quarters.</p>
  {% include calendar.html data="calendar" uid="complete" %}
</div>

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/calendar.css">
<script src="{{ site.baseurl }}/assets/js/calendar.js"></script>

A [print version of the nominal calendar](print-nominal/) and a [print version of the complete calendar](print/) are also available, e.g. to embed in the graduation guide.

Archive:
- [2025-2026](2025-2026.pdf)
- [2024-2025](2024-2025.pdf) 
- [2023-2024](2023-2024.pdf) 
- [2022-2023](2022-2023.pdf) 
- [2021-2022](2021-2022.pdf) 
- [2020-2021](2020-2021.pdf) 
- [2019-2020](2019-2020.pdf) 
- [2018-2019](2018-2019.pdf) 
- [2017-2018](2017-2018.pdf) 
