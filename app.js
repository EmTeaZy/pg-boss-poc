const PgBoss = require("pg-boss");
const User = require("./models/user");

// Initialize PgBoss with your PostgreSQL connection details
const boss = new PgBoss("postgres://postgres:admin@localhost:5432/pg-boss-db");

const AddUserJobHandler = async (job) => {
  const user = await User.create({
    firstName: job.data.firstName,
    lastName: job.data.lastName,
  });

  console.log(`Added user with the name: ${user.firstName} ${user.lastName}`);
  await boss.send("add-user", { firstName: "Talha", lastName: "Zafar" });
};

// Schedule jobs
async function scheduleJobs() {
  await boss.start();

  const jobID = await boss.send(
    "add-user",
    { firstName: "Talha", lastName: "Zafar" },
    { startAfter: "PT5S" } // Configuring the job to start after 5 seconds
  );

  await boss.work("add-user", AddUserJobHandler);

  console.log("Jobs scheduled successfully with the ID: " + jobID);
}

scheduleJobs().catch(console.error);
