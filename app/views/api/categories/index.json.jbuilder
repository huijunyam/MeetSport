@categories.each do |category|
  json.set! category.id do
    json.id category.id
    json.events category.events
  end
end
