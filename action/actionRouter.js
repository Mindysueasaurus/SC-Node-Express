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

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  action
    .remove(id)
    .then(count => {
      if(!count){
        res.status(404).json({ message: "The action with the specified ID does not exist."});
      } else {
        res.status(200).json(count);
      }
    })
    .catch( error => {
      res.status(500).json({message: "The action could not be removed", error})
    })
})
module.exports = router;