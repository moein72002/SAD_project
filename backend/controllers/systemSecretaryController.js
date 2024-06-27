const SystemSecretary = require('../models/SystemSecretary');

exports.addSystemSecretary = async (req, res) => {
    try {
        const systemSecretary = await SystemSecretary.create(req.body);
        res.status(201).json(systemSecretary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.listSecretaries = async (req, res) => {
    try {
        const systemSecretaries = await SystemSecretary.findAll();
        res.status(200).json(systemSecretaries);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
