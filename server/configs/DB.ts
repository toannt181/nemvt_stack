import * as Sequelize from 'sequelize'

const { 
  DB_HOST,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
} = process.env

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  define: {
    underscored: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    timestamps: true,
  },
  sync: { force: true },
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
})

export default sequelize
