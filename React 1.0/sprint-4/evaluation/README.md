# React - Restaurant Listing

## Submission Instrions [Please note]

### Maximum Marks - 20

- The Submission should not contain spaces, for example `/rct-101 folder/eval` will not work
- Do not push node_modules and package_lock.json to github
- Rubrics / Marking Scheme is below ( we will convert this back to a scale of 10 )

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ pagination component works correctly 1 - 1 mark
 ✅ pagination component works correctly 2 - 1 mark
 ✅ Restaurant Components exist - 1 mark
 ✅ App loads correctly - 1 mark
 ✅ Private Route component redirects user to login when visiting /dashboard page - 1 mark
 ✅ Private Route component redirects user to login when visiting /restaurants/:id page - 1 mark
 ✅ Login page works correctly - 5 marks
 ✅ Home page works correctly - 5 marks
 ✅ Redirecting from Dashboard page to restaurant page works correctly - 1 mark
 ✅ Restaurant page works correctly 1 - 1 mark
 ✅ Restaurant page works correctly 2 - 1 mark
```

## Description

- You need to make an application which lists restaurant list from an api
- User should be able to apply pagination
- You need to be able to click on a restaurant name, and move to the restaurant page `/restaurants/<id>`
- [Video Explainer.mp4](https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/33509/hMUbeetaL8X3n7PXdunLt0il7FuyAmyZsZJ5taAb.mp4)

## Boilerplate

- You are given a set of `Pages`
  - Home
    - you are given this already
    - it contains links to other routes
    - login, and dashboard routes
  - Login
    - user should be able to login from here
    - use reqres.in api for logging in
    - you need to maintain the user auth state in a context API
  - Dashboard
    - user should be able to see a list of all restaurants fetched from API
    - there should be 10 per page,
    - it should be in tabular format
    - on clicking name here you should be able to be redirected to the `/restaurants/<id>` page
  - SingleRestaurantPage
    - you need to use dynamic routing to fetch the id and fetch from details from API again
  - AllRoutes
    - all the routes are present here
- `Components`
  - RestaurantTable
    - accept `data` property and has a list of RestaurantCards
  - RestaurantCard
    - accept the following props:
    - `name`
    - `rating`
    - `type`
    - `number_of_votes`
    - `price_starts_from`
    - `id`
  - PrivateRoute
    - it should show the child component if user is authenticated
    - otherwise move the user to login page
  - Pagination
    - component which will have 1,2,3,...n number of buttons
    - The current button will be disabled
  - AppContext
    - manage auth context here
    - both user token, and login state
- You are given these dummy elements (anything with data-testid you should not remove or change the attribute values)

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- You can use the [codesandbox link](https://codesandbox.io/s/rct-101-c3-problem-template-5vzr7b), but please note the test cases will not work on codesandbox ( as codesandbox will not support the version for testing )
  - If you are using codesandbox, you still need to
  - download the project
  - add to your masai-course repo
  - submit the github link on the cp.masaichool.com platform

```
npm install

// run locally
npm run start

// test locally
npm run test
```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time

## Requirements

### `API details`

- `GET` : restaurant list
- `base-url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com`
- `url`: `/mockapi/getrestaurants`
- query params:
  - `page`: a number representing the page number
  - `limit`: a number representing total number of results per page
- response
  - `data`: array of products
  - `totalPages`: number representing no of pages
- example `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=5`
- By default when the user loads the page, the user should be shown a set of products
  - of page 1
  - 10 per page
- You cannot use JSON server
- use useEffect to display the data on the UI

- `GET` - get restaurant by id
- `base-url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com`
- `url`: `/mockapi/getrestaurants/:id`
- response
  - `data`: product information
- example: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/5`

### `Pages & Components`

#### `AllRoutes.jsx`

- It should contain all the routes for your application

```
/ - Home
/login - Login Page
/dashboard - Dashboard - Private
/restaurants/<id> - Restaurant Single Page - Private
```

#### `Home.jsx`

- You dont need to update anything here

#### `Login.jsx`

- A user should be able to login from here
- There is a form already made for you
- You need to complete it with by using the following api
- `POST`
- https://reqres.in/api/login
- DOCS: https://reqres.in/
- You need to maintain the authentication state in context API
- `isAuth`, and `token`
- token - should be null by default
- isAuth - should be false by default
- once logged in, a user is redirected to `/dashboard` route

#### `PrivateRoute.jsx`

- PrivateRoute
  - it should show the child component if user is authenticated
  - otherwise move the user to `/login` page
  - use from AuthContext to decide if the user is authenticated or not

#### `Dashboard.jsx`

- Once logged in, a user sees the this page
- you should have a Logout button [data-testid="logout-btn"]
- once clicking on it, you should be logged out
- there is an element with [data-testid="user-token"]
- you need to display the users token here, which you got when logging in
- List all the restaurants from the API page wise
- you need to display the results using the RestaurantTable component, pass the data here from the API response
- The pagination component should be shown below this

#### `Pagination.jsx`

- The pagination component should accept the following props:
  - `totalPages`
  - `currentPage`
  - `handlePageChange`
- it should have buttons from `1,2,3,...n`
- which means if there are 10 pages in the api response, then user should be shown buttons from 1-10
- the current button should be disabled

#### `RestaurantTable.jsx`

- it should accept a data property, which will contain the array of users
- this is a table component
- from the data property, create a list of RestaurantCard components
- each of the RestaurantCard component will have a table row element, and each of the fil

#### `RestaurantCard.jsx`

- it should accept the following properties
  - name
  - rating
  - type
  - number_of_votes
  - price_starts_from
- The elements with the following attributes need to have corresponding values mapped to it
- data-testid="item" - the tr element is here
- the following are td elements
- data-testid="name" - This should be a Link tag, and on clicking you need to redirect a user from
- data-testid="rating"
- data-testid="type"
- data-testid="votes"
- data-testid="price"

#### `AppContext.jsx`

- The AppContext and the Provider should be made here
- user should be able to pass the states for
- authentication isAuth - default value false
- token - default value null
- create the following functions as well
- loginUser - set auth to true and token to corresponding token
- logoutUser - set auth to false, and token back to null
