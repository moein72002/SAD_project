const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const DoctorVisit = require('./DoctorVisit');
const Drug = require('./Drug');

const Prescription = sequelize.define('Prescription', {
    doctor_visit_id: {
        type: DataTypes.INTEGER,
        references: {
            model: DoctorVisit,
            key: 'id'
        },
        allowNull: false
    },
    drug_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Drug,
            key: 'drug_id'
        },
        allowNull: false
    }
}, {
    timestamps: false,
});

module.exports = Prescription;
