class RemoveIndexEvents < ActiveRecord::Migration[5.0]
  def change
    remove_index :events, [:city_id, :host_id]
  end
end
