var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I saw a ninja today');
});

app.get('/netid', function(request, response){
    response.send('Put netid here');
});

app.get('/nickname', function(request, response){
    response.send('helpful-salmon');
});

app.listen(process.env.PORT || 4000);
