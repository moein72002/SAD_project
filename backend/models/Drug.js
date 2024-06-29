const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Drug = sequelize.define('Drug', {
    drug_id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    drug_name: { type: DataTypes.STRING, allowNull: false },
    salt: { type: DataTypes.STRING, allowNull: true },
    dosage_form: { type: DataTypes.STRING, allowNull: false },
    strength: { type: DataTypes.STRING, allowNull: true },
    route_of_admin: { type: DataTypes.STRING, allowNull: true },
    atc_code: { type: DataTypes.STRING, allowNull: false },
    ingredient: { type: DataTypes.TEXT, allowNull: true },
    approved_clinical_indications: { type: DataTypes.TEXT, allowNull: false },
    access_level: { type: DataTypes.STRING, allowNull: true },
    remarks: { type: DataTypes.TEXT, allowNull: true },
    expiration_date: { type: DataTypes.DATE, allowNull: false }
}, {
    timestamps: false,
});

module.exports = Drug;
