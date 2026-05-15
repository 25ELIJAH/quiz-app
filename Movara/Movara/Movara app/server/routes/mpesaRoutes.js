import { Router } from 'express'
import { stkPush } from '../controllers/mpesaController.js'

const router = Router()

router.post('/stk-push', stkPush)

export default router

