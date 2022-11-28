Masai Restaurant
Instructions
• Read entire question carefully for at-least 15 mins, understand it and then code it.
• Don’t jump directly into code.
• Commit your code every hour with proper commit message to your repository (we will monitor every commit)
• Use HTML, CSS and JS DOM to solve this question.
• Use Pure CSS
Problem Statement:
• Build a restaurant app where user can login, see all available restaurants
• This app should have Navbar with following pages
o Login Page
o Restaurant page
• Restaurant page should be private route, only logged in users can visit.
Login Page:
• Use reqres API to login as admin (https://reqres.in/) - LOGIN - SUCCESSFUL (refer to documentation)
• After successful login move user to Restaurant page.
• Also display your token in Restaurant page.
Restaurant Page:
• Display token in this page which you have fetched during Login with reqres.
• Fetch all restaurants from this API - https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants and populate on UI in form of cards.
• Refer to some online food delivery apps for UI.
• Use postman to check response and check all available params
• You can find documentation here
o Refer to GET Get all restaurants with their details
• <https://documenter.getpostman.com/view/9952810/VUjQmjcF>
• Note that API has total of 100 restaurants and total of 20 pages, each page has 5 restaurants data.
• Apply pagination such that each page should have only 20 restaurants, and you should have total of 5 pages (you can use limit param)
• Use Postman to check response.
• This page should also have filter,sort functionality
o Filter by type
o Sort by Rating
o Sort by Price
• Note that filter and sort functionality should work together.
o User should be able to sort according to filtered data.
• Note that filter and pagination functionality should work together.
o Pages should change dynamically according to filtered data.
Note:
• Maintain flow of app as mentioned.
• Error messages should be shown
• Use loaders.
• Good designs will fetch bonus marks.
• Submitting local host links for mock server will lead to disqualification.
Submission
• Please submit deployed link and Github link of code.
• Push your code into masai-repo, don’t submit personal repo links (submitting personal repo links will lead to disqualification)
• Please double check if deployed version works or not (run deployed version on your laptop and then submit it).
• Any issues in deployed link, will be considered null and void.
• Please verify your submissions are correct.
• Make sure you follow all instructions carefully.
• Submit before deadline.
Rubrics / Criteria to be judged upon
• HTML, CSS, JS DOM
• Filtering, sorting.
• Code cleanliness.
• Component structure and Good Git Hygiene.
