document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('search-btn');
    const locationText = document.getElementById('location');
    const temperatureText = document.getElementById('temperature');
    const descriptionText = document.getElementById('description');

    searchButton.addEventListener('click', () => {
        const city = searchInput.value;
        fetch(`/weather?city=${city}`)
            .then((response) => response.json())
            .then((data) => {
                locationText.textContent = `Location: ${data.location}`;
                temperatureText.textContent = `Temperature: ${data.temperature}`;
                descriptionText.textContent = `Description: ${data.description}`;
            })
            .catch((error) => {
                locationText.textContent = '';
                temperatureText.textContent = 'City not found';
                descriptionText.textContent = '';
            });
    });
});
