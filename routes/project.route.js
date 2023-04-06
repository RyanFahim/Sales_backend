const express = require('express')
const router = express.Router()

const ProjectController = require('../controllers/ProjectController')
const upload = require('../middleware/upload')


router.get('/showAllProjects', ProjectController.projectIndex)
router.post('/add', upload.single('projectZip'), ProjectController.addProject)
router.post('/updateProject', ProjectController.updateProject)
router.post('/deleteProject', ProjectController.deleteProject)


module.exports = router