import React from 'react';
import './button.css';

export function ButtonItem({ action, buttonValue = 'button', isPrimary = true }) {
  return (
    <button data-testid='button-test-id' className={`custom-button ${isPrimary ? 'custom-button-primary' : 'custom-button-secondary'}`} onClick={action}> 
      {buttonValue} 
    </button>
  )
}