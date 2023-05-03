import mysql from "mysql2/promise";

export async function getData() {
  try {
    // Create a connection pool
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Execute a query
    const [rows, fields] = await connection.execute("SELECT * FROM data1");

    // Release the connection back to the pool
    connection.release();

    // Return the query results
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
