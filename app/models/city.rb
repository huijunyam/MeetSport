# == Schema Information
#
# Table name: cities
#
#  id                   :integer          not null, primary key
#  name                 :string           not null
#  background_image_url :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class City < ActiveRecord::Base
  validates :name, :background_image_url, presence: true

  has_many :memberships,
    primary_key: :id,
    foreign_key: :city_id,
    class_name: :Membership

  has_many :members,
  through: :memberships,
  source: :member
end
