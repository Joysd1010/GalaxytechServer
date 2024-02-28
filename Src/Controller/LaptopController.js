const { ObjectId } = require("mongodb");
const client = require("../Config/DB_Config");
const Laptop = client.db('GalaxyTech').collection('Laptop');

const getAllLaptop = async (req, res, next) => {
  try {
    const allLaptops = await Laptop.find({}).toArray();
    res.json(allLaptops);
  } catch (error) {
    next(error);
  }
};
const getrelated = async (req, res, next) => {
  try {
    
    const laptops = await Laptop.find({}).toArray();

    const shuffledLaptops = laptops.sort(() => Math.random() - 0.5);

    const randomLaptops = shuffledLaptops.slice(0, 5);

    res.json(randomLaptops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
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
  
  const query = {_id: new ObjectId(id)}
  try {
    const data = await Laptop.findOne(query);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while fetching the laptop data.' });
  }
}

module.exports = { getAllLaptop, getByBrand ,getSingleLaptopData,getrelated};
