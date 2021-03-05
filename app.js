const express = require('express');

const mongoose = require('mongoose');

require('dotenv').config();

const cors = require('cors');
const port = process.env.PORT || 4000;

const app = express();




// DB CONNECTION
mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`Connected to DataBase!`);
});


// middleware
app.use(cors());
app.use(express.json());

const coursesRoutes = require('./routes/course')
app.use('/api/courses', coursesRoutes)

const userRoutes = require('./routes/user.js')
app.use('/api/users', userRoutes)


app.listen(port, () => console.log(`Connected to port ${port}`))