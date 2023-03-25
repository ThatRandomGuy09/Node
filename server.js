var http = require('http')

var url = require('url')

http.createServer(function(req, res ){


    var route = req.url
    if(route==='/'){
        res.end('This is information from backend to homepage')
    }
    if(route==='/getusernames'){

        var usernames = ['messi', 'ronaldo', 'neymar']
        res.end(JSON.stringify(usernames))
    }
    console.log('My node Js Server is Created Successfully')

}).listen(5000)