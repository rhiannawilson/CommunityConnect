# CommunityConnect
An API for a social network app allowing users to share thoughts, react to friends' thoughts, and manage a friend list,

## Description
An API social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application utilises Express.js for routing, a MongoDB database, and the Mongoose ODM. Since no seed data is used, it's own data is populated using Insomnia after the API is created.  Watch the walkthrough video demonstrating functionality required for submission.

## Video Demo
[Video Demo](https://drive.google.com/file/d/1A9cQtK0piOUTVj1XFWJ6KiKIbLhmvRO1/view?usp=sharing)
- Github Repo: https://github.com/rhiannawilson/CommunityConnect


### Table of Contents:
- [Description](#description)
- [Directory Structure](#directory-structure)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Contributions](#contributions)
- [Credits](#credits)
- [License](#license)
- [Author](#author)

## Directory Structure
```  
├── CMSify
    ├── config/ 
        ├── connection.js 
    ├── controllers/
        ├── thoughtCtrlr.js 
        ├── userCtrlr.js     
    ├── models/ 
        ├── index.js 
        ├── reaction.js 
        ├── thought.js 
        ├── user.js
    ├── node_modules/          
        ├── api/ 
            ├── index.js 
            ├── thoughtRoute.js 
            ├── userRoute.js
        ├── index.js                
    ├── utils/
        ├── communityData.js      
        ├── seed.js                 
    ├── .gitignore    
    ├── index.js  
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md  
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
