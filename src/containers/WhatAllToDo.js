import React from 'react';
import Lanes from '../components/Lanes';
import styled from 'styled-components';
import todoList from '../data/sample-data';
import Modal from '../components/Modal';
import TodoForm from '../components/TodoForm';

const SecondaryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 60px;
    font-size: 24px;
    button {
        margin-top: 15px;
        width: 120px;
        height: 60px;
        font-size: 20px;
        font-size: 20px;
        background: #eff1f3;
        border-radius: 4px;
        border: 1px solid #9c9c9c;
        margin-right: 86px;
    }
`;

class WhatAllToDo extends React.Component {
    state = {
        isModalOpen: false,
        todos: todoList,
        formState: null
    }

    openModal = (formState) => this.setState({
         isModalOpen: true,
         formState: formState
          });

    closeModal = () => this.setState({ isModalOpen: false });

    editTodo = (id, updatedTodo) => {
        const todos = [...this.state.todos];
        const findTodo = todos.findIndex((todo) => todo.id === id);
        todos[findTodo] = updatedTodo;
        this.setState({ todos });
        this.closeModal();
    };

    addTodo =  todo => {
        const todos = [...this.state.todos, todo];
        this.setState({ todos });
        this.closeModal();
    };

  render() {
    return (
        <div>
            <SecondaryHeader>
                <h3>To Do Board</h3>
                <button onClick={this.openModal}>Add To Do</button>
            </SecondaryHeader>
            <Modal 
                isOpen={this.state.isModalOpen}
                formState={this.state.formState}
                onClose={this.closeModal}
                addTodo={this.addTodo}
                editTodo={this.editTodo}
            />

            <Lanes 
                todos={this.state.todos}
                openModal={this.openModal}
            />   
        </div>
    );
  }
}

export default WhatAllToDo;
