const { ObjectId } = require("mongodb");
const client = require("../Config/DB_Config");
const GPU = client.db("GalaxyTech").collection("GraphicsCard");

const getAllGPU = async (req, res, next) => {
  try {
    
    const allGPUs = await GPU.find({}).toArray();
    res.json(allGPUs);
  } catch (error) {
    next(error);
  }
};

const getByBrand = async (req, res) => {
  try {
    const { brand } = req.params;

    const GPUs = await GPU.find({
      "keyFeatures.brandName": { $regex: brand, $options: "i" },
    }).toArray();
    res.json(GPUs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSingleGPUData = async (req, res) => {
  const { id } = req.params;

  const query = { _id: new ObjectId(id) };
  try {
    const data = await GPU.findOne(query);
    res.send(data);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "An error occurred while fetching the GPU data." });
  }
};

module.exports = {
  getAllGPU,
  getByBrand,
  getSingleGPUData,
  
};
