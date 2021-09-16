import React, { useState } from 'react';
import { BiSearch } from 'react-icons/all';
import { Input } from './styles';

interface CustomInputProps {
  value: string;
  label: string;
  handleChange: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { handleChange, value, label } = props;
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <Input $isFocus={isFocus}>
      <BiSearch />
      <input
        onClick={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(event) => handleChange(event.target.value)}
        value={value}
        placeholder={label}
      />
    </Input>
  );
};

export default CustomInput;
