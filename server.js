var app = require('express').createServer();

app.enable("jsonp callback");
app.get('/twss', function(req, res) {
    msg = req.query['msg'];
    res.json(report(msg));
    console.log(msg);
});

app.listen(8080);
