const words = [
    { word: "Cat", igbo: "Ewu", yoruba: "Ologbo", hausa: "Kwarya" },
    { word: "Dog", igbo: "Ewu", yoruba: "Aja", hausa: "Kare" },
    { word: "Bird", igbo: "Nkuku", yoruba: "Adan", hausa: "Kifi" },
  ];
  
  let currentWordIndex = 0;
  let currentLanguage = "igbo";
  const displayElement = document.querySelector("#display");
  const languageButtons = document.querySelectorAll(".language-button");
  const nextButton = document.querySelector("#next-button");
  
  displayWord();
  
  languageButtons.forEach((button) => {
    button.addEventListener("click", function() {
      const selectedLanguage = this.dataset.language;
      currentLanguage = selectedLanguage;
      displayWord();
    });
  });
  
  nextButton.addEventListener("click", () => {
    currentWordIndex++;
    
    if (currentWordIndex === words.length) {
      currentWordIndex = 0;
    }
    
    displayWord();
  });
  
  async function displayWord() {
    const currentWord = words[currentWordIndex];
    const wordInSelectedLanguage = currentWord[currentLanguage];
    displayElement.textContent = wordInSelectedLanguage;
  }
  
 