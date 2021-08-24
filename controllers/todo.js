import { v4 as uuidv4 } from 'uuid';

let todoLists = [] ;

export const allTodo = (req, res) => {
    res.send(todoLists);
}

export const createTodo = (req, res) => {
    const todo = req.body;
    todoLists.push({ ... todo, id: uuidv4() });
    res.send(todoLists); 
}

export const fetchTodo = (req, res) => {
    const { id } = req.params;
    const foundTodo = todoLists.find((todo) => todo.id == id);
    res.send(foundTodo);
}