import User from '../models/User'

class UserController {
  async store(req, res) {
    const created = await User.create({
      name: req.body.name,
      email: req.body.email,
      password_hash: req.body.password_hash,
    })

    return res.json(created)
  }

  async index(req, res) {
    const user = await User.findByPk(2)

    return res.json(user)
  }
}

export default new UserController()
