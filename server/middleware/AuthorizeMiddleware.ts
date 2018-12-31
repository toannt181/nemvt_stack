import * as jwt from 'jsonwebtoken'

export default async function AuthorizeMiddleware(req, res, next) {
  const { headers: { authorization } } = req
  const accessToken = authorization && authorization.split(' ')[1]
  if (!accessToken) {
    return res.status(401).json({ message: 'Unauthorized user' })
  }
  const user = await vertifyJWT(accessToken)
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized user' })
  }
  req.user = user
  next()
}

function vertifyJWT(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err) {
        reject(err)
        return
      }
      resolve(decoded)
    })
  })
}