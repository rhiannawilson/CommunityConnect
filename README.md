# CommunityConnect
An API for a social network app using Express.js, MongoDB, and Mongoose, allowing users to share thoughts, react to friends' thoughts, and manage a friend list, with a walkthrough video demonstrating functionality required for submission.

## Description
An API social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application utilises Express.js for routing, a MongoDB database, and the Mongoose ODM. Since no seed data is used, it's own data is populated using Insomnia after the API is created.


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
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
[Back to Table of Contents](#table-of-contents)

## Appearance & Functionality 
#### View of Main Page
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

This application utilises Express.js for routing, a MongoDB database, and the Mongoose ODM. 

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
