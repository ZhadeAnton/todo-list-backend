import { Router } from 'express'
import { logTimeNow } from './handlers/logs'

const router = Router()

router.use(logTimeNow)

router.get('/', (req, res) => {
    res.json({ message: 'hello!'})
})


export default router