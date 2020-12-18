#  gemography-front-end-challenge

This is my submition to the front-end job application chalenge by Gemography. Made Using [VueJS](https://vuejs.org/) 

#  The Idea Of the App

The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. You'll be fetching the sorted JSON data directly from the Github API (Github API explained down below).  

#  Features

* As a User I should be able to list the most starred Github repos that were created in the last 30 days. (done)
* As a User I should see the results as a list. One repository per row. (done)
* As a User I should be able to see for each repo/row the following details : 
	* Repository name (done)  
	* Repository description (done)
	* Number of stars for the repo. (done)
	* Number of issues for the repo. (done)
	* Username and avatar of the owner. (done)
* As a User I should be able to keep scrolling and new results should appear (infinite scroll). (done) 
# Packages Used
### [Moment Js](https://github.com/moment/moment/)  
A JavaScript date library for parsing, validating, manipulating, and formatting dates. 
### [axios](https://github.com/axios/axios)  
Promise based HTTP client for the browser and node.js  to help with  fetching data from the Api .

### [AOS](https://github.com/michalsnik/aos)  
Small library to animate elements on your page as you scroll.

# How to run the project 

* You will need [nodejs](https://nodejs.org/en/) installed in your machine 
* clone the project or downloed the project .zip file
* run 

```
npm install 
```
* then run 

```*	
npm run serve
```