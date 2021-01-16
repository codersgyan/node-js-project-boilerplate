import express from 'express'
import dotenv from 'dotenv'
import initRoutes from './routes/api.js'
dotenv.config()
const app = express()
initRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT} 👌🏾 \nLet's build something awesome 🔥`))

