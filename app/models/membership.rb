# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  member_id  :integer          not null
#  city_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ActiveRecord::Base
  validates :member_id, :city_id, presence: true;

  belongs_to :member,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: :User 

  belongs_to :city,
    primary_key: :id,
    foreign_key: :city_id,
    class_name: :City
end
