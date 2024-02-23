const { ObjectId } = require("mongodb");
const client = require("../Config/DB_Config");
const Laptop = client.db('GalaxyTech').collection('Laptop');

const getAllLaptop = async (req, res, next) => {
  try {
    console.log('all is accessing')
    const allLaptops = await Laptop.find({}).toArray();
    res.json(allLaptops);
  } catch (error) {
    next(error);
  }
};

const getByBrand = async (req, res) => {
  try {
      const { brand } = req.params;
      console.log(brand,'is accesing')
      const laptops = await Laptop.find({ 'keyFeatures.brand': { $regex: brand, $options: 'i' } }).toArray();
      res.json(laptops);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSingleLaptopData=async(req,res)=>{
  const {id}=req.params;
  console.log(id)
  const query = {_id: new ObjectId(id)}
  try {
    const data = await Laptop.findOne(query);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while fetching the laptop data.' });
  }
}

module.exports = { getAllLaptop, getByBrand ,getSingleLaptopData};
