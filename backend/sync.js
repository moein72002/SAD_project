const sequelize = require('./config/sequelize');
const Admin = require('./models/Admin');
const cron = require('node-cron');
const { Op } = require('sequelize');
const DoctorVisit = require('./models/DoctorVisit');
const RadiologyCenterVisit = require('./models/RadiologyCenterVisit');
const SystemSecretary = require('./models/SystemSecretary');
const Patient = require('./models/Patient');
const Doctor = require('./models/Doctor');
const Service = require('./models/Service');
const RadiologyCenter = require('./models/RadiologyCenter');
const RadiologyCenterEmployee = require('./models/RadiologyCenterEmployee');
const Charity = require('./models/Charity');
const CharityEmployee = require('./models/CharityEmployee');
const Drug = require('./models/Drug');
const Location = require('./models/Location');
const DoctorFreeTime = require('./models/DoctorFreeTime');
const RadiologyCenterFreeTime = require('./models/RadiologyCenterFreeTime');

const defaultAdmin = {
    first_name: 'John',
    last_name: 'Doe',
    national_id: '1234567890',
    phone_number: '1234567890',
    email: 'admin@example.com',
    password: '1234m',
};

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });

        await Admin.create(defaultAdmin);

        console.log('Database synchronized and default admin added');

        // Schedule the task to run daily at midnight
        cron.schedule('0 0 * * *', async () => {
            console.log('Running daily reminder task');
            const oneDayFromNow = new Date(Date.now() + 24 * 60 * 60 * 1000);

            try {
                await DoctorVisit.update(
                    { is_reminded: true },
                    {
                        where: {
                            date: {
                                [Op.eq]: oneDayFromNow.toISOString().split('T')[0]
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
                                [Op.eq]: oneDayFromNow.toISOString().split('T')[0]
                            },
                            is_reminded: false
                        }
                    }
                );
            } catch (error) {
                console.error('Error updating reminders:', error);
            }

            console.log('Daily reminder task completed');
        });
    } catch (error) {
        console.error('Error syncing models:', error);
    } finally {
        await sequelize.close();
    }
};

syncDatabase();
