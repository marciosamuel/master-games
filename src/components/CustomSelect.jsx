import React from 'react';
import { BiXCircle } from 'react-icons/all';
import { Select } from './styles';

export default function CustomSelect(props) {
  const { label, options, value, handleChange, noClear } = props;
  return (
    <Select>
      <select
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      >
        {label && (
          <option value="nao-selecionado" hidden>
            {label}
          </option>
        )}
        {options &&
          options.map((option) => <option value={option}>{option}</option>)}
      </select>
      {value !== 'nao-selecionado' && !noClear && (
        <span onClick={() => handleChange('nao-selecionado')}>
          <BiXCircle />
        </span>
      )}
    </Select>
  );
}
