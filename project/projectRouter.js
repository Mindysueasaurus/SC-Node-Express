const express = require('express');
const project = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
  project
    .get()
    .then( projects => {
      res.status(200).json({projects});
    })
    .catch( error => {
      res
        .status(500)
        .json({ message: 'Could not retrieve project info', error})
    })
})

// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   project.
// })

router.post('/', (req, res) => {
  
  project
    .insert(req.body)
    .then((projectData) => {
      res.status(201).json(projectData);
    })
    .catch( error => {
      res.status(500).json({ message: "New post not created", error})
    })
})

module.exports = router;