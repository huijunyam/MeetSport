class CreateAttendees < ActiveRecord::Migration[5.0]
  def change
    create_table :attendees do |t|
      t.integer :attendee_id, null: false
      t.integer :event_id, null: false 
      t.timestamps
    end
  end
end
