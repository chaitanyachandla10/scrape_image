var express = require('express');
var myapp = express();
var Array = require('node-array');
var a = new Array;
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/keyword_image';
var name;
//var Scraper = require ('images-scraper'),
 //google = new Scraper.Google();
console.log("path",__dirname);
myapp.use(express.static(__dirname + './../client'));
myapp.get('/',function(req,res)
{
	res.render('index.html');

});
myapp.get('/search',function(req,res)
  { 
     console.log('>>> data received from front', req.query);

    var Scraper = require ('images-scraper'),
  google = new Scraper.Google();
    name=req.query;
    google.list({
    keyword:name,
    num: 5,
    detail: true,
    nightmare: {
        show: true
    }
    })
    .then(function (res) {
       console.log('images',res);
       a.push(res);
       console.log('Array images',a);
    }).catch(function(err) {
        console.log('err', err);
    });
    // you can also watch on events 
    google.on('result', function (item) {
        console.log('out', item);    
    });

         /*MongoClient.connect(url,function(err,db)
      {
      if(err)
      {
      console.log(err);
      }
      console.log('connected')
      db.collection('image').insertOne(a,function(err,data)
      {
      if(err)
      {
        return res.send('Error');
      }
      if(data)
      {
        res.send(data);
      }
    console.log(">>>>>> data" , data);
      })
      })*/
});

myapp.listen(5100,function()
{
	console.log('server is running');
});