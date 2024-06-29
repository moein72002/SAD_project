const sequelize = require('./config/sequelize');
const Admin = require('./models/Admin');
const cron = require('node-cron');
const { Op } = require('sequelize');
const DoctorVisit = require('./models/DoctorVisit');
const RadiologyCenterVisit = require('./models/RadiologyCenterVisit');
const SystemSecretary = require('./models/SystemSecretary');
const Patient = require('./models/Patient');
const Prescription = require('./models/Prescription');
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
    id: 6,
    first_name: 'John',
    last_name: 'Doe',
    national_id: '1234567890',
    phone_number: '1234567890',
    email: 'admin@example.com',
    password: '1234m',
};

const syncDatabase = async () => {
    try {
        await sequelize.sync();

        // await Admin.create(defaultAdmin);

        console.log('Database synchronized and default admin added');

    } catch (error) {
        console.error('Error syncing models:', error);
    } finally {
        await sequelize.close();
    }
};

syncDatabase();
