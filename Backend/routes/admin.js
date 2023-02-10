const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authentication')
const {getUser,loadUser} = require('../controllers/admin')
const {addProjectSuper,deleteProject,getUserProjects,getAllProjects} = require('../controllers/project')
const {addResource,deleteResource} = require('../controllers/resource')

router.route('/').get(authMiddleware,loadUser)
router.route('/:id').get(authMiddleware,getUser)
router.route('/add-project').post(authMiddleware,addProjectSuper)
router.route('/project/:id').delete(authMiddleware,deleteProject)
router.route('/add-resource').post(authMiddleware,addResource)
router.route('/resource/:id').delete(authMiddleware,deleteResource)
router.route('/project/all').get(authMiddleware,getAllProjects)
router.route('/project/user').get(authMiddleware,getUserProjects)


module.exports = router