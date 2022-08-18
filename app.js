const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); 
require('dotenv').config();

// routers
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');

// data base
mongoose
  .connect(`mongodb+srv://${process.env.DB_USER_PASS}@cluster0.3mfadim.mongodb.net/Groupomania`,
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  )
  .then(() => console.log('Connected to MongoDB Atlas !'))
  .catch(() => console.log('Failed to connect to MongoDB Atlas !'));

const app = express();

// handle cors errors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
   
// root of routes 
app.use('/api/auth', userRoutes);
app.use('/api/post', postRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;