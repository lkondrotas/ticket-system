const express = require('express')
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/TicketSystem")
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to DB"))

app.use(express.json())

const ticketsRouter = require('./routes/tickets.js')
app.use('/tickets', ticketsRouter)

const merchantsRouter = require('./routes/merchants.js')
app.use('/merchants', merchantsRouter)

const categoriesRouter = require('./routes/categories.js')
app.use('/categories', categoriesRouter)

const departmentsRouter = require('./routes/departments.js')
app.use('/departments', departmentsRouter)

const usersRouter = require('./routes/users.js')
app.use('/users', usersRouter)

app.listen(5000, ()=>{
    console.log("Server has been started on port 5000")
})