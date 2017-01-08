# Schema Information 

## users
| column name    | data type | details                   |
| -------------- | --------- | ------------------------- |
| id             | integer   | not null, primary key     |
| username       | string    | not null, indexed, unique |
| email          | string    | not null, indexed, unique |
| password_digest| string    | not null                  |
| session_token  | string    | not null, indexed, unique |
| name           | string    | not null                  |
| profile_img    | string    | default null              |

## cities 
| column name | data type | details                    |
| ----------- | --------- | -------------------------- |
| id          | integer   | not null, primary key      |
| name        | string    | not null, indexed, unique  |

## memberships 
| column name | data type | details                        |
| ----------- | --------- | ------------------------------ |
| id          | integer   | not null, primary key          |
| member_id   | integer   | not null, indexed, foreign key |
| city_id     | integer   | not null, indexed, foreign key |

## events 
| column name    | data type | details                        |
| -------------- | --------- | ---------------------------    |
| id             | integer   | not null, primary key          |
| city_id        | integer   | not null, indexed, foreign key |
| name           | string    | not null                       |
| location       | string    | not null                       |
| category       | string    | not null                       |
| description    | text      | not null                       |
| start_time     | string    | not null                       |
| end_time       | string    | not null                       |
| date           | string    | not null                       |
| level          | string    |                                |
| attendees_num  | integer   | not null                       |
| category_id    | integer   | not null, indexed, foreign key |
| host_id        | integer   | not null, indexed, foreign key |

## attendees 
| column name   | data type | details                         |
| ------------- | --------- | ------------------------------- |
| id            | integer   | not null, primary key           |
| attendee_id   | integer   | not null, indexed, foreign key  |
| event_id      | integer   | not null, indexed, foreign key  |

## categories 
| column name | data type | details                           |
| ----------- | --------- | --------------------------------- |
| id          | integer   | not null, primary key             |
| event_id    | integer   | not null, indexed, foreign key    |
| name        | string    | not null, indexed                 |
