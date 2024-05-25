import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import SessionController from './controllers/SessionController'

const router = new Router()

router.post('/sessions', SessionController.store)

export default router