import express from 'express'
const router = express.Router()
import {
  createUser,
  updateUser,
  getUser,
  deleteUser,
  loginUser
} from '../controllers/usersController.js'

router.post('/users', createUser
router.post('/login', loginUser)
router.put('/users/:id', updateUser)
router.get('/users', getUser)
router.delete('/users/:id', deleteUser)

export default router
