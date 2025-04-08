import express from 'express'
const router = express.Router()
import {
  createUser,
  updateUser,
  getUser,
  deleteUser,
} from '../controllers/usersController.js'

router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.get('/users', getUser)
router.delete('/users/:id', deleteUser)

export default router
