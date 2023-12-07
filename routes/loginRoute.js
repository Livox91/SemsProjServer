const express = require('express')
const router = express.Router()

const { handleloginresponse, handleSignup } = require('../controllers/loginHandler')
router.get('/', handleloginresponse)
router.route('/').post(handleSignup)

module.exports = router;