const apiKey = 'xzhVs3cNkZHF6z3SqCABK7irai3vwTA7Al6LIwk58ogUPAFg6x'; // Replace with your Plant.id API key


document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    
    fetch('https://plant.id/api/v3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': apiKey
        },
        body: JSON.stringify({
            "images": [],
            "organs": ["leaf"], // Specify the plant organ affected, modify based on user input
            "disease": true,
            "meta_data": {
                "latitude": 0,
                "longitude": 0
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        let resultsHtml = `<h2>Results for "${query}":</h2>`;
        
        if (data.suggestions && data.suggestions.length > 0) {
            data.suggestions.forEach(suggestion => {
                resultsHtml += `
                    <div class="result">
                        <h3>${suggestion.plant_name}</h3>
                        <p>Probability: ${(suggestion.probability * 100).toFixed(2)}%</p>
                        <p>Disease: ${suggestion.disease ? suggestion.disease.name : 'No disease found'}</p>
                        <p>Description: ${suggestion.disease ? suggestion.disease.description : 'N/A'}</p>
                    </div>
                `;
            });
        } else {
            resultsHtml += '<p>No results found.</p>';
        }

        document.getElementById('results').innerHTML = resultsHtml;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('results').innerHTML = '<p>There was an error processing your request. Please try again later.</p>';
    });
});
