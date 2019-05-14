const Button = ({onClick, disabled, className, children}) => (
  <button onClick={disabled ? null : onClick} className={className}>
    {children}
  </button>
)

export default Button;
