# NC Games Frontend

This is a React app that interacts with the API I made as my [backend portfolio project](github.com/jpchadwick92/nc-backend-project). It is a Board Game review site made as part of the Northcoders bootcamp and aims to demonstrate some of the front-end development skills I learned while on the course.

The hosted version of this app can be found here: https://joes-nc-games-project.netlify.app/

## Functionality

Upon loading, the site shows all of the reviews from the backend database. The nav bar shows the available topics and allows the user to navigate to a list of the reviews relating to each topic. On each page, the reviews can then be sorted via the dropdown menus by date, comment count or number of votes. The user also has the option of sorting in ascending or descending order.

Clicking the title of a review takes the user to the single review page, which has a list of the comments on the review and allows the user to add a new comment or vote on the review. The logged in user can also delete their own comments.

## Running locally

Make sure you are running node version 18.9.0 or above.

To run a local copy of the project, navigate to your usual project directory and use the command

```
git clone https://github.com/jpchadwick92/nc-games
```

Then

```
cd nc-games
```

To view the app locally use the command

```
npm start
```

The app will now be available at http://localhost:3000/.
