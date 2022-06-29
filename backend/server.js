const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const mainRouter = require('./route/index') 
const dotEnv = require('dotenv')
const bd = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8080
const connectDatabase = require('./config/database')
app.use(cors())
app.use(cookieParser())
app.use(bd.urlencoded({
    extended: true
}))
app.use(bd.json())
app.use(mainRouter)

dotEnv.config({path:'backend/config/config.env'});
connectDatabase()

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})