import express from 'express';
import { json } from 'body-parser';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './controller/UserController';

const app = express();
app.use(json());

// User routes
app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
