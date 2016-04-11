#Shmora
Shmora is a web application for asking and viewing questions on a variety of topics.
The site is a clone of Quora and built using Ruby on Rails and React.js with Flux.

Live Link:
[Shmora](capstone-nickznaj.herokuapp.com)



##Login Screen:
![Log In](/docs/shmora_login.png?raw=true "Log In")

##Question Show Page:
![Question Show](/docs/shmora_question_view.png?raw=true "Question Show Page")

##Live Search:
![Search](/docs/shmora_search.png?raw=true "Search")


##Features

* Create a customized feed of questions based on topic
* Live Search looks through users, topics, and question titles (pg_search gem)
* Subscribe to specific topics and see their newest questions
* Answer questions belonging to any topic
* Click through topic-specific lists of questions
* Answer view allows user to see questions with few answers in their range of selected topics.
* Read view allows user to see questions that have been answered sufficiently
* Upvote and Downvote answers
* Navbar and side bars fixed into position
* Full CRUD capabilities
* React Quill for basic Rich Text input.


##To-Do:

- [ ] Optimize to reduce number of calls to database 
- [ ] Pagination / Infinite Scroll
- [ ] Notifications
- [ ] User Show page
- [ ] Modals for all forms
- [ ] Facebook/Google Login
- [ ] Image upload
