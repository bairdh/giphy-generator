const express = require('express');
const pool = require('../modules/pool');
const dotenv = require=('dotenv');
const router = express.Router();
const axios = require('axios');

dotenv.config();

router.get('/', (req,res) => {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=' + process.env.GIPHY_KEY + '&rating=pg')
    .then(result => {
        res.send(result.data)
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500);
    })
})