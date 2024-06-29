const RadiologyCenterFreeTime = require('../models/RadiologyCenterFreeTime');

exports.addRadiologyCenterFreeTime = async (req, res) => {
    try {
        const newRadiologyCenterFreeTime = new RadiologyCenterFreeTime(req.body);
        await newRadiologyCenterFreeTime.save();
        res.status(201).json(newRadiologyCenterFreeTime);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listRadiologyCenterFreeTimes = async (req, res) => {
    try {
        const radiologyCenterFreeTimes = await RadiologyCenterFreeTime.findAll();
        res.status(200).json(radiologyCenterFreeTimes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
