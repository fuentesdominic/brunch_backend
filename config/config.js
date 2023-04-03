require('dotenv').config()
module.exports = {
  development: {
    database: 'brunch_development',
    dialect: 'postgres'
  },
  test: {
    database: 'brunch_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}


