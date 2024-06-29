const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Charity = require('./Charity');
const bcrypt = require('bcryptjs');

const CharityEmployee = sequelize.define('CharityEmployee', {
    charity_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Charity,
            key: 'id'
        },
        allowNull: false
    },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    national_id: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone_number: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: false,
});

// Hook to hash password before saving
CharityEmployee.beforeCreate(async (charity_employee, options) => {
    const salt = await bcrypt.genSalt(10);
    charity_employee.password = await bcrypt.hash(charity_employee.password, salt);
});

module.exports = CharityEmployee;
