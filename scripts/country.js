// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    return temperature <= 10 && windSpeed > 4.8 ? Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) : "N/A";
}

// Display wind chill factor when the page loads
window.addEventListener('load', function() {
    const temperature = 25; // Static temperature value for testing
    const windSpeed = 10; // Static wind speed value for testing
    const windChillElement = document.getElementById('windChill');
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill;
    
    // Update footer with current year and last modified date
    const footer = document.getElementById('footer');
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = document.lastModified;
    footer.textContent = `© ${currentYear} | Last modified: ${lastModifiedDate}`;
});
