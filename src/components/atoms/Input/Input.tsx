import React, { KeyboardEventHandler } from 'react';
import Icon from '../Icon';
import { InputContainer, StyledInput } from './Input.style';

interface IProps {
    id: string;
    onChange?: (e?: any) => void;
    type?: string;
    label?: string;
    tip?: string;
    defaultValue?: string;
    disabled?: boolean;
    error?: string | null;
    readOnly?: boolean;
    placeholder?: string;
    required?: boolean;
    className?: any;
    onBlur?: () => void;
    autoFocus?: boolean;
    value?: string;
    tooltip?: string;
    onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
}

const Input = ({ 
  id,
  onChange,
  type,
  label,
  // tip,
  defaultValue,
  disabled,
  // error,
  readOnly,
  onBlur,
  placeholder,
  required,
  autoFocus,
  value,
  // tooltip
  ...props
} : IProps) => {
  return (
    <>
      { label != null &&
          <label htmlFor='name'>
              {/* {tooltip && <span className={style.tooltip}>{<Tooltip title={tooltip}><Icon name="help"/></Tooltip>}</span>} */}
              {label}{required && <span> *</span>}
          </label>
      }
      <InputContainer>
          <Icon name="add" />
          <StyledInput
              id={id}
              type={type}
              onChange={onChange}
              defaultValue={defaultValue}
              disabled={disabled}
              readOnly={readOnly}
              // className={classNames({[style.error]: error != null, [style.disabled]: disabled})}
              onBlur={onBlur}
              placeholder={placeholder}
              autoFocus={autoFocus}
              value={value}
              {...props}
          />
      </InputContainer>
      {/* {tip != null && <div className={style.tip}>* {tip}</div>} */}
      {/* { error != null && <ErrorMessage error={error} className={style.errorMessage}/>} */}
    </>  
  );
};

export default Input;
