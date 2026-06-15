const pool = require("../config/db");

const createService = async (title, category, description, price, provider_name) => {
  const query = `
    INSERT INTO services (title, category, description, price, provider_name)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [title, category, description, price, provider_name];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getAllServices = async () => {
  const query = `
    SELECT * FROM services
    ORDER BY id DESC;
  `;

  const result = await pool.query(query);
  return result.rows;
};

const getServiceById = async (id) => {
  const query = `
    SELECT * FROM services
    WHERE id = $1;
  `;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
};