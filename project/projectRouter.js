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

router.get('/:id/actions', (req, res) => {
  const { id } = req.params;
  project
    .getProjectActions(id)
    .then( project =>{
      if (!project){
        res.status(404).json({message: "that projects actions were not found"})
      } else {
        res.status(200).json(project)
      }
    })
    .catch( error => {
      res.status(500).json({message: "Could not retrieve project info", error})
    })
})

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

router.put('/:id', (req, res) => {
  const { name, description } = req.body;
  if( !description || !name || description.length > 128) {
    res.status(400).json({message: "Missing information or your description is too long"})
  }
  project
    .update(req.params.id, { name, description })
    .then( project =>{
      if (!project){
        res.status(404).json({message: "that project was not found"})
      } else {
        res.status(200).json(project)
      }
    })
    .catch( error => {
      res.status(500).json({ message: "error updating project", error})
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  project
    .remove(id)
    .then(count => {
      if(!count){
        res.status(404).json({ message: "The project with the specified ID does not exist."});
      } else {
        res.status(200).json(count);
      }
    })
    .catch( error => {
      res.status(500).json({message: "The project could not be removed", error})
    })
})

module.exports = router;