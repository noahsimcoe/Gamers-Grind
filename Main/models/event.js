const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    day_id: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT, 
    },
    event_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'event',
  }
);

module.exports = Event;
