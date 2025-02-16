import express from 'express';
import { activateUser, registerUser } from '../controllers/user.controller';

const route = express.Router();

// Define the routes
// api/user/register
route.post('/register', registerUser);
//api/user/activate-account
route.post('/activate-account', activateUser);
