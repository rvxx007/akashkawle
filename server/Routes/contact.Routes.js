import express from 'express';
import { create, getAll, update } from '../Controller/contact.Controller.js';

const router = express.Router();

router.post('/post/create/', create)
router.get('/get/getall/', getAll)
router.put('/patch/update/',update)

export default router;