const surpriseButton = document.querySelector(".surprise");

surpriseButton.addEventListener("click", getYourMessage)

let phrase = {};

async function getYourMessage() {
  fetch('https://moraislucas.github.io/MeMotive/phrases.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const randomIndex = Math.floor(Math.random() * data.length);
    phrase = data[randomIndex]

    alert(`'${phrase.quote}' - ${phrase.author}`)
  })
  .catch(error => {
    console.error('Erro ao buscar os dados:', error);
  });

}