const endpoint = 'https://api.weatherapi.com/v1';

const getCurrentWeatherByCity = async (cityName: string) => {
    try {
        const response = await fetch(
            `${endpoint}/current.json?key=${process.env.API_KEY}&q=${cityName}`
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
            `${endpoint}/forecast.json?key=${process.env.API_KEY}&q=${cityName}&days=${days}`
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
