# CommunityConnect
An API for a social network app using Express.js, MongoDB, and Mongoose, allowing users to share thoughts, react to friends' thoughts, and manage a friend list, with a walkthrough video demonstrating functionality required for submission.

## Description
The challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application utilizes Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.

Since no seed data is provided, you will create your own data using Insomnia after the API is created.

This application won’t be deployed, so a walkthrough video demonstrating its functionality and meeting all the acceptance criteria is required. A link to the video should be added to the README of your project.

- Github Repo:
- Github Deployed page:

### Table of Contents:
- [Description](#description)
- [Directory Structure](#directory-structure)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Appearance & Functionality](#appearance--functionality) 
- [Contributions](#contributions)
- [Credits](#credits)
- [License](#license)
- [Author](#author)

## Directory Structure
```  
├── CMSify
    ├── assets/
        ├──ViewOfProject.png
    ├── config/ 
        ├── connection.js 
    ├── controllers/
            ├── api/
                ├── index.js 
                ├── projectRoutes.js  
                ├── userRoutes.js    
        ├── homeRoutes.js 
        ├── index.js 
    ├── db/ 
        ├── schema.sql 
    ├── models/ 
        ├── index.js 
        ├── project.js 
        ├── user.js 
    ├── node_modules/ 
    ├── public/ 
        ├── css/ 
            ├── jass.css 
            ├── styles.css    
        ├── js/ 
            ├── login.js 
            ├── logout.js  
            ├── profile.js           
    ├── seeds/ 
        ├── projectData.json 
        ├── seed.js 
        ├── userData.json                 
    ├── utils/
        ├── auth.js      
        ├── helpers.js        
    ├── views/
        ├── layouts/
            ├── main.handlebars
        ├── homepage.handlebars
        ├── login.handlebars
        ├── profile.handlebars
        ├── project.handlebars  
    ├── .env          
    ├── .gitignore    
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md 
    └── server.js  
```

### User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

### Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```
[Back to Table of Contents](#table-of-contents)

## Appearance & Functionality 
#### View of Project
>![View of projectExample](./assets/ViewOfProject.png)

#### Login & Signup Page
>![View of loginSignup Page](./assets/LoginSignupPage.png)

#### Profile Page
>![View of Profile Page](./assets/ProfilePage.png)

#### Blog Post Page 
>![View of Blog Post Page](./assets/BlogPostPage.png)

[Back to Table of Contents](#table-of-contents)

### Technical Details
- > Node 
- > Nodemon
- > express
- > express handlebars
- > express-session
- > pg
- > Sequelize
- > connect-session-sequelize
- > dotenv 
- > bcrypt

### .gitignore 
- > .DS_store 
- > node_modules
    
[Back to Table of Contents](#table-of-contents)
## Contributions
N/A

## Credits
N/A

[Back to Table of Contents](#table-of-contents)

## License
![alt text](https://img.shields.io/badge/License-_MIT-blue.svg)

## Author
@ Rhianna Wilson
> [rhiannawilson](https://github.com/rhiannawilson)

[Back to Table of Contents](#table-of-contents)
