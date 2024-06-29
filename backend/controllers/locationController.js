const Location = require('../models/Location');

exports.addLocation = async (req, res) => {
    try {
        const newLocation = new Location(req.body);
        await newLocation.save();
        res.status(201).json(newLocation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listLocations = async (req, res) => {
    try {
        const locations = await Location.findAll();
        res.status(200).json(locations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
