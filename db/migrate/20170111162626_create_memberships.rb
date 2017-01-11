class CreateMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :memberships do |t|
      t.integer :member_id, null: false
      t.integer :city_id, null: false

      t.timestamps
    end

    add_index(:memberships, [:member_id, :city_id])
  end
end
