# final-project-big-hammer
final-project-big-hammer created by GitHub Classroom

This is a shopping website application.By using this website,client could view and buy special discount products in Black Friday.We are using MEAN stack.

## Prerequisite technologies:  
git  
MongoDB  
Nodejs 6.X  
npm 3.X  
Express  
Angular4 and Angular-cli  
Angular-JWT
CORS  
bcriptjs  


## Basic functions:
User could sign up by username/password  
User could login by exist account and logout  
User could view products in this shopping website  
User could search products by keywords  
User could sort the product list by name,rating and price（ascending or descending order  
User could add some items to shopping cart  
User could add or delete items in shopping cart  
User could view items in cart  
User could buy items in cart  
User could bookmark items by URLs  
User could view weather information  
User could view its location information in this website    
User could view order history  
User could contact with seller  

## How to set up development environment:  
clone this project to your device  
jump to root directory of this project by command line   
This command would set up all dependencies we need:
```Bash
npm install
```
After that,input this:
```Bash
sudo npm install -g nodemon
```
By using nodemon,your application will be updated automatically.
Jump to the Angular-src directory,input this:
```Bash
npm install angular2-flash-messages --save
```
```Bash
npm install angular2-jwt
```

Now, let's launch this project:    
We provide MongoDB demo in this project:  
```Bash
mongo dbpath yourpath/final-project-big-hammer/data/db
```
Connect MongoDB to Robo3T if you want.

jump to root directory of this project  
```Bash
nodemon
```
jump to angular-src directory:
```Bash
ng serve
```
You are good to go.
