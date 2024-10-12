import cors from 'cors';
export var corsMiddleware = cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
});