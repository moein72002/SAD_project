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
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use('/api/admins', adminRoutes);
app.use('/api/charities', charityRoutes);
app.use('/api/charity-employees', charityEmployeeRoutes);
app.use('/api/radiology-center', radiologyCenterRoutes);
app.use('/api/radiology-center-employees', radiologyCenterEmployeeRoutes);
app.use('/api/secretaries', systemSecretaryRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
