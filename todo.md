finished: made script to write school csv to a json file
take this file and make a input for school in registration form that uses data for options

finished: made script to read parsed json data and return it and included error handling for this mini script
TODO: use this script to retrieve school names and pass as options for the user to select on registration form

finished: Successfully able to grab data from form components and pass data on register button when clicking submit.
TODO: use this data from data and pass it to the mongodb
TODO: make a schema for user
TODO: include a unique user qr to make with creation of user
TODO: limit user input through conditional rendering and disabling register button unless certain conditions are met.

TODO: add a input for users to input their resume and make it required for registration 


## Todo

### User Side
- [ ] Landing Page
- [ ] Auth w/ Auth0
- [ ] Make components conditional based on logged in or not
- [x] Register Page
- [ ] Add Register Page Errors, Remove Alert Error on success / failure.
- [x] Connect database to Register page for user creation on signup
- [x] User schema for database
- [x] User QR code on signup
- [ ] Add middleware to routes, redirect any and all traffic to landing page if not signed in
- [ ] User Profile Page

### Admin Side
- [ ] Admin Login Page
- [ ] Admin auth check based on user from db
- [ ] Check in page using user's qr codes
- [ ] Notification send out to users

___