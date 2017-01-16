class EventType < ActiveRecord::Base
  validates :category_id, :event_id, presence: true

  belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category

  belongs_to :event,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Event
end
