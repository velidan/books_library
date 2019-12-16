# books_library
### A React task to show components interaction, acrhitecture etc. (again) 

The task is to write a simple webpage in React that shows a list of books
Each book will have: 
1.	Author 
2.	Date 
3.	Title 
When you enter the page, an AJAX request should fetch a list of books from a json file. 
The page will show all the books resolved from the requests with a proper design – nice design – high score. 

The design should be based on bootstrap (http://getbootstrap.com/) or react material design (https://material-ui.com/)  include images and should look good.
1.	Each book can be editable, meaning that an edit button should be available to edit the book fields.
2.	Edit button should open a modal with save and cancel buttons (The modal should be based on Boostrap/material ui) 
3.	Proper validation should be included for strings – not empty, and date – should be validated with error message. 
4.	There should be an option to delete book with a prompt message. 
5.	Show each book title : in the following format : first letter of each word upper cased and each other letter should be lower cased, also remove any non-English letters from the title. For example : A title with the name “@@THIS is a BooK!!” should be changed to “This Is A Book” 
(similar as angular filter / pipe )
6.	Should have a button to add new book. 
None of this operations should be persistent (refreshing the page will clear the changes).
 Please make it readable as possible, valid html and JavaScript files. 
Bonus Task 
● Prevent from the user to add / edit a book with existing title, show error message that same book name is already exist


# Result
I implemened all functioncal requirements even with the bonus task. 
*I didn't create a real webserver with the app because I didn't have time for it and I think it isn't importan. I implemented the minimal flow with the demonstaration http service, api gateway and described about interceptors and error handling*

![Books library demo](https://media.giphy.com/media/cnEtX54EJzdLd1BVUu/giphy.gif)

# How to run
- clone repo
- go to the root folder and run `yarn && yarn start` or `npm install && npm start`
The server should run at http://localhost:3000/

This app based on create-react-app

# What should be added in the real-life
- error logging
- http client with interceptors for auth tokens, error handling etc.
- repository & storage pattern
- error registry
- an own form module or better 3rd lib integration
- unit & integration tests
- CI
- docker & cubernetes

## P.S.
Hovewer this app mentioned like "simple" it isn't true as it contains almost all core features of the any major app and to make everything enterprise-like it requires a lot of time.
