<h1 align="center">growlr</h1>

<div align="center">
  <strong>your perfect dog. their perfect home.</strong>
</div>
<div align="center">
  A <code>full-stack</code> application
</div>

<br />

## Table of Contents
- [About](#about)
- [How to Use](#how-to-use)
- [Example](#example)
- [Installation](#installation)
- [Built With](#built-with)
- [Author](#author)
- [License](#license)
- [Application Structure](#application-structure)
- [Deployment](#deployment)
- [Target Audience](#target-audience)
- [Live Demo](#live-demo)


## About
Much like eHarmoney, Growlr uses a series of questions to try and match the perfect ownder to the perfect dog breed. 

## How to Use
The application is hosted on Heroku: [Growlr](https://warm-sierra-75928.herokuapp.com)

If the user is a person, he or she clicks the button "Human Looking For Dog". A form opens up, where they provide their basic information (name, address, email, age, etc) along with a photograph of themselves, and following this is a survey where they provide answers to questions and statements using drop-down choices. Upon completing the survey, the user clicks "Submit" and is shown the dog with whom he or she has the most compatibility based on the answers which were given.

If the user is a person or company (animal shelter, PetSmart, etc.) acting on behalf of a dog - known as a "Sponsor" - he or she clicks the button "Dog Looking For Human". In the following form page, the sponsor provides the dog's basic information (name, breed, age, etc) as well as their own information (peronal or company name, address, phone number, etc.) and a photo of the dog. Following this is a survey where they provide answers to questions and statements about the dog using drop-down choices. Upon completing the survey, the user clicks "Submit" and is shown the person with whom the dog has the most compatibility based on the answers which were given.

App also contains a link to the JSON data, which contains an array of people ("friends") and their scores, which are compared against data from the user to determine compatibility.

## Built With
Friend Finder is a full stack node app deployed on [Heroku](https://warm-sierra-75928.herokuapp.com). Data is saved in a file, not in a database. The application uses the express npm package to configure and operate the server, body-parser to pass the json data back and forth between files & functions, and fs to read & write from the data files on the server. Various routes are setup to complete the survey, view the JSON API, and post data into the app. A general catch-all route will bring all users to the homepage, regardless of the path the user attempts to access.

## Example

#### Homepage

  ![image](/Growlr/public/img/Growlr-1.PNG)

#### Person Information Page

  ![image](/Growlr/public/img/Growlr-2.PNG)

#### Person Survey

  ![image](/Growlr/public/img/Growlr-3.PNG)

#### Dog Information Page

 ![image](/Growlr/public/img/Growlr-4.PNG)

```
Casual users looking to see which dod breed best matches 
their lifestyle  will enjoy the app. 
The app will also raise awareness of the amount of dogs
who need homes.
```

## Application Structure
Code for running the modules is located in the root of the application

```
Growlr_Jonathan/server.js
```

The code to display the survey page with fields name, link to photo, and 6 dropdown questions for the user to choose to find the best match, and a submit button.  Another link to list all dogs' details in json format, and another to git repository. And a modal to display the result (best match). Handlebars is used to standardize css, and js bootstrap to format the page and components.

`growlr` is a full stack node app deployed on Heroku. Data is saved on a file, not in a database. It uses [Express](https://www.npmjs.com/package/express) to configure and operate the server, [Body-Parser](https://www.npmjs.com/package/body-parser) to pass the json data back and forth between files & functions, and [fs](https://nodejs.org/api/fs.html) to read & write from the data files on the server. The templating engine is [Handlebars](https://www.npmjs.com/package/handlebars) Various routes are setup to complete the survey, view the JSON API, and post data into the app. A general catch-all route will bring all users to the homepage, regardless of the path the user attempts to access.
[Sequelize](https://www.npmjs.com/package/sequelize) and
[Mysql](https://www.npmjs.com/package/mysql) are also critical to the project.

Growlr implements dog matching based on the user's and dog owner's responses to a six question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all six questions combined.

Growlr application is meant to simulate a simple dating app. The application is implemented using a Node.js and Express server on the back end and the bootstrap and handlebars CSS framework on the front end.

## [Usage Overview](#usage-overview)

### **Installation**

```swift
git clone git@github.com:JonathanBrownCFA/Growlr.git
cd growlr
npm init
npm install
}
```
### **Demo**

Heroku is deployed to Heroku. Please check it out here.

## License

FriendFinder is provided under the [MIT License](https://github.com/vhesener/Closures/blob/master/LICENSE).

```text
The MIT License (MIT)
Copyright (c) 2017 Vincent Hesener
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Author

* **Wesley Hutchins** - [Github](https://github.com/WesPres1990)
* **Jonathan Brown** - [GitHub](https://github.com/JonathanBrownCFA)
* **Cynthia Sidlaukas** - [GitHub](https://github.com/cynthiasidlauskas)
* **Nathan Young** - [GitHub](https://github.com/21ghosts)

## Growlr

In this application the User can answer few questions and find a compatible friend who has similar thought processes. This project is a full stack Node.js application, also deployed to Heroku. 

## Live Demo
(https://warm-sierra-75928.herokuapp.com)

The package has the following files - server.js, package.json, app/data/friends.js, app/public/home.html, app/public/survey.html, app/routing/apiRoutes.js, app/routing/htmlRoutes.js, .gitignore (to ignore node_modules folder from uploading to git repo). 

## Future Development

* Creating a proper table.
* Allow user to add multiple items to a single transaction.
* Creating similar and connected apps for managers and supervisors.

## Technologies Used

HTML5, CSS4, Boostrap, Javascript, Node.js, MySQL, NPM, Handlebars, MVC, API Routes, Visual Studio Code