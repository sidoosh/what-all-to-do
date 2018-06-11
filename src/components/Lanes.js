import React from 'react';
import Header from './Header';
import Lane from './Lane';
import styled from 'styled-components';


const LanesWrapper = styled.ul`
    display: flex;
    margin-top: 0;
    font-size: 20px;
    list-style:none;
`;

const LANE_TYPE = Object.freeze({
        OPEN: {
            title: 'Open',
        },
        IN_PROGRESS: {
            title: 'In Progress' 
        },
        DONE: {
            title: 'Done'
        }
});

const Lanes = (props) => {

    const openLaneTodos = [];
    const inProgressTodos = [];
    const doneTodos = [];

    (props.todos).map((todo) => {
        switch(todo.status.toLowerCase()) {
            case LANE_TYPE.OPEN.title.toLowerCase():
                openLaneTodos.push(todo);
                break;
            case LANE_TYPE.IN_PROGRESS.title.toLowerCase():   
                inProgressTodos.push(todo);
                break;
            case LANE_TYPE.DONE.title.toLowerCase(): 
                doneTodos.push(todo);
                break;      
        }
    });

    return (
        <LanesWrapper>
            <Lane title={LANE_TYPE.OPEN.title} todos={openLaneTodos} openModal={props.openModal}/>
            <Lane title={LANE_TYPE.IN_PROGRESS.title} todos={inProgressTodos} openModal={props.openModal}/>
            <Lane title={LANE_TYPE.DONE.title} todos={doneTodos} openModal={props.openModal}/>
        </LanesWrapper>
    );
};

export default Lanes;
