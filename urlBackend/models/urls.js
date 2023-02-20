import mongoose from "mongoose";

// Schema to dictate how our data is stored in MongoDB
const urlShortenerSchema = new mongoose.Schema({
    urlId: {
        type: String,
        required: true
    },
    originalUrl: {
        type: String,
        required: true
    },
    shortenedUrl: {
        type: String,
        required: true
    },
    numClicks: {
        type: Number,
        required: true,
        default: 0
    },
    timestamp: {
        type: String,
        default: Date.now(),
    },
});

// Exporting the Singlar Model and the Schema itself
export default mongoose.model('UrlObject', urlShortenerSchema);



