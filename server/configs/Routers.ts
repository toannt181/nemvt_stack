import { Router } from 'express'

import AuthenticationController from '@/controllers/AuthenticationController'
import CustomerController from '@/controllers/CustomerController'

const router = Router()
router.use('/customers', new CustomerController().router)
router.use('/', new AuthenticationController().router)

export default router
