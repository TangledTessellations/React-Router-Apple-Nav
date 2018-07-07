import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledImg = styled.img`
    color: white;
`;

const StyledItem = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    color: white;
`;

const StyledText = styled.p`
    font-size: .6rem;
    color: white;
    margin: 1%;
    width: 100%;
`;
 
const NavItem = props => {
    return (
        <StyledItem>
            <StyledImg src={props.item.pic} alt="apple Products" key={Math.random() + Date.now()} />
            <StyledText>{props.item.name}</StyledText>
        </StyledItem>
        

    );
}

export default NavItem;