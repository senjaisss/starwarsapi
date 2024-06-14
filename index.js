
document.addEventListener('DOMContentLoaded', function() {
    async function getDataFromApi(){
    const response = await fetch('https://swapi.dev/api/people/10/');
    const data = await response.json();
    return data;
}

async function displayData(){
    const data = await getDataFromApi();
    console.log(data);

    let resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = `<div>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Height:</strong> ${data.height}</p>
                <p><strong>Mass:</strong> ${data.mass}</p>
                <p><strong>Hair Color:</strong> ${data.hair_color}</p>
                <p><strong>Skin Color:</strong> ${data.skin_color}</p>
                <p><strong>Eye Color:</strong> ${data.eye_color}</p>
                <p><strong>Birth Year:</strong> ${data.birth_year}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
            </div>`;
}

const button = document.getElementById('1');
button.addEventListener('click', function() {
    displayData();
});

let resultDiv = document.querySelector('.result');
let svar = "No results yet...";
resultDiv.innerHTML = svar;
});
