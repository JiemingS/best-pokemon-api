# Best-Pokemon - Full-Stack Project by Jieming Sun

## Link to both back_end and front_end
- [API Deploy](https://whispering-brushlands-72580.herokuapp.com/)
- [Client Deploy](https://jiemings.github.io/project_2-_client/)
- [Best-Pokemon API](https://github.com/JiemingS/best-pokemon-api)
- [Best-Pokemon Client](https://github.com/JiemingS/best-pokemon-client)

## Application Description
Best-Pokemon is a React application which helps user to get the Pokemons' Data.
Once signed up/in, user can:
1. Get the latest news about pokemons.
2. Get the list of all the pokemons and can get the detail information about each pokemon.
3. Create their own pokmemons which the data(properties) whatever they want.
4. Can see all the DIY pokemons created by different user account.
5. Can only update or delete their own pokemons.

The backend was built using Express.js and MongoDB. The front-end was built using React.js and Axios for http requests (the requests communicate with the back end and third-party API).

## Technologies Used
-   Express.js
-   Node.js
-   Mongoose
-   MongoDB
-   Heroku
-   Git & GitHub

## Setup and Installation:
1.  Fork and clone the respository locally
1.  Install dependencies with `npm install`.
1.  Ensure that you have nodemon installed by running `npm install -g nodemon`
1.  Ensure the server can run properly by running `npm run server`
1.  `git add` and `git commit` your changes.

## Thought Process & Execution

*   Planning: Initially I planned out the user stories and wireframes to maximize efficiency for users and ease of navigation.

*   CRUD Actions to Back-end: After setting up the necessary files and forms, I tested each feature with API requests(use postman).

*   Debug: I approached this project with a mindset of constantly making small changes and immediately testing those changes.

## API End Points

| Verb   | URI Pattern              | Controller#Action     |
|--------|--------------------------|-----------------------|
| POST   | `/sign-up`               | `users#sign-up`       |
| POST   | `/sign-in`               | `users#sign-in`       |
| DELETE | `/sign-out`              | `users#sign-out`      |
| PATCH  | `/change-password`       | `users#change-password` |
| GET    | `/pokemons`                | `pokemons#index`        |
| GET    | `/pokemons/:id`            | `pokemons#show`         |
| POST   | `/pokemons`                | `pokemons#create`       |
| DELETE | `/pokemons/:id`            | `pokemons#destroy`      |
| PATCH  | `/pokemons/:id`            | `pokemons#update`       |

some additional GET requests utilizing external API urls(from third party api).

All data returned from API actions is formatted as JSON.

## Unsolved Problems / Future Iterations
Create another database for administrator to save the news for pokemon news.

#### Wireframes
-   [EDR-backend](https://i.imgur.com/9GExUJj.jpg)
-   [EDR-frontend](https://i.imgur.com/6KGkrra.jpg)

#### User Stories
*   As an unregistered user, I would like to sign up with my email and password.
*   As a registered user, I would like to sign in with my email and password.
*   As an authenticated user, I would like to be able to change password.
*   As an authenticated user, I would like to be able to sign out.
*   As an authenticated user, I would like to be able to create pokemons.
*   As an authenticated user, I would like to be able to update and delete pokemons in my collection.
*   As an authenticated user, I would like to be able to use search from a third-party API.
*   As an authenticated user, I would like to be able to get all the datas about pokemons.

![image](https://i.imgur.com/TqZMLmp.png)
![image](https://i.imgur.com/iTR1lIE.png)
