const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class HighlightsBoard extends Model {}

HighlightsBoard.init(
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
    message: {
      type: DataTypes.TEXT,
    },
    video_url: {
      type: DataTypes.STRING, 
    },
    entry_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'highlights_board',
  }
);

module.exports = HighlightsBoard;
