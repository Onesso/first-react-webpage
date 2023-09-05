/*/*
console.log(" the totalUpvotes: ", totalUpvotes);

const isCorrect = likeBtn > mindBlowing;

console.log(isCorrect);


console.log(checkFactAge(2016));

if (mindBlowing) {
  console.log("mindblowing");
} else {
  console.log("falsey");
}
*/

/*
const calcAge = (year) => 2023 - year;
console.log(calcAge(2001));

const calcAge2 = (year) => new Date().getFullYear() - year;
console.log(calcAge2(2001));

const calcAge3 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `${year} is greater than the date of birth ${new Date().getFullYear()}`;

console.log(calcAge3(20011));

*/

/*
let likeBtn = 30;

let mindBlowing = 9;

let totalUpvotes = likeBtn + mindBlowing;

let voteFalse = 40;

const message =
  totalUpvotes > voteFalse
    ? "thie is great informattion"
    : "find more resource to research";
//alert(message);

const text = "Lisbon is the capital city of portugal";

const upperText = text.toUpperCase();

const str = `This is a fact presentation "${upperText}" and it ${checkFactAge(
  2010
)} years old. And therefore  ${
  totalUpvotes > voteFalse
    ? "this is great informattion"
    : "find more resource to research"
}`;

console.log(str);
*/

const fact = ["Kisumu is the third lagest company in kenya", 1965, 2005];

console.log(fact[0], fact[1], fact[2]);

//structuring

const [text, declaredIn, now] = fact;

console.log(text);

fact.push("Ssup");

console.log(fact[fact.length - 1]);

const newFact = fact.push("Goodmorning");

console.log(fact[fact.length - 3]);

const newFact1 = [...fact, "Societyy"];
console.log(newFact1);

//the code below is an object and inside the object their is a method(descriptiionmeth)
const studentObj = {
  name: "Jane",
  age: 16,
  school: "Ulanda",
  class: "4 Yellow",

  describtionMeth: function () {
    return `My name is ${this.name} am ${
      this.age
    } years old and am in ${this.school.toUpperCase()}`;
  },
};

//creating a variable from the object

const { name, age } = studentObj;

console.log(studentObj.class);
console.log(studentObj.describtionMeth());
console.log(age);

//looping in arrays

[2, 3, 4, 5].forEach((element) => {
  console.log(element);
});

const times10 = [2, 3, 4, 5].map(function (el) {
  return el * 100;
});
console.log(times10);
const times15 = [9,8,7,6,5].map(element => {
  return element * 15;
})
console.log(times15);
["onesso", "audp", "opiyo"].forEach(function (el) {
  console.log(el);
});
const city = ["Nairobi", "Kisumu", "Mombasa"];
city.forEach((m) => {
  console.log(m);
});





const CATEGORIES = [
  { name: "technology", color: "#3b82f6"},
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const lista = CATEGORIES.map(el => {
  return el.name;
});
console.log(lista);

//this is the other way of writting the same code above 
const lista1 = CATEGORIES.map((el) => el.name);
console.log(lista);






const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// const years = initialFacts.map((element) => element.createdIn)
// const calcAge3 = (years) =>
//   years <= new Date().getFullYear()
//     ? new Date().getFullYear() - years
//     : `${years} is greater than the date of birth ${new Date().getFullYear()}`;

// console.log(calcAge3(years));


const calcAge3 = (years) =>
  years <= new Date().getFullYear()
    ? new Date().getFullYear() - years
    : `${years} is greater than the date of birth ${new Date().getFullYear()}`
    
const years = initialFacts.map((element) => calcAge3(element.createdIn));
console.log(years.join("  -  "))

