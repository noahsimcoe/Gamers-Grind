const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CalendarDay extends Model {}

CalendarDay.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    day_of_week: {
      type: DataTypes.STRING,
    },
    month: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'calendar_day',
  }
);

module.exports = CalendarDay;
