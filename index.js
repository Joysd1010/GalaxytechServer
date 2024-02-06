//=================== to do ================
// this app should  use the folder structure 


const express = require('express');
const cors = require('cors');
const client = require('./Src/Config/DB_Config.js');
const app = express();
const port = process.env.PORT || 5000;
const Laptop = require('./Src/Routes/Laptop/LaptopRoute.js')
const User = require('./Src/Routes/User/UserRoute.js')
app.use(cors());
app.use(express.json());
app.use('/laptop', Laptop);
app.use('/user', User)

async function run() {
    try {
        //         const Laptop = client.db('GalaxyTech').collection('Laptop');
        //         const User = client.db('GalaxyTech').collection('user');


        // //================================ User route ===============================
        //         //------------------ saving user data -----------------------

        //         app.post('/user', async (req, res) => {
        //             const item = req.body
        //             const query = { email: item.email }
        //             const existUser = await User.findOne(query)
        //             console.log('Received POST request to /user', req.body);
        //             if (existUser) {
        //                 console.log('This user is already exists')
        //                 return res.send({ message: 'This user is already exists', code: 255 })
        //             }
        //             const result = await User.insertOne(item);
        //             res.send(result)
        //         })

        //         //-------------------getting user ---------------------------

        //         app.get('/user',async (req, res) => {
        //             const cursor = User.find();
        //             const result = await cursor.toArray();
        //             res.send(result)
        //         })

        // //================================== Laptop ==================================
        //         //------------------- getting all laptop

        //         app.get('/laptop',async (req, res) => {
        //             const cursor = Laptop.find();
        //             const result = await cursor.toArray();
        //             res.send(result)
        //         })

        //         //-------------------- By brands
        //         app.get('/laptop/:brand', async (req, res) => {
        //             try {
        //                 const { brand } = req.params;
        //                 const laptops = await Laptop.find({ 'keyFeatures.brand': brand }).toArray();
        //                 res.json(laptops);
        //             } catch (error) {
        //                 console.error(error);
        //                 res.status(500).json({ error: 'Internal Server Error' });
        //             }
        //         });

        await client.db("admin").command({ ping: 1 });

    } finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('galaxy tech is running ')
})
app.listen(port, () => {

})