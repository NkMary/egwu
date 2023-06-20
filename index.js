const inital = document.querySelector('.start');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let score = document.querySelector('.score-1');
score.innerHTML = 0;
let sc = 0;
let game = false;
let newV = "";
let randomV = "";

const words = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Benue', 'Borno','Cross River','Delta','Ebonyi','Edo','Ekiti', 'Enugu','Gombe','Imo','Jigawa', 'Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lago','Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba','Yobe', 'Zamfara'];

const stateInfo = {
  'Ondo': 'Ondo is a state in the south eastern part of Nigeria.',
};

const createWords = () => {
    let number = Math.floor(Math.random() * words.length);
    let random = words[number];
    return random;
}

const jumbleWord = (el) => {
    for (let i = el.length - 1; i >= 0; i--) {
        let temp = el[i];
        let j = Math.floor(Math.random() * (i + 1));
        el[i] = el[j];
        el[j] = temp;

    }
    return el.join("");


}

btn.addEventListener('click', function () {
    if (!game) {
        game = true;
        inital.style.color = '#263A29';

        btn.textContent = 'Guess Word';
        guess.classList.toggle('hidden');
        newV = createWords();
        randomV = jumbleWord(newV.split(""));
        console.log(randomV);
        inital.innerHTML = 'Arrange the word \'' + randomV + '\'';

    } else {

        let inputWord = guess.value;
        if (inputWord === newV) {
            console.log('correct');
            game = false;
            inital.innerHTML = `Correct!.\n
                        It is ${newV}. ${stateInfo[newV]}`;
            inital.style.color = 'black';
            sc += 5;
            score.innerHTML = sc;
            guess.classList.toggle('hidden');
            btn.innerHTML = 'start again';
            guess.value = "";

        } else {
            console.log('incorrect');
            inital.innerHTML = `Better luck next time.Try Again! '${randomV}'`;
            inital.style.color = '#263A29';
            btn.innerHTML = 'Again';
            guess.value = "";
            guess.classList.toggle('hidden');
        }

    }
})