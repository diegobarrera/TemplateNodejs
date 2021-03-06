'use strcit'

const configuration = {
  postgresDB: {
    uri: process.env.DATABASE_URL || 'postgres://postgres:@localhost:5432/postgres',
    options: {
      dialect: 'postgres',
      operatorsAliases: false,
      ssl: false,
      dialectOptions: {
        ssl: false
      }
    }
  },
  firebaseDB: {
    apiKey: 'AIzaSyDd8_RgweRwrYCaJQkJMjt3bCe6XRe4uMM',
    authDomain: 'addressbookstrvdev.firebaseapp.com',
    databaseURL: 'https://addressbookstrvdev.firebaseio.com',
    logging: true
  },
  authentication: {
    saltRounds: 8,
    jwtSecret: process.env.AUTH_KEY || 'secret',
    jwtOptions: {
      expiresIn: '1h',
      algorithm: 'HS256'
    }
  }
}

module.exports = configuration
