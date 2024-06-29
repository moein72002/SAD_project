const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const RadiologyCenter = require('./RadiologyCenter');
const bcrypt = require('bcryptjs');

const RadiologyCenterEmployee = sequelize.define('RadiologyCenterEmployee', {
    radiology_center_id: {
        type: DataTypes.INTEGER,
        references: {
            model: RadiologyCenter,
            key: 'id'
        },
        allowNull: false
    },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    national_id: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone_number: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: false,
});

// Hook to hash password before saving
RadiologyCenterEmployee.beforeCreate(async (radiology_center_employee, options) => {
    const salt = await bcrypt.genSalt(10);
    radiology_center_employee.password = await bcrypt.hash(radiology_center_employee.password, salt);
});

module.exports = RadiologyCenterEmployee;
