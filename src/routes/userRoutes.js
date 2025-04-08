import express from 'express'
const router = express.Router()
import { createUser, updateUser } from '../controllers/usersController.js'

router.post('/users', createUser)
router.put('/users/:id', updateUser)

export default router
