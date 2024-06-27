const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const Doctor = require('../models/Doctor');
const SystemSecretary = require('../models/SystemSecretary');
const RadiologyCenterEmployee = require('../models/RadiologyCenterEmployee');
const CharityEmployee = require('../models/CharityEmployee');

const roleModelMap = {
    "admin": Admin,
    "doctor": Doctor,
    "system_secretary": SystemSecretary,
    "radiology_center_employee": RadiologyCenterEmployee,
    "charity_employee": CharityEmployee,
};

const login = async (req, res) => {
    const { email, password, role } = req.body;
    const Model = roleModelMap[role];

    console.log(`email: ${email}`)

    if (!Model) {
        return res.status(400).json({ message: `Invalid role: ${role}` });
    }

    try {
        const user = await Model.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: `${role.charAt(0).toUpperCase() + role.slice(1)} not found` });
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        let payload = { id: user.id, role };

        if (role === 'charity_employee') {
            payload.charity_id = user.charity_id;
        } else if (role === 'radiology_center_employee') {
            payload.radiology_center_id = user.radiology_center_id;
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: 86400, // 24 hours
        });

        res.status(200).json({
            accessToken: token,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { login };
