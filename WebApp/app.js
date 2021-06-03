const express = require('express');
const session = require('express-session');
const path = require('path');
const pageRouter = require('./routes/pages');
const app = express();


app.use(express.urlencoded( { extended : false}));



app.use(express.static(path.join(__dirname, 'public')));



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(session({
    secret:'secrethaibro',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}));


app.use('/', pageRouter);


app.use((req, res, next) =>  {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
})


app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});

module.exports = app;