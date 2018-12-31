import { Router } from 'express'

import AuthorizeMiddleware from '@/middleware/AuthorizeMiddleware'

import AuthenticationController from '@/controllers/AuthenticationController'
import CustomerController from '@/controllers/CustomerController'
import AnnouncementController from '@/controllers/AnnouncementController'
import UserController from '@/controllers/UserController'

const router = Router()

router.use(new AuthenticationController().router)

const listRouters = [
  {
    path: '/customers',
    middleware: [AuthorizeMiddleware],
    handler: new CustomerController().router,
  },
  {
    path: '/announcements',
    middleware: [AuthorizeMiddleware],
    handler: new AnnouncementController().router,
  },
  {
    path: '/',
    middleware: [AuthorizeMiddleware],
    handler: new UserController().router,
  },
]

listRouters.forEach(({ path, middleware, handler }) => {
  router.use(path, middleware, handler)
})

export default router
