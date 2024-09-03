import 'dotenv/config';

import express, { json } from 'express'
import { allRoutes } from './src/modules/routes.js'
import { dbConnection } from './db/connection.js';
const app = express()
const port = 3001;

dbConnection()
app.use(express.json())
app.use("/uploads",express.static("uploads"))
allRoutes(app)

app.use((err, req, res, next) => {
    console.error(err)
    res.status(err.statusCode).send({message:err.message, stack: err.stack})
  })
  
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))