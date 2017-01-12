class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :city_id, null: false
      t.string :name, null: false
      t.string :location, null: false
      t.string :category, null: false
      t.text :description, null: false
      t.string :start_time, null: false
      t.string :end_time, null: false
      t.string :date, null: false
      t.string :level, null: false
      t.integer :attendees_num, null: false
      t.integer :host_id, null: false
      t.timestamps
    end
    add_index(:events, [:city_id, :host_id], unique: true)
  end
end
