import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import TodoForm from './TodoForm';
import PropTypes from 'prop-types';

const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3000;
  background: #f5f5f5;
  border-radius: 3px;
  border: 
  overflow-y:scroll;
  overflow-x:hidden;
  width: 40%;

  h3 {
    font-size: 24px;
  }
`;

const BackdropStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.3);
`;


const Modal = (props) => {
  if (props.isOpen === false)
    return null;

  return (
    <BackdropStyle>
      <ModalStyle>
        <Header title='ToDo Form'/>
        <TodoForm
          formState={props.formState}
          editTodo={props.editTodo}
          addTodo={props.addTodo}
          onClose={props.onClose}/>
      </ModalStyle>
      </BackdropStyle>
    );
}

Modal.propsType = {
    formState: PropTypes.object,
    editTodo: PropTypes.func,
    addTodo:PropTypes.func,
    onClose:PropTypes.func
};

export default Modal;
