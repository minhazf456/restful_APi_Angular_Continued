const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json()); 

app.use(express.static(path.join(__dirname + '/public/dist/public')));

const db = 'mongodb://localhost/restful_task_api_continued';

require('./server/config/mongoose.js');(db);
require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});