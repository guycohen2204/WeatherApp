export const farenheitToCelsius = (degrees: number) => {
    return (degrees - 32) * (5 / 9);
};

export const celsiusToFarenheit = (degrees: number) => {
    return degrees * (9 / 5) + 32;
};
