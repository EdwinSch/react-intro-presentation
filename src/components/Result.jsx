const Result = ({ icon, category, score }) => {
  return (
    <article className="result">
      <div className="category-wrapper">
        <img src={icon} alt={category} />
        <h3>{category}</h3>
      </div>
      <p className="score">
        <span>{score}</span> / 100
      </p>
    </article>
  );
};

export default Result;
