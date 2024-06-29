const DoctorFreeTime = require('../models/DoctorFreeTime');

exports.addDoctorFreeTime = async (req, res) => {
    try {
        const newDoctorFreeTime = new DoctorFreeTime(req.body);
        await newDoctorFreeTime.save();
        res.status(201).json(newDoctorFreeTime);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listDoctorFreeTimes = async (req, res) => {
    try {
        const doctorFreeTimes = await DoctorFreeTime.findAll();
        res.status(200).json(doctorFreeTimes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
