import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import './Button.scss';
// import '@styles/index.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode; 
  onClick?: () => void; 
  linkTo?: string; 
}

const Button: React.FC<ButtonProps> = ({ children, icon, onClick, linkTo, ...props }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (linkTo) {
      window.location.href = linkTo;
    }
  };

  return (
    <button className="custom-button" onClick={handleClick} {...props}>
      {icon && <div className="custom-button__icon">{icon}</div>}
      <div className="custom-button__label">{children}</div>
    </button>
  );
};

export default Button;
