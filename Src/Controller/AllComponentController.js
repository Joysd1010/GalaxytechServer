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


const getProcessor = async (req, res) => {
    try {
      const allProcessor = await Processor.find({}).toArray();
      res.json(allProcessor);
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
  const getAllProducts = async (req, res) => {
    try {
      const allProcessor = await getProcessor(res);
      const allMotherboard = await getMotherboard(res);
      const allHDD = await getHDD(res);
      const allSSD = await getSSD(res);
      const allRam = await getRam(res);
      const allPSU = await getPSU(res);
      const allGraphicsCard = await getGraphicsCard(res);
      const allCasing = await getCasing(res);
      const allCasingCooler = await getCasingCooler(res);
      const allCPUCooler = await getCPUCooler(res);
  
      const allProducts = [
        ...allProcessor,
        ...allMotherboard,
        ...allHDD,
        ...allSSD,
        ...allRam,
        ...allPSU,
        ...allGraphicsCard,
        ...allCasing,
        ...allCasingCooler,
        ...allCPUCooler,
      ];
  
      res.json(allProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching all products' });
    }
  };
  
  module.exports = {
    getProcessor,
    getMotherboard,
    getHDD,
    getSSD,
    getRam,
    getPSU,
    getGraphicsCard,
    getCasing,
    getCasingCooler,
    getCPUCooler,
    getAllProducts, // add this line to export the new function
  };