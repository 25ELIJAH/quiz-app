import { Router } from 'express'
import { upload } from '../controllers/mediaController.js'

const router = Router()

router.post('/upload', upload)

export default router

