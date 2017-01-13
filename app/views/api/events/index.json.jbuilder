@events.each do |event|
  json.set! event.id do
    json.id event.id
    json.city event.city
    json.name event.name
    json.location event.location
    json.category event.category
    json.description event.description
    json.start_time event.start_time
    json.end_time event.end_time
    json.date event.date
    json.level event.level
    json.attendees_num event.attendees_num
    json.host event.host
    json.attendings event.attendings
    json.attendees event.attendees
  end
end
