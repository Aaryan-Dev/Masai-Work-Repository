# react-employees-list

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github
```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Dashboard loads properly - 1 mark
 ✅ Data loads properly- 3 mark
 ✅ High to low sorting works properly - 3 marks
 ✅ Data fetching is correct - 2 marks

```
#### Note : There are hidden testcases that will run for displaying Bottom 10 Employees

## Description

- You need to make an application which lists employees with thier name and salaries
- User should be able to sort the Top 10 employees by salary, and Bottom 10 employees by salary
- Show top 10 employees(highest salary) by default

## Boilerplate

- You are given these Components:
  - Dashboard
    - user should be able to see a list of either top 10 or bottom 10 employees fetched from API
    - 1 Button
  - EmployeeName
  - EmployeeSalary components are also provided

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- You can use the [codesandbox link](https://codesandbox.io/s/example-s2sli9?file=/src/App.js:0-169), but please note the test cases will not work on codesandbox ( as codesandbox will not support the version for testing )
- If you are using codesandbox, you still need to download the project add to your masai-course repo submit the github link on the cp.masaichool.com platform

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

- `API details`
- `GET` : Employees Data

- `base-url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com`

- `url`: `/mockapi/get-employees`

- query params:

  - `page`: a number representing the page number
    NOTE: THE API DOES NOT HAVE AN ORDER BY PARAMTER

- response

  - data: array of employees
  - totalPages: number representing no of pages

- example https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1

- You cannot use JSON server

- use useEffect to display the data on the UI

`Dashboard.jsx`

- `Important`: You need to collate the data from all the pages, and then display top 10 or bottom 10 employees to the user, THE API DOES NOT HAVE AN ORDER BY PARAMTER
- on clicking the button - show bottom 10 employees and should change the button content to `Top 10 Employees`
- on clicking the button again - show Top 10 employees and should change the button content to `Bottom 10 Employees`
- You need to call the data in a way that all the fetch requests (to get empolyees data of all the pages) get triggered at the same time. (Hint: use [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) or use use async await)
- Don't use axios , use only fetch

`EmployeeName.jsx`

- Send relevant data to this component to show employee's names

`EmployeeSalary.jsx`

- Send relevant data to this component to show employee's salaries
