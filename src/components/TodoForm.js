import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TodoLayout = styled.form`
  display:flex;
  max-height: calc(100vh - 200px);
  width: 736px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  padding: 0 32px 32px;
  flex-direction: column;
  position: relative;

  input, textarea, select, button {
    margin-top: 10px;
    height: 30px;
    width: 45%;
    padding-left: 21px;
    font-size: 15px;
  }
`;

const FormStyling = styled.div`
  display:flex;
  justify-content: left;
  font-size: 15px;
  label {
    margin-top: 20px;
  }
`;

const TodoForm = (props) => {
  const titleRef = React.createRef();
  const dueDateRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const assignedToRef = React.createRef();
  const tagsRef = React.createRef();

  const createTodo = event => {
    event.preventDefault();
    const previousStateId = props.formState.id;
    const todo = {
      id: previousStateId || `todo${Date.now()}`,
      title: titleRef.current.value,
      dueDate: dueDateRef.current.value,
      status: statusRef.current.value,
      desc: descRef.current.value,
      assignedTo: assignedToRef.current.value,
      tags: tagsRef.current.value,
    };

    if(previousStateId){
      props.editTodo(previousStateId, todo);
    } else {
      props.addTodo(todo);
    }
  };
  return (
    <TodoLayout onSubmit={(event) => createTodo(event)}>
      <FormStyling>
        <label>Title:</label>
        <input
          name="title" 
          ref={titleRef}
          type="text"
          defaultValue={props.formState.title}
          placeholder="Title"
          required
        />
      </FormStyling>
      <FormStyling>
        <label>Status:</label>
        <select defaultValue={props.formState.status} name="status" ref={statusRef} >
        <option value="open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
        </select>
      </FormStyling>
      <FormStyling>
        <label>Due Date:</label>
        <input 
          name="dueDate" 
          ref={dueDateRef}
          defaultValue={props.formState.dueDate}
          type="text"
          placeholder="Due Date"
        />
      </FormStyling>
      <FormStyling>
        <label>Assigned To:</label>
        <input
          name="assignedTo"
          ref={assignedToRef}
          type="text"
          defaultValue={props.formState.assignedTo}
          placeholder="Assigned To"
          required
        />
      </FormStyling>
      <FormStyling>
        <label>Description:</label>
        <textarea
          name="desc"
          ref={descRef} 
          defaultValue={props.formState.desc}
          placeholder="Description"
        />
      </FormStyling>
      <FormStyling>
        <label>Tags/Labels:</label>
        <input
          name="tags"
          ref={tagsRef}
          defaultValue={props.formState.tags}
          type="text"
          placeholder="Tags"
        />
      </FormStyling>
      <button type="submit">Submit</button>
      <button onClick={(e)=> props.onClose()}> Close </button>
    </TodoLayout>
  );
}

TodoForm.propsType = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    tags: PropTypes.string,
    dueDate: PropTypes.instanceOf(Date)
};

export default TodoForm;
