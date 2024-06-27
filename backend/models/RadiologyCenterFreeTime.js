const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const RadiologyCenter = require('./RadiologyCenter');

const RadiologyCenterFreeTime = sequelize.define('RadiologyCenterFreeTime', {
    radiology_center_id: {
        type: DataTypes.INTEGER,
        references: {
            model: RadiologyCenter,
            key: 'id'
        },
        allowNull: false
    },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    start_time: { type: DataTypes.TIME, allowNull: false },
    finish_time: { type: DataTypes.TIME, allowNull: false }
}, {
    timestamps: true,
});

// Custom method to partition free time into 30-minute intervals
RadiologyCenterFreeTime.addFreeTime = async function (radiology_center_id, date, start_time, end_time) {
    const intervals = [];
    let startTime = new Date(`${date}T${start_time}`);
    const endTime = new Date(`${date}T${end_time}`);
    while (startTime < endTime) {
        const finishTime = new Date(startTime.getTime() + 30 * 60000); // 30 minutes later
        intervals.push({
            radiology_center_id,
            date,
            start_time: startTime.toTimeString().slice(0, 8),
            finish_time: finishTime.toTimeString().slice(0, 8)
        });
        startTime = finishTime;
    }
    await RadiologyCenterFreeTime.bulkCreate(intervals);
};

module.exports = RadiologyCenterFreeTime;
