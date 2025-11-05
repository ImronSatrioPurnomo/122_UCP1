const express = require('express');
const app = express();
const PORT = 3001;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT,() => {
    console.log('server started on port 3000');
})

db.sequelize.sync().then(() => {
    console.log('database connected');
}).catch((error) => {
    console.log(error);
})