const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Drug = sequelize.define('Drug', {
    drug_name: { type: DataTypes.STRING, allowNull: false },
    salt: { type: DataTypes.STRING, allowNull: false },
    dosage_form: { type: DataTypes.STRING, allowNull: false },
    dosage: { type: DataTypes.STRING, allowNull: false },
    usage: { type: DataTypes.TEXT, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    ingredients: { type: DataTypes.TEXT, allowNull: false },
    clinical_verified: { type: DataTypes.BOOLEAN, allowNull: false },
    access_level: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    expiration_date: { type: DataTypes.DATE, allowNull: false }
}, {
    timestamps: true,
});

module.exports = Drug;
