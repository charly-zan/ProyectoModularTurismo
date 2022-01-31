const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    //se allade una variab
    res.render('index.html', {
        active1: 'active',
        active2: ''
    } );
});
router.get('/index1', (req,res) =>{
    //se allade una variab
    res.render('index1.html', {
        active1: 'active',
        active2: ''
    } );
});
router.get('/index2', (req,res) =>{
    //se allade una variab
    res.render('index2.html', {
        active1: 'active',
        active2: ''
    } );
});

router.get('/contact', (req,res) =>{
    //se allade una variab
    res.render('contact.html', {
        active2: 'active',
         active1: ''
        } );
});

module.exports = router;