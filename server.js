const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/weather', async (req, res) => {
    const { city } = req.query;
    const apiKey = 'ad2bbfa324ba1fa6a95df1cf2d1f996a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        const weatherInfo = {
            location: data.name,
            temperature: `${data.main.temp}°C`,
            description: data.weather[0].description,
        };
        res.json(weatherInfo);
    } catch (error) {
        res.status(404).json({ message: 'City not found' });
    }
});
