const client = require("../Config/DB_Config");
const { ObjectId } = require("mongodb");
const Cart = client.db('GalaxyTech').collection('Cart');


const  addToCart = async(req, res) =>{

}

const getCart = async (req, res) => {
    try {
        const query = req.query;
        console.log(query)
        const Data = await Cart.find(query).toArray();
        res.json(Data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {}