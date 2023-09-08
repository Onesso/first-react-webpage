import "./style.css";

function App() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="today_i_learned_logo" />
        <h1 className="h1">Today I learned</h1>
      </div>

      <button className="btn btn-large btn-open">share a fact</button>
    </header>
  );
}

export default App;
