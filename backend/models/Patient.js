const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Charity = require('./Charity');

const Patient = sequelize.define('Patient', {
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
    birthdate: { type: DataTypes.DATEONLY, allowNull: false },
    sex: { type: DataTypes.ENUM('male', 'female'), allowNull: false },
    age: {
        type: DataTypes.VIRTUAL,
        get() {
            return Math.floor((new Date() - new Date(this.birthdate)) / (365.25 * 24 * 60 * 60 * 1000));
        }
    }
}, {
    timestamps: true,
});

module.exports = Patient;
