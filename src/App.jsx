// Import CSS/Styling
import "./App.css";

// Import Components
import Header from "./components/Header";
import Button from "./components/Button";
import Result from "./components/Result";

// Import statistics data
import stats from "./data.js";

// Render APP
function App() {
  return (
    <main>
      {/* render header component */}
      <Header title="summary" />

      {/* render result components from data */}
      <section className="results">
        {stats.map((result) => {
          return <Result key={result.id} {...result} />;
        })}
      </section>

      {/* render button component */}
      <Button />
    </main>
  );
}

export default App;
