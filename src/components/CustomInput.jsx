import React, { useState } from 'react';
import { Input } from './styles';

function CustomInput(props) {
  const { handleChange, value, type, label, error, errorMessage } = props;
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Input>
      {isFocus && <span className="placeholder">{label}</span>}
      <input
        onClick={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(event) => handleChange(event.target.value)}
        value={value}
        placeholder={isFocus ? '' : label}
        type={type}
      />
      {error && <small>{errorMessage}</small>}
    </Input>
  );
}

export default CustomInput;
