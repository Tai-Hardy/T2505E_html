document.addEventListener('DOMContentLoaded', () => {
    const weatherData = [
        {
            date: '2022-07-19',
            time: '06:00:00',
            temp: 31.87,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-19',
            time: '09:00:00',
            temp: 33.43,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-19',
            time: '12:00:00',
            temp: 29.61,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-19',
            time: '15:00:00',
            temp: 28.67,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-19',
            time: '18:00:00',
            temp: 28.09,
            description: 'overcast clouds',
            icon: 'overcast.png'
        },
        {
            date: '2022-07-19',
            time: '21:00:00',
            temp: 27.6,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-20',
            time: '00:00:00',
            temp: 28.89,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-20',
            time: '03:00:00',
            temp: 32.82,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-20',
            time: '06:00:00',
            temp: 34.24,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-20',
            time: '09:00:00',
            temp: 32.77,
            description: 'overcast clouds',
            icon: 'overcast.png'
        },
        {
            date: '2022-07-20',
            time: '12:00:00',
            temp: 29.65,
            description: 'overcast clouds',
            icon: 'overcast.png'
        },
        {
            date: '2022-07-20',
            time: '15:00:00',
            temp: 28.16,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-20',
            time: '18:00:00',
            temp: 26.49,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-20',
            time: '21:00:00',
            temp: 26.56,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-21',
            time: '00:00:00',
            temp: 27.66,
            description: 'light rain',
            icon: 'rain.png'
        },
        {
            date: '2022-07-21',
            time: '03:00:00',
            temp: 30.29,
            description: 'light rain',
            icon: 'rain.png'
        }
    ];

    const weatherContainer = document.querySelector('.weather-container');

    function createWeatherCard(data) {
        const card = document.createElement('div');
        card.classList.add('weather-card');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('weather-card-header');
        cardHeader.textContent = `${data.date} ${data.time}`;

        const cardBody = document.createElement('div');
        cardBody.classList.add('weather-card-body');

        const temperature = document.createElement('div');
        temperature.classList.add('temperature');
        temperature.innerHTML = `${data.temp.toFixed(2)}<span>°C</span>`;

        const weatherIcon = document.createElement('div');
        weatherIcon.classList.add('weather-icon');
        // You would need to have these icon images in your project
        // E.g., 'images/rain.png', 'images/overcast.png'
        weatherIcon.innerHTML = `<img src="images/${data.icon}" alt="${data.description}">`;

        cardBody.appendChild(temperature);
        cardBody.appendChild(weatherIcon);

        const weatherDescription = document.createElement('div');
        weatherDescription.classList.add('weather-description');
        weatherDescription.textContent = data.description;

        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        card.appendChild(weatherDescription);

        return card;
    }

    weatherData.forEach(data => {
        const card = createWeatherCard(data);
        weatherContainer.appendChild(card);
    });
});