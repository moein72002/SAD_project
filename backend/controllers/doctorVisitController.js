const DoctorVisit = require('../models/DoctorVisit');

exports.addDoctorVisit = async (req, res) => {
    try {
        const newDoctorVisit = new DoctorVisit(req.body);
        await newDoctorVisit.save();
        res.status(201).json(newDoctorVisit);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listDoctorVisits = async (req, res) => {
    try {
        const doctorVisits = await DoctorVisit.findAll();
        res.status(200).json(doctorVisits);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
