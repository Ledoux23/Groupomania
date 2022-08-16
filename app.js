const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// routers
const userRoutes = require('./routes/user.routes');

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

module.exports = app;