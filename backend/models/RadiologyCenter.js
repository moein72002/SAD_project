const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Location = require('./Location');

const RadiologyCenter = sequelize.define('RadiologyCenter', {
    name: { type: DataTypes.STRING, allowNull: false },
    code: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone_number: { type: DataTypes.STRING, allowNull: false, unique: true },
    address: { type: DataTypes.TEXT, allowNull: false },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Location,
            key: 'id'
        },
        allowNull: false
    }
}, {
    timestamps: false,
});

module.exports = RadiologyCenter;
