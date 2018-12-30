import BaseController from './BaseController'
import UserModel from '@/models/UserModel'
import * as bcrypt from 'bcrypt'

export default class AuthenticationController extends BaseController {
  constructor() {
    super()
    this.router.post('/login', this.login)
    this.router.post('/logout', this.logout)
    this.router.get('/auth-user', this.getAuthUser)
    this.router.get('/auth-users', this.setAuthUser)
  }

  async login(req, res) {
    const { body, session } = req
    const { email, password } = body
    const user = await UserModel.findOne({ where: { email } })
    if (!user) {
      res.status = 500
      res.json({ message: 'Cannot find email' })
      return
    }
    const isMatchPassword = await bcrypt.compare(password, user.password)
    if (!isMatchPassword) {
      res.status = 500
      res.json({ message: 'Password was not matched' })
      return
    }
    req.session.userId = user.get({ plain: true }).id
    res.json({ session, isMatchPassword })
  }

  async logout(req, res) {
    const { session } = req
    if (session) {
      req.session.destroy(function (err) {
        console.log('DESTROY SESSION')
      })
    }
    res.json({ message: 'OK' })
  }

  async setAuthUser(req, res) {
    const { session } = req
    req.session.userId = Math.random()
    res.json({ id: session.userId })
  }

  async getAuthUser(req, res) {
    const { session } = req
    res.json({ id: session.userId })
  }
}
