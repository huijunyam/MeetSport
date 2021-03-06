# == Schema Information
#
# Table name: events
#
#  id            :integer          not null, primary key
#  city_id       :integer          not null
#  name          :string           not null
#  location      :string           not null
#  category      :string           not null
#  description   :text             not null
#  start_time    :string           not null
#  end_time      :string           not null
#  date          :string           not null
#  level         :string           not null
#  attendees_num :integer          not null
#  host_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Event < ActiveRecord::Base
  validates :city_id, :name, :location, :description,
            :start_time, :end_time, :date, :level, :attendees_num,
            :host_id, presence: true

  validates :attendees_num, :numericality => { :greater_than_or_equal_to => 2 }

  CATEGORY = ["air sports", "archery", "basketball",
              "bat and ball", "board sports", "climbing", "cycling",
              "combat sports", "cue sports", "equine sports", "fishing",
              "football", "flying disc sports", "golf", "gymnastics",
              "handball", "ice sports", "kite sports", "mixed discipline",
              "racquet sports", "running", "sailing", "snow sports",
              "shooting sports", "water sports", "hiking"]

  belongs_to :city,
    primary_key: :id,
    foreign_key: :city_id,
    class_name: :City

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  has_many :attendees,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Attendee

  has_many :attendings,
    through: :attendees,
    source: :user

  has_one :event_type,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :EventType

  has_one :category,
    through: :event_type,
    source: :category
end
