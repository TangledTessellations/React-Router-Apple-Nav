import React, { Component } from 'react';
import styled from 'styled-components';
import imac_dark_large from '../icons/imac_dark_large.svg';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const StyledWrapper = styled.div`
    background-color: black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`;

const StyledImg = styled.img`
    background-color: black;
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
                <StyledImg src={imac_dark_large} alt=""/>
            </StyledWrapper>
        );


    } 
}

export default NavWrapper;