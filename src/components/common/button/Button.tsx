import React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  text?: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'line' | 'text';
  icon?: string;
  iconComponent?: React.ReactNode;
  iconPosition?: 'before' | 'after';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  size = 'medium',
  color = 'primary',
  icon,
  iconComponent,
  iconPosition,
  className,
  disabled = false,
  onClick,
  children
}) => {
  const btnClass = classNames(
    'btn',
    size && `btn_${size}`,
    color && `btn_${color}`,
    icon && `btn_${icon}`,
    className,
    { disabled: disabled }
  );

  const content = (
    <>
      {icon && iconPosition === 'before' && (
        <span className={`ico_comm ico_${icon}`} />
      )}
      {icon && !iconPosition && text && (
        <span className={`ico_comm ico_${icon}`}>{text}</span>
      )}
      {(iconPosition === 'before' || iconPosition === 'after' || !icon) &&
        text && <span className="txt_btn">{text}</span>}
      {icon && iconPosition === 'after' && (
        <span className={`ico_comm ico_${icon}`} />
      )}
      {iconComponent && iconComponent}
      {children}
    </>
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || !onClick) return;
    onClick();
  };

  return (
    <button
      type="button"
      className={btnClass}
      disabled={disabled}
      onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button; 