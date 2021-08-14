//importing the necesary modules for our server file
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
//importing error handlers
import {
  notFound,
  errorHandler
} from './middleware/errorMiddleware.js'
//importing db connection and routes
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app = express()

//making use of everything that was imported
app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use(notFound)
app.use(errorHandler)
connectDB()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//serve frontend/build as static assets
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

//setting the port
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`
  )
)