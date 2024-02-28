const { ObjectId } = require("mongodb");
process.setMaxListeners(12); // Increase the limit to 12

const client = require("../Config/DB_Config");
// ---------------------------------------defining  the collection-------------------------
const Processor = client.db('GalaxyTech').collection('Processor');
const HDD = client.db('GalaxyTech').collection('HDD');
const SSD = client.db('GalaxyTech').collection('SSD');
const Ram = client.db('GalaxyTech').collection('Ram');
const Motherboard = client.db('GalaxyTech').collection('Motherboard');
const PSU = client.db('GalaxyTech').collection('PSU');
const GraphicsCard = client.db('GalaxyTech').collection('GraphicsCard');
const Casing = client.db('GalaxyTech').collection('Casing');
const CasingCooler = client.db('GalaxyTech').collection('CasingCooler');
const CPU_Cooler = client.db('GalaxyTech').collection('CPU_Cooler');
let componentItem = []



const Router = async (req, res) => {
  const { component } = req.params;

  try {
    switch (component) {
      case 'Motherboard':
        await getMotherboard(req, res);
        break;
      case 'HDD':
        await getHDD(req, res);
        break;
      case 'SSD':
        await getSSD(req, res);
        break;
      case 'Ram':
        await getRam(req, res);
        break;
      case 'PSU':
        await getPSU(req, res);
        break;
      case 'GraphicsCard':
        await getGraphicsCard(req, res);
        break;
      case 'Casing':
        await getCasing(req, res);
        break;
      case 'CasingCooler':
        await getCasingCooler(req, res);
        break;
      case 'CpuCooler':
        await getCPUCooler(req, res);
        break;
      case 'Processor':
        await getProcessors(req, res);
        break;
      default:
        res.status(404).json({ error: 'Component not found' });
        break;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProcessor = await Processor.find({}).toArray();
    const allHDD = await HDD.find({}).toArray();
    const allSSD = await SSD.find({}).toArray();
    const allCPU_Cooler = await CPU_Cooler.find({}).toArray();
    const allCasingCooler = await CasingCooler.find({}).toArray();
    const allCasing = await Casing.find({}).toArray();
    const allGraphicsCard = await GraphicsCard.find({}).toArray();
    const allMotherboard = await Motherboard.find({}).toArray();
    const allRam = await Ram.find({}).toArray();
    const allPSU = await PSU.find({}).toArray();

    const componentItem = [
      ...allProcessor,
      ...allHDD,
      ...allSSD,
      ...allCPU_Cooler,
      ...allCasingCooler,
      ...allCasing,
      ...allGraphicsCard,
      ...allMotherboard,
      ...allRam,
      ...allPSU,
    ];

    res.json(componentItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching processors' });
  }
};

const getSingleProducts = async (req, res) => {
  const { id } = req.params;

  try {
    // Combine data from different collections into a single array
    const allProcessor = await Processor.find({}).toArray();
    const allHDD = await HDD.find({}).toArray();
    const allSSD = await SSD.find({}).toArray();
    const allCPU_Cooler = await CPU_Cooler.find({}).toArray();
    const allCasingCooler = await CasingCooler.find({}).toArray();
    const allCasing = await Casing.find({}).toArray();
    const allGraphicsCard = await GraphicsCard.find({}).toArray();
    const allMotherboard = await Motherboard.find({}).toArray();
    const allRam = await Ram.find({}).toArray();
    const allPSU = await PSU.find({}).toArray();

    const componentItem = [
      ...allProcessor,
      ...allHDD,
      ...allSSD,
      ...allCPU_Cooler,
      ...allCasingCooler,
      ...allCasing,
      ...allGraphicsCard,
      ...allMotherboard,
      ...allRam,
      ...allPSU,
    ];

    // Find the product in the combined array using its ID
    const product = componentItem.find(item => item._id.toString() === id);

    if (!product) return res.status(404).json({ error: "Product not found" });

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the product' });
  }
};

const getFeaturedProducts = async (req, res) => {
  console.log('Getting featured products...');
  try {
    const allProcessor = await Processor.find({}).toArray();
    const allHDD = await HDD.find({}).toArray();
    const allSSD = await SSD.find({}).toArray();
    const allCPU_Cooler = await CPU_Cooler.find({}).toArray();
    const allCasingCooler = await CasingCooler.find({}).toArray();
    const allCasing = await Casing.find({}).toArray();
    const allGraphicsCard = await GraphicsCard.find({}).toArray();
    const allMotherboard = await Motherboard.find({}).toArray();
    const allRam = await Ram.find({}).toArray();
    const allPSU = await PSU.find({}).toArray();

    const componentItem = [
      ...allProcessor,
      ...allHDD,
      ...allSSD,
      ...allCPU_Cooler,
      ...allCasingCooler,
      ...allCasing,
      ...allGraphicsCard,
      ...allMotherboard,
      ...allRam,
      ...allPSU,
    ];

    // Shuffle the componentItem array
    for (let i = componentItem.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [componentItem[i], componentItem[j]] = [componentItem[j], componentItem[i]];
    }

    // Get the first 20 items from the shuffled array
    const randomItems = componentItem.slice(0, 20);

    res.json(randomItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching processors' });
  }
};

  const getMotherboard = async (req, res) => {
    try {
      const allMotherboard = await Motherboard.find({}).toArray();
      res.json(allMotherboard);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching motherboards' });
    }
  };

  const getHDD = async (req, res) => {
    try {
      const allHDD = await HDD.find({}).toArray();
      res.json(allHDD);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching HDDs' });
    }
  };

  const getSSD = async (req, res) => {
    try {
      const allSSD = await SSD.find({}).toArray();
      res.json(allSSD);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching SSDs' });
    }
  };

  const getRam = async (req, res) => {
    try {
      const allRam = await Ram.find({}).toArray();
      res.json(allRam);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching RAMs' });
    }
  };
  const getRamByBrand=async (req, res)=>{
    try {
      const { brand } = req.params;
  
      const GPUs = await Ram.find({
        "keyFeatures.brand": { $regex: brand, $options: "i" },
      }).toArray();
      res.json(GPUs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  const getPSU = async (req, res) => {
    try {
      const allPSU = await PSU.find({}).toArray();
      res.json(allPSU);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching PSUs' });
    }
  };

  const getGraphicsCard = async (req, res) => {
    try {
      const allGraphicsCard = await GraphicsCard.find({}).toArray();
      res.json(allGraphicsCard);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching graphics cards' });
    }
  };

  const getCasing = async (req, res) => {
    try {
      const allCasing = await Casing.find({}).toArray();
      res.json(allCasing);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching casings' });
    }
  };

  const getCasingCooler = async (req, res) => {
    try {
      const allCasingCooler = await CasingCooler.find({}).toArray();
      res.json(allCasingCooler);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching casing coolers' });
    }
  };

  const getCPUCooler = async (req, res) => {
    try {
      const allCPUCooler = await CPU_Cooler.find({}).toArray();
      res.json(allCPUCooler);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching CPU coolers' });
    }
  };
  const getProcessors = async (req, res) => {
    try {
      const allProcessor = await Processor.find({}).toArray();
      res.json(allProcessor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching CPU coolers' });
    }
  };
  



module.exports = {getFeaturedProducts,getSingleProducts,
  getAllProducts,
  getMotherboard,
  getHDD,
  getSSD,
  getRam,
  getPSU,
  getGraphicsCard,
  getCasing,
  getCasingCooler,
  getCPUCooler,
  getProcessors, getRamByBrand,
  Router
};