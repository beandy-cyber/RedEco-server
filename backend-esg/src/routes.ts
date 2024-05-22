import { Request, Response, Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './controller/UserController';

const routes = Router();

// Home route for testing
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Welcome to RedEco!' });
});

// User routes
routes.get('/users', getUsers);
routes.get('/users/:id', getUserById);
routes.post('/users', createUser);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', deleteUser);

export default routes;
