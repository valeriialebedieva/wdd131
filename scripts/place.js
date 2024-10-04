document.addEventListener('DOMContentLoaded', () => {

    const temperature = 10;
    const windSpeed = 5;

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) {
            return (13.12 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(1);
        }
        return "N/A";
    }

    const windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill').textContent = `Wind Chill: ${windChillValue} °C`;

    document.getElementById('last-modified').textContent = document.lastModified;
});
