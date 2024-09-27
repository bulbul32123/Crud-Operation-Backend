
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const data = [
    {
        "id": 1,
        "title": "Sony WH-1000XM4",
        "model": "WH-1000XM4",
        "features": ["Noise Cancelling", "30 Hours Battery Life", "Touch Sensor Controls", "Quick Attention Mode"],
        "colors": ["Black", "Silver"],
        "price": 349.99,
        "brand": "Sony",
        "type": "Over-Ear",
        "wireless": true
    },
    {
        "id": 2,
        "title": "Bose QuietComfort 35 II",
        "model": "QuietComfort 35 II",
        "features": ["Noise Cancelling", "20 Hours Battery Life", "Alexa Enabled", "Dual Microphone System"],
        "colors": ["Black", "Silver", "Rose Gold"],
        "price": 299.99,
        "brand": "Bose",
        "type": "Over-Ear",
        "wireless": true
    },
    {
        "id": 3,
        "title": "Apple AirPods Pro",
        "model": "AirPods Pro",
        "features": ["Active Noise Cancellation", "Transparency Mode", "Customizable Fit", "24 Hours Battery Life"],
        "colors": ["White"],
        "price": 249.99,
        "brand": "Apple",
        "type": "In-Ear",
        "wireless": true
    },
    {
        "id": 4,
        "title": "Jabra Elite 85h",
        "model": "Elite 85h",
        "features": ["Active Noise Cancellation", "36 Hours Battery Life", "Voice Assistant Enabled", "Water-Resistant"],
        "colors": ["Black", "Titanium Black", "Gold Beige", "Navy"],
        "price": 249.99,
        "brand": "Jabra",
        "type": "Over-Ear",
        "wireless": true
    },
    {
        "id": 5,
        "title": "Sennheiser HD 450BT",
        "model": "HD 450BT",
        "features": ["Active Noise Cancellation", "30 Hours Battery Life", "Voice Assistant Support", "USB-C Fast Charging"],
        "colors": ["Black", "White"],
        "price": 199.99,
        "brand": "Sennheiser",
        "type": "Over-Ear",
        "wireless": true
    },
    {
        "id": 6,
        "title": "Beats Solo Pro",
        "model": "Solo Pro",
        "features": ["Active Noise Cancelling", "22 Hours Battery Life", "Foldable Design", "Apple H1 Chip"],
        "colors": ["Black", "Ivory", "Gray", "Dark Blue", "Red"],
        "price": 299.95,
        "brand": "Beats",
        "type": "On-Ear",
        "wireless": true
    },
    {
        "id": 7,
        "title": "Anker Soundcore Life Q20",
        "model": "Life Q20",
        "features": ["Hybrid Active Noise Cancelling", "40 Hours Battery Life", "Hi-Res Audio", "Memory Foam Ear Cups"],
        "colors": ["Black", "Silver"],
        "price": 59.99,
        "brand": "Anker",
        "type": "Over-Ear",
        "wireless": true
    },
    {
        "id": 8,
        "title": "Skullcandy Crusher Evo",
        "model": "Crusher Evo",
        "features": ["Adjustable Sensory Bass", "40 Hours Battery Life", "Built-In Tile Finding Technology", "Rapid Charge"],
        "colors": ["True Black", "Chill Gray", "Dark Blue/Green"],
        "price": 199.99,
        "brand": "Skullcandy",
        "type": "Over-Ear",
        "wireless": true
    },
    {
        "id": 9,
        "title": "Philips SHP9500",
        "model": "SHP9500",
        "features": ["High Precision Sound", "Comfortable Double Layered Headband", "Breathable Ear Cushions", "Open-Back Design"],
        "colors": ["Black"],
        "price": 79.99,
        "brand": "Philips",
        "type": "Over-Ear",
        "wireless": false
    },
    {
        "id": 10,
        "title": "Audio-Technica ATH-M50xBT",
        "model": "ATH-M50xBT",
        "features": ["40 Hours Battery Life", "Touch Control", "Studio-Quality Sound", "Built-In Microphone"],
        "colors": ["Black"],
        "price": 179.00,
        "brand": "Audio-Technica",
        "type": "Over-Ear",
        "wireless": true
    },
    {
        "id": 145,
        "title": "Sony WH-1000XM5 Wireless Noise-Cancelling Headphones",
        "model": "WH-1000XM5",
        "features": ["Industry-leading noise cancellation", "Superior sound quality with LDAC codec", "Up to 40 hours battery life", "Comfortable wearing experience"],
        "colors": ["Black", "Silver"],
        "price": 399.99,
        "brand": "Sony",
        "type": "Over-Ear",
        "wireless": true
        },
        {
        "id": 2345,
        "title": "Bose QuietComfort 45 Wireless Noise-Cancelling Headphones",
        "model": "QuietComfort 45",
        "features": ["Powerful noise cancellation", "Balanced audio with Bose EQ", "Up to 24 hours battery life", "Comfortable fit with plush ear cups"],
        "colors": ["Black", "White", "Beige"],
        "price": 329.00,
        "brand": "Bose",
        "type": "Over-Ear",
        "wireless": true
        },
        {
        "id": 3345,
        "title": "Sennheiser Momentum 3 Wireless Headphones",
        "model": "Momentum 3 Wireless",
        "features": ["Luxurious design with leather ear cups", "Excellent sound quality with aptX codec", "Up to 17 hours battery life", "Transparent Hearing mode for situational awareness"],
        "colors": ["Black", "Brown"],
        "price": 399.00,
        "brand": "Sennheiser",
        "type": "Over-Ear",
        "wireless": true
        },
        {
        "id": 4345,
        "title": "Apple AirPods Max Wireless Headphones",
        "model": "AirPods Max",
        "features": ["Active Noise Cancellation and Transparency mode", "Spatial audio with dynamic head tracking", "Up to 20 hours battery life", "Seamless integration with Apple devices"],
        "colors": ["Space Gray", "Silver", "Sky Blue", "Pink", "Green"],
        "price": 549.00,
        "brand": "Apple",
        "type": "Over-Ear",
        "wireless": true
        },
        {
        "id": 53453,
        "title": "Sony WH-CH710N Wireless Noise-Cancelling Headphones",
        "model": "WH-CH710N",
        "features": ["Affordable noise cancellation", "Long battery life of up to 35 hours", "Lightweight and comfortable design", "Quick Charge for 90 minutes of playback in 10 minutes"],
        "colors": ["Black", "Blue", "White"],
        "price": 149.99,
        "brand": "Sony",
        "type": "Over-Ear",
        "wireless": true
        },
        {
        "id": 6345,
        "title": "Jabra Elite 75t True Wireless Earbuds",
        "model": "Elite 75t",
        "features": ["Secure and comfortable fit", "Clear calls with 4-microphone technology", "Up to 28 hours combined battery life with charging case", "IP55 water resistance"],
        "colors": ["Black", "Titanium Black", "Gray"],
        "price": 129.00,
        "brand": "Jabra",
        "type": "In-Ear",
        "wireless": true
        },
        {
        "id": 73453,
        "title": "Samsung Galaxy Buds Pro True Wireless Earbuds",
        "model": "Galaxy Buds Pro",
        "features": ["Active Noise Cancellation and Ambient Aware mode", "High-quality sound with AKG tuning", "Intelligent auto-switching between devices", "Up to 18 hours battery life with charging case"],
        "colors": ["Black", "White", "Purple"],
        "price": 199.00,
        "brand": "Samsung",
        "type": "In-Ear",
        "wireless": true
        },
]


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

app.get('/api', (req, res) => {
  return res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
