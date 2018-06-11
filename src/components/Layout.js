import React from 'react';
import WhatAllToDo from '../containers/WhatAllToDo';
import Header from './Header';
import styled from 'styled-components';

const PrimaryHeader = styled.header`
    background-color: #eff1f3;
    border: 1px solid #9c9c9c;
`;

const Layout = () => (
    <div>
        <PrimaryHeader>
            <Header title='What-All-To-Do'/>
        </PrimaryHeader>
        <WhatAllToDo />
    </div>
);

export default Layout;
