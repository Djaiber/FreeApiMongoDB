# FreeApiMongoDB
Consuption an Free api about the meals and recipes and store theirs attributos inside a mongo Database
# Meal and Recipe API

This project consumes a free API about meals and recipes, storing their attributes inside a MongoDB database using MongoDB Atlas. The application is built with Node.js, Express, and Mongoose.

## Features

- Fetches meal data from a public API
- Stores meal and recipe information in a MongoDB database
- Uses MongoDB Atlas for database hosting
- Provides endpoints to retrieve meal and recipe data

## Dependencies

- Express: ^4.19.2
- Mongoose: ^8.4.0
- node-fetch: ^2.7.0

## Project Structure

* **.gitignore**
* **LICENSE**
* **package.json**
* **package-lock.json**
* **README.md**
* **server.js**
* **config/**
    * conexionDB.js
* **controllers/**
    * apiMealsControllers.js
    * apiRecipeControllers.js
* **public/**
    * index.html
    * script.js
    * style.css
* **routes/**
    * apiMealsRouter.js
* **node_modules/**


## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add your MongoDB Atlas connection string:
    ```env
    MONGODB_URI=your-mongodb-atlas-connection-string
    ```

4. Start the application:
    ```bash
    node server.js
    ```

## Usage

### Fetch Meals

Send a GET request to `/get-meals?ingredient=<ingredient-name>`

### Fetch Recipe

Send a GET request to `/get-recipe?id=<meal-id>`

## License

GNU General Public License v3.0

