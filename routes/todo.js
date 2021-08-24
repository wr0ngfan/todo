import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Goodbye, World');
});

router.post('/', (req, res) => {
    const newTodo = req.body;
    
});


export default router;