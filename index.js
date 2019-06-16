const express = require('express')
const helmet = require('helmet')

const cohorts = require('./cohorts/cohorts-router.js')

const server = express()

server.use(express.json())
server.use(helmet())

server.use('/cohorts', cohorts)

const port = 4000

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})