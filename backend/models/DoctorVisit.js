const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const DoctorFreeTime = require('./DoctorFreeTime');
const Patient = require('./Patient');
const Service = require('./Service');

const DoctorVisit = sequelize.define('DoctorVisit', {
    fact_doctor_free_time_id: {
        type: DataTypes.INTEGER,
        references: {
            model: DoctorFreeTime,
            key: 'id'
        },
        allowNull: false
    },
    patient_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Patient,
            key: 'id'
        },
        allowNull: false
    },
    service_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Service,
            key: 'id'
        },
        allowNull: false
    },
    tooth_number: { type: DataTypes.INTEGER, allowNull: false },
    raw_cost: { type: DataTypes.FLOAT, allowNull: false },
    is_reminded: { type: DataTypes.BOOLEAN, allowNull: false }
}, {
    timestamps: true,
});

module.exports = DoctorVisit;
