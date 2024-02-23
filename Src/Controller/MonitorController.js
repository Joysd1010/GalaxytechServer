const { ObjectId } = require("mongodb");
const client = require("../Config/DB_Config");
const Monitor = client.db('GalaxyTech').collection('Monitor');



const getAllMonitor = async (req, res, next) => {
  try {
    console.log('all is accessing')
    const allMonitors = await Monitor.find({}).toArray();
    res.json(allMonitors);
  } catch (error) {
    next(error);
  }
};

const getByBrand = async (req, res) => {
    try {
      const { brand } = req.params;
      const Monitors = await Monitor.find({ 'key.brand': { $regex: brand, $options: 'i' } }).toArray();
      res.json(Monitors);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const getSingleMonitorData=async(req,res)=>{
  const {id}=req.params;
  console.log(id)
  const query = {_id: new ObjectId(id)}
  try {
    const data = await Monitor.findOne(query);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred while fetching the Monitor data.' });
  }
}

module.exports = { getAllMonitor, getByBrand ,getSingleMonitorData};
