import { Router } from 'express'
import { logTimeNow } from './handlers/logs'
import { createUser, signIn } from './handlers/user'
import { userValidation } from './modules/userValidation';

const router = Router()

router.use(logTimeNow)

router.get('/', (req, res) => {
    res.json({ message: 'hello!'})
})

router.post('/user', userValidation(), createUser)
router.get('/user', userValidation(), signIn)

export default router