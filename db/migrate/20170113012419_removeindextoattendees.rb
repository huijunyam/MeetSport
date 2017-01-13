class Removeindextoattendees < ActiveRecord::Migration[5.0]
  def change
    remove_index :attendees, [:attendee_id, :event_id]
  end
end
