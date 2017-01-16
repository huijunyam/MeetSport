class Category < ActiveRecord::Base
  validates :name, presence: true

  has_many :event_types,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :EventType

  has_many :events,
    through: :event_types,
    source: :event
end
