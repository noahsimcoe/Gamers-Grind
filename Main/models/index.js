const User = require('./user');
const CalendarDay = require('./Calendar');
const Event = require('./event');
const HighlightsBoard = require('./HighlightsBoard');

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCASE'
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
  User,
  CalendarDay,
  Event,
  HighlightsBoard,
};
