import React, { Component } from 'react';
import styled from 'styled-components';
import {imac_dark_large} from '../icons/imac_dark_large.svg';
import imac_pro_dark_large from '../icons/imac_pro_dark_large.svg';
import mac_acc_dark_large from '../icons/mac_acc_dark_large.svg';
import mac_comp_dark_large from '../icons/mac_comp_dark_large.svg';
import mac_osx_dark_large from '../icons/mac_osx_dark_large.svg';
import macbook_dark_large from '../icons/macbook_dark_large.svg';
import macbookair_dark_large from '../icons/macbookair_dark_large.svg';
import macbookpro_dark_large from '../icons/macbookpro_dark_large.svg';
import macmini_dark_large from '../icons/macmini_dark_large.svg';
import macpro_dark_large from '../icons/macpro_dark_large.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const images = [
    macbook_dark_large,
    macbookair_dark_large,
    macbookpro_dark_large,
    macmini_dark_large,
    imac_pro_dark_large,
    imac_pro_dark_large,
    mac_acc_dark_large,
    mac_comp_dark_large,
    mac_osx_dark_large,
    macpro_dark_large
]
const StyledWrapper = styled.div`
    background-color: black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    padding: 1%;
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
                {images.map(image => (
                    <StyledImg src={image} alt="computer" />
                ))}
                <StyledImg src={imac_dark_large} alt="" />
            </StyledWrapper>
        );


    } 
}

export default NavWrapper;