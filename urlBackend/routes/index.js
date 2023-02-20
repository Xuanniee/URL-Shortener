// Redirect Users to the Actual Website
import express from "express";
import UrlObject from '../models/urls.js';

// Router Object
const router = express.Router();

// Search DB for Original URL and Send a GET Request
router.get('/:urlId', async(request, response) => {
    try {
        // Extract User URL from DB if any
        const url = await UrlObject.findOne({ urlId: request.params.urlId});

        // If Url found in Database
        if (url) {
            // Update the Number of Clicks if the URLID matches
            await UrlObject.updateOne({
                urlId: request.params.urlId,
            },{ 
                $inc: { numClicks: 1 }
            }
            );

            // Redirect User to where they want to go
            return response.redirect(url.originalUrl);
        }
        // Exception Handling
        else {
            // Famous Error
            response.status(404).json("Not Found!!");
        }
    }
    catch (err) {
        console.log(err);
        response.status(500).json("MongoDB Server Error!!");
    }
})

// Export Router to our Main App Function to use
export default router;


