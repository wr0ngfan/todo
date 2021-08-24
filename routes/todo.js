import express from 'express';
import { allTodo, createTodo, fetchTodo } from '../controllers/todo.js';

const router = express.Router();

router.get('/', allTodo);

router.post('/', createTodo);

router.get('/:id', fetchTodo);

export default router;