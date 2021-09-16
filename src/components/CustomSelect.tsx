import React from 'react';
import { BiXCircle } from 'react-icons/all';
import { Select } from './styles';

interface CustomSelectProps {
  label?: string;
  options: string[];
  value: string;
  handleChange: (value: string) => void;
  isPersistent?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const { label, options, value, handleChange, isPersistent } = props;
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
      {value !== 'nao-selecionado' && !isPersistent && (
        <span onClick={() => handleChange('nao-selecionado')}>
          <BiXCircle />
        </span>
      )}
    </Select>
  );
};

export default CustomSelect;
