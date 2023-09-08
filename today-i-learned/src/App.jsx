import "./style.css";

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
  return <section> fact-list </section>;
}
export default App;
