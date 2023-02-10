const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authentication')
const {getUser,loadUser} = require('../controllers/admin')
const {addProjectSuper,deleteProject,getUserProjects,getAllProjects,assignResource} = require('../controllers/project')
const {addResource,deleteResource,getResourceInfo} = require('../controllers/resource')
const {addLeave,getallLeaves,getUserLeaves} = require('../controllers/leaves')

router.route('/').get(authMiddleware,loadUser)
router.route('/:id').get(authMiddleware,getUser)
router.route('/add-project').post(authMiddleware,addProjectSuper)
router.route('/project/:id').delete(authMiddleware,deleteProject)
router.route('/add-resource').post(authMiddleware,addResource)
router.route('/resource/:id').delete(authMiddleware,deleteResource).get(authMiddleware,getResourceInfo)
router.route('/project/all').get(authMiddleware,getAllProjects)
router.route('/project/user').get(authMiddleware,getUserProjects)
router.route('/assign-resource').post(authMiddleware,assignResource)

router.route('/assign-leave').post(authMiddleware,addLeave)
router.route('/leave/all').get(authMiddleware,getallLeaves)
router.route('/leave/user').get(authMiddleware,getUserLeaves)


module.exports = router