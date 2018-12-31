import * as jwt from 'jsonwebtoken'

export default async function AuthorizeMiddleware(req, res, next) {
  const { headers: { authorization } } = req
  const accessToken = authorization && authorization.split(' ')[1]
  if (!accessToken) {
    unauthenticated(res)
  }
  try {
    const user = await vertifyJWT(accessToken)
    if (!user) {
      throw new Error('User unauthenticated')
    }
    req.user = user
    next()
  } catch (error) {
    console.error(error)
    unauthenticated(res)
  }
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

function unauthenticated(res) {
  return res.status(401).json({ message: 'Unauthorized user' })
}