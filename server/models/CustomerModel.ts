import * as Sequelize from 'sequelize'
import DB from '../configs/DB'

export default DB.define('customers', {
  name: Sequelize.STRING,
  code: Sequelize.STRING,
  pic_name: Sequelize.STRING,
})
