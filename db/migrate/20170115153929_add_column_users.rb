class AddColumnUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :profile_img, :string, :default => "http://res.cloudinary.com/dirtnmtpc/image/upload/v1484251027/Logomakr_1Oyf7s_oelcql.png"
  end
end
