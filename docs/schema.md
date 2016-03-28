## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      |
author_id   | integer   | not null, foreign key (references users), indexed
answered    | boolean   | not null, default: false


## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
question_id | integer   | not null, foreign key (references questions), indexed, unique [topic_id]
topic_id    | integer   | not null, foreign key (references topics), indexed

## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
question_id | integer   | not null, foreign key (references questions)
score       | integer   | not null, default: 0

## user_votes
column name | data type | details
------------|-----------|-----------------------
user_id     | integer   | not null, indexed, foreign key (referenced users)
value       | integer   | not null, indexed
votable_id  | integer   | not null, indexed
question_id | integer   | not null, foreign key (references questions), indexed
