# QuoraClone


## Minimum Viable Product

This is a clone of the popular Quora built using Ruby on Rails and React.js. This app will allow users to:

- [ ] Create an Account
- [ ] Log in / Log out
- [ ] Submit questions
- [ ] Browse a feed of answered questions
- [ ] Narrow that feed by topic
- [ ] Answer questions
- [ ] Upvote/Downvote answers
- [ ] Search questions by content
- [ ] Build up profile listing qualifications

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline


### Phase 1: Backend setup and begin Read View (1 Day)

**Objective:** Have a readable feed of Questions with seeded data with Answers and User info

- [ ] create new project
- [ ] create `Question` model
- [ ] create `Answer` model
- [ ] create `User` model
- [ ] create `Topic` model
- [ ] set up associations and validations for all models
- [ ] seed the database with sample data

### Phase 2: Styling feed (0.5 Days)

**Objective:** style feed with CSS to include a user avatar and designated boxes for each feature.

- [ ] users have default avatar
- [ ] questions are clearly marked
- [ ] feed has one answer per question visible
- [ ] shorted response to first 200 characters
- [ ] have link to expand text in page and shrink back if desired
- [ ] answerer's information visible alongside answer


### Phase 3: API and basic APIUtil (2 days)

**Objective:** Questions can be submitted from main page, after which user is taken to a question show page.

- [ ] users can submit questions in a nav bar
- [ ] questions added to DB
- [ ] create question show page
  - [ ] CRUD API for questions (`QuestionsController`)
- [ ] user picks tags for question
- [ ] setup React Router
- [ ] setup Webpack and Flux scaffold
- [ ] implement Question and Answer Components, implement Flux loop
  - [ ] `QuestionsIndex`
  - [ ] `QuestionsIndexItem`
  - [ ] `AnswersIndex`
  - [ ] `AnswersIndexItem`
- [ ] set up `APIUtil` to interact with the API
- [ ] test everything

### Phase 4: Submitting and Rating Answers (1 day)

**Objective:** Users will be able to submit answers to questions from Question show page and from main feed

- [ ] CRUD API for answers
- [ ] answers added to DB
- [ ] answers can be upvoted or downvoted and will display their number of points
- [ ] top answer will be displayed under each question in main feed
- [ ] question show page answers will be ordered by date of submission (earliest at the top)
- [ ] users can upload images to go with answers

### Phase 5: Styling Existing Pages and Nav Bar (0.5 days)

**Objective:** All pages built thus far will be pleasant to look at. Nav bar will persist across pages and will also look good.

- [ ] Navbar will have link to main feed
- [ ] Navbar will have search field
- [ ] Search field will double as submit question link when blank
- [ ] Navbar will feature links to Read and Answer Views and Notifications and Profile pages
- [ ] Style Question show page
- [ ] Style Answer forms
- [ ] Style Navbar

### Phase 6: User Auth, User Profile, and Feed Customization (1.5 days)

**Objective:** Users can create accounts and select interests from a preset lists and browse, answer, and post questions.

- [ ] authentication
- [ ] user sign up / sign in pages
- [ ] require users to be signed in before they can post questions or answers
- [ ] set profile page where users submit/display their topics of interest and can post their qualifications
- [ ] user show page shows users answers and submitted questions and displays their "karma"
  - [ ] answers shown
  - [ ] questions shown
  - [ ] total karma shown
- [ ] users can upload avatars
- [ ] users can add bios
- [ ] when logged in, users only see questions with topics from their selected topics.

### Phase 7: Further Feed Customization & Tidying Up (1.5 days)

**Objective:** Users will be able to and delete interests after initial sign up.

- [ ] users can add interests from profile page
- [ ] users can delete interests from profile page
- [ ] Style profile page
- [ ] Fix any lingering bugs and polish off appearance
  - [ ] Add highlighting to selected view
  - [ ] Add profile dropdown with link to profile for now.

### Phase 8: Question Follows and Notifications (1.5 days)
- [ ] Users can mark questions to follow.
- [ ] When a question is answered by another user, a notification will appear in the navbar.
- [ ] Notification dropdown shows links to relevant questions
- [ ] When user clicks the link or visits the question show page independently, the notification will go away.

### Bonus Features (TBD)
- [ ] infinite scroll on Feed
- [ ] User Stats / Profile Views
- [ ] Formatting Question and Answer Texts with `react-quill`
- [ ] cool logo
- [ ] sharing to Twitter, Facebook etc
- [ ] Multiple Sessions


























<!--  -->
