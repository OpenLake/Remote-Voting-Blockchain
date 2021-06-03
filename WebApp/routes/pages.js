const express = require('express');
const User = require('../core/user');
const router = express.Router();


const user = new User();


router.get('/', (req, res, next) => {
    let user = req.session.user;
    
    if(user) {
        res.redirect('/home');
        return;
    }
   
    res.render('index', {title:"Remote-Voting-Blockchain"});
})


router.get('/home', (req, res, next) => {
    let user = req.session.user;

    if(user) {
        res.render('home', {opp:req.session.opp, name:user.fullname});
        return;
    }
    res.redirect('/');
});


router.post('/login', (req, res, next) => {
    
    user.login(req.body.username, req.body.password, function(result) {
        if(result) {
            
            req.session.user = result;
            req.session.opp = 1;
            
            res.redirect('/home');
        }else {
            
            res.send('Woops!Username/Password incorrect, Please enter correct information');
        }
    })

});



router.post('/register', (req, res, next) => {
    
    let userInput = {
        username: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    };
   
    user.create(userInput, function(lastId) {
        
        if(lastId) {
            
            user.find(lastId, function(result) {
                req.session.user = result;
                req.session.opp = 0;
                res.redirect('/home');
            });

        }else {
            console.log('Error creating a new user ...');
        }
    });

});



router.get('/loggout', (req, res, next) => {
    
    if(req.session.user) {
        
        req.session.destroy(function() {
            res.redirect('/');
        });
    }
});

module.exports = router;