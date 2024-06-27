const cron = require('node-cron');
const { Op } = require('sequelize');
const sequelize = require('../config/sequelize');
const DoctorVisit = require('../models/DoctorVisit');
const RadiologyCenterVisit = require('../models/RadiologyCenterVisit');

const runReminderTask = async () => {
    const oneDayFromNow = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const oneDayFromNowDateOnly = oneDayFromNow.toISOString().split('T')[0];

    try {
        await DoctorVisit.update(
            { is_reminded: true },
            {
                where: {
                    date: {
                        [Op.eq]: oneDayFromNowDateOnly
                    },
                    is_reminded: false
                }
            }
        );

        await RadiologyCenterVisit.update(
            { is_reminded: true },
            {
                where: {
                    date: {
                        [Op.eq]: oneDayFromNowDateOnly
                    },
                    is_reminded: false
                }
            }
        );

        console.log('Reminder task completed successfully');
    } catch (error) {
        console.error('Error updating reminders:', error);
    }
};

// Schedule the task to run daily at midnight
cron.schedule('0 0 * * *', runReminderTask);

module.exports = runReminderTask;
