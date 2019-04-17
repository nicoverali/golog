const Button = ({handleClick, disabled, className, children}) => (
  <button onClick={disabled ? null : handleClick} className={className}>
    {children}
  </button>
)

export default Button;
