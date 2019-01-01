import * as Sequelize from 'sequelize'
import DB from '../configs/DB'
import CustomerModel from './CustomerModel'

const CompanyModel = DB.define('companies', {
  company_name: Sequelize.STRING,
  customer_id: Sequelize.INTEGER,
})

// CompanyModel.belongsTo(CustomerModel)

export default CompanyModel
