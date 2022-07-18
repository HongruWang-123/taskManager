const db = require('./db/connect.js');
const express = require('express');
const app = express();
const port = 3000;
const taskRouter = require('./routes/tasks.js');
require('dotenv').config();

const notFound = (req,res) => res.status(404).send('Resources Not Found');

//middleware function
app.use(express.static('./public'))
app.use(express.json());
//routes
app.use('/api/v1/tasks',taskRouter);
//not found
app.use(notFound)

const start = async () => {
    try {
        await db(process.env.MONOGO_URL)
        app.listen(port,() => console.log(`listening to the ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start();