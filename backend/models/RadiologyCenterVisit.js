const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const RadiologyCenterFreeTime = require('./RadiologyCenterFreeTime');
const Patient = require('./Patient');
const Service = require('./Service');
const DoctorVisit = require('./DoctorVisit');

const RadiologyCenterVisit = sequelize.define('RadiologyCenterVisit', {
    fact_radiology_center_free_time_id: {
        type: DataTypes.INTEGER,
        references: {
            model: RadiologyCenterFreeTime,
            key: 'id'
        },
        allowNull: false
    },
    doctor_visit_id: {
        type: DataTypes.INTEGER,
        references: {
            model: DoctorVisit,
            key: 'id'
        },
        allowNull: false
    },
    opg_image: { type: DataTypes.STRING, defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzWZDpX9gNdFKInBmkFHoVLumxNn7_4jIyA&s', allowNull: true },
    raw_cost: { type: DataTypes.FLOAT, allowNull: false },
    is_reminded: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
    timestamps: true,
});

module.exports = RadiologyCenterVisit;
