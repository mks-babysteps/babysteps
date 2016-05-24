# Baby Steps

Track your baby's developmental progress with Baby Steps!
Go to: babysteps.tech!

# About

Baby Steps is a healthcare support web application that allows users to track your child's development with interactive, customized milestones, vaccination updates, chat functionality, and appointment reminders.

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
$ nodemon server/server.js 
```

* You should now be able to view the app.

# Backlog
* Notifications 
* Nutritional guidelines
* More interactive features...

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
Baby Steps utilizes AngularJS to render the front end. We used ui-router for application routing and built-in Angular factories for state management. All API calls are made in the corresponding factory file associated for the type of data that it’s maintaining.

### Back End
Baby Steps has a custom RESTFul API built with Node.js and Express. And data management is handled by mongoose and MongoDB.

## Team Members ##
- Product Owner, Full Stack: [Daniel Chen](https://github.com/chend2) 
- Scrum Master, Full Stack: [Tiffany Wu](https://github.com/tiffanymwu)
- Dev Team: [Danny Thai](https://github.com/dthai92), [Eric Shin](https://github.com/eshinx1), [Preksa Mam](https://github.com/prexsa)
