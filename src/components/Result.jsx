const Result = ({ icon, category, score, txtColor, bgColor }) => {
  return (
    // Display this element in the UI for every available dataset object
    <article className="result" style={{ background: bgColor }}>
      <div className="category-wrapper">
        <img src={icon} alt={category} />
        <h3 style={{ color: txtColor }}>{category}</h3>
      </div>
      <p className="score">
        <span>{score}</span> / 100
      </p>
    </article>
  );
};

export default Result;
