import UserModel from '@/models/UserModel'

export default {
  findUser(payload) {
    try {
      return UserModel.findOne(payload)
    } catch (error) {
      console.error(error)
    }
  }
}
