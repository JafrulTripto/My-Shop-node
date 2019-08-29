const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/adminRoute');
const shopRoutes = require('./routes/shopRoute');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-type, Authorization, Origin, X-Auth-Token');
    next();
})

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(4000);