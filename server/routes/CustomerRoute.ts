import BaseRoute from './BaseRoute'

export default class CustomerRoute extends BaseRoute {
  constructor() {
    super()
    this.router.get('/', this.getCustomers)
  }

  private getCustomers(req, res) {
    const { params, query } = req
    res.json({ customers: [], params, query })
  }
}
