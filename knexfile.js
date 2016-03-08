module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/rad_people'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};