const express = require('express');
const colors = require('colors')
const {graphqlHTTP} = require("express-graphql");
const schema = require('./schema/schema')
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors());

// connect mongo db
connectDB();

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV === 'development',
}))

app.listen(port,()=>console.log(`Server is running on http://localhost:${port}`))