export default function DetachTokenHeaders(req, _, next) {
  const { headers: { authorization } } = req
  const accessToken = authorization && authorization.split(' ')[1]
  req.token = accessToken
  next()
}
