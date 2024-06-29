const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const bcrypt = require('bcryptjs');
const Location = require('./Location');

const SystemSecretary = sequelize.define('SystemSecretary', {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    national_id: { type: DataTypes.STRING(10), allowNull: false, unique: true },
    phone_number: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: false,
});

// Hook to hash password before saving
SystemSecretary.beforeCreate(async (systemSecretary, options) => {
    const salt = await bcrypt.genSalt(10);
    systemSecretary.password = await bcrypt.hash(systemSecretary.password, salt);
});

module.exports = SystemSecretary;
