const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

// Define a model
const User = sequelize.define("User", {
  // Define model attributes
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Export the User model
module.exports = User;
