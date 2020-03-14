const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const home = require('./controllers/home');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
    //connectionString : process.env.DATABASE_URL,
    host : 'dbinstance.c39rvwlqncvz.ap-south-1.rds.amazonaws.com',
    user : 'rk2609',
    password : '10p13ea0105',
    database : 'facedetect',
    ssl: true
  }
});

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');

app.get('/', home.handleHome(db));
app.post('/signin', signin.handleSignIn(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt));
app.get('/profile/:id', profile.handleProfile(db));
app.put('/image', image.handleImageUpdate(db));
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) });

//const PORT = process.env.PORT;

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server is listening on port ${process.env.PORT}`)
});