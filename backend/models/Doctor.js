const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const bcrypt = require('bcryptjs');
const Location = require('./Location');

const Doctor = sequelize.define('Doctor', {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    doctor_code: { type: DataTypes.STRING, allowNull: false, unique: true },
    major: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Location,
            key: 'id'
        },
        allowNull: false
    }
}, {
    timestamps: true,
});

// Hook to hash password before saving
Doctor.beforeCreate(async (doctor, options) => {
    const salt = await bcrypt.genSalt(10);
    doctor.password = await bcrypt.hash(doctor.password, salt);
});

module.exports = Doctor;
