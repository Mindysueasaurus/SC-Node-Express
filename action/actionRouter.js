const express = require('express');
const action = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
  action
    .get()
    .then( actions => {
      res.status(200).json({actions});
    })
    .catch( error => {
      res
        .status(500)
        .json({message : "Could not retrieve actions", error})
    })
})

module.export = router;