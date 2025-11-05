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

app.post('hotel', async (req, res) => {
    const data = req.body;
    try{
        const hotel = await db.Tentrem.create(data);
        res.send(hotel);
    } catch (error){
        res.send({message: error.message});
    }
    
});

app.get('/hotel', async (req, res) => {
    try{
        const hotel = await db.Tentrem.findAll();
        res.send(hotel);
    } catch (error){}
    res.send({message: error.message});
});

app.put('/hotel/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try{
        const hotel = await db.Tentrem.findByPk(id);
        if (!hotel){
            return res.status(404).send({message: 'data not found'});
        }
        await hotel.update(data);
        res.send("data berhasil di upgrade", hotel);
    } catch (error){
        res.send({message: error.message});
    }
});

app.delete('/hotel/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const hotel = await db.Tentrem.findByPk(id);
        if (!hotel){
            return res.status(404).json({error: 'data not found'});
        }
        await hotel.destroy();
        res.send({message: 'data berhasil dihapus'});
    } catch (error){
        res.status(500).json({error: 'failed to delete data'});
    }
    
});
