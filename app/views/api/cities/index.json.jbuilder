@cities.each do |city|
  json.set! city.id do
    json.id city.id
    json.name city.name
    json.background_image_url city.background_image_url
    json.members city.members
    json.memberships city.memberships
    json.events city.events
  end
end
