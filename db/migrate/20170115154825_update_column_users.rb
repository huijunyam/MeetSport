class UpdateColumnUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :profile_img, :string, :default => "http://res.cloudinary.com/dirtnmtpc/image/upload/q_81/v1484495154/avatar_tm5uk4.png"

  end
end
