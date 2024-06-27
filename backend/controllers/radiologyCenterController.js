const RadiologyCenter = require('../models/RadiologyCenter');

exports.addRadiologyCenter = async (req, res) => {
    try {
        const radiologyCenter = await RadiologyCenter.create(req.body);
        res.status(201).json(radiologyCenter);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.listRadiologyCenters = async (req, res) => {
    try {
        const radiologyCenters = await RadiologyCenter.findAll();
        res.status(200).json(radiologyCenters);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
