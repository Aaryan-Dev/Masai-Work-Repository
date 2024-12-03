### Users Profile
create users display app 

#### Tags 
Reacts , state and props 
### Getting Started

1.Download and unzip the folder

   - `npm install` - To install the dependencies
   - `npm start` - To Start running the application.
   
### Users Display 
### Description

![](https://i.imgur.com/9ArrHB7.png)

- Create a component UserDetails
- It should accept 
    - user profile image (avatar)
    - first_name
    - last_name
    - address ( use the format on JSON )
    - karma (or points)
    - followers (number of followers)
    - posts (number of posts)
    - isFollowing (boolean, )
        - if true then a button to show unfollow
        - if false then a button to show follow
- use the given JSON file to create the list of UserDetails
- you may use module css to achieve the output (minimum inline styles)
- Add a sort option
- The sort button should sort users based on ascending order or descending order of name

Metrics:
- styling
- using lists
- presentation

#### users.json
[db.json](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-06-22/db_720032.json)

 #### **Note** 
- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.
