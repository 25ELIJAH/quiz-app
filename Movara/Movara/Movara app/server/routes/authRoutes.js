import { Router } from 'express'
import { login } from '../controllers/authController.js'
import { requireAuth } from '../middleware/authMiddleware.js'

const router = Router()

router.post('/login', login)
router.get('/me', requireAuth, (_req, res) => res.json({ message: 'not implemented' }))

export default router

