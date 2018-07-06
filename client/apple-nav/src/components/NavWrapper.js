import React, { Component } from 'react';
import styled from 'styled-components';
import data from '../apple-data';
import { NavLink } from 'react-router-dom';
import { StyledWrapper } from './reusable-styles/Reusables.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledLogo = styled.span`
    color: white;
    font-size: 2.3rem;
`;  

const StyledNavLink = styled(NavLink)`
    textDecoration: none; 
    color: white;
`;

class NavWrapper extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <StyledWrapper>
                    <StyledLogo><FontAwesomeIcon icon={['fab', 'apple']} /></StyledLogo>
                    {data.map(subNav => {
                        return <StyledNavLink to={`/${subNav.name}`} 
                                            key={subNav.name}
                                            style={{textDecoration: "none"}} >{subNav.name}</StyledNavLink>
                    })}
                    <StyledLogo><FontAwesomeIcon icon="search" /> </StyledLogo>
                    <StyledLogo><FontAwesomeIcon icon="clipboard" /> </StyledLogo>
                </StyledWrapper>  
            </div>
            
        );


    } 
}

export default NavWrapper;
