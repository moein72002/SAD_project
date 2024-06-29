const express = require('express');
const app = express();
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const charityRoutes = require('./routes/charityRoutes');
const charityEmployeeRoutes = require('./routes/charityEmployeeRoutes');
const radiologyCenterRoutes = require('./routes/radiologyCenterRoutes');
const radiologyCenterEmployeeRoutes = require('./routes/radiologyCenterEmployeeRoutes');
const systemSecretaryRoutes = require('./routes/systemSecretaryRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');

const drugRoutes = require('./routes/drugRoutes');
const doctorFreeTimeRoutes = require('./routes/doctorFreeTimeRoutes');
const doctorVisitRoutes = require('./routes/doctorVisitRoutes');
const locationRoutes = require('./routes/locationRoutes');
const prescriptionRoutes = require('./routes/prescriptionRoutes');
const radiologyCenterFreeTimeRoutes = require('./routes/radiologyCenterFreeTimeRoutes');
const radiologyCenterVisitRoutes = require('./routes/radiologyCenterVisitRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use('/api/admins', adminRoutes);
app.use('/api/charities', charityRoutes);
app.use('/api/charity-employees', charityEmployeeRoutes);
app.use('/api/radiology-centers', radiologyCenterRoutes);
app.use('/api/radiology-center-employees', radiologyCenterEmployeeRoutes);
app.use('/api/system-secretaries', systemSecretaryRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/drugs', drugRoutes);
app.use('/api/doctor-free-times', doctorFreeTimeRoutes);
app.use('/api/doctor-visits', doctorVisitRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/radiology-center-free-times', radiologyCenterFreeTimeRoutes);
app.use('/api/radiology-center-visits', radiologyCenterVisitRoutes);
app.use('/api/services', serviceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
