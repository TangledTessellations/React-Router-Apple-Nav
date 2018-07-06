import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: white;
`;

const SubNav = props => {
    console.log(props.subNav.name);
    return (
        <StyledDiv>{props.subNav.name}</StyledDiv>
    );
}

export default SubNav;