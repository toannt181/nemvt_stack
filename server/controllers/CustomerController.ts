import BaseController from './BaseController'
import CustomerModel from '@/models/CustomerModel'

export default class CustomerController extends BaseController {
  constructor() {
    super()
    this.router.get('/', this.getCustomers)
  }

  async getCustomers(req, res) {
    const { params, query } = req
    const customers = await CustomerModel.findAll()
    res.json({ customers, params, query })
  }
}
