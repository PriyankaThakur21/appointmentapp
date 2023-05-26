const express = require('express');
const app = express();

const sequelize = require('./util/database');

const User = require('./models');

app.use(express.json());

app.use(express.static('public'));

const cors = require('cors');
app.use(cors());

const UserRoutes = require('./routes');

app.use(UserRoutes);

sequelize.sync()
.then((res)=>{
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})