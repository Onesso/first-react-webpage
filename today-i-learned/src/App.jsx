import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./style.css";

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
{
  /* end of the external code*/
}

function App() {
  {
    /* below is a state variable using a useState hook */
  }
  {
    /* the parts of using state variable include */
  }
  {
    /* 1. Define state variable */
  }

  const [ShowForm, setShowForm] = useState(false);
  const [facts, setfacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //the empty array in the function in the useEffect will ensure that the function only runs once, as soon the first component renders
  useEffect(function () {
    {
      /*supabase take time to load the data so we must wait and wait is only used in an async function therefore the async is created inside the function of the useState */
    }
    async function getFacts() {
      setIsLoading(true);
      const { data: facts, error } = await supabase.from("facts").select("*");
      setfacts(facts);
      setIsLoading(false);
    }
    getFacts();
  }, []);

  return (
    <>
      {/* <Counter />*/}
      {/*ternary operator; where we are condtional rendering the component. */}

      {/* Use state variable */}
      <Header ShowForm={ShowForm} setShowForm={setShowForm} />

      {ShowForm ? (
        <NewFactForm setfacts={setfacts} setShowForm={setShowForm} />
      ) : null}

      <main className="main">
        <CategoryFilters />
        {isLoading ? <Loader /> : <FactList facts={facts} />}
      </main>
    </>
  );
}

function Loader() {
  return <p className="loaderMessage"> Loading... </p>;
}

function Header({ ShowForm, setShowForm }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="today_i_learned_logo" />
        <h1 className="h1">Today I learned</h1>
      </div>
      {/*usestate; when ever we click the button the function changes the setShowForm to the opposite 
    also need to learn how to rerender the component.
  */}
      <button
        className="btn btn-large btn-open"
        //update state variable
        onClick={() => setShowForm((show) => !show)}
      >
        {ShowForm ? "Close" : "share a fact"}
      </button>
    </header>
  );
}

function isValidHttpUrl(string) {
  try {
    const newUrl = new URL(string);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
}

function NewFactForm({ setfacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const textLength = text.length;

  function handleSubmit(e) {
    //1.preventing react from reloading the page
    e.preventDefault();
    console.log(text, source, category);

    //2.Checking if the data is valid
    if (text && isValidHttpUrl(source) && category && text.length <= 250) {
      //3.Create a new fact object
      const newFact = {
        id: Math.round(Math.random() * 10000000000000),
        text, //in the situation where the data to be passed in the object has the same name only one name is written followed with a comma
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };
      //4.Add the new fact object to the Ul:add the fact to state
      setfacts((facts) => [newFact, ...facts]);
      //5.Reset input fields
      setText("");
      setCategory("");
      setSource("");
      //6.Close the form
      setShowForm(null);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      {" "}
      {/*we are not calling the funtion since we want react to call it */}
      <input
        type="text"
        placeholder="Share a fact with the world"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span> {250 - textLength} </span>
      <input
        type="text"
        placeholder="Trust worthy source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose category:</option>
        {CATEGORIES.map((cate) => (
          <option key={cate.name} value={cate.name}>
            {cate.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}

function CategoryFilters() {
  return (
    <aside>
      <ul>
        <li>
          <button className="btn btn-all-category">All</button>
        </li>
        {CATEGORIES.map((cate) => (
          <li key={cate.name}>
            <button
              className="btn btn-category"
              style={{ backgroundColor: cate.color }}
            >
              {cate.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Counter() {
  {
    /*usestate returns an array which is the initial set value and a function
  therefore to use the usestate function we must destructure it. it is also imported since it is a react build in function 
  */
  }

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <span style={{ fontSize: "40px" }}>{counter}</span>
      <button
        className="btn btn-large"
        onClick={() => setCounter((currentCount) => currentCount + 1)}
      >
        +1
      </button>
    </div>
  );
}

function FactList({ facts }) {
  //this data in this component is needed to be passed to another container; the Fact container theirfore props is needed.

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
