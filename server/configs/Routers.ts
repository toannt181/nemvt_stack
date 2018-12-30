import { Router } from 'express'

import UserController from '@/controllers/UserController'
import CustomerController from '@/controllers/CustomerController'

const router = Router()
router.use('/customers', new CustomerController().router)
router.use('/login', new UserController().router)

export default router
