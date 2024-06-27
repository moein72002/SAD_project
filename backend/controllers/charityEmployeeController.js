const CharityEmployee = require('../models/CharityEmployee');

exports.addCharityEmployee = async (req, res) => {
    try {
        const charityEmployee = await CharityEmployee.create(req.body);
        res.status(201).json(charityEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.listCharityEmployees = async (req, res) => {
    try {
        const charityEmployees = await CharityEmployee.findAll();
        res.status(200).json(charityEmployees);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
