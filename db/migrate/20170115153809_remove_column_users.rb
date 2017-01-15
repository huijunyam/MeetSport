class RemoveColumnUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :profile_img
  end
end
