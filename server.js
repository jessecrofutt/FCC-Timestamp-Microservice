var express = require('express');
var timeHandler = require('./timeHandler.js');
var app = express();
var sassMiddleware = require("node-sass-middleware");
app.use(sassMiddleware({
    src: __dirname + '/public',
    dest: '/tmp'
}));

    //'/tmp' folder holds temporary sass file
app.use(express.static('/tmp'));

    // http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.get("/:timeInput", function (request, response) {
    const cookedTime = timeHandler(request.params.timeInput);
    response.json(cookedTime);
});

    // listen for requests
var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
