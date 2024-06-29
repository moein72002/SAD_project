const Service = require('../models/Service');

exports.addService = async (req, res) => {
    try {
        const newService = new Service(req.body);
        await newService.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listServices = async (req, res) => {
    try {
        const services = await Service.findAll();
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
