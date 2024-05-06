const apiButton = document.getElementById("apiButton");
const apiData = document.getElementById("apiData");
const base_experience = document.getElementById("base_experience");

const callAPI = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res => res.json())
    .then(data => {
        apiData.innerText = JSON.stringify(data);
        base_experience.innerText = `Experiencia Base: ${JSON.stringify(data.base_experience)}`
    });
}

apiButton.addEventListener("click", callAPI);