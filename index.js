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

app.post('Tentrem', async (req, res) => {
    const data = req.body;
    try{
        const Tentrem = await db.Tentrem.create(data);
        res.send(Tentrem);
    } catch (error){
        res.send({message: error.message});
    }
    
});

app.get('/Tentrem', async (req, res) => {
    try{
        const Tentrem = await db.Tentrem.findAll();
        res.send(Tentrem);
    } catch (error){}
    res.send({message: error.message});
});