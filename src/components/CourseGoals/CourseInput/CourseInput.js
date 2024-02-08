import React, { useState } from 'react';

import Button from '../../UI/Button/Button';

// normal external css import
// import './CourseInput.css';

// import in case of styled component
import { styled } from 'styled-components';


// import in case of css module
import styles from './CourseInput.module.css';

// const Formcontrol=styled.div`

//   margin: 0.5rem 0;
  

// // form-control label{} is equivalent to below
// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   // dynamically changing styles in case of styled component
// color:${(props)=>(!props.invalid ? 'red': 'black' )};
// }


// // form-control input{} is equivalent to below
// & input {
//   display: block;
//   width: 100%;
//   // dynamically changing styles in case of styled component
//   border: 1px solid  ${(props)=>(!props.invalid ? 'red': '#ccc' )}   ;
//   background-color:  ${(props)=>(!props.invalid ? 'salmon': 'transparent' )}   ;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }


// // .form-control.invalid input {
// //   background-color: rgb(185, 96, 96);
// //   border-color: rgb(244, 15, 15);
// // }

// // .form-control.invalid label {
// //  color : red;
// // }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setisValid] = useState(true);


  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length !=0) {
      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setisValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setisValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* selecting the css class name from an external css file dynamically based on the value of state variable not inline */}

      {/* in the case of div is a separate styled component */}
      {/* <Formcontrol invalid={isValid}> */}

       {/* applying styles in case of css modules */}
         <div className={` ${styles['form-control']} ${!isValid && styles.invalid} }`}>
       
      {/* in case of div is not a separate styled component */}
      {/* <div className={`form-control ${!isValid ? 'invalid':''}`}> */}

        {/* example for inline styling */}
        {/* <label  style={{
          color: !isValid ? 'red':'black'
        }}  >Course Goal</label> */}

      <label  >Course Goal</label>

        {/* example for inline styling */}
        {/* <input type="text" onChange={goalInputChangeHandler}  style={{
          borderColor: !isValid ? 'red':'black',
          backgroundColor : !isValid ? 'salmon' : 'transparent'
        }} /> */}

          <input type="text" onChange={goalInputChangeHandler}/>

      {/* </div> */}

      </div>

      {/* </Formcontrol> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
