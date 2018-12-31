import BaseController from './BaseController'
import AnnouncementServices from '@/services/AnnouncementServices'

export default class AnnouncementController extends BaseController {
  constructor() {
    super()
    this.router.get('/', this.getAnnouncements)
  }

  async getAnnouncements(req, res, next) {
    try {
      const data = await AnnouncementServices.getAnnouncements({ limit: 5 })
      res.json({ data })
    } catch (error) {
      console.log('ERR', error)
      next(new Error('Failed to load announcement'))
    }
  }
}
