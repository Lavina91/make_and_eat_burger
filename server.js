// requiring in express 
const express = require('express');

// assigning our PORT variable as a dynamic port created  OR localhost 8080
const PORT = process.env.PORT || 8080;

const app = express();

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
    console.log(`Server listening on: http://localhost:${PORT}`)
);