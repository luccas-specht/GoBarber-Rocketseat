import React from 'react';
import { Container, Input } from './input-text.style';

interface InputProps {
  id: string;
  icon?: any;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputProps> = ({
  id,
  icon,
  name,
  value,
  placeholder,
  onChange,
}) => (
  <Container>
    {icon && icon}
    <Input
      id={id}
      type='text'
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </Container>
);

export { InputText };
