const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const AuthRoute = require('./routes/auth.route')
const ProjectRoute = require('./routes/project.route')
const UserRoute = require('./routes/user.route')

/** ==> Connection with MongoDb Database **/
mongoose.connect('mongodb://localhost:27017/sales',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', ()=>{
    console.log('Database connection established')
})

const app = express()

// app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api', AuthRoute)
app.use('/api/project', ProjectRoute)
app.use('/api/user', UserRoute)
