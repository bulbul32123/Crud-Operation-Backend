const express = require('express');
const { connectToMongoDB } = require('./connection');
const cors = require('cors');
const userRoutes = require('./routes/user');
const { handleAddUsers } = require('./controllers/users');
const app = express()
const port = 8000

connectToMongoDB('mongodb://localhost:27017/fakeusers').then(() => {
    console.log(`MongoDb server Started....`);
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes)

app.post('/',handleAddUsers)

app.listen(port, () => console.log(`http://localhost:${port}`))