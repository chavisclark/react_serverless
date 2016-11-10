# Travel agent landing page
![alt text](https://d3brgjqtir64ox.cloudfront.net/travel_landing.png "Travel page")

### Description
This is a small project that I am working on for Treasured Travelers and I thought it would be cool re-create it with React. 

### More about the project
This project uses BrowserSync for better visual testing across all browsers. It's a very simple project but I think it's nice to see React in different "real-world" use-cases. 

### React ecosystem technologies

###### [React, react-dom](https://github.com/facebook/react)
React is a JavaScript library for creating user interfaces and its the backbone of my app (hehe). I used this environment (^15.3) because it's super cool.

###### [Webpack, webpack-dev-server](https://github.com/webpack/webpack)
Webpack is a module bundler that generates static represenations of my application.

The webpack-dev-server is a little node.js Express server, which uses the webpack-dev-middleware to serve my webpack bundle.

###### [React Dates](https://github.com/airbnb/react-dates)
An accessible, easily internationalizable, mobile-friendly datepicker library for the web.

###### [React Router](https://github.com/reactjs/react-router)
This handles all of my URL routing. It has a simple API but it is very powerful.

### Other technologies

###### [Dynamics](https://github.com/michaelvillar/dynamics.js/)
Dynamics is a JavaScript library that creates physics-based animations. I found this especially useful when developing the custom popover modal. Since it's a generic animations library, I'm able to use it in any component to animate any type of element (CSS or JavaScript)... Sweet!

#### The cool background images are provided by [UNSPLASH](https://unsplash.com)!
> After some crafty thinking... I got the images to crossfade the same way in all browsers 🤓

## Usage

```
npm install
npm start
> open http://localhost:3000
```

## Things under investigation for this project
* Fix stying for React Dates datepicker
* Improve handling of LocalStorage data

## Things to extend this project
* Integrate a server and create APIs (oooh yea)
* ...To be continued



##### Made with 💚 from my basement 
— C.C.
