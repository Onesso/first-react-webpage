import "./style.css";

//this is some external data hard coded for the purpose of learning
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

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
  {
    id: 4,
    text: "React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.React is a tool for building UI components.",
    source: "https://www.w3schools.com/REACT/react_intro.asp",
    category: "technology",
    votesInteresting: 9,
    votesMindblowing: 5,
    votesFalse: 1,
    createdIn: 2010,
  },
];

//end of the external code

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="today_i_learned_logo" />
          <h1 className="h1">Today I learned</h1>
        </div>

        <button className="btn btn-large btn-open">share a fact</button>
      </header>
      <NewFactForm />

      <main className="main">
        <CategoryFilters />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

function CategoryFilters() {
  return <aside> Category filters</aside>;
}

function FactList() {
  //temporary
  const facts = initialFacts; //this data in this component is needed to be passed to another container; the Fact container theirfore props is needed.

  return (
    <section>
      <ul className="fact-list">
        {facts.map((data) => (
          //in this component(father)(FactList) we are passing in other components child(Fact)
          <Fact key={data.id} data={data} />
        ))}
      </ul>
      <p>
        There are {facts.length} facts in the database. Contribute by adding
        more
      </p>
    </section>
  );
}

function Fact({ data }) {
  return (
    //this is not html this is jxs
    <li className="facts">
      <p>
        {data.text}
        <a href={data.source} translate="_blank" class="source">
          Source
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find(
            (catName) => catName.name === data.category
          ).color,
        }} //the style is an object hence the two carly braces
      >
        {data.category}
      </span>
      <div className="vote-button">
        <button>👍 {data.votesInteresting}</button>
        <button>🤯 {data.votesMindblowing}</button>
        <button>⛔️ {data.votesFalse}</button>
      </div>
    </li>
  );
}
export default App;
