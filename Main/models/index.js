const Sequelize = require('sequelize');
const sequelize = require('./config/connection');

const User = require('./models/User');
const CalendarDay = require('./models/CalendarDay');
const Event = require('./models/Event');
const HighlightsBoard = require('./models/HighlightsBoard');

User.hasMany(Event, {
  foreignKey: 'user_id',
});

CalendarDay.hasMany(Event, {
  foreignKey: 'day_id',
});

User.hasMany(HighlightsBoard, {
  foreignKey: 'user_id',
});

Event.belongsTo(User, {
  foreignKey: 'user_id',
});

Event.belongsTo(CalendarDay, {
  foreignKey: 'day_id',
});

HighlightsBoard.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = {
  sequelize,
  User,
  CalendarDay,
  Event,
  HighlightsBoard,
};
