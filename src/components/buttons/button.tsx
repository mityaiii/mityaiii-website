import './button.css'

interface IButton {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button className="container" onClick={onClick}>
      <div className="button type--A">
        <span className="button__text">{ children }</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </div>
    </button>
  );
};

export default Button;
