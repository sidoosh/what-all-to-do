import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    color: #25292e;
    justify-content: center;
    h3 {
        font-size: 30px;
    }
`;

const Header = (props) => {
    return (
        <HeaderWrapper>
            <h3>{props.title}</h3>
        </HeaderWrapper>
    );
}

Header.defaultProps = {
	title: '',
};

Header.propsType = {
    title: PropTypes.string
};

export default Header;
