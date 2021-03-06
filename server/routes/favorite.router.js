const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  let query = `
  SELECT * 
  FROM favorite AS f
  JOIN category AS c
  ON f.category_id = c.id;`;
  pool.query(query).then(result => {
    res.send(result.rows)
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
});

// add a new favorite 
router.post('/', (req, res) => {
  let query = `
  INSERT INTO "favorite" ("url", category_id)
  VALUES ($1, $2)`;
  pool.query(query, [req.body.url, req.body.category]).then(result => {
    res.sendStatus(200);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
