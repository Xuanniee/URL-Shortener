// Simple Nodejs Server
import Express  from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

import indexRouter from './routes/index.js';
import urlsRouter from './routes/urls.js';

connectDB();
// Path to .env variables
dotenv.config({ path: './config/.env' });
// dotenv.config({ path: "./.env" })
// Create our App
const urlShortenerApp = Express();

// Read incoming requests
urlShortenerApp.use(Express.urlencoded({ extended: true }));
urlShortenerApp.use(Express.json());

urlShortenerApp.use('/xuannie', urlsRouter);
urlShortenerApp.use('/', indexRouter);

// Server Setup
const PORT = process.env.PORT;
urlShortenerApp.listen(PORT, () => {
    console.log("Server is currently running at Port Number ${PORT}");
})

