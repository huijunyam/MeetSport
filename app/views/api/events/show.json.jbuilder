# json.extract! @event, :id, :city, :name, :location, :category,
#   :description, :start_time, :end_time, :date, :level, :attendees_num,
#   :host, :attendees, :attendings

json.partial! "api/events/event", event: @event
