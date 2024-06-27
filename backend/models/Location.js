const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Location = sequelize.define('Location', {
    sum_of_population: { type: DataTypes.INTEGER, allowNull: false },
    lat: { type: DataTypes.FLOAT, allowNull: false },
    lng: { type: DataTypes.FLOAT, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
}, {
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['city']
        }
    ]
});

module.exports = Location;
