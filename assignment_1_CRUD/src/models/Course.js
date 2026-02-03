const { DataTypes } = require("sequelize");
const { sequelize } = require("../configuration/dbConnect");

const Course = sequelize.define("course", {
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  courseDuration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  coursePrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = {Course}