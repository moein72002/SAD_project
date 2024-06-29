const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');

exports.addPatient = async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.listCharityPatients = async (req, res) => {
    try {
        const token = req.header('Authorization')?.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Access denied' });
        // const charity_id = jwt.decode(token).charity_id;

        const patients =
            await Patient.findAll();
        res.status(200).json(patients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
