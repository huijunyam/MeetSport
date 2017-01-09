# API Endpoints

## HTML API
### Root 
- `GET /` - loads React web app 

## JSON API
### Users
- `POST /api/users`
- `PATCH /api/users`

### Session 
- `POST /api/session`
- `DELETE /api/session` 

### Cities 
- `GET /api/cities` 
	* Index cities
- `GET /api/cities/:city_id` 
- `DELETE /api/cities/:city_id`

### Memberships 
- `POST /api/cities/:cityId/memberships`
- `DELETE /api/cities/:cityId/memberships/:id`

### Events 
- `POST /api/cities/:city_id/events`
- `GET /api/cities/:city_id/events/:id` 
- `GET /api/cities/:city_id/events` 
	* Index all of the events in the city
- `DELETE /api/cities/:city_id/events/:id`

### Attendees
- `GET /api/cities/:city_id/events/:id/attendees`
- `POST /api/cities/:city_id/events/:id/attendees`
-  `DELETE /api/cities/:city_id/events/:eventId/attendees/:id`
	
### Categories 
- `GET /api/categories`

