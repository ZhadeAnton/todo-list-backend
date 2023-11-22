import { Router } from 'express'
import { logTimeNow } from './handlers/logs'

const router = Router()

router.use(logTimeNow)

export default router