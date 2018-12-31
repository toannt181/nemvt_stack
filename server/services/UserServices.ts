import UserRepository from '@/repositories/UserRepository'

export default {
  ATTRIBUTES: ['id', 'email', 'role'],

  async findOne(condition) {
    const user = await UserRepository.findUser(condition)
    return user.toJSON()
  },

  async findUser(where) {
    const user = await this.findOne({
      where,
      attributes: this.ATTRIBUTES,
    })
    return user
  },

  async loginUser(where) {
    const user = await this.findOne({
      where,
      attributes: ['id', 'email', 'password'],
    })
    return user
  },

  async updateToken(where, access_token) {
    const user = await UserRepository.findUser({
      where
    })
    return user.update({ access_token })
  },
}
