const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require("dotenv").config()

const port = 3000;

// middleware
// app.use(express.static("./public"))
app.use(express.json())

// routes
app.get('/hello', function(req, res){
    res.send('Task Manager App');
})


app.use('/api/v1/tasks', tasks)

// app.get('/api/v1/tasks')   -> get all the tasks
// app.post('/api/v1/tasks')  -> create a new task
// app.get('/api/v1/tasks/:id')-> get single task
// app.patch('/api/v1/tasks/:id') -> update task
// app.delete('/api/v1/tasks/:id') -> deletye task


const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port , ()=> console.log("Server is running on port 3000"));
    } catch (error) {
        console.log(error);
    }
}

start()

