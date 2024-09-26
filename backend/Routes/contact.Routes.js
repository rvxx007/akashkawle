import express from 'express';
import { create, getAll, update } from '../Controller/contact.Controller.js';

const route = express.Router();

route.post('/post/create/', create)
route.get('/get/getall/', getAll)
route.put('/patch/update/',update)

export default route;