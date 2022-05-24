module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi_template"),
      user: env("DATABASE_USERNAME", "maraval"),
      password: env("DATABASE_PASSWORD", "N2normandie"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
