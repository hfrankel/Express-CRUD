const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require('express');
const app = express();
const port = 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const contacts = [];

app.get('/', (req, res) => {

})

app.listen(port, () => console.log(`Server listening on port ${port}!`));