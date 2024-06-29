const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Location = require('./Location');

const Charity = sequelize.define('Charity', {
    name: { type: DataTypes.STRING, allowNull: false },
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

module.exports = Charity;
