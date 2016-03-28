# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Questions

- `GET /api/questions`
  - Questions index/search
- `POST /api/questions`
- `GET /api/questions/:id`
  - question show page with all answers

### Answers

- `POST /api/questions/:id/answers`
- `DELETE /api/questions/:id/answers/:id`


### Topics

- A question's topics will be included in the question show template
- `GET /api/topics/topic_name`
  - includes query param for typeahead suggestions
  - index of all questions with the desired topic
