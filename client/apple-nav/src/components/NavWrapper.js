import React, { Component } from 'react';
import styled from 'styled-components';
import data from '../apple-data';
import SubNav from './SubNav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledWrapper = styled.div`
    background-color: black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    padding: 1%;
`;

const StyledLogo = styled.span`
    color: white;
    font-size: 2.3rem;
`;  

class NavWrapper extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <StyledWrapper>
                <StyledLogo><FontAwesomeIcon icon={['fab', 'apple']} /></StyledLogo>
                {data.map(subNav => {
                    console.log(subNav);
                    return <SubNav subNav={subNav}
                                    key={subNav.name} />
                })}
                <StyledLogo><FontAwesomeIcon icon="search" /> </StyledLogo>
                <StyledLogo><FontAwesomeIcon icon="clipboard" /> </StyledLogo>
            </StyledWrapper>
        );


    } 
}

export default NavWrapper;
