//Deel 1: Objecten

//punten 1 en 2

let person = {
    name: 'Lana',
    age: 28
};

//punt 3

console.log(person)

//punt 4

console.log(person.name)

//punt 5

console.log(person.age)

//punt 6 ik verander hier de waarden even om te kijken of het goed doorkomt, denk dat dat ook de bedoeling was van de deelopdracht, maar het staat er niet duidelijk.

person.name = 'Lissa';

person.age = 23;

console.log(person.name)
console.log(person.age)

person['name'] = 'Jesse';

person['age'] = 24;

console.log(person.name)
console.log(person.age)

//punt 7

console.log(person)

let evaluations = (7, 10, 9);

console.log(evaluations);

//de waarde is 9

//Deel 2: Arrays

//punt 1, 2 en 3

let selectedColors = ['cyan', 'magenta', 'yellow', 'black'];

console.log(selectedColors);

//punt 4

console.log(selectedColors.length)

//punt 5

console.log(selectedColors[0])

//punt 6

console.log(selectedColors[3])

//punt 7

selectedColors.push('white')

console.log(selectedColors)

//punt 8

selectedColors.push('41.5')

console.log(selectedColors)

//punt 9

selectedColors.push({ greeting: "Hi, ik ben een object!" })

console.log(selectedColors)

//punt 10

console.log(selectedColors[6])

//Deel 3: Bekijk een "real-life" object

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

console.log("Naam van het laatste kattenras:", catBreeds[2].name)

//punt 2

console.log("Energieniveau van het eerste kattenras:", catBreeds[0].energy_level)

//punt 3

console.log("Eerste temperament van het tweede kattenras:", catBreeds[1].temperament[0])

//punt 4

console.log("Laatste temperament van het derde kattenras:", catBreeds[2].temperament[4])

//punt 5

console.log("Favoriete voedsel van het derde kattenras:", catBreeds[2].food.favourite_food)