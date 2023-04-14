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
          return <p>hoi</p>;
        })}
      </section>
      <Button />
    </main>
  );
}

export default App;
