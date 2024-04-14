async function fetchCatFacts() {
    //const apiURL = 'https://cat-fact.herokuapp.com/facts';
    const apiURL = 'https://catfact.ninja/fact';
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayFact(data);
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('api-data').innerText = 'Failed to load cat fact.';
    }
}

function displayFact(data) {
    if (data && data.length > 0) {
        //rand = Math.floor(Math.random() * 5);
        const catFact = data.fact; // Consider adding a check or random selection if index 2 might not exist
        document.getElementById('api-data').innerText = catFact;
    } else {
        document.getElementById('api-data').innerText = 'No facts available.';
    }
}

document.getElementById('refresh-fact').addEventListener('click', fetchCatFacts);

document.addEventListener('DOMContentLoaded', fetchCatFacts);