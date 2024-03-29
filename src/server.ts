import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
// @ts-ignore
import helmet from 'helmet';
import path from 'path';
import { pino } from 'pino';

import errorHandler from '@common/middleware/errorHandler';
import rateLimiter from '@common/middleware/rateLimiter';
import requestLogger from '@common/middleware/requestLogger';
import { getCorsOrigin } from '@common/utils/envConfig';
import UserController from "@src/routes/user/user.controller";
import models from '/src/db/models';

const { User } = models;

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const logger = pino({ name: 'server start' });
const app: Express = express();
const corsOrigin = getCorsOrigin();

// Middlewares
app.use(cors({ origin: [corsOrigin], credentials: true }));
app.use(helmet());
app.use(rateLimiter);

// Request logging
app.use(requestLogger());

// Routes
// app.use('/health-check', healthCheckRouter);
app.get('/users', UserController.getAll);
// app.use('/users', UserRouter);

// Swagger UI
// app.use(openAPIRouter);
//
// Error handlers
app.use(errorHandler());

export { app, logger };
