import CustomerModel from '@/models/CustomerModel'
import CompanyModel from '@/models/CompanyModel'

export default {
  async findAll(payload) {
    try {
      return CustomerModel.findAll({
        ...payload,
        include: [{
          model: CompanyModel,
          attributes: ['id', 'company_name', 'customer_id']
        }],
      })
    } catch (error) {
      console.error(error)
    }
  },

  async findAllWithoutAssociation(payload) {
    try {
      return CustomerModel.findAll(payload)
    } catch (error) {
      console.error(error)
    }
  },

  findOne(payload) {
    try {
      return CustomerModel.findOne(payload)
    } catch (error) {
      console.error(error)
    }
  }
}
