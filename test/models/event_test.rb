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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
