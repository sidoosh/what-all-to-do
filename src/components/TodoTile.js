import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToDoWrapper = styled.li`
    transition: background-color 140ms ease-in-out, border-color 75ms ease-in-out;
    box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
    margin: 15px 0;
    div { 
      border-radius: 2px;
      box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
      padding: 5px;
      font-size: 12px;
      border-radius: 2px;
      background: #fff;
      border: 1px solid #ccc;
      color: #333;
      margin: 5px 0;
      position: relative;
      section {
        font-size: 13px;
        display: block;
        box-sizing: content-box;
        line-height: 1.42857143;
        overflow: hidden;
      }
    }
`;

const Todo = (props) => {

  const { title, desc, status, assignedTo, dueDate, tags} = props.details;
  return (
    <ToDoWrapper>
      <div onClick={(e) => props.openModal(props.details)}>
        <section>{title}</section>
        <section>
          <span>Due date: {dueDate}</span><br/>
          <span>Assigned To: {assignedTo}</span>
         </section>
         <section>Tags: {tags}</section>
         <section>Description: 
         <br/>{desc}</section>
      </div>    
    </ToDoWrapper>
  );
}

export default Todo;
