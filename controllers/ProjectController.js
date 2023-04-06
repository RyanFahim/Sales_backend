const Project = require('../models/Project.model')

const { response } = require('express')

//Add project
const addProject = (req, res, next )=>{
    let project = new Project({
        name: req.body.name,
        description: req.body.description
    })
    if(req.file){
        project.projectZip = req.file.path
    }
    project.save()
    .then(response => {
        res.json({
            message: 'Project Added Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured!'
        })
    })
}


//Show All projects

const projectIndex = (req, res, next) =>{
    Project.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.josn({
            message: 'An error occured'
        })
    })
}




//Update project information  ==> Not Working currently <==

const updateProject = (req, res, next) =>{
    let projectID = req.body.projectID

    let updateProjectData= {
        name: req.body.name,
        description: req.body.description,
        projectZip: req.body.projectZip
    }

    Project.findByIdAndUpdate(projectID, {$set: updateProjectData})
    .then(()=>{
        res.json({
            message: 'Project updated successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message: 'An error occured'
        })
    })
}


//Delete a project
const deleteProject = (req, res, next)=>{
    let projectID = req.body.projectID

    Project.findByIdAndRemove(projectID)
    .then(()=>{
        res.json({
            message: 'Project deleted successfully!'
        })

    })
    .catch(error =>{
        res.json({
            message:' An error occured'
        })
    })
}



module.exports = {
    addProject, projectIndex, updateProject, deleteProject
}