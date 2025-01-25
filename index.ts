import express from "express"

const app = express()
const cors = require('cors')
const taskRouter = require('./routes/tasks.js')

app.use(express.json())
app.use(cors())

app.use('/tasks', taskRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`)
})

module.exports = app
