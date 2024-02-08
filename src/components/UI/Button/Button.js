import React from 'react';
import styled  from 'styled-components' ;

// normal case of import for buton classes from another external css files
// import './Button.css';

// import for the case of css modules compcept 
// css file name should be name.module.css
import styles from './Button.module.css';

// // creating a button component with styled components feature

// const Button = styled.button`
// width:100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;


// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// @media (max-width: 768px) {
// width:auto;
// color: black;
// }

// `;

// usual way of craeting a button component
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };


// adding styling to jsx component with the concept of css modules
const Button = props => {
  return (
    // styles.button => button is the class name in css module file 
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};


export default Button;
