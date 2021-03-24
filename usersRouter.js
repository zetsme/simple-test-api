import express from 'express';
const router = express.Router();
import { getAllUsers, getUserById, createUser, deleteUser, patchUser } from './usersController.js';
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.patch('/:id', patchUser);
export default router;
