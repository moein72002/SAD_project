const RadiologyCenterVisit = require('../models/RadiologyCenterVisit');

exports.addRadiologyCenterVisit = async (req, res) => {
    try {
        const newRadiologyCenterVisit = new RadiologyCenterVisit(req.body);
        await newRadiologyCenterVisit.save();
        res.status(201).json(newRadiologyCenterVisit);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listRadiologyCenterVisits = async (req, res) => {
    try {
        const radiologyCenterVisits = await RadiologyCenterVisit.findAll();
        res.status(200).json(radiologyCenterVisits);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
