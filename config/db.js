const { Sequelize } = require("sequelize");

// Create a Sequelize instance
const sequelize = new Sequelize("pg-boss-db", "postgres", "admin", {
  host: "localhost", // Assuming PostgreSQL is running on localhost
  dialect: "postgres", // Specify the dialect as PostgreSQL
  port: 5432, // Default PostgreSQL port
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Export the Sequelize instance and the test connection function
module.exports = { sequelize, testConnection };
