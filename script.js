document.getElementById('footprintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const transportation = parseFloat(document.getElementById('transportation').value) || 0;
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const food = parseFloat(document.getElementById('food').value) || 0;

    // Simple carbon footprint calculation (these values can be adjusted)
    const transportationFootprint = transportation * 0.404; // kg CO2 per mile
    const electricityFootprint = electricity * 0.92; // kg CO2 per kWh
    const foodFootprint = food * 1.5; // kg CO2 per meal

    const totalFootprint = transportationFootprint + electricityFootprint + foodFootprint;

    // Display results
    document.getElementById('result').innerHTML = `
        <h2>Your Estimated Carbon Footprint:</h2>
        <p>${totalFootprint.toFixed(2)} kg CO2/week</p>
        <h3>Tips to Reduce Your Footprint:</h3>
        <ul>
            <li>Consider walking or biking for short distances.</li>
            <li>Switch to energy-efficient appliances.</li>
            <li>Eat more plant-based meals.</li>
        </ul>
    `;
});