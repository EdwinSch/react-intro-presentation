// Import CSS/Styling
import "./App.css";

// Import Components
import Header from "./components/Header";
import Button from "./components/Button";

// Import statistics data
import stats from "./data.js";

// Render APP
function App() {
  return (
    <main>
      {/* render header component */}
      <Header />

      {/* render result components from statistics data */}
      <section className="results">
        {stats.map((result) => {
          const { id, icon, category, score } = result;
          return (
            <article key={id} className="result">
              <div className="category-wrapper">
                <img src={icon} alt={category} />
                <h3>{category}</h3>
              </div>
              <p className="score">
                <span>{score}</span> / 100
              </p>
            </article>
          );
        })}
      </section>

      {/* render button component */}
      <Button />
    </main>
  );
}

export default App;
