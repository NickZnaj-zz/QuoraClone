# Flux Stores

### Question Store

Holds all question data.

##### Actions:
- `receiveAllQuestions`
- `receiveSingleQuestion`
- `removeQuestion`

##### Listeners:
- `QuestionsIndex` (passes to `QuestionIndexItem` via props)
- `QuestionDetail`

<!-- ======================================================= -->

### QuestionFormStore

Holds un-persisted question data to send to the API.

##### Actions:
- `receiveQuestionFormParams`

##### Listeners:
- `QuestionForm`

<!-- ======================================================= -->

### Users Store

Holds all user data.

##### Actions:
- `UserDetail`


##### Listeners:
- ``

<!-- ======================================================= -->

### Answer Store

Holds all answer data.

##### Actions:
- `receiveAllAnswers`
- `receiveSingleAnswer`
- `removeAnswer`

##### Listeners:
- `AnswerDetail`

<!-- ===================================================== -->

### AnswerFormStore

Holds un-persisted answer data to send to the API.

##### Actions:
- `receiveAnswerFormParams`

##### Listeners:
- `AnswerForm`

<!-- ===================================================== -->

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

<!-- ===================================================== -->

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
