# Precomputes the graduation calendar structure for the print page
# (/dates/print/), mimicking the BK (faculty) academic calendar format.
#
# Reads _data/calendar.yml and exposes the computed structure to Liquid
# via site.data['calendar_print'].
require 'date'

module CalendarBk
  MONTH_ABBR = %w[Jan. Feb. Mar. Apr. May June July Aug. Sept. Oct. Nov. Dec.]
  WEEKDAY_LABELS = %w[Monday Tuesday Wednesday Thursday Friday]

  class Generator < Jekyll::Generator
    def generate(site)
      cal = site.data['calendar']
      return unless cal.is_a?(Hash)
      site.data['calendar_print'] = CalendarBk.build(cal)
    end
  end

  def self.build(cal)
    year_display = cal['year'].to_s.tr('-', '/')
    quarters = (cal['quarters'] || []).sort_by { |q| q['num'].to_i }
    holidays = (cal['holidays'] || []).map { |h| parse_holiday(h) }

    day_holidays = {}
    holidays.each do |h|
      next if h['break']
      (h['from']..h['to']).each { |d| day_holidays[d] = true }
    end

    deadline_map = {}
    quarters.each do |q|
      (q['deadlines'] || []).each do |d|
        deadline_map[d['date'].to_s] = deadline_colour(d['label'])
      end
    end

    sections = []
    if quarters.any?
      quarters.each_slice(2).each do |pair|
        first = pair.first['num'].to_i
        name = first <= 2 ? 'Autumn semester' : 'Spring semester'
        weeks = pair.flat_map { |q| quarter_weeks(q, holidays, day_holidays, deadline_map) }
        sections << decorate(name, 'Teaching week', weeks)
      end
    end
    if cal['summer']
      weeks = summer_weeks(cal['summer'], day_holidays, deadline_map)
      sections << decorate('Summer period', 'Summer period', weeks)
    end

    {
      'year' => year_display,
      'sections' => sections,
      'holidays' => holiday_panel(holidays),
      'day_legend' => day_legend,
      'week_legend' => week_legend
    }
  end

  def self.parse_holiday(h)
    if h['date']
      d = Date.parse(h['date'])
      { 'name' => h['name'], 'break' => !!h['break'], 'from' => d, 'to' => d }
    else
      { 'name' => h['name'], 'break' => !!h['break'], 'from' => Date.parse(h['from']), 'to' => Date.parse(h['to']) }
    end
  end

  def self.holiday_for_week(monday, holidays)
    sunday = monday + 6
    holidays.each do |h|
      next unless h['break'] && h['from']
      return h['name'] if h['to'] >= monday && h['from'] <= sunday
    end
    nil
  end

  def self.contains?(list, n)
    return false if list.nil?
    list = [list] unless list.is_a?(Array)
    list.map { |x| x.to_i }.include?(n)
  end

  def self.phase_key(phases)
    if phases.include?('a1') && phases.include?('a4')
      'a1a4'
    elsif phases.include?('a2') && phases.include?('a3')
      'a2a3'
    elsif phases.include?('a1')
      'a1'
    elsif phases.include?('a2')
      'a2'
    elsif phases.include?('a3')
      'a3'
    elsif phases.include?('a4')
      'a4'
    else
      'education'
    end
  end

  def self.quarter_weeks(q, holidays, day_holidays, deadline_map)
    start = Date.parse(q['start'])
    weeks = []
    produced = 0
    while produced < q['weeks'].to_i
      hol = holiday_for_week(start, holidays)
      if hol
        weeks << make_week(start, hol, 'no-education', day_holidays, deadline_map, true)
      else
        produced += 1
        phases = []
        phases << 'a1' if contains?(q['a1'], produced)
        phases << 'a2' if contains?(q['a2'], produced)
        phases << 'a3' if contains?(q['a3'], produced)
        phases << 'a4' if contains?(q['a4'], produced)
        weeks << make_week(start, "#{q['num']}.#{produced}", phase_key(phases), day_holidays, deadline_map)
      end
      start += 7
    end
    weeks
  end

  def self.summer_weeks(sum, day_holidays, deadline_map)
    start = Date.parse(sum['start'])
    weeks = []
    sum['weeks'].to_i.times do |i|
      weeks << make_week(start, "5.#{i + 1}", 'no-education', day_holidays, deadline_map)
      start += 7
    end
    weeks
  end

  def self.make_week(monday, teaching, phase, day_holidays, deadline_map, holiday = false)
    days = (0..4).map do |i|
      d = monday + i
      dl = deadline_map[d.strftime('%Y-%m-%d')]
      { 'num' => d.day, 'phase' => phase, 'deadline' => dl, 'holiday' => day_holidays[d], 'm' => d.year * 12 + d.month }
    end
    {
      'cal_week' => monday.cweek,
      'teaching' => teaching,
      'phase' => phase,
      'holiday' => holiday,
      'month' => MONTH_ABBR[monday.month - 1],
      'm' => monday.year * 12 + monday.month,
      'days' => days
    }
  end

  def self.decorate(name, teaching_label, weeks)
    cal_weeks = weeks.map { |w| w['cal_week'] }

    teaching_cells = []
    weeks.each do |w|
      text = w['teaching']
      phase = w['phase']
      if teaching_cells.any? && teaching_cells.last['text'] == text && teaching_cells.last['phase'] == phase
        teaching_cells.last['span'] += 1
      else
        teaching_cells << { 'text' => text, 'phase' => phase, 'span' => 1 }
      end
    end

    month_spans = []
    weeks.each do |w|
      if month_spans.any? && month_spans.last['name'] == w['month']
        month_spans.last['span'] += 1
      else
        month_spans << { 'name' => w['month'], 'span' => 1 }
      end
    end

    day_rows = (0..4).map do |i|
      {
        'label' => WEEKDAY_LABELS[i],
        'cells' => weeks.each_index.map do |c|
          cell = weeks[c]['days'][i]
          cell['mb_l'] = (c > 0 && weeks[c]['days'][i]['m'] != weeks[c - 1]['days'][i]['m'])
          cell['mb_t'] = (i > 0 && weeks[c]['days'][i]['m'] != weeks[c]['days'][i - 1]['m'])
          cell
        end
      }
    end

    month_spans.each_with_index do |span, idx|
      span['mb_l'] = idx > 0
    end

    {
      'name' => name,
      'teaching_label' => teaching_label,
      'cal_weeks' => cal_weeks,
      'teaching_cells' => teaching_cells,
      'month_spans' => month_spans,
      'day_rows' => day_rows
    }
  end

  def self.deadline_colour(label)
    l = label.to_s
    return 'deadline-a0' if l.include?('A0')
    return 'deadline-a34' if l.include?('A3 and A4')
    'deadline-a1'
  end

  def self.holiday_panel(holidays)
    holidays.map do |h|
      when_txt =
        if h['from'] == h['to']
          h['from'].strftime('%-d %B')
        else
          "#{h['from'].strftime('%-d %b')} \u2013 #{h['to'].strftime('%-d %b')}"
        end
      { 'name' => h['name'], 'when' => when_txt }
    end
  end

  def self.day_legend
    [
      { 'colour' => 'deadline-a0', 'label' => 'Deadline to submit thesis topic (A0)' },
      { 'colour' => 'deadline-a34', 'label' => 'Final registration date for A3 and A4 assessments' },
      { 'colour' => 'deadline-a1', 'label' => 'Final registration date for A1 Assessment' }
    ]
  end

  def self.week_legend
    [
      { 'colour' => 'education', 'label' => 'Education' },
      { 'colour' => 'no-education', 'label' => 'No education' },
      { 'colour' => 'a1', 'label' => 'A1 Kick-off assessments' },
      { 'colour' => 'a2', 'label' => 'A2 midterm assessments' },
      { 'colour' => 'a3', 'label' => 'A3 Green light assessment' },
      { 'colour' => 'a4', 'label' => 'A4 Finalisation' }
    ]
  end
end
