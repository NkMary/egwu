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
console.log(data[0][1])

CheckButton.addEventListener('click', function() {
  definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
  console.log("you clicked the next button");
});