import express from 'express';
import { nanoid } from 'nanoid';
import UrlObject from '../models/urls.js';
import { validateUrl } from '../utils/utils.js';
import dotenv from 'dotenv';


// dotenv.config({path: '../.env'});
dotenv.config({ path: '../config/.env' });

// Creating a Router
const router = express.Router();

// Generate the shortened URL via POST request
router.post('/shortened', async (request, response) => {
    // Extracting the Original URL provided by the client user
    const { originalUrl } = request.body;
    const baseUrl = process.env.BASE_URL;

    // Using nanoId to generate a unique & short token of length 6 to replace original URL 
    const urlId = nanoid(6);
    // Checking if the provided URL is valid
    if (utils.validateUrl(originalUrl)) {
        try {
            // Checking if URL provided by client already exists in DB
            let url = await UrlObject.findOne({ originalUrl });
            // Return the desired data if found
            if (url) {
                response.json(url);
            }
            else {
                // URL provided for the first time, new short URL is generated
                const shortenedUrl = '${baseUrl}/${urlId}';

                //  Creating a new Short URL object with the requisite data provided
                url = new Url({
                    originalUrl: originalUrl,
                    shortenedUrl: shortenedUrl,
                    urlId: urlId,
                    date: new Date(),
                });
                
                // Save the new URL in our DB and return the desired data as in if loop earlier.
                await url.save()
                response.json(url);
            }
        }
        // Exemption Handling
        catch (err) {
            console.log(err);
            response.status(500).json("MongoDB Server Error!!");
        }
    }
    else {
        response.status(400).json("Invalid URL!!");
    }
});

// Export the Router
export default router;