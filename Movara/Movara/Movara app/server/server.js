import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import authRoutes from './routes/authRoutes.js'
import mediaRoutes from './routes/mediaRoutes.js'
import mpesaRoutes from './routes/mpesaRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => res.json({ ok: true }))

app.use('/api/auth', authRoutes)
app.use('/api/media', mediaRoutes)
app.use('/api/mpesa', mpesaRoutes)

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

