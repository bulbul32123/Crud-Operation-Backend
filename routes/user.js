const express = require('express');
const { USERS } = require('../models/user');
const { handleRemoveUser,handleUpdateUser } = require('../controllers/users');
const router = express.Router()


router.delete('/:userId', handleRemoveUser)
router.patch('/:userId', handleUpdateUser)

router.get('/', async (req, res) => {
    const allUsersData = await USERS.find({})
    return res.json(allUsersData)
})

module.exports = router