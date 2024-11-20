const apiKey = 'fdf942f263cc4c66ae7120239241111';
const endpoint = 'https://api.weatherapi.com/v1';

const getCurrentWeatherByCity = async (cityName: string) => {
    try {
        const response = await fetch(
            `${endpoint}/current.json?key=${apiKey}&q=${cityName}`
        );

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

const getForecastByCity = async (cityName: string, days: number) => {
    try {
        const response = await fetch(
            `${endpoint}/forecast.json?key=${apiKey}&q=${cityName}&days=${days}`
        );

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};
