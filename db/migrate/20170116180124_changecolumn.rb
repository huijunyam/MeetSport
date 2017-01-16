class Changecolumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :category
    add_column :events, :category, :integer, null: false
  end
end
