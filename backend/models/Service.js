const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Service = sequelize.define('Service', {
    total_cost: { type: DataTypes.FLOAT, allowNull: false },
    used_materials: { type: DataTypes.FLOAT, allowNull: false },
    technical_part: { type: DataTypes.FLOAT, allowNull: false },
    professional_part: { type: DataTypes.FLOAT, allowNull: false },
    service_type: { type: DataTypes.STRING, allowNull: false },
    service_description: { type: DataTypes.TEXT, allowNull: false },
    code: { type: DataTypes.STRING, allowNull: false, unique: true }
}, {
    timestamps: true,
});

module.exports = Service;
