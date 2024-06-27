import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import MainPage from './pages/MainPage';
import AdminLoginPage from './pages/auth/AdminLoginPage';
import CharityEmployeeLoginPage from './pages/auth/CharityEmployeeLoginPage';
import RadiologyCenterLoginPage from './pages/auth/RadiologyCenterLoginPage';
import SystemSecretaryLoginPage from './pages/auth/SystemSecretaryLoginPage';
import DoctorLoginPage from './pages/auth/DoctorLoginPage';
import AdminPage from './pages/AdminPage';
import CharityEmployeePage from './pages/CharityEmployeePage';
import RadiologyCenterEmployeePage from './pages/RadiologyCenterEmployeePage';
import SystemSecretaryPage from './pages/SystemSecretaryPage';
import DoctorPage from './pages/DoctorPage';
import AddPage from './pages/AddPage';
import ListPage from './pages/ListPage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login/admin" element={<AdminLoginPage />} />
            <Route path="/login/charity-employee" element={<CharityEmployeeLoginPage />} />
            <Route path="/login/radiology-center" element={<RadiologyCenterLoginPage />} />
            <Route path="/login/system-secretary" element={<SystemSecretaryLoginPage />} />
            <Route path="/login/doctor" element={<DoctorLoginPage />} />
            <Route element={<ProtectedRoute roles={['admin']} />}>
                <Route path="/admin" element={<AdminPage />} />
            </Route>
            <Route element={<ProtectedRoute roles={['charity_employee']} />}>
                <Route path="/charity-employee" element={<CharityEmployeePage />} />
            </Route>
            <Route element={<ProtectedRoute roles={['radiology_center_employee']} />}>
                <Route path="/radiology-center-employee" element={<RadiologyCenterEmployeePage />} />
            </Route>
            <Route element={<ProtectedRoute roles={['system_secretary']} />}>
                <Route path="/system-secretary" element={<SystemSecretaryPage />} />
            </Route>
            <Route element={<ProtectedRoute roles={['doctor']} />}>
                <Route path="/doctor" element={<DoctorPage />} />
            </Route>
            <Route element={<ProtectedRoute roles={['admin', 'charity_employee']} />}>
                <Route path="/add/:entity" element={<AddPage />} />
            </Route>
            <Route element={<ProtectedRoute roles={['admin']} />}>
                <Route path="/list/:entity" element={<ListPage />} />
            </Route>
            {/* Add other routes as needed */}
        </Routes>
    </Router>
);

export default App;
