// let namo="Dora Namo Nyumutsu"
// console.log(namo);
// prompt("Enter Your Username");
// prompt("Enter you email");

//USING BACKTICKS `` IS THE BEST
// let amanor = `I'll ("What the fuck do you even mean?") be back stronger`;
// alert(amanor);


/*
let kiloMeters = 210;
let originalMiles = 0.6 * kiloMeters;
console.log(
  "The distance of " +
    kiloMeters +
    " kms is equal to " +
    originalMiles +
    " miles"
);

let bmiHeightInches = 66;
let bmiWeightPounds = 50;
let bmiHeightCm = bmiHeightInches * 2.54;
let bmiWeightKilos = bmiWeightPounds / 2.2046;
console.log(bmiWeightKilos);
console.log(bmiHeightCm);
*/


/*
let a = `Hello`;
a = `World`;
console.log(a);

let c = `Hello`;
let d = `Friend`;
let e = `${c} Neighbour!`;
console.log(e);
console.log(c + " " + d);

let r = `Hey`;
r = prompt(`Bro`);
*/

/*
let g = 70;
let j = 70;
let h = 2;
g ++;
++h;
j --
let l = j ** h;
console.log(g);
console.log(j);
console.log(l);
console.log(h); 
*/

/*
// Arrays
let family = [
  `Teiko`,
  `Joe`,
  `Felicia`,
  `Tommy`,
  `Ernest`,
  `Ernestina`,
  `Kwesi`,
  `Hilary`,
];

console.log(family);
//push add an element to the end of the array
console.log(family.push(`Akotei`));
console.log(family);
//pop deletes the last element in the array
console.log(family.pop());
console.log(family);
//Splice to for deletion, addition, & replacement at specific points

//Deletion: splice(where you want to start deleting, how many you want to delete)
console.log(family.splice(4, 3));
console.log(family)
//Addition: splice(Index of where to insert, number of existing elements you want to delete)
console.log(family.splice(2, 0, `Namo`, `Andrews T`));
console.log(family)
//Replacement: splice(Index of where to insert it, number of them to delete, followed by the value)
console.log(family.splice(3, 2, `Gomani`));
console.log(family);

//Sorting Arrays ...Sorting array affect whatever you do be careful
console.log(family.sort());

//Reversing Arrays
console.log(family.reverse());0
*/

// let continent = true;
// console.log(continent);
// if(!true){
//     console.log(`This is a country`);
// } 
// else{
//     console.log(`You're terrible`);
// }

// let friends = [`Kikoo`];
// console.log(friends.length);
// let myTest = [1, 3, 5, 6, 8, 9, 15];
// console.log(myTest.splice(1, 1, 4));
// console.log(myTest);

// let ingredients = [`Milk`, `Bread`, `Apples`];
// console.log(ingredients.splice(1, 1, `Bananas`, `Eggs`));
// console.log(ingredients);
// console.log(ingredients.pop());
// console.log(ingredients)
// console.log(ingredients.sort());
// ingredients.splice(1, 0, `Carrots`, `Lettuce`);
// console.log(ingredients);

// //question
// let snacks = [`Juice`, `Pop`];
// console.log(snacks);
// let dinner = ingredients.concat(snacks, snacks); //adding twice
// console.log(dinner);

// //OBJECTS
// let biography = {jhs: `Amponsah Memorial Academy`,
//     shs: `Ghana Senior High School`,
//     university: `Koforidua Technical University`,
//     favoriteFood: `Banku & Okro Soup`,
//     favoriteGame: `Football`,
//     hobby: `Learning`,  
// };
// console.log(biography.jhs);
// console.log(biography.shs);
// console.log(biography.university);
// console.log(biography.hobby);
// biography.favoriteFood = "Fufu & Palm Nut Soup"; //change value of an object
// biography.gender = `Male`;
// console.log(biography);
// console.log(biography.gender);

// //OBJECTS IN OBJECTS
// let favoriteBrands = {
//     technology:{
//         phone:`Apple's iPhone`,
//         laptop: `Hp`,
//         car:`Tesla`,
//         television:`TCL`
//     },
//     gamesGoats:{
//         football:`Cristiano Ronaldo`,
//         basketball:`Lebron James`,
//         spinter:`Usain Bolt`
//     },
//     music:`Afrobeats`,
//     dance:`Azonto`,
//     lecturer:`Mr. Collinson`
// };
// console.log(favoriteBrands.technology.car);


// //ARRAYS IN OBJECTS
// let top10 = {
//     programmingLanguages:`JavaScript`,
//     musicians:[`Lil Wayne`, `Drake`, `Shatta Wale`, `Rihanna`, `Nicki Minaj`, `Migos`, `Tupac`, `Roddy Ricch`],
//     eatery:`Banku`,
//     water:`Voltic`
// };
// console.log(top10.musicians[1]);

// //OBJECTS IN ARRAYS
// let countryDetails = [
//     {
//         ghana:`Accra`,
//         togo:`Lome`,
//         nigeria:`Abuja`,
//         niger:`Niamey`,
//         southAfrica: `Pretoria`,
//         egypt:`Cairo`
//     },
//     {
//         eastern:`Koforidua`,
//         ashanti:`Kumasi`,
//         volta: `Ho`,
//         central:`Cape Coast`,
//         western:`Takoradi`,
//         upperWest:`Wa`,
//         upperEast:`Bolgatanga`
//     }
// ];
// console.log(countryDetails[1]);
// NOTE: We also have (OBJECTS IN ARRAYS) IN OBJECTS

// //SWITCH CASE
// let mood = `emotional`;
// switch(mood){
//     case `happy`:
//         console.log(`Put a smile on your face or laugh`);
//     break;
//     case `sad`:
//         console.log(`Frown your face or cry`);
//     break;
//     case `emotional`:
//         console.log(`Lean on your best person`);
//     break;
//     case `tired`:
//         console.log(`Show your fatigue`);
//     break;
//     default:
//         console.log(`Yoo dawg I have a mixed feeling`);
//     break;
// }

// if(mood === `happy`){
//     console.log(`Stand up and dance to any music you here`);
// } else if(mood ===`tired`){
//     console.log(`I am so doomed`);
// }else{
//     console.log(`Bro wtf do you want?`);
// }


////just a rough work
// let w=3;
// let p=8;
// console.log(w>p && p>w);

//Conditional Ternary Operator
// let food = 1 ? 1>2 : 2<1;
// console.log(`What is your name?`);
// let god = "He is vague";
// console.log(god);


// //Adding anobject to an already created object
// let brands = [
//  {
//   france:`YSL`,
//   america:`LV`,
//   ghana:`clover closet`,
//   nigeria:`dangote`,
//   },
//   {
//     france:`Mercedes`,
//     america:`Tesla`,
//     ghana:`Kantanka`,
//     nigeria:`Ikechukwu`,
//   },
// ];

// //new object
// let gadgets = {
//   france:`Samsung`,
//   america:`iPhone`,
//   ghana:`Gomoa`,
//   nigeria:`Oraimo`
// };

// brands.push(gadgets);

// for(let block of brands){
//   console.log(block.france);
// }
// let myQuestion =`What do you take me for? `;
// prompt(myQuestion);
// let answer = myQuestion;
// console.log(myQuestion)

// console.dir(window.location); //checking site's info
// console.dir(window.navigator); //checking browser's info
// console.dir(window.history); //checking the sites navigated through in that tab
// console.dir(window.document); //checking the site tree

document.body.children.hey.children.friend.children.tuesday.innerText = "This is not Tuesday"; //innerText for changing the inner text
document.body.children.hey.children.friend.children.friday.innerHTML= "<b>It's a Freaky Friday</b>"; //innerHTML for changing the inner and adding effects

//the real and famous and the in-built method for getting them
//notive that onle the id uses Element all others use Element(s) because, id names can only be used once in an html file
// document.getElementById(`tuesday`); //getting by ID
// document.getElementsByTagName(`div`); //getting by tag name
// document.getElementsByTagName(`div`).item(1);//getting by tag name and specifics by indexes
// document.getElementsByTagName(`li`).namedItem(`friend`); //getting by tag name but also with ids or classes names assigned
// document.getElementsByClassName(`myShs`); //getting by class name


//Element Click Handler
function heyMyFriend(){
  alert(`What are you doing today?`);
}

document.getElementById(`tuesday`).onclick=function(){
  alert(`What the Fuck you doing?`);
}

function godly(){
  alert(`Oh God please step in for me`);
}