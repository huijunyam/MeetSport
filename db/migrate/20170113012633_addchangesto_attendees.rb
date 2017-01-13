class AddchangestoAttendees < ActiveRecord::Migration[5.0]
  def change
    add_index :attendees, [:attendee_id, :event_id]
  end
end
