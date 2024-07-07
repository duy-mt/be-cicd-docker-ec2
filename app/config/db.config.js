module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Ruy@02082001",
  DB: "test",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
