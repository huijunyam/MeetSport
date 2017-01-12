

if @membership
    json.id @city.id
    json.name @city.name
    json.background_image_url @city.background_image_url
    json.members @city.members
    json.membershipId @membership.id
else
  json.extract! @city, :id, :name, :members, :background_image_url
end
