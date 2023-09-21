const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

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
      type: DataTypes.STRING, // Assuming events have a description
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
