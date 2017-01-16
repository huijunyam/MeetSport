class CreateEventTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :event_types do |t|
      t.integer :category_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end

    add_index(:event_types, [:category_id, :event_id])
  end
end
