import React from 'react';
import styled from 'styled-components';
import data from '../apple-data';
import { StyledWrapper } from './reusable-styles/Reusables.js';
import { Route } from 'react-router-dom';

const StyledImg = styled.img`
    color: white;
`;

export default class SubNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: data,
            name: props.match.params.name,
            location: props.location,
        }
        this.setState();
    }

    componentDidMount() {
        let thisNav = this.state.data.reduce((acc, item) => 
        { if(item.name === this.state.name){
            acc = item.subsections;
            } 
            return acc;
        }, []);
        this.setState(() => ({data: thisNav}) );
    }

    render(){
        return (
            <div>
                <StyledWrapper>
                    {this.state.data.map(item => {
                        return <StyledImg src={item.pic} alt="apple Products" key={item.name} />
                        })}
                </StyledWrapper>
            </div>
        );
    }

}


