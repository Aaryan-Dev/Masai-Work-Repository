## Super Cards 
This app is going to bring back the nostalgia, as you have to create a react app to generate superhero trump cards.


## Tags
react, useState, conditional rendering.



## Submission Instructions [Please note]
## Maximum Marks - 10
* The Submission should not contain spaces, for example /rct-101 folder/eval will not work
* Do not push node_modules and package_lock.json to github
* Rubrics / Marking Scheme is below 
```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Should have the input Boxes- 1 mark
 ✅ should have disabled add button when input fields are empty- 1 mark
 ✅ should add the superhero details - 2 marks
 ✅ should show the most powerful superhero - 3 marks
 ✅ should show all the superhero details - 2 marks
 
```


## Installation
- you can use any node version that works for you ( 14+ )

- please make sure you do not push package-lock.json
- If you are using codesandbox, you still need to download the project add to your masai-course repo submit the github link on the cp.masaichool.com platform



### Getting Started

1. Download and un zip the biolerplate 

2. navigate inside the folder and run following command.

   - `npm install` - To install the dependencies

   - `npm start` - To Start running the application.

### Create a Superhero Trump card App, displaying the name, height, weight and power level of that particular superhero.‌
### Tasks / Functionalities to Implement
1. The app will have following input fields:
    - Name: It will be responsible for taking the name of the Superhero, initially state will be set to `""`
    - Height: It will be responsible for taking the height of the Superhero, initially state will be set to `0`, the height will be in cms
    - Weight: It will be responsible for taking the weight of the Superhero, initially state will be set to `0`, the weight will be in kg
    - Power Level: It will be responsible for taking the Power Level of the Superhero, initially state will be set to `0`, the power level will always be in between 1 and 10.
    

<img width="613" alt="Screenshot 2022-06-27 at 6 18 21 PM" src="https://user-images.githubusercontent.com/83001524/175945571-e6872671-d427-46f2-88f7-f240083e5148.png">
    

2. The app will have a `Add Superhero`, which will be set to diabled if nothing has been typed in the imput boxes, and it will add the details of that particular superhero in form of a card to the DOM.

<img width="1259" alt="Screenshot 2022-06-27 at 7 12 48 PM" src="https://user-images.githubusercontent.com/83001524/175956015-3c68a4b1-d603-4cfc-bafd-77292f998957.png">

3. There will be a button `Most Powerful Superhero`, which will be responsible for displaying the superhero card with the maximum power level, This button will only be visible if more than 1 superhero card is there on DOM

<img width="756" alt="Screenshot 2022-06-27 at 7 14 00 PM" src="https://user-images.githubusercontent.com/83001524/175956271-b15fba1e-0154-46c0-b898-839a029879c3.png">

4. There will be a button `Show All`, which will be responsible for displaying all the superhero card, This button will only be visible if more than 1 superhero card is there on DOM 

<img width="1259" alt="Screenshot 2022-06-27 at 7 12 48 PM" src="https://user-images.githubusercontent.com/83001524/175956479-c469450e-b50b-4669-8ba6-55e22056e878.png">

**Note** 
- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.
- You can focus on your own style, but first priority is implementing all the functionalities.

### Learning Objectives

1. Why and what is react?

2. Able to use CRA  and run the application.

3. Basic understanding of JSX.

4. Difference between State and props.

5. Conditional rendering.

6. handling basic onClick and onChange events.

7. Difference between global CSS and module.css

