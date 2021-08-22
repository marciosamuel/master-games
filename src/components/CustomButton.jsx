import React from 'react';
import { Button } from './styles';

function CustomButton(props) {
  const { handleClick, title, disabled, size } = props;

  return (
    <Button disabled={disabled} onClick={handleClick} size={size}>
      {title}
    </Button>
  );
}

export default CustomButton;
