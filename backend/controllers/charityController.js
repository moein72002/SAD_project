const Charity = require('../models/Charity');

exports.addCharity = async (req, res) => {
    try {
        const charity = await Charity.create(req.body);
        res.status(201).json(charity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.listCharities = async (req, res) => {
    try {
        const charities = await Charity.findAll();
        res.status(200).json(charities);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
