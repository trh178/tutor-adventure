// requires
var app = require('express').createServer();
var simpledb = require('simpledb');

// connect to Amazon SimpleDB
var sdb = new simpledb.SimpleDB(
    {keyid: 'AKIAJVU52KMXAHEU66GA', secret: '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'},
    simpledb.debuglogger
)

// express app enging config and routing
app.enable("jsonp callback");
app.get('/problem', function(req, res) {
    
    // query sdb for a problem
    sdb.getItem('Problems', '4a38f751-b7f9-414e-871a-55ef0527a138', function(error, result, meta) {
	var ps = result.InitialDisplay;
	var ret = 'Convert the following to Scientific Notation: ' + ps;
	console.log('Got the following problem: ' + ret);
    
	// respond with sample problem json for now
	res.json(ret);
    });

    // log response msg
    console.log('request for problem handled');
});

// express app engine start
app.listen(8033);
