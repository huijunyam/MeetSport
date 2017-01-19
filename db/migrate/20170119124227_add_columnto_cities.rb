class AddColumntoCities < ActiveRecord::Migration[5.0]
  def change
    add_column :cities, :header_image, :string
  end
end
