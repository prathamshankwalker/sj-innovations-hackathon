const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authentication')
const {getUser,loadUser} = require('../controllers/admin')
const {addProjectSuper,deleteProject} = require('../controllers/project')
const {addResource,deleteResource} = require('../controllers/resource')

router.route('/').get(authMiddleware,loadUser)
router.route('/:id').get(authMiddleware,getUser)
router.route('/add-project').post(authMiddleware,addProjectSuper)
router.route('/project/:id').delete(authMiddleware,deleteProject)
router.route('/add-resource').post(authMiddleware,addResource)
router.route('/resource/:id').delete(authMiddleware,deleteResource)

module.exports = router