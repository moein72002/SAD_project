const RadiologyCenterEmployee = require('../models/RadiologyCenterEmployee');

exports.addRadiologyCenterEmployee = async (req, res) => {
    try {
        const radiologyCenterEmployee = await RadiologyCenterEmployee.create(req.body);
        res.status(201).json(radiologyCenterEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.listRadiologyCenterEmployees = async (req, res) => {
    try {
        const radiologyCenterEmployees = await RadiologyCenterEmployee.findAll();
        res.status(200).json(radiologyCenterEmployees);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
