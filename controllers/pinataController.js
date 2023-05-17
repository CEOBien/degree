const Pinata = require("../pinata");

const pinataController = {
  add: async (req, res) => {
    const url = req.body.url;
    try {
      const addPinata = new Pinata({ url });
      await addPinata.save();
      res.json("successfully!!!");
    } catch (error) {
      return console.log(error);
    }
  },
  get: async (req, res) => {
    const id = req.params.id;
    const getUrl = await Pinata.findById(id);
    res.json({ data: getUrl });
  },
  getAll: async (req, res) => {
    const getAll = await Pinata.find();
    res.json({ data: getAll });
  },
};

module.exports = pinataController;
