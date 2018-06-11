import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import styled from 'styled-components';
import Todo from '../components/TodoTile';

const LaneWrapper = styled.li`
    margin: 0 40px;
    height: 1000px;
    width: 350px;
    background-color: #F4F5F7;
    border: 1px solid #9c9c9c;
    border-radius: 6px;
    div {
        border-bottom: 1px solid black;
        justify-content: left;
        padding-left: 20px;
        h3 {
            font-size: 20px;
            text-align: left;
        }
    }
`;


const TodosWrapper = styled.ul`
    list-style: none;
    padding-left: 26px;
    padding-right: 26px;
`;

const Lane = (props) => {
    return (
        <LaneWrapper>
            <Header title={props.title}/>
                <TodosWrapper>
                {(props.todos).map(todo => (
                    <Todo
                        key={todo.id}
                        index={todo.id}
                        details={todo}
                        openModal={props.openModal}
                    />
                ))}
            </TodosWrapper>
        </LaneWrapper>
    );
}

Lane.propsType = {
    openModal: PropTypes.func
};

export default Lane;
