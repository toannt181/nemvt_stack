import * as Sequelize from 'sequelize'
import DB from '../configs/DB'
import CompanyModel from './CompanyModel'

const CustomerModel = DB.define('customers', {
  name: Sequelize.STRING,
  code: Sequelize.STRING,
  pic_name: Sequelize.STRING,
})

CustomerModel.hasOne(CompanyModel)

export default CustomerModel
