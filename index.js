import express from 'express';
import bodyParser from 'body-parser';

import todoList from './routes/todo.js';

const app = express();
const PORT = 5000;

app.use('/todo', todoList);

app.get('/', (req, res) => {
    res.send('Hello, World')
});

app.listen(PORT, () => console.log(`Server is running on PORT http://localhost:${PORT}`));