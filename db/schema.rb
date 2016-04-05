# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160405211129) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.text     "body",        null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "question_id", null: false
  end

  add_index "answers", ["user_id"], name: "index_answers_on_user_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "details"
    t.integer  "user_id"
  end

  create_table "questions_topics", id: false, force: :cascade do |t|
    t.integer "topic_id"
    t.integer "question_id"
  end

  add_index "questions_topics", ["question_id"], name: "index_questions_topics_on_question_id", using: :btree
  add_index "questions_topics", ["topic_id"], name: "index_questions_topics_on_topic_id", using: :btree

  create_table "topics", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "topics_users", id: false, force: :cascade do |t|
    t.integer "topic_id"
    t.integer "user_id"
  end

  add_index "topics_users", ["topic_id"], name: "index_topics_users_on_topic_id", using: :btree
  add_index "topics_users", ["user_id"], name: "index_topics_users_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "username",        null: false
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username", "email", "session_token"], name: "index_users_on_username_and_email_and_session_token", unique: true, using: :btree

end
