import AnnouncementRepository from '@/repositories/AnnouncementRepository'
import { format } from 'date-fns'

export default {
  ATTRIBUTES: ['id', 'title', 'content', 'updated_at', 'created_at'],

  async findAll(condition) {
    const announcements = await AnnouncementRepository.findAll(condition)
    return announcements
  },

  async findOne(condition) {
    const announcement = await AnnouncementRepository.findOne(condition)
    return announcement
  },

  async getAnnouncements(condition) {
    const announcements = await this.findAll({
      ...condition,
      raw: true,
      attributes: ['id', 'title', 'updated_at'],
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

  async getAnnouncement({ id }) {
    const { title, content, updated_at } = await this.findOne({
      where: { id },
      raw: true,
      attributes: this.ATTRIBUTES,
    })
    const date = format(updated_at, 'YYYY-MM-DD')
    return ({
      id,
      title,
      date,
      content,
    })
  },
}
