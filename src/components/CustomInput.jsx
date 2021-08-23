import React, { useState } from 'react';
import { BiSearch } from 'react-icons/all';
import { Input } from './styles';

function CustomInput(props) {
  const { handleChange, value, label } = props;
  const [isFocus, setIsFocus] = useState(false);

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
}

export default CustomInput;
