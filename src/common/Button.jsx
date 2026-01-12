const Button = ({ children, onClick, type = "button", className = "", icon }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {icon}
      {children}
    </button>
  );
};

export default Button;