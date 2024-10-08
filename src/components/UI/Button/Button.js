//import React from 'react';

// since we isntalled styled components package, now we can redo our button. 
// This helps to prevent spilled styling between components, which happenes if somewhere in the project were used same class names 
import styled from 'styled-components';


// will be executed as a method, just with odd syntax
// BACKTICKS 
const Button = styled.button`

    width: 100%;  
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: #8b005d;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

    @media (min-width: 768px) {
      width: auto;
    }

  // now can use '&' instead of "button" word

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// import './Button.css';

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
