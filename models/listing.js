const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
        type: String,
        // required: true,
    },
    description: String,
    image: {
        filename: String,
        url: {
            type: String,
            default:
                "https://www.alamy.com/random-pictures-of-nature-in-the-woods-image150193451.html?imageid=B8457C5A-A6A8-45D8-832A-1D618F439EA0&pn=1&searchId=8d2b90b12b9ffcb5475a94eede8fb33c&searchtype=0",
        },
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing" , ListingSchema);
module.exports = Listing;