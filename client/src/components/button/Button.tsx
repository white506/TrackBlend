import React, { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;