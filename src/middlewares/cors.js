import cors from 'cors';

export const corsMiddleware = cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
});
