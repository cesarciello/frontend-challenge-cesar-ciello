# Challenge by Cesar Ciello to Plan A

This application was developed with angular + ionic in its latest versions. For presentation to Plan A company as a technical challenge.

### Installation & Development

1. clone this repo: `git clone https://github.com/cesarciello/frontend-challenge-cesar-ciello.git`
2. `cd frontend-challenge-cesar-ciello`
3. `npm install`
4. run `npm start` from a terminal


### Run the units test

1. clone this repo: `git clone https://github.com/cesarciello/frontend-challenge-cesar-ciello.git`
2. `cd frontend-challenge-cesar-ciello`
3. `npm install`
4. run `npm test` from a terminal

### Details

The app is responsive so please test it using chrome's inspection tool on different sizes and devices. Because there are theme and structure changes.

I structured the project dividing it in 3 layers, views (for parts that take care of the html, css and information to be rendered), domain (this part is responsible for keeping the "business rule", with the models and use cases) and data layer (that takes care of the information search parts, data state logic, concrete implementation of the use cases, ...).

I used SOLID, YAGNI, Dependency injection, custom clean architecture, RXJS, among other best practices that I found interesting to demonstrate.

I also did some unit tests demonstrating how I know how to use the jasmine tool, but I'm more used to using Jest.js.

I thank you.