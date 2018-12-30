import BaseController from './BaseController'
import UserModel from '@/models/UserModel'

export default class UserController extends BaseController {
  constructor() {
    super()
    this.router.post('/', this.login)
  }

  async login(req, res) {
    const { body } = req
    try {
      const result = await UserModel.create({ ...body })
      res.json({ data: result.get({ plain: true }) })
    } catch (e) {
      console.error(e)
      res.status(500)
      res.send({
        error: e,
      })
    }
  }
}
