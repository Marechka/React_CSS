import React, { useState } from "react";
import styled from 'styled-components'
import Button from "../../UI/Button/Button";
//import "./CourseInput.css";


const FormControl = styled.div`
  
    margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    background: ${props => (props.invalid ? '#ffd7d7' : 'transperent')}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  // can remove this style with using props as well 
  // &.invalid input {
  //   border-color: red;
  //   background: rgb(235, 152, 152);
  // }

  // we can remove this style now. color moved to the 'label', since we make a style definition on valid/invalid there
  // &.invalid label {
  //   color: red;
  // }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* replacing div with a new styled component */}
      {/* passing css class, better than inline style
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        {/* can use inline styling for dynamic change */}
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transperent",
          }} */}
        {/* we could do validation inside styled component */}
        {/* <FormControl className={!isValid && 'invalid'}> */}
        {/* or we could use props and have function in styles of FormControl */}
        <FormControl invalid={!isValid}>
          <label >Course Goal</label>
          <input 
          type="text" onChange={goalInputChangeHandler}
          />
        </FormControl>
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
