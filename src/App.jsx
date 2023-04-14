import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import stats from "../data.js";

function App() {
  return (
    <main>
      <Header />

      <section className="results">
        {stats.map((result) => {
          const { id, category, score, icon, sub } = result;
          return (
            <article key={id} className={sub}>
              <div className="category-wrapper">
                <img src="" alt={category} />
                <h3>{category}</h3>
              </div>
              <p className="score">
                <span>{score}</span> / 100
              </p>
            </article>
          );
        })}
      </section>
      <Button />
    </main>
  );
}

export default App;
