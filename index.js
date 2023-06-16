
const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const CheckButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

words = {
  Cat: "Ewu",
  Dog: "Nkita",
  Bird: "Nkuku",
}
data = Object.entries(words)

function getRandomWord() {
  randomTerm = data[Math.floor(Math.random() * data.length)]
  term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
  definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}

CheckButton.addEventListener('click', function() {
  definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
  getRandomWord();
});
