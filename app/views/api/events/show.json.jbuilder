if @attendee
  json.id @event.id
  json.city @event.city
  json.name @event.name
  json.location @event.location
  json.category @event.category
  json.description @event.description
  json.start_time @event.start_time
  json.end_time @event.end_time
  json.date @event.date
  json.level @event.level
  json.attendees_num @event.attendees_num
  json.host @event.host
  json.attending @event.attending
  json.attendeeId @attendee.id
else
  json.extract! @event, :city_id, :name, :location, :category, :description,
  :start_time, :end_time, :date, :level, :attendees_num, :host_id
end 
