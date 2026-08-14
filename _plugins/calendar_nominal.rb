# Derives the nominal (on-time) graduation calendar from _data/calendar.yml.
#
# The nominal calendar shows only the milestones and deadlines that apply to
# students who do their thesis in a single academic year and graduate on time:
# Kick-off in Q2, Midterm in Q3, Green light in Q4, and Finalisation in Q4
# weeks 9-10 and Q5 week 1.
#
# Exposes two computed structures to Liquid:
#   site.data['calendar_nominal']        - filtered copy for the interactive
#                                          calendar (same shape as 'calendar')
#   site.data['calendar_print_nominal']  - BK-style print structure for the
#                                          nominal print page, built with the
#                                          same logic as the complete calendar
module CalendarNominal
  PHASES = %w[a1 a2 a3 a4]
  SUMMER_QUARTER = 5

  class Generator < Jekyll::Generator
    def generate(site)
      cal = site.data['calendar']
      return unless cal.is_a?(Hash)

      nominal = CalendarNominal.filter(cal)
      site.data['calendar_nominal'] = nominal
      site.data['calendar_print_nominal'] = CalendarBk.build(nominal) if defined?(CalendarBk)
    end
  end

  def self.filter(cal)
    nominal = cal['nominal'] || {}

    result = deep_dup(cal)
    (result['quarters'] || []).each do |q|
      qnum = q['num'].to_i
      PHASES.each do |phase|
        q[phase] = nominal_quarters?(nominal[phase], qnum) ? q[phase] : nil
      end
      nominal_deadlines = (q['deadlines'] || []).select { |d| d['nominal'] }
      nominal_deadlines.each { |d| d.delete('nominal') }
      q['deadlines'] = nominal_deadlines
    end
    if result['summer'].is_a?(Hash)
      PHASES.each do |phase|
        result['summer'][phase] = nominal_quarters?(nominal[phase], SUMMER_QUARTER) ? result['summer'][phase] : nil
      end
    end
    result
  end

  def self.nominal_quarters?(value, qnum)
    return false if value.nil?
    value = [value] unless value.is_a?(Array)
    value.map { |v| v.to_i }.include?(qnum)
  end

  def self.deep_dup(obj)
    case obj
    when Hash
      obj.each_with_object({}) { |(k, v), h| h[k] = deep_dup(v) }
    when Array
      obj.map { |v| deep_dup(v) }
    else
      obj
    end
  end
end
