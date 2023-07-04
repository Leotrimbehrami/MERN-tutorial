const exp = require("constants")
const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware.js")
const port = process.env.PORT  || 5000

const app = express()

// adding midleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


app.use('/api/goals', require('./routes/goalRoutes'))

// overwrite the default express error handler
app.use(errorHandler)



app.listen(port, () => console.log(`Server started on port ${port}`))