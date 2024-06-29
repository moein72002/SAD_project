const Drug = require('../models/Drug');

exports.addDrug = async (req, res) => {
    try {
        const newDrug = new Drug(req.body);
        await newDrug.save();
        res.status(201).json(newDrug);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listDrugs = async (req, res) => {
    try {
        const drugs = await Drug.findAll();
        res.status(200).json(drugs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
