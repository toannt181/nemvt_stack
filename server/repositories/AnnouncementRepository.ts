import AnnouncementModel from '@/models/AnnouncementModel'

export default {
  findAll(payload) {
    try {
      return AnnouncementModel.findAll(payload)
    } catch (error) {
      console.error(error)
    }
  }
}
