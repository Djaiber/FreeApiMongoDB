const express = require('express');
const connectDB = require('./config/conexionDB');
const apiMealsRouter = require('./routes/apiMealsRouter');

const app = express();
const port = 3000;
// Middleware to serve static files
app.use(express.static('public'));
// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Use the API meals router
app.use('/', apiMealsRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
