# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170119124227) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendees", force: :cascade do |t|
    t.integer  "attendee_id", null: false
    t.integer  "event_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["attendee_id", "event_id"], name: "index_attendees_on_attendee_id_and_event_id", using: :btree
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "image"
    t.index ["name"], name: "index_categories_on_name", using: :btree
  end

  create_table "cities", force: :cascade do |t|
    t.string   "name",                 null: false
    t.string   "background_image_url", null: false
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "header_image"
    t.index ["name"], name: "index_cities_on_name", unique: true, using: :btree
  end

  create_table "event_types", force: :cascade do |t|
    t.integer  "category_id", null: false
    t.integer  "event_id",    null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["category_id", "event_id"], name: "index_event_types_on_category_id_and_event_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.integer  "city_id",       null: false
    t.string   "name",          null: false
    t.string   "location",      null: false
    t.text     "description",   null: false
    t.string   "start_time",    null: false
    t.string   "end_time",      null: false
    t.string   "date",          null: false
    t.string   "level",         null: false
    t.integer  "attendees_num", null: false
    t.integer  "host_id",       null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "member_id",  null: false
    t.integer  "city_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id", "city_id"], name: "index_memberships_on_member_id_and_city_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                        null: false
    t.string   "email",                                                                                                           null: false
    t.string   "password_digest",                                                                                                 null: false
    t.string   "session_token",                                                                                                   null: false
    t.string   "name",                                                                                                            null: false
    t.datetime "created_at",                                                                                                      null: false
    t.datetime "updated_at",                                                                                                      null: false
    t.string   "profile_img",     default: "http://res.cloudinary.com/dirtnmtpc/image/upload/q_81/v1484495154/avatar_tm5uk4.png"
    t.text     "about_me"
    t.index ["username", "email", "session_token"], name: "index_users_on_username_and_email_and_session_token", unique: true, using: :btree
  end

end
