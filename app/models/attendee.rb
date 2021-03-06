class Attendee < ActiveRecord::Base
  validates :attendee_id, :event_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :attendee_id,
    class_name: :User

  belongs_to :event,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Event
end
