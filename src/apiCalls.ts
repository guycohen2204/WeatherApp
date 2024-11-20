const apiKey = 'fdf942f263cc4c66ae7120239241111';
const endpoint = 'http://api.weatherapi.com/v1';

const getCurrentWeatherByCity = async (cityName: string) => {
    try {
        const response = await fetch(`${endpoint}/current.json?key=${apiKey}&q=${cityName}`);
    } catch (error) {

    }
}

const getForecastByCity = async (cityName: string, days: number) => {
    try {
        const response = await fetch(`${endpoint}/forecast.json?key=${apiKey}&q=${cityName}&days=${days}`);
    } catch (error) {
        
    }
}