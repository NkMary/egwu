const initial = document.querySelector('.start');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let score = document.querySelector('.score-1');
score.innerHTML = 0;
let sc = 0;
let game = false;
let newV = "";
let randomV = "";

const words = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Benue', 'Borno','Cross River','Delta','Ebonyi','Edo','Ekiti', 'Enugu','Gombe','Imo','Jigawa', 'Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos','Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba','Yobe', 'Zamfara'];

const stateInfo = {
  'Abia': 'The capital of Abia is Umuahia. The current Governor is Dr. Alex Otti. Agriculture is the major occupation of the people of Abia State.',
  'Adamawa': 'The capital of Adamawa is Yola. The current Governor is Ahmadu Umaru Fintiri. The three main religions are Islam, Christianity and Traditionalism.',
  'Akwa Ibom': 'The capital of Akwa Ibom is Uyo. The current Governor is Umo Eno. The inhabitants of the state are: Ibibio, Annang, Ibeno and Eket',
  'Anambra': 'The capital of Anambra is Awka. The current Governor is Charles chukwuma Soludi. Anambra is rich in natural gas, crude oil, bauxite, ceramics and almost 100 percent arable soil',
  'Bauchi': 'The capital of Bauchi is Bauchi. The current Governor is Bala Abdulkadir Mohammed. Bauchi State is home to the Yankari Game reserve (the biggest game reserve in West Africa), Premier Game Reserve, Rock Paintings at Goji and Shira, the State Museum among others.',
  'Bayelsa': 'The capital of Bayelsa is Yenagoa. The current Governor is Douye Diri. Bayelsa State is a tropical rain forest, with more than three quarters of this area covered by water',
  'Benue': 'The capital of Benue is Makurdi. The current Governor is Hyacinth Lormem Alia. Benue is blessed with abundant mineral resources including Limestone, Gypsum, Lead, Zinc, Clay, Coal, and Petroleum oil.',
  'Borno': 'The capital of Borno is Maiduguri. The current Governor is Babagana Zulum. The state is dominated by the Kanuri ethnic group, and is an example of the endurance of traditional political institutions in some areas of Africa. ',
  'Cross River': 'The capital of Cross River is Calabar. The current Governor is Bassey Edet Otu. Traditional festivals are observes annually to celebrate the rich harvest of the season.',
  'Delta': 'The capital of Delta is Asaba. The current Governor is Sheriff Oborevwori. Warri is the biggest commercial city in the state.',
  'Ebonyi': 'The capital of Ebonyi is Abakaliki. The current Governor is Francis Nwifuru. Ebonyi State was created out of former Abia and Enugu states on October 1st 1996 by the then General Sanni Abacha regime.',
  'Edo': 'The capital of Edo is Benin. The current Governor is Godwin Obaseki. The state capital is famous for its unique bronze, brass and ivory works of arts which are found all over the world in museums.',
  'Ekiti': 'The capital of Ekiti is Ado Ekiti. The current Governor is John Olukayode Fayemi. The State is one of the largest producers of Rice, Kolanut, oil palm and cocoa in the country.',
  'Enugu': 'The capital of Enugu is Enugu. The current Governor is Dr. Peter Ndubuisi Mbah. Its main economy depended on coal before the discovery of oil in commercial quantities. That is the main reason Enugu is nick named the coal city.',
  'Gombe': 'The capital of Gombe is Gombe. The current Governor is Muhammad Inuwa Yahaya. Gombe State has many tribes like Tera, Tangali, Fulani, Bolewa, Waja, Hausa. Hausa is the common language of the people.',
  'Imo': 'The capital of Imo is Owerri. The current Governor is Hope Uzodinma. The inhabitants of Imo State are Igbo. The official language of the state is Igbo alongside English.',
  'Jigawa': 'The capital of Jigawa is Dutse. The current Governor is Malam Umar A. Namadi. Over 80% of the population is engaged in farming and animal husbandry.',
  'Kaduna': 'The capital of Kaduna is Kaduna. The current Governor is Uba Sani. Zaria is one of the major towns in Kaduna state and is very rich in history. Queen Amina ruled Zaria and was known as a great warrior, her territories stretching as far to Bauchi in the east and extending as far south as the River Niger.',
  'Kano': 'The capital of Kano is Kano. The current Governor is Abba Kabir Yusuf. Kano has numerous tourism and cultural centers including the colorful annual Durbar, leather works and craft.',
  'Katsina': 'The capital of Katsina is Katsina. The current Governor is Dikko Umaru Radda. Katsina is one of the few states in the country where crops are grown all the year round ',
  'Kebbi': 'The capital of Benni is Birnin Kebbi. The current Governor is Atiku Bagudu. Kebbi State is divided into 21 local government areas , four emirate councils (Gwandu, Argungu, Yauri and Zuru), and 35 districts.',
  'Kogi': 'The capital of Kogi is Lokoja. The current Governor is Yahaya Bello. Tourist attractions such as Lord Lugards residence and office can be seen in Lokoja. There are also the spot where the Royal Niger Company flag was lowered in 1890, the iron of liberty - the spot where slaves were freed in 1860.',
  'Kwara': 'The capital of Kwara is Ilorin. The current Governor is Abdulrazaq AbdulRahman. Kwara State has a very rich and highly interesting cultural heritage. The Awon festival is held annually at shao; in remembrance of Awo goddess. During the festival all the marriageable girls are given out in marriage in one day.',
  'Lagos': 'The capital of Lagos is Ikeja. The current Governor is Babajide Olusola Sanwo-Olu. Lagos is the nations ecconomic and commercial capital. While the State is essentially a Yoruba speaking environment, it is nevertheless a socio-cultural melting pot attracting both Nigerians and foreigners alike.',
  'Nasarawa': 'The capital of Nasarawa is Lafia. The current Governor is Engr. Abdullahi Sule. Nasarawa state is a pot pourri of tourist attractions with array of hills and rocks that dot the states landscape.',
  'Niger': ' The capital of Niger is Minna. The current Governor is Mohammed Umar Bago. Two of Nigerias major hydroelectric power stations are located in Niger State: the Kainji dam and the Shiroro dam.',
  'Ogun': 'The capital of Ogun is Abeokuta. The current Governor is Dapo Abiodun. Ogun State thus has the highest number of registered universities in Nigeria (nine in all) with five new private universities also in the state.',
  'Ondo': 'The capital of Ondo is Akure. The current Governor is Rotimi Akeredolu. Ondo State contains the largest number of public schools in Nigeria - over 880 primary schools and 190 secondary schools',
  'Osun': 'The capital of Osun is Oshogbo. The current Governor is Ademola Nurudeen Adeleke. The people of the state are Yorubas and they trace their origin to Oduduwa and the town of Ile-Ife. Ile Ife is an important center of political and religious development for Yoruba culture. ',
  'Oyo': ' The capital of Oyo is Ibadan. The current Governor is Seyi Makinde. A prominent landmark in Oyo State is Cocoa House, the first skyscraper built in Africa. The state is also home to NTA Ibadan, the first television station in Africa and Liberty Stadium, Ibadan the first stadium built in Africa. ',
  'Plateau': 'the capital of Plateau is Jos. The current Governor is Caleb Manasseh Mutfwang. Plateau State is known as The Home of Peace and Tourism and there is plenty to see like The Wildlife Safari Park, The National Museum, The Museum of Traditional Nigerian Architecture, The Jos Zoo, Assop Falls, Kurra Falls, Wase Rock and more.',
  'Rivers': 'The capital of Rivers if Port Harcourt. The current Governor is Siminalayi Fubara. The state is famous for its vast reserves of crude oil and natural gas. Rivers State has two major oil refineries, two major seaports, airports, and various industrial estates spread across the land.',
  'Sokoto': 'The capital of Sokoto is Sokoto. the current Governor is Aminu Tambuwal. The Sultan of Sokoto is a direct descendant of Usman Dan Fodio and is the spiritual head of all muslims in Nigeria. ',
  'Taraba': 'The capital of Taraba is Jalingo. The current Governor is Darius Dickson Ishaku. Taraba is called "Natures gift to the nation" as the state is rich and have many ethnic groups, including Chamba, Mumuyes, Mambila, Wurkums, Fulanis, Jukun, Jenjo Kuteb, Ichen,Tiv and Ndoro.',
  'Yobe': 'The capital of Yobe is Damaturu. The current Governor is Mai-Mala Buni. The state is dominated by the Kanuri ethnic group, and is an example of the endurance of traditional political institutions in some areas of Africa.',
  'Zamfara': 'The capital of Zamfara is Gusau. The current Governor is Bello Muhammad Matawalle. The state is basically an agricultural state with over 80 percent of the people engaged in various forms of agriculture. Major agricultural products include millet, guinea corn, maize, rice, groundnut, cotton, tobacco and beans. ',
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
        initial.style.color = '#263A29';

        btn.textContent = 'Guess Word';
        guess.classList.toggle('hidden');
        newV = createWords();
        randomV = jumbleWord(newV.split(""));
        console.log(randomV);
        initial.innerHTML = 'Arrange the word \'' + randomV + '\'';

    } else {

        let inputWord = guess.value;
        if (inputWord === newV) {
            console.log('correct');
            game = false;
            initial.innerHTML = `Correct!\n
                        ${stateInfo[newV]}`;
            initial.style.color = 'black';
            sc += 5;
            score.innerHTML = sc;
            guess.classList.toggle('hidden');
            btn.innerHTML = 'start again';
            guess.value = "";

        } else {
            console.log('incorrect');
            initial.innerHTML = `Better luck next time.Try Again! '${randomV}'`;
            initial.style.color = '#263A29';
            btn.innerHTML = 'Again';
            guess.value = "";
            guess.classList.toggle('hidden');
        }

    }
})

localStorage.setItem('score', sc);
let savedScore = localStorage.getItem('score');
if (savedScore) {
  sc = Number(savedScore);
  score.innerHTML = sc;
}

else {
  sc =0;
}

//localStorage.removeItem('score');
//localStorage.clear();