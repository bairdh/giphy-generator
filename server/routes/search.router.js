const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

router.get('/:searchTerm', (req,res) => {
    let searchTerm = req.params.searchTerm;
    
    axios.get('http://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=' + process.env.GIPHY_KEY + '&rating=pg')
    .then(result => {
        // console.log(result.data);
        
        res.send(result.data)
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;