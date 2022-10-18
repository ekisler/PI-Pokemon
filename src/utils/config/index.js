// aca vamos a interactuar con nuestro entorno
require('dotenv').config();

module.exports = {
    dbUser: process.env.DB_USER,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST,
    dbPassword: process.env.DB_PASSWORD,
    host: process.env.HOST,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
}