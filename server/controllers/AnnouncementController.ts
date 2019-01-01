import BaseController from './BaseController'
import AnnouncementServices from '@/services/AnnouncementServices'

export default class AnnouncementController extends BaseController {
  constructor() {
    super()
    this.router.get('/', this.getAnnouncements)
    this.router.get('/:id', this.getAnnouncement)
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

  async getAnnouncement(req, res, next) {
    try {
      const { id } = req.params
      const data = await AnnouncementServices.getAnnouncement({ id })
      res.json({ data })
    } catch (error) {
      console.log('ERR', error)
      next(new Error('Failed to load announcement'))
    }
  }
}
