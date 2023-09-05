// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];
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



//selecting dom elements
const btn = document.querySelector(".btn-open");
const frm = document.querySelector(".fact-form");
console.dir(btn);

//creating dom elements: rendering facts in list
const factList = document.querySelector(".fact-list");
factList.innerHTML = "";

//get the data from supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://qmhxysqhbwyvsmxterfy.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtaHh5c3FoYnd5dnNteHRlcmZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxNzY4MDEsImV4cCI6MjAwNzc1MjgwMX0.yohFNbZD3Wj2HqvY_iZLEMYPv3NGdJDJQUSJN0yfRxg",
        authorization:
          "Beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtaHh5c3FoYnd5dnNteHRlcmZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxNzY4MDEsImV4cCI6MjAwNzc1MjgwMX0.yohFNbZD3Wj2HqvY_iZLEMYPv3NGdJDJQUSJN0yfRxgr",
      },
    }
  );
  const data = await res.json();//the data is converted to json and we must wait of the convertion
  createFactlist(data)// 


  //this code below will filter the entire information in the variable data and return history only.

  //const filteredData = data.filter((facts)=> facts.category === "history");

  //this will produce the filtered data by category which is "history"
  //console.log(filteredData)//to display the filtered data we must log it.
  
  //createFactlist(filteredData)//this function is passed the flrtered data so it is going to display it in the webpage
}

//createFactlist(initialFacts); //in javascript you can call the function even before declaring it.


//in function below a structure of the information of the page is created 
//and the in formation is loaded from the server
function createFactlist(dataArray) {
  const htmlarr = dataArray.map(
    (factsElements) => `<li class="facts">
  <p>
  ${factsElements.text}
  <a
    href="${factsElements.source}"translate="_blank"class="source">
      Source
    </a>
  </p>
  
  <span class="tag" style="background-color: ${ CATEGORIES.find(catName => catName.name === factsElements.category).color}">
    ${factsElements.category}
  </span>
  </li>`
  );

  console.log(htmlarr);
  const html = htmlarr.join("");
  factList.insertAdjacentHTML("afterbegin", html);
}

//toggle form visibility
btn.addEventListener("click", function () {
  if (frm.classList.contains("hidden")) {
    frm.classList.remove("hidden");
    btn.textContent = "CLOSE";
  } else {
    frm.classList.add("hidden");
    btn.textContent = "SHARE A FACT";
  }
});






