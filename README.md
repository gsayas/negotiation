# Negotiation App

## Local Project setup

### System Requirements:
* [npm](https://www.npmjs.com/get-npm)


### How to Build

```bash
git clone https://github.com/gsayas/negotiation.git
cd /path/to/negotiation-repo
npm install
```

### How to Run the Program

```bash
npm run serve
```
The app can be seen in your browser at http://localhost:8080


### How to run unit tests
```bash
npm run test:unit
```

### How to run end-to-end tests
```bash
npm run test:e2e
```
*******************************************************************************************************************************

## Live Demo

Since I wanted to test out Github actions I created a basic CI/CD pipeline that on every push builds the app, runs the tests and deploys it to heroku.

* [Here](https://github.com/gsayas/negotiation/actions?query=branch%3Amaster+is%3Asuccess) you can see the last successful executions, and check the tests runs without having to install the app locally.

* [Here](http://gsayas-front.herokuapp.com/) is the app running in Heroku. Please be aware that I'm using the free tier so it could take it a few seconds on the first request, since it has to start the cloud servers... Be patient :) !