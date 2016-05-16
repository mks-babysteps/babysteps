# Baby Steps

Track your baby's developmental progress with Baby Steps!

# About

Baby Steps is a web application that allows users to track your child's development with customized milestones, vaccination updates, and appointment reminders.

# Getting Started
* Fork a copy of the repo. Clone it to your local machine. 
  
* Next, install the dependencies on your terminal:

```
$ npm install
```
* Go to the client folder, and:

```
$ bower install
```

* To start the server and view the app on localhost:8080:

```
$ node server/server.js 
```

* You should now be able to view the app. 

# Backlog
* chat functionality
* nutritional guidelines

# Technology & Links
* MongoDB <https://www.mongodb.org>
* ExpressJS <https://expressjs.com>
* AngularJS <https://angularjs.org>
* NodeJS <https://nodejs.org>
* Q <https://www.npmjs.com/package/q>
* D3 <https://github.com/d3/d3/wiki/API-Reference>
* Jasmine <http://jasmine.github.io/>
* Karma <https://karma-runner.github.io/0.13/index.html>
* PhantomJS <http://phantomjs.org/> 
* JWT <https://jwt.io/>
* bcrypt <https://github.com/ncb000gt/node.bcrypt.js/>

### Front End
Baby Steps utilizes AngularJS to render the front-end. We used ui-router for application routing and built-in Angular factories for state management. All API calls are made in the corresponding factory file associated for the type of data that it’s maintaining.

### Back End
Baby Steps has a custom RESTFul API built with Node.js and Express. And data management is handled by mongoose and MongoDB.

## Team Members ##
- Product Owner, Full Stack: Daniel Chen
- Scrum Master, Full Stack: Tiffany Wu
- Dev Team: Danny Thai, Eric Shin, Preksa Mam