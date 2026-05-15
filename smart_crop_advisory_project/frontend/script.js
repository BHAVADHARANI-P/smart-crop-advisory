
async function getRecommendation() {
    const soil = document.getElementById('soil').value;
    const temperature = document.getElementById('temperature').value;
    const rainfall = document.getElementById('rainfall').value;

    const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            soil,
            temperature,
            rainfall
        })
    });

    const data = await response.json();

    document.getElementById('result').innerHTML =
        'Recommended Crops: ' + data.recommended_crops.join(', ');
}
