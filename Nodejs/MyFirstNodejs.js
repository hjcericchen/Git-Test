var http=require('http');
var dt=require('./MyFirstNodeModule')
http.createServer(function(req,res){
res.writeHeader(200,{'Content-Type':'text/html'});
res.write('Currect Date is'+dt.myDateTime());
res.end();

}).listen('8080');
