# QuoraClone


## Minimum Viable Product

This is a clone of the popular Quora built using Ruby on Rails and React.js. This app will allow users to:

- [ ] Create an Account
- [ ] Log in / Log out
- [ ] Submit questions
- [ ] Subscribe to select topics
- [ ] Browse a feed of answered questions
- [ ] Narrow that feed by topic
- [ ] Answer questions
- [ ] Upvote/Downvote answers
- [ ] Search questions by title
- [ ] Build up profile listing qualifications

## Design Docs
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Question Feature and Backend Setup (2 Days)

**Objective:** Have a readable feed of Questions on main page.

- [ ] create new project
- [ ] setup React Router
- [ ] setup Webpack and Flux scaffold
- [ ] create `Question` model
- [ ] implement Question Component, implement Flux loop
  - [ ] `QuestionsIndex`
  - [ ] `QuestionsIndexItem`
- [ ] set up `APIUtil` to interact with the API
- [ ] users can submit questions in a nav bar
- [ ] create question show page
  - [ ] CRUD API for questions (`QuestionsController`)
- [ ] seed the database with sample questions
- [ ] questions added to DB

### Phase 2: Answer Feature (2 Days)
**Objective:** Anyone can now answer questions through a form and a question's show page will display all of its answers

- [ ] Create `Answers` table
- [ ] CRUD API for questions
- [ ] answers added to DB
  - [ ] (`QuestionsController`)
- [ ] implement Question and Answer Components, implement Flux loop
  - [ ] `AnswersIndex`
  - [ ] `AnswersIndexItem`
- [ ] CSS styling for answers
- [ ] Add Answer seeds

### Phase 3: Voting Feature and Answer Submission (1 Day)
- [ ] top answer will be displayed under each question in main feed
- [ ] question show page answers will be ordered by date of submission (earliest at the top)
- [ ] users can upload images to go with answers
- [ ] users can upvote or downvote answers
- [ ] answer's score will be displayed
- [ ] style everything


### Phase 4: Styling Existing Pages and Nav Bar (0.5 days)

**Objective:** All pages built thus far will be pleasant to look at. Nav bar will persist across pages and will also look good.

- [ ] Navbar will have link to main feed
- [ ] Navbar will have search field
- [ ] Search field will double as submit question link when blank
- [ ] Navbar will feature links to Read and Answer Views and Notifications and Profile pages
- [ ] Style Question show page
- [ ] Style Answer forms
- [ ] Style Navbar

### Phase 5: User Auth, User Profile, and Feed Customization (1.5 days)

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

### Phase 6: Further Feed Customization & Tidying Up (1.5 days)

**Objective:** Users will be able to and delete interests after initial sign up.

- [ ] users can add interests from profile page
- [ ] users can delete interests from profile page
- [ ] Style profile page
- [ ] Fix any lingering bugs and polish off appearance
  - [ ] Add highlighting to selected view
  - [ ] Add profile dropdown with link to profile for now.

### Phase 7: Question Follows and Notifications (1.5 days)
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
