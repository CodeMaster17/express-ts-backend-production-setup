import express, { Application, NextFunction, Request, Response } from 'express';
import path from 'path';
import router from './router/apiRouter';
import globalErrorHandler from './middleware/globalErrorHandler';
import { responseMessage } from './constants/responseMessage';
import httpError from './utils/httpError';
import helmet from 'helmet';
import cors from 'cors';
const app: Application = express();

// middleware
app.use(helmet());
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        origin: ['http://localhost:3000'], // allow only frontend to access
        credentials: true // enable set cookie
    })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

// routes
app.use('/api/v1', router);

// 404 handler
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'));
    } catch (error) {
        httpError(next, error, req, 404);
    }
});

// global error handler
app.use(globalErrorHandler);

export default app;

