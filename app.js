var express = require('express');
var app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
    // send views/index.hbs for displaying in the browser
    res.render('index');
  });

  app.get('/meineSeite', (req, res, next) => {
    // send views/index.hbs for displaying in the browser
    let theData ={
        name:"Peter",
        location:"<h1>Ingolstadt</h1>",
        cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlin"],
        contact:{
            street:"Kurt-Schumacher-Strasse",
            phone:"0138 36785",
            mail:"peter.pan@mail.com",
            web:"www.peter-pan.com"
        }
    }
    res.render('myPage',theData);
  });



app.listen(3000);