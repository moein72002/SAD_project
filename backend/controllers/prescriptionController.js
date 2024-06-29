const Prescription = require('../models/Prescription');

exports.addPrescription = async (req, res) => {
    try {
        const newPrescription = new Prescription(req.body);
        await newPrescription.save();
        res.status(201).json(newPrescription);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.findAll();
        res.status(200).json(prescriptions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
