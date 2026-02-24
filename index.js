const express = require('express');
const app = express();

// Make sure to install express via npm

/**
 * Add Middleware to log incoming requests
 * It runs for every request before reaching the route handlers
 */

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`)
    next()
})

/**
 * Add a route to /name that displays your name as plain text
 */

app.get('/name', (req, res) => {
    res.send('Tom Saoura')
})

/**
 * Add a route to /about that displays a JSON object with details describing yourself
 */

app.get('/about', (req, res) => {
    res.json({
        age: 16,
        hobby: 'coding',
        school: 'Hoboken High'
    })
})
/**
 * Add 404 Middleware 
 */

app.use((req, res) => {
    res.status(404).send('404 Not Found')
})

app.listen(3000, () => {
    console.log(`Server is running.`);
});

/**
 * Run your server and test your routes.
 */
