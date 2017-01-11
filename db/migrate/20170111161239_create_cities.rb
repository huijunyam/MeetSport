class CreateCities < ActiveRecord::Migration[5.0]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.string :background_image_url, null: false
      t.timestamps
    end

    add_index(:cities, [:name], unique: true)
  end
end
