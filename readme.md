# Welcome to Ingredient Hero!

Ever wonder what to do with your soon-to-be expired perishable food items? Ingredient Hero is your savior that will compile all of your food items in one place and recommend 
recipes that take the food you already have to avoid waste. After shopping you will select the drop-down menu to input your perishable items with recommended expiry dates. Recipes will begin to build based off of the items that will soon expire, rather than later. More items that expire the better the recommended recipe will populate. 

<img src="./images/IH1.png" height="50%" width="50%"></img><br/>
<img src="./images/IH2.png" height="50%" width="50%"></img><br/>
<img src="./images/IH3.png" height="50%" width="50%"></img><br/>
<img src="./images/IH4.png" height="50%" width="50%"></img><br/>




## User Stories

- As a user, I want to create an account and successfully log in.<br/>
- As a user, I want to see a dashboard of recipes and pantry items.<br/>
- As a user, I want to add and remove items from my pantry.<br/>
- As a user, I want to get notifications of items expiring soon.<br/>
- As a user, I want to get recipes based on the items in my pantry.<br/>
- As a user, I want a simple and easy to use page.<br/>


### Coming Soon

- As a user, I want to be able to share my recipes with other users.<br/>
- As a user, I want to rate the recipes that I use and see my top-rated options.<br/>
- As a user, I want to see recipes based on my food allergies and preferences.<br/>


## Stack

| Front End     | Back End      | Deployment    |  API          |
| ------------- | ------------- | ------------- | ------------- |
| <img src="https://cdn.worldvectorlogo.com/logos/react.svg" height="125px" width="125px"></img>  | <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" height="85px" width="125px"></img>  | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" height="125px" width="125px"></img>  | <img src="https://spoonacular.com/images/spoonacular-logo-b.svg" height="125px" width="125px"></img>  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" height="125px" width="125px"></img>  | <img src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" height="85px" width="125px"></img>  | <img src="https://www.nginx.com/wp-content/uploads/2018/08/NGINX-logo-rgb-large.png" height="95px" width="125px"></img>  |
| <img src="https://cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/007/263/original/Axios_logo_-_RGB_-_clear_space.png?1580309119" height="85px" width="125px"></img> |  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" height="125px" width="125px"></img>  |
| <img src="https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png" height="85px" width="125px"></img> |


### Front-End

In order to build a single-page app, we utilized React to separate our components where needed for a cohesive product that loads quickly and efficiently. 

### Back-End

User information and pantry information was stored in our SQL database. Additionally, we utilized Spoonacular API to gather queries related to food items in the users pantry and recommend recipes. On the server side, we chose to use Express in order to simplify our code.

### Deployment

In deploying Ingredient Hero, we used AWS EC2 using PM2 for running our server and routed our traffic through NGINX.

### APIs

For recipes, we utilized Spoonacular's API for a comprehensive list that worked with the user's needs.


## Work Flow

This project was managed using git workflow, tracked with Git Graph:

<img src="./images/gitGraph.gif"></img>


We have one development branch that branches out specific features. When they are ready to be deployed, features are deployed as follows:
1. The branch is rebased to consolidate commit history and ensure only working code is pushed to the dev branch.<br/>
2. The branch is pushed.<br/>
3. A pull request is made.<br/>
4. Another member of the team is to perform a review before merging the branch into developer.<br/>
5. At the end of a sprint, the developer branch is merged into production.

#### In addition to git, we also used Trello to manage pending tasks, bugs and feedback.

**Trello Board: https://trello.com/b/swETQG26/ingredient-hero-project**

![Trello Board](https://collinpersonal.s3.us-east-2.amazonaws.com/trelloboard.png)



## Challenges & Learning

This project was created by a group of Army veterans that were passionate about developing and learning new technologies. This app was an opportunity for us to showcase 
our skills the developed as a team and culminated in this project.

### Challenges

- On the Front End, we attempted to use Boot Box in order to build our modal windows. This proved to be a challenge as we strived to edit and modify the content while attempting to give the user a more streamlined experience.<br/>
- On the Back End, our initial query string setup and configurations seemed promising, but after further research, we needed to simplify and break down each line in order to save and access information in the database.<br/>
- Overall, deployment had an initial struggle in learning the ins and outs of AWS and working with NGINX in the terminal.

### Learnings

- Over time, we learned that stricter code reviews within GitHub was an absolute must before adding outside code to the development branch, and then the master branch.<br/>
- Communication was a key for the team to reach better understanding of where the app was at and where it was going. Knowing aspects of development in the full stack allowed for a better understanding of how to make the app work as a cohesive piece.<br/>
- Tickets on Trello assisted the team in planning and production. Utilizing Trello kept us organized and accountable in creating and developing a production level application.


#### Contributors

Collin Fairlie, Shawn-Kieth Goforth, Andrew Herrera, Wesley Riley, Arjun Sharma, Herman Williams