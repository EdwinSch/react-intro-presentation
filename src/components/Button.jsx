const Button = () => {
  // On button click: trigger this functionality
  function buttonFunction() {
    console.log("do something");
  }

  // Display the Button element in the UI
  return (
    <button onClick={buttonFunction} className="btn" type="button">
      Continue
    </button>
  );
};

export default Button;
