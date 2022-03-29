import "./Button.css";
const Button = ({ text, color, onClick, type, style }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color, ...style }}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
