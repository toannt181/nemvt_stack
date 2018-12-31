import AnnouncementRepository from '@/repositories/AnnouncementRepository'
import { format } from 'date-fns'

export default {
  ATTRIBUTES: ['id', 'title', 'updated_at', 'created_at'],

  async findAll(condition) {
    const announcements = await AnnouncementRepository.findAll(condition)
    return announcements
  },

  async getAnnouncements(condition) {
    const announcements = await this.findAll({
      ...condition,
      raw: true,
      attributes: this.ATTRIBUTES,
    })
    return announcements.map(announcement => {
      const { id, title, updated_at } = announcement
      const date = format(updated_at, 'YYYY-MM-DD')
      return ({
        id,
        title,
        date,
      })
    })
  },
}
