import { AppDataSource } from '../data-source';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entity/User';

// Get all users
export const getUsers = async (request: Request, response: Response) => {
    try {
        const users = await AppDataSource.getRepository(User).find();
        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json({ error: 'Error fetching users' });
    }
};

// Get a single user by ID
export const getUserById = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
        const user = await AppDataSource.getRepository(User).findOneBy({ id: parseInt(id, 10) });
        if (!user) {
            return response.status(404).json({ error: 'User not found' });
        }
        return response.status(200).json(user);
    } catch (error) {
        return response.status(500).json({ error: 'Error fetching user' });
    }
};

// Create a new user
export const createUser = async (request: Request, response: Response) => {
    try {
        const user = await AppDataSource.getRepository(User).save(request.body);
        return response.status(201).json(user);
    } catch (error) {
        return response.status(500).json({ error: 'Error creating user' });
    }
};

// Update an existing user
export const updateUser = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
        const user = await AppDataSource.getRepository(User).findOneBy({ id: parseInt(id, 10) });
        if (!user) {
            return response.status(404).json({ error: 'User not found' });
        }
        const updatedUser = await AppDataSource.getRepository(User).save({ ...user, ...request.body });
        return response.status(200).json(updatedUser);
    } catch (error) {
        return response.status(500).json({ error: 'Error updating user' });
    }
};

// Delete a user
export const deleteUser = async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
        const user = await AppDataSource.getRepository(User).findOneBy({ id: parseInt(id, 10) });
        if (!user) {
            return response.status(404).json({ error: 'User not found' });
        }
        await AppDataSource.getRepository(User).remove(user);
        return response.status(204).send();
    } catch (error) {
        return response.status(500).json({ error: 'Error deleting user' });
    }
};
