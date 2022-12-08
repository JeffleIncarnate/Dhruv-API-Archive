const { Pool } = require("pg"); // Pooling the requests to THIS and THIS ONLY connection
require("dotenv").config({ path: `${__dirname}/../../.env` });

const connectionString = process.env.CONNECTION_STRING;

// Creating the pool:
const pool = new Pool({
  connectionString,
});

// Then we are exporting it for other files to use.
module.exports = pool;
